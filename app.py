from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
from playwright.sync_api import sync_playwright
import re
import os
from dotenv import load_dotenv
import json  # <-- Faltaba este import

# Cargar variables de entorno desde .env
load_dotenv()

# Configuración desde variables de entorno
GAS_URL = os.getenv("GAS_URL", "https://script.google.com/macros/s/AKfycbwV6wBEG5oagH8PKyB2CzYCjNK848FKtKAeVnpakGKfF4ZM46WD5n9Vd34ojYknqJZWkw/exec")
OPENROUTER_URL = os.getenv("OPENROUTER_URL", "https://openrouter.ai/api/v1/chat/completions")
OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")

# Verificar que las variables críticas estén configuradas
if not OPENROUTER_API_KEY:
    print("⚠️  ADVERTENCIA: OPENROUTER_API_KEY no está configurada en el archivo .env")

app = Flask(__name__)

# Configurar Flask con las variables de entorno
app.config['GAS_URL'] = GAS_URL
app.config['OPENROUTER_URL'] = OPENROUTER_URL
app.config['OPENROUTER_API_KEY'] = OPENROUTER_API_KEY

CORS(app, resources={r"/api/*": {"origins": "*"}})

# --- Scrapers según el supermercado ---
def scrap_hipermaxi(url):
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            page = browser.new_page()
            print(f"🌐 [Hipermaxi] Visitando: {url}")
            page.goto(url, timeout=60000)
            selector = "div.text-base.md\\:text-3xl.font-bold.leading-none > div"
            page.wait_for_selector(selector, timeout=15000)
            precio_texto = page.locator(selector).first.inner_text()
            browser.close()
            return float(precio_texto.replace("Bs.", "").replace(",", ".").strip())
    except Exception as e:
        print(f"❌ [Hipermaxi] Error: {e}")
        return None

def scrap_farmacorp(url):
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            page = browser.new_page()
            print(f"🌐 [Farmacorp] Visitando: {url}")
            page.goto(url, timeout=60000)
            page.wait_for_timeout(3000)
            selector = ".price--main .money"
            content = page.locator(selector).first.inner_text()
            match = re.search(r"Bs[\s]*([\d,\.]+)", content)
            browser.close()
            return float(match.group(1).replace(",", ".")) if match else None
    except Exception as e:
        print(f"❌ [Farmacorp] Error: {e}")
        return None

def scrap_fidalga(url):
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            page = browser.new_page()
            print(f"🌐 [Fidalga] Visitando: {url}")
            page.goto(url, timeout=60000)
            page.wait_for_timeout(3000)
            selector = 'span.price[itemprop="price"]'
            content = page.locator(selector).first.inner_text()
            match = re.search(r"Bs[\s]*([\d,\.]+)", content)
            browser.close()
            return float(match.group(1).replace(",", ".")) if match else None
    except Exception as e:
        print(f"❌ [Fidalga] Error: {e}")
        return None

# --- Datos base ---
productos = {
    "Mantequilla": {
        "url": "https://www.hipermaxi.com/santa-cruz/hipermaxi-roca-y-coronado/producto/019178/mantequilla-pil-con-sal-200-gr",
        "fallback": 0.0,
        "super": "hipermaxi"
    },
    "Azúcar morena": {
        "url": "https://farmacorp.com/products/7770108600138",
        "fallback": 0.0,
        "super": "farmacorp"
    },
    "Azúcar blanca": {
        "url": "https://www.hipermaxi.com/santa-cruz/hipermaxi-roca-y-coronado/producto/105771/azucar-aguai-blanca-1-kg",
        "fallback": 0.0,
        "super": "hipermaxi"
    },
    "Harina": {
        "url": "https://www.fidalga.com/products/harina-leudante-famosa-de-1000-gr",
        "fallback": 0.0,
        "super": "fidalga"
    },
    "Polvo de hornear": {
        "url": "https://www.hipermaxi.com/santa-cruz/hipermaxi-roca-y-coronado/producto/300225/polvo-de-hornear-kris-57-gr",
        "fallback": 0.0,
        "super": "hipermaxi"
    },
    "Bicarbonato": {
        "url": "https://farmacorp.com/products/370061",
        "fallback": 2.5,
        "super": "farmacorp"
    },
    "Chocolate": {
        "url": None,
        "fallback": 57.0,
        "super": None
    },
    "Vainilla": {
        "url": "https://www.hipermaxi.com/santa-cruz/hipermaxi-roca-y-coronado/producto/201350/esencia-de-vainilla-miki-liquida-110-ml",
        "fallback": 3.0,
        "super": "hipermaxi"
    },
    "Huevo": {
        "url": None,
        "fallback": 14.0,
        "super": None
    }
}

ingredientes = [
    { "nombre": "Mantequilla", "usado": 90, "total": 200 },
    { "nombre": "Azúcar morena", "usado": 60, "total": 1000 },
    { "nombre": "Azúcar blanca", "usado": 60, "total": 1000 },
    { "nombre": "Harina", "usado": 180, "total": 1000 },
    { "nombre": "Polvo de hornear", "usado": 2.5, "total": 57 },
    { "nombre": "Bicarbonato", "usado": 1.25, "total": 20 },
    { "nombre": "Chocolate", "usado": 70, "total": 1000 },
    { "nombre": "Vainilla", "usado": 5, "total": 110 },
    { "nombre": "Huevo", "usado": 1, "total": 15 }
]

def obtener_precio(producto):
    url = producto["url"]
    super_ = producto["super"]
    if url is None:
        return None
    if super_ == "hipermaxi":
        return scrap_hipermaxi(url)
    elif super_ == "farmacorp":
        return scrap_farmacorp(url)
    elif super_ == "fidalga":
        return scrap_fidalga(url)
    return None

def obtener_receta_data(receta_id):
    """Devuelve el dict de la receta desde GAS o archivo local, o None si no existe."""
    # 1. Intentar obtener desde Google Apps Script
    try:
        resp = requests.get(GAS_URL, timeout=10)
        if resp.status_code == 200:
            recetas = resp.json()
            for receta in recetas:
                if receta.get('id') == receta_id:
                    return receta
    except Exception as e:
        print(f"❌ Error obteniendo datos de GAS: {e}")
    
    # 2. Si no obtuvo datos de GAS, cargar del JSON local
    try:
        with open('public/recetas.json', 'r', encoding='utf-8') as f:
            recetas = json.load(f)
            for receta in recetas:
                if receta.get('id') == receta_id:
                    return receta
    except Exception as e:
        print(f"❌ Error leyendo archivo local: {e}")
    
    return None

def calcular_costos_receta(receta, unidades_por_receta=10):
    """
    Calcula costo total y unitario de la receta.
    Para recetas de GAS: usa precios ya definidos en el JSON
    Para receta chocolate: obtiene precios mediante scraping si es necesario
    """
    ingredientes = receta.get('ingredientes', [])
    total_cost = 0.0
    receta_id = receta.get('id', '')
    
    for ing in ingredientes:
        # Obtener precio del ingrediente
        precio = float(ing.get('precio', 0))
        nombre = ing.get('nombre', '')
        
        # Si no hay precio y es la receta chocolate hardcodeada, usar scraping
        if precio == 0 and receta_id == 'chocolate' and nombre in productos:
            info = productos[nombre]
            precio = obtener_precio(info) or info.get("fallback", 0)
            ing['precio'] = round(precio, 2)
        
        # Si viene de GAS y ya tiene precio, usarlo directamente
        if precio == 0 and 'precio' in ing:
            precio = float(ing['precio'])
        
        # Calcular costo proporcional del ingrediente usado
        usado = float(ing.get('usado', 0))
        total_qty = float(ing.get('total', 1)) or 1  # evitar división por cero
        costo_ing = (precio / total_qty) * usado
        ing['costo_usado'] = round(costo_ing, 2)
        total_cost += costo_ing
    
    receta['total'] = round(total_cost, 2)
    receta['unitario'] = round(total_cost / unidades_por_receta, 2)
    return receta

@app.route("/api/receta/chocolate", methods=["GET"])
def receta_chocolate():
    """Endpoint específico para galletas de chocolate"""
    total = 0
    for ing in ingredientes:
        nombre = ing["nombre"]
        info = productos[nombre]
        precio = obtener_precio(info) or info["fallback"]
        ing["precio"] = precio
        subtotal = (ing["usado"] / ing["total"]) * precio
        total += subtotal
    return jsonify({
        "id": "chocolate",
        "nombre": "Galletas de chocolate CROQUERS",
        "ingredientes": ingredientes,
        "total": round(total, 2),
        "unitario": round(total / 10, 2)
    })

@app.route("/api/receta/<receta_id>", methods=["GET"])
def receta_endpoint(receta_id):
    """Endpoint genérico para cualquier receta"""
    receta = obtener_receta_data(receta_id)
    if not receta:
        return jsonify({"error": f"Receta '{receta_id}' no encontrada"}), 404
    receta_con_costos = calcular_costos_receta(receta)
    return jsonify(receta_con_costos), 200

# --- Helpers ---
def obtener_receta_data_gas(receta_id: str) -> dict | None:
    """Busca la receta en Google Apps Script o en el JSON local."""
    # 1) GAS
    try:
        resp = requests.get(GAS_URL, timeout=10)
        if resp.status_code == 200:
            for r in resp.json():
                if r.get("id") == receta_id:
                    return r
    except Exception as e:
        print(f"❌ Error obteniendo datos de GAS: {e}")
    
    # 2) JSON local
    try:
        with open("public/recetas.json", encoding="utf-8") as f:
            for r in json.load(f):
                if r.get("id") == receta_id:
                    return r
    except (FileNotFoundError, ValueError) as e:
        print(f"❌ Error leyendo archivo local: {e}")
    
    return None

def calcular_costos_receta_v2(receta: dict, unidades_por_receta: float = 10) -> dict:
    """
    Para cada ingrediente en receta["ingredientes"]:
      - Asegura ing["precio"]
      - Calcula ing["costo_usado"] = (precio / total) * usado
    Calcula receta["total"] y receta["unitario"].
    """
    total_cost = 0.0
    for ing in receta.get("ingredientes", []):
        precio = float(ing.get("precio", 0))
        total_qty = float(ing.get("total", 1)) or 1
        usado = float(ing.get("usado", 0))
        costo = (precio / total_qty) * usado
        ing["costo_usado"] = round(costo, 2)
        total_cost += costo

    receta["total"] = round(total_cost, 2)
    receta["unitario"] = round(total_cost / unidades_por_receta, 2)
    return receta

# --- Endpoint de chat-venta ---
@app.route("/api/chat-venta", methods=["POST"])
def chat_venta():
    """Endpoint para el chat de ventas con OpenRouter"""
    if not OPENROUTER_API_KEY:
        return jsonify({"error": "API Key de OpenRouter no configurada"}), 500
        
    data = request.get_json()
    receta_id = data.get("recetaId")
    question = data.get("question", "")
    cached = data.get("cachedData")

    # 1) Lógica especial para obtener receta según el tipo
    if receta_id == "chocolate":
        # Para chocolate, usar datos cacheados si están disponibles, sino usar endpoint específico
        if cached:
            print("🔄 [Chocolate] Usando datos cacheados del frontend")
            receta = calcular_costos_receta(cached)
            contexto_origen = "caché local"
        else:
            print("🔄 [Chocolate] Usando datos hardcodeados del servidor")
            # Usar los datos hardcodeados del endpoint chocolate
            total = 0
            ingredientes_copy = [ing.copy() for ing in ingredientes]  # Copiar para no modificar el original
            for ing in ingredientes_copy:
                nombre = ing["nombre"]
                if nombre in productos:
                    info = productos[nombre]
                    precio = obtener_precio(info) or info["fallback"]
                    ing["precio"] = precio
                    subtotal = (ing["usado"] / ing["total"]) * precio
                    total += subtotal
            
            receta = {
                "id": "chocolate",
                "nombre": "Galletas de chocolate CROQUERS",
                "ingredientes": ingredientes_copy,
                "total": round(total, 2),
                "unitario": round(total / 10, 2)
            }
            contexto_origen = "datos hardcodeados"
    else:
        # Para otras recetas, obtener de GAS
        print(f"🌐 [Receta {receta_id}] Obteniendo datos de GAS")
        receta = obtener_receta_data(receta_id)
        if not receta:
            return jsonify({"error": f"Receta '{receta_id}' no encontrada"}), 404
        
        # Los datos de GAS ya vienen con precios, solo calcular costos
        receta = calcular_costos_receta(receta)
        contexto_origen = "Google Apps Script"

    # 2) Calcular precios de venta
    factores = {
        "chocolate": 3.42,
        "test": 3.5,
        "test-celular-2": 3.5,
        "vainilla": 3.2,
        "default": 3.0
    }
    factor = factores.get(receta_id, factores["default"])
    unit_cost = receta["unitario"]
    sale_unit = round(unit_cost * factor, 2)
    sale_4 = round(sale_unit * 4, 2)
    sale_6 = round(sale_unit * 6, 2)    # 3) Construir contexto mejorado para OpenRouter
    descripcion = receta.get('descripcion', 'Sin descripción disponible')
    
    # Crear detalle de ingredientes más informativo
    ingredientes_detalle = []
    for ing in receta.get("ingredientes", []):
        nombre = ing.get('nombre', 'Sin nombre')
        usado = ing.get('usado', 0)
        total = ing.get('total', 1)
        precio = ing.get('precio', 0)
        unidad = ing.get('unidad', 'unidad')
        costo_usado = ing.get('costo_usado', 0)
        
        ingredientes_detalle.append(
            f"• {nombre}: {usado}/{total} {unidad} "
            f"(precio: Bs {precio:.2f}/{unidad}, costo usado: Bs {costo_usado:.2f})"
        )
    
    system_msgs = [
        {
            "role": "system",
            "content": (
                "Eres un asistente de ventas especializado para CROQUERS, una empresa de galletas artesanales. "
                "Tu trabajo es ayudar con consultas sobre costos, precios y estrategias de venta. "
                f"DATOS ACTUALES DE LA RECETA:\n"
                f"• Costo total de producción: Bs {receta['total']}\n"
                f"• Costo unitario: Bs {unit_cost}\n"
                f"• Factor de ganancia aplicado: {factor}x\n"
                f"• Precio de venta sugerido unitario: Bs {sale_unit}\n"
                f"• Pack de 4 unidades: Bs {sale_4}\n"
                f"• Pack de 6 unidades: Bs {sale_6}\n"
                f"• Fuente de datos: {contexto_origen}\n\n"
                "Responde de manera profesional, concisa y útil para decisiones de negocio."
            )
        },
        {
            "role": "system",
            "content": (
                f"📋 INFORMACIÓN DETALLADA DE LA RECETA:\n"
                f"Nombre: {receta.get('nombre', 'Sin nombre')}\n"
                f"ID: {receta_id}\n"
                f"Descripción: {descripcion}\n\n"
                f"📊 DESGLOSE DE INGREDIENTES Y COSTOS:\n" + 
                "\n".join(ingredientes_detalle)
            )
        }
    ]

    # Agregar el mensaje del usuario
    user_msg = {"role": "user", "content": question}
    payload = {
        "model": "meta-llama/llama-3.3-8b-instruct:free",
        "messages": system_msgs + [user_msg],
        "temperature": 0.7,
        "max_tokens": 500
    }

    # 4) Llamar a OpenRouter
    headers = {
        "Authorization": f"Bearer {OPENROUTER_API_KEY}",
        "Content-Type": "application/json"
    }
    try:
        resp = requests.post(OPENROUTER_URL, headers=headers, json=payload, timeout=30)
        resp.raise_for_status()
        answer = resp.json()["choices"][0]["message"]["content"]
        return jsonify({"answer": answer}), 200

    except Exception as e:
        print(f"❌ Error en OpenRouter: {e}")
        return jsonify({
            "answer": "Lo siento, ocurrió un error al consultar la IA. Por favor intenta nuevamente."
        }), 500


@app.route("/api/recetas", methods=["POST"])
def proxy_recetas():
    """Proxy para las recetas en Google Apps Script"""
    payload = request.get_json()
    try:
        upstream = requests.post(GAS_URL, json=payload, timeout=30)
        data = upstream.json()
        return jsonify(data), upstream.status_code
    except ValueError:
        return upstream.text, upstream.status_code
    except Exception as e:
        print(f"❌ Error en proxy_recetas: {e}")
        return jsonify({"error": "Error interno del servidor"}), 500


@app.route('/api/recetas', methods=['GET'])
def get_recetas_from_gas():
    """Devuelve el JSON de recetas encontrado en GAS_URL."""
    try:
        resp = requests.get(GAS_URL, timeout=15)
        resp.raise_for_status()
        return jsonify(resp.json()), 200
    except Exception as e:
        return jsonify({"error": f"No se pudo obtener recetas de GAS_URL: {e}"}), 500


if __name__ == "__main__":
    print("🚀 Iniciando servidor Flask...")
    print(f"📊 GAS_URL: {GAS_URL}")
    print(f"🤖 OpenRouter configurado: {'✅' if OPENROUTER_API_KEY else '❌'}")
    app.run(host="0.0.0.0", port=5000, debug=True)
