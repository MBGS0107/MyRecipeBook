from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
from playwright.sync_api import sync_playwright
import re
import os
from dotenv import load_dotenv

# Cargar variables de entorno desde .env
load_dotenv()

GAS_URL = "https://script.google.com/macros/s/AKfycbwV6wBEG5oagH8PKyB2CzYCjNK848FKtKAeVnpakGKfF4ZM46WD5n9Vd34ojYknqJZWkw/exec"
OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions"
OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")  # define tu variable de entorno


app = Flask(__name__)

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


@app.route("/api/receta/chocolate", methods=["GET"])
def receta_chocolate():
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
def get_receta_by_id(receta_id):
    """Obtener una receta específica por su ID"""
    try:
        # Primero intentar obtener desde Google Apps Script
        upstream = requests.get(GAS_URL)
        if upstream.status_code == 200:
            try:
                data = upstream.json()
                # Buscar la receta por ID
                for receta in data:
                    if receta.get('id') == receta_id:
                        return jsonify(receta)
            except ValueError:
                pass
        
        # Si no se encuentra en GAS, buscar en el archivo local
        import json
        with open('public/recetas.json', 'r', encoding='utf-8') as f:
            recetas_locales = json.load(f)
            for receta in recetas_locales:
                if receta.get('id') == receta_id:
                    return jsonify(receta)
        
        return jsonify({"error": f"Receta con ID '{receta_id}' no encontrada"}), 404
        
    except Exception as e:
        print(f"Error obteniendo receta {receta_id}: {e}")
        return jsonify({"error": "Error interno del servidor"}), 500

@app.route("/api/recetas", methods=["GET"])
def get_recetas():
    upstream = requests.get(GAS_URL)
    try:
        data = upstream.json()            # parsea JSON
    except ValueError:
        data = []                         # si falla, lista vacía
    return jsonify(data), upstream.status_code

@app.route("/api/chat-venta", methods=["POST"])
def chat_venta():
    data = request.get_json()
    receta_id = data.get('recetaId')
    question = data.get('question')
    cached_data = data.get('cachedData')  # Datos cacheados del frontend    # Usar datos cacheados si están disponibles, sino hacer scraping
    if cached_data:
        print("🔄 Usando datos cacheados del frontend para contexto de IA")
        receta = cached_data
    else:
        print("🌐 Obteniendo datos frescos desde el servidor para contexto de IA")
        # Obtener datos de la receta usando la función interna
        try:
            response = get_receta_by_id(receta_id)
            if response[1] != 200:  # response es una tupla (data, status_code)
                return jsonify({"error": "No se pudo obtener datos de la receta."}), 500
            receta = response[0].get_json()
        except Exception as e:
            print(f"Error obteniendo receta: {e}")
            return jsonify({"error": "No se pudo obtener datos de la receta."}), 500    # Calcular costos dinámicamente según la receta específica
    ingredientes = receta.get('ingredientes', [])
    costo_total_ingredientes = 0.0
    
    # Calcular el costo total de todos los ingredientes usados
    for ing in ingredientes:
        precio = float(ing.get('precio', 0))
        total_qty = float(ing.get('total', 1)) or 1
        usado = float(ing.get('usado', 0))
        costo_ingrediente = (precio / total_qty) * usado
        costo_total_ingredientes += costo_ingrediente
    
    # Dividir entre 10 para obtener el costo por galleta
    cost_per_unit = costo_total_ingredientes / 10
    
    # Factor de ganancia dinámico por receta (puedes ajustar estos valores)
    factores_ganancia = {
        'chocolate': 3.42,
        'test': 3.5,
        'vainilla': 3.2,
        'default': 3.0
    }
    factor = factores_ganancia.get(receta_id, factores_ganancia['default'])
    
    sale_unit = cost_per_unit * factor
    sale_4 = sale_unit * 4
    sale_6 = sale_unit * 6

    # Construir contexto mejorado para el modelo
    context = []
    context.append({
        "role": "system", 
        "content": (
            "Eres un asistente de ventas especializado en recetas caseras de CROQUERS. "
            "Usa la información de costos actualizada en tiempo real para dar recomendaciones precisas. "
            "Saluda a Maria Belen y dile que estás aquí para ayudarla con análisis de costos y precios. "
            "Usa técnicas avanzadas de prorrateo y finanzas para calcular costos y precios de venta correctos. "
            "Sé conciso y directo en tus respuestas. Escribe números en formato plano (sin LaTeX). "
            f"CONTEXTO: {'Datos obtenidos desde caché local' if cached_data else 'Datos scrapeados en tiempo real'}"
        )
    })
    
    # Información detallada de ingredientes
    ingredientes_detalle = []
    for ing in ingredientes:
        precio_unitario = (float(ing.get('precio', 0)) / float(ing.get('total', 1))) * float(ing.get('usado', 0))
        ingredientes_detalle.append(
            f"• {ing.get('nombre')}: {ing.get('usado')}g de {ing.get('total')}g totales "
            f"(Precio: Bs {ing.get('precio', 0):.2f}, Costo usado: Bs {precio_unitario:.2f})"
        )
    
    detalles = (
        f"📋 RECETA: {receta.get('nombre')} (ID: {receta_id})\n"
        f"📊 ANÁLISIS DE COSTOS DETALLADO:\n"
        f"• Costo total de ingredientes usados: Bs {costo_total_ingredientes:.2f}\n"
        f"• Costo por galleta (÷10): Bs {cost_per_unit:.2f}\n"
        f"• Factor de ganancia para '{receta_id}': {factor}\n"
        f"• Precio sugerido por galleta: Bs {sale_unit:.2f}\n"
        f"• Paquete de 4 galletas: Bs {sale_4:.2f}\n"
        f"• Paquete de 6 galletas: Bs {sale_6:.2f}\n\n"
        f"🧄 DESGLOSE DE INGREDIENTES:\n" + "\n".join(ingredientes_detalle) + "\n\n"
        f"💡 Cálculo basado en: Suma total de (Precio × Usado ÷ Total) de cada ingrediente, dividido entre 10 galletas\n"
        f"📊 Datos obtenidos: {'Caché local' if cached_data else 'Scraping en tiempo real'}"
    )
    
    context.append({"role": "system", "content": detalles})
    context.append({"role": "user", "content": question})

    # Llamar a OpenRouter
    headers = {
        "Authorization": f"Bearer {OPENROUTER_API_KEY}",
        "Content-Type": "application/json"
    }
    payload = {
        "model": "meta-llama/llama-3.3-8b-instruct:free",
        "messages": context,
        "temperature": 0.7,
        "max_tokens": 500  # Limitar tokens para respuestas más concisas
    }
    
    try:
        resp = requests.post(OPENROUTER_URL, headers=headers, json=payload)
        resp.raise_for_status()
        reply = resp.json()
        answer = reply['choices'][0]['message']['content']
        
        print(f"✅ Respuesta de IA generada exitosamente ({'con datos cacheados' if cached_data else 'con datos frescos'})")
        return jsonify({"answer": answer})
        
    except Exception as e:
        print(f"❌ Error en OpenRouter: {e}")
        return jsonify({"answer": "Lo siento, ocurrió un error al consultar la IA. Por favor intenta nuevamente."}), 500


@app.route("/api/recetas", methods=["POST"])
def proxy_recetas():
    payload = request.get_json()
    upstream = requests.post(GAS_URL, json=payload)
    # intenta parsear JSON
    try:
        data = upstream.json()
    except ValueError:
        # si no es JSON válido, devolvemos texto plano
        return upstream.text, upstream.status_code

    # devolvemos JSON reserializado sin cabeceras problemáticas
    return jsonify(data), upstream.status_code
    
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
