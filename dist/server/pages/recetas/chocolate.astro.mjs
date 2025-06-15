import { e as createComponent, r as renderTemplate, k as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_DX9AkJiB.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Sidebar, b as $$Header } from '../../chunks/Header_D54e88Xj.mjs';
import { $ as $$Agente } from '../../chunks/agente_DFTgJz-a.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const prerender = false;
const $$Chocolate = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ` <script>
  const container = document.getElementById("chocolate-content");
  const loadingContainer = document.getElementById("loading-container");
  const progressBar = document.getElementById("progress-bar");
  const progressText = document.getElementById("progress-text");
  const progressPercent = document.getElementById("progress-percent");
  const BACKEND_URL = "https://myrecipebook-d7cg.onrender.com";
  const CACHE_KEY = "chocolate_receta_cache";
  const CACHE_TIMESTAMP_KEY = "chocolate_receta_timestamp";

  // Progress steps - ahora distribuidos en ~20 segundos
  const progressSteps = [
    { percent: 5, text: "Iniciando conexi\xF3n..." },
    { percent: 15, text: "Obteniendo datos de ingredientes..." },
    { percent: 25, text: "Scrapeando precios en tiempo real..." },
    { percent: 35, text: "Verificando Hipermaxi..." },
    { percent: 45, text: "Consultando Farmacorp..." },
    { percent: 55, text: "Revisando Fidalga..." },
    { percent: 65, text: "Calculando costos totales..." },
    { percent: 75, text: "Aplicando m\xE1rgenes de ganancia..." },
    { percent: 85, text: "Generando an\xE1lisis financiero..." },
    { percent: 95, text: "Optimizando precios sugeridos..." },
    { percent: 100, text: "\xA1Proceso completado!" }
  ];

  let currentStep = 0;
  let fetchPromise = null;

  function updateProgress() {
    if (currentStep < progressSteps.length) {
      const step = progressSteps[currentStep];
      progressBar.style.width = step.percent + '%';
      progressText.textContent = step.text;
      progressPercent.textContent = step.percent + '%';
      currentStep++;
      
      // Distribuci\xF3n de tiempo para llegar a ~20 segundos total
      const delay = currentStep <= 3 ? 1800 : 
                   currentStep <= 7 ? 2200 : 
                   currentStep <= 9 ? 1500 : 1000;
      
      setTimeout(updateProgress, delay);
    } else {
      // Esperar a que termine el fetch antes de mostrar contenido
      fetchPromise.then(() => {
        setTimeout(() => {
          loadingContainer.style.opacity = '0';
          setTimeout(() => {
            loadingContainer.style.display = 'none';
          }, 500);
        }, 500);
      });
    }
  }

  // Cache cleanup functions
  function setupCacheCleanup() {
    window.addEventListener('beforeunload', () => {
      const timestamp = Date.now();
      localStorage.setItem('tab_close_check', timestamp.toString());
      
      setTimeout(() => {
        const storedTimestamp = localStorage.getItem('tab_close_check');
        if (storedTimestamp === timestamp.toString()) {
          localStorage.removeItem(CACHE_KEY);
          localStorage.removeItem(CACHE_TIMESTAMP_KEY);
          localStorage.removeItem('tab_close_check');
        }
      }, 100);
    });

    localStorage.removeItem('tab_close_check');
  }

  // Render recipe function
  function renderReceta(receta, fromCache = false) {
    const total = receta.total;
    const unitario = total / 10;
    const dolarBase = 7;
    const dolarActual = 16;
    const margen = 0.25;

    const indice = dolarActual / dolarBase;
    const precioSugerido = (unitario * indice * (1 + margen)).toFixed(2);
    const precioMinimo = 6;
    const precioFinalUnidad = Math.max(precioSugerido, precioMinimo).toFixed(2);

    const precioPaquete4 = (precioFinalUnidad * 4).toFixed(2);
    const precioPaquete6 = (precioFinalUnidad * 6).toFixed(2);

    const ingredientesHTML = receta.ingredientes.map(i => \`
      <li class="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-200 hover:shadow-md transition-all">
        <div class="flex items-start space-x-3">
          <span class="text-2xl">\u{1F9C4}</span>
          <div class="flex-1">
            <h4 class="font-semibold text-gray-800 mb-1">\${i.nombre}</h4>
            <p class="text-sm text-gray-600">Usado: \${i.usado} de \${i.total}</p>
            <p class="text-sm font-medium text-amber-600">Costo: Bs \${(i.usado / i.total * i.precio).toFixed(2)}</p>
          </div>
        </div>
      </li>
    \`).join("");

    const cacheIndicator = fromCache 
      ? \`<div class="flex items-center space-x-2 text-green-600 text-sm">
           <span class="animate-pulse">\u{1F4C1}</span>
           <div>
             <span class="font-semibold">Datos cargados desde cach\xE9 local</span>
             <p class="text-xs text-gray-500">\xDAltima actualizaci\xF3n: \${new Date(parseInt(localStorage.getItem(CACHE_TIMESTAMP_KEY))).toLocaleString()}</p>
           </div>
         </div>\`
      : \`<div class="flex items-center space-x-2 text-blue-600 text-sm">
           <span class="animate-pulse">\u{1F310}</span>
           <div>
             <span class="font-semibold">Datos scrapeados en tiempo real</span>
             <p class="text-xs text-gray-500">Precios actualizados: \${new Date().toLocaleString()}</p>
           </div>
         </div>\`;

    container.innerHTML = \`
      <!-- Header -->
      <div class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        <div class="bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-6">
          <h2 class="text-3xl font-bold text-white mb-2">\${receta.nombre}</h2>
          <p class="text-gray-300">Receta premium con an\xE1lisis completo de costos</p>
        </div>
      </div>

      <!-- Ingredients -->
      <div class="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
        <h3 class="text-2xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
          <span>\u{1F944}</span>
          <span>Ingredientes</span>
        </h3>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">\${ingredientesHTML}</ul>
      </div>

      <!-- Cost Summary -->
      <div class="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 border border-amber-200">
        <h3 class="text-xl font-bold text-amber-800 mb-4 flex items-center space-x-2">
          <span>\u{1F4CA}</span>
          <span>Resumen de costos</span>
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div class="bg-white rounded-xl p-4 border border-amber-200">
            <h4 class="font-semibold text-amber-700 mb-1">Costo total</h4>
            <p class="text-2xl font-bold text-amber-800">Bs \${total.toFixed(2)}</p>
          </div>
          <div class="bg-white rounded-xl p-4 border border-amber-200">
            <h4 class="font-semibold text-amber-700 mb-1">Costo por unidad (10)</h4>
            <p class="text-2xl font-bold text-amber-800">Bs \${unitario.toFixed(2)}</p>
          </div>
        </div>
      </div>

      <!-- Pricing Suggestions -->
      <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
        <h3 class="text-xl font-bold text-green-800 mb-4 flex items-center space-x-2">
          <span>\u{1F4B0}</span>
          <span>Precio de venta sugerido</span>
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div class="bg-white rounded-xl p-4 border border-green-200 text-center">
            <h4 class="font-semibold text-green-700 mb-2">Unidad (m\xEDnimo Bs 6)</h4>
            <p class="text-3xl font-bold text-green-800">Bs \${precioFinalUnidad}</p>
          </div>
          <div class="bg-white rounded-xl p-4 border border-green-200 text-center">
            <h4 class="font-semibold text-green-700 mb-2">Paquete de 4</h4>
            <p class="text-3xl font-bold text-green-800">Bs \${precioPaquete4}</p>
          </div>
          <div class="bg-white rounded-xl p-4 border border-green-200 text-center">
            <h4 class="font-semibold text-green-700 mb-2">Paquete de 6</h4>
            <p class="text-3xl font-bold text-green-800">Bs \${precioPaquete6}</p>
          </div>
        </div>
        <div class="bg-green-100 rounded-lg p-3">
          <p class="text-sm text-green-700">
            <strong>An\xE1lisis:</strong> D\xF3lar base Bs \${dolarBase}, actual Bs \${dolarActual}, margen \${margen * 100}%
          </p>
        </div>
      </div>

      <!-- Status -->
      <div class="bg-white rounded-2xl shadow-lg border border-gray-200 p-4">
        <div class="flex justify-between items-center">
          <div class="flex-1">
            \${cacheIndicator}
          </div>
          <button 
            onclick="clearCacheAndReload()" 
            class="ml-4 px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
            title="Limpiar cach\xE9 y actualizar precios"
          >
            \u{1F5D1}\uFE0F Actualizar precios
          </button>
        </div>
      </div>

      <!-- Navigation -->
      <div class="flex flex-col sm:flex-row gap-4">
        <a href="/" class="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl font-semibold hover:from-gray-800 hover:to-gray-700 transition-all shadow-lg hover:shadow-xl">
          <span class="mr-2">\u2190</span>
          Volver al inicio
        </a>
        <button onclick="window.print()" class="inline-flex items-center justify-center px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl">
          <span class="mr-2">\u{1F5A8}\uFE0F</span>
          Imprimir receta
        </button>
      </div>
    \`;
  }

  // Load recipe data with caching
  function loadRecetaData() {
    // Check if data exists in cache
    const cachedData = localStorage.getItem(CACHE_KEY);
    const cacheTimestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);
    
    if (cachedData && cacheTimestamp) {
      try {
        const receta = JSON.parse(cachedData);
        console.log('\u2705 Datos encontrados en cach\xE9, cargando directamente...');
        // Si hay datos en cach\xE9, mostrar inmediatamente sin barra de progreso
        loadingContainer.style.display = 'none';
        renderReceta(receta, true);
        return Promise.resolve(receta);
      } catch (error) {
        console.error('\u274C Error al parsear datos del cach\xE9:', error);
        localStorage.removeItem(CACHE_KEY);
        localStorage.removeItem(CACHE_TIMESTAMP_KEY);
      }
    }

    // Si no hay datos en cach\xE9, hacer fetch y mostrar barra de progreso
    console.log('\u{1F310} No hay datos en cach\xE9, obteniendo desde servidor...');
    
    // Crear promesa del fetch para sincronizar con la barra de progreso
    fetchPromise = fetch(\`\${BACKEND_URL}/api/receta/chocolate\`)
      .then(res => {
        if (!res.ok) {
          throw new Error(\`HTTP error! status: \${res.status}\`);
        }
        return res.json();
      })
      .then(receta => {
        // Guardar en localStorage
        localStorage.setItem(CACHE_KEY, JSON.stringify(receta));
        localStorage.setItem(CACHE_TIMESTAMP_KEY, Date.now().toString());
        console.log('\u{1F4BE} Datos guardados en cach\xE9');
        
        renderReceta(receta, false);
        return receta;
      })
      .catch(err => {
        console.error('\u274C Error al cargar receta:', err);
        container.innerHTML = \`
          <div class="bg-white rounded-2xl shadow-lg border border-red-200 p-8 text-center">
            <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-red-600 text-2xl">\u26A0\uFE0F</span>
            </div>
            <h3 class="text-xl font-bold text-red-800 mb-2">Error al cargar la receta</h3>
            <p class="text-red-600 mb-4">No se pudo conectar con el servidor: \${err.message}</p>
            <button onclick="location.reload()" class="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
              Reintentar
            </button>
          </div>
        \`;
        throw err;
      });

    return fetchPromise;
  }

  // Clear cache and reload
  function clearCacheAndReload() {
    if (confirm('\xBFDeseas actualizar los precios? Esto eliminar\xE1 los datos guardados y volver\xE1 a scrapear los precios actuales.')) {
      localStorage.removeItem(CACHE_KEY);
      localStorage.removeItem(CACHE_TIMESTAMP_KEY);
      console.log('\u{1F5D1}\uFE0F Cach\xE9 eliminado, recargando p\xE1gina...');
      location.reload();
    }
  }

  // Make function globally available
  window.clearCacheAndReload = clearCacheAndReload;

  // Initialize app
  function initializeApp() {
    setupCacheCleanup();
    
    // Verificar si hay datos en cach\xE9
    const cachedData = localStorage.getItem(CACHE_KEY);
    
    if (cachedData) {
      // Si hay datos en cach\xE9, cargar directamente
      console.log('\u{1F680} Inicializando con datos en cach\xE9');
      loadRecetaData();
    } else {
      // Si no hay datos en cach\xE9, iniciar barra de progreso y fetch simult\xE1neamente
      console.log('\u{1F680} Inicializando carga completa con barra de progreso');
      loadRecetaData(); // Esto iniciar\xE1 el fetch
      updateProgress(); // Esto iniciar\xE1 la barra de progreso
    }
  }

  // Initialize when page loads
  initializeApp();
<\/script> `], ["", ` <script>
  const container = document.getElementById("chocolate-content");
  const loadingContainer = document.getElementById("loading-container");
  const progressBar = document.getElementById("progress-bar");
  const progressText = document.getElementById("progress-text");
  const progressPercent = document.getElementById("progress-percent");
  const BACKEND_URL = "https://myrecipebook-d7cg.onrender.com";
  const CACHE_KEY = "chocolate_receta_cache";
  const CACHE_TIMESTAMP_KEY = "chocolate_receta_timestamp";

  // Progress steps - ahora distribuidos en ~20 segundos
  const progressSteps = [
    { percent: 5, text: "Iniciando conexi\xF3n..." },
    { percent: 15, text: "Obteniendo datos de ingredientes..." },
    { percent: 25, text: "Scrapeando precios en tiempo real..." },
    { percent: 35, text: "Verificando Hipermaxi..." },
    { percent: 45, text: "Consultando Farmacorp..." },
    { percent: 55, text: "Revisando Fidalga..." },
    { percent: 65, text: "Calculando costos totales..." },
    { percent: 75, text: "Aplicando m\xE1rgenes de ganancia..." },
    { percent: 85, text: "Generando an\xE1lisis financiero..." },
    { percent: 95, text: "Optimizando precios sugeridos..." },
    { percent: 100, text: "\xA1Proceso completado!" }
  ];

  let currentStep = 0;
  let fetchPromise = null;

  function updateProgress() {
    if (currentStep < progressSteps.length) {
      const step = progressSteps[currentStep];
      progressBar.style.width = step.percent + '%';
      progressText.textContent = step.text;
      progressPercent.textContent = step.percent + '%';
      currentStep++;
      
      // Distribuci\xF3n de tiempo para llegar a ~20 segundos total
      const delay = currentStep <= 3 ? 1800 : 
                   currentStep <= 7 ? 2200 : 
                   currentStep <= 9 ? 1500 : 1000;
      
      setTimeout(updateProgress, delay);
    } else {
      // Esperar a que termine el fetch antes de mostrar contenido
      fetchPromise.then(() => {
        setTimeout(() => {
          loadingContainer.style.opacity = '0';
          setTimeout(() => {
            loadingContainer.style.display = 'none';
          }, 500);
        }, 500);
      });
    }
  }

  // Cache cleanup functions
  function setupCacheCleanup() {
    window.addEventListener('beforeunload', () => {
      const timestamp = Date.now();
      localStorage.setItem('tab_close_check', timestamp.toString());
      
      setTimeout(() => {
        const storedTimestamp = localStorage.getItem('tab_close_check');
        if (storedTimestamp === timestamp.toString()) {
          localStorage.removeItem(CACHE_KEY);
          localStorage.removeItem(CACHE_TIMESTAMP_KEY);
          localStorage.removeItem('tab_close_check');
        }
      }, 100);
    });

    localStorage.removeItem('tab_close_check');
  }

  // Render recipe function
  function renderReceta(receta, fromCache = false) {
    const total = receta.total;
    const unitario = total / 10;
    const dolarBase = 7;
    const dolarActual = 16;
    const margen = 0.25;

    const indice = dolarActual / dolarBase;
    const precioSugerido = (unitario * indice * (1 + margen)).toFixed(2);
    const precioMinimo = 6;
    const precioFinalUnidad = Math.max(precioSugerido, precioMinimo).toFixed(2);

    const precioPaquete4 = (precioFinalUnidad * 4).toFixed(2);
    const precioPaquete6 = (precioFinalUnidad * 6).toFixed(2);

    const ingredientesHTML = receta.ingredientes.map(i => \\\`
      <li class="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-200 hover:shadow-md transition-all">
        <div class="flex items-start space-x-3">
          <span class="text-2xl">\u{1F9C4}</span>
          <div class="flex-1">
            <h4 class="font-semibold text-gray-800 mb-1">\\\${i.nombre}</h4>
            <p class="text-sm text-gray-600">Usado: \\\${i.usado} de \\\${i.total}</p>
            <p class="text-sm font-medium text-amber-600">Costo: Bs \\\${(i.usado / i.total * i.precio).toFixed(2)}</p>
          </div>
        </div>
      </li>
    \\\`).join("");

    const cacheIndicator = fromCache 
      ? \\\`<div class="flex items-center space-x-2 text-green-600 text-sm">
           <span class="animate-pulse">\u{1F4C1}</span>
           <div>
             <span class="font-semibold">Datos cargados desde cach\xE9 local</span>
             <p class="text-xs text-gray-500">\xDAltima actualizaci\xF3n: \\\${new Date(parseInt(localStorage.getItem(CACHE_TIMESTAMP_KEY))).toLocaleString()}</p>
           </div>
         </div>\\\`
      : \\\`<div class="flex items-center space-x-2 text-blue-600 text-sm">
           <span class="animate-pulse">\u{1F310}</span>
           <div>
             <span class="font-semibold">Datos scrapeados en tiempo real</span>
             <p class="text-xs text-gray-500">Precios actualizados: \\\${new Date().toLocaleString()}</p>
           </div>
         </div>\\\`;

    container.innerHTML = \\\`
      <!-- Header -->
      <div class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        <div class="bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-6">
          <h2 class="text-3xl font-bold text-white mb-2">\\\${receta.nombre}</h2>
          <p class="text-gray-300">Receta premium con an\xE1lisis completo de costos</p>
        </div>
      </div>

      <!-- Ingredients -->
      <div class="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
        <h3 class="text-2xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
          <span>\u{1F944}</span>
          <span>Ingredientes</span>
        </h3>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">\\\${ingredientesHTML}</ul>
      </div>

      <!-- Cost Summary -->
      <div class="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 border border-amber-200">
        <h3 class="text-xl font-bold text-amber-800 mb-4 flex items-center space-x-2">
          <span>\u{1F4CA}</span>
          <span>Resumen de costos</span>
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div class="bg-white rounded-xl p-4 border border-amber-200">
            <h4 class="font-semibold text-amber-700 mb-1">Costo total</h4>
            <p class="text-2xl font-bold text-amber-800">Bs \\\${total.toFixed(2)}</p>
          </div>
          <div class="bg-white rounded-xl p-4 border border-amber-200">
            <h4 class="font-semibold text-amber-700 mb-1">Costo por unidad (10)</h4>
            <p class="text-2xl font-bold text-amber-800">Bs \\\${unitario.toFixed(2)}</p>
          </div>
        </div>
      </div>

      <!-- Pricing Suggestions -->
      <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
        <h3 class="text-xl font-bold text-green-800 mb-4 flex items-center space-x-2">
          <span>\u{1F4B0}</span>
          <span>Precio de venta sugerido</span>
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div class="bg-white rounded-xl p-4 border border-green-200 text-center">
            <h4 class="font-semibold text-green-700 mb-2">Unidad (m\xEDnimo Bs 6)</h4>
            <p class="text-3xl font-bold text-green-800">Bs \\\${precioFinalUnidad}</p>
          </div>
          <div class="bg-white rounded-xl p-4 border border-green-200 text-center">
            <h4 class="font-semibold text-green-700 mb-2">Paquete de 4</h4>
            <p class="text-3xl font-bold text-green-800">Bs \\\${precioPaquete4}</p>
          </div>
          <div class="bg-white rounded-xl p-4 border border-green-200 text-center">
            <h4 class="font-semibold text-green-700 mb-2">Paquete de 6</h4>
            <p class="text-3xl font-bold text-green-800">Bs \\\${precioPaquete6}</p>
          </div>
        </div>
        <div class="bg-green-100 rounded-lg p-3">
          <p class="text-sm text-green-700">
            <strong>An\xE1lisis:</strong> D\xF3lar base Bs \\\${dolarBase}, actual Bs \\\${dolarActual}, margen \\\${margen * 100}%
          </p>
        </div>
      </div>

      <!-- Status -->
      <div class="bg-white rounded-2xl shadow-lg border border-gray-200 p-4">
        <div class="flex justify-between items-center">
          <div class="flex-1">
            \\\${cacheIndicator}
          </div>
          <button 
            onclick="clearCacheAndReload()" 
            class="ml-4 px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
            title="Limpiar cach\xE9 y actualizar precios"
          >
            \u{1F5D1}\uFE0F Actualizar precios
          </button>
        </div>
      </div>

      <!-- Navigation -->
      <div class="flex flex-col sm:flex-row gap-4">
        <a href="/" class="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl font-semibold hover:from-gray-800 hover:to-gray-700 transition-all shadow-lg hover:shadow-xl">
          <span class="mr-2">\u2190</span>
          Volver al inicio
        </a>
        <button onclick="window.print()" class="inline-flex items-center justify-center px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl">
          <span class="mr-2">\u{1F5A8}\uFE0F</span>
          Imprimir receta
        </button>
      </div>
    \\\`;
  }

  // Load recipe data with caching
  function loadRecetaData() {
    // Check if data exists in cache
    const cachedData = localStorage.getItem(CACHE_KEY);
    const cacheTimestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);
    
    if (cachedData && cacheTimestamp) {
      try {
        const receta = JSON.parse(cachedData);
        console.log('\u2705 Datos encontrados en cach\xE9, cargando directamente...');
        // Si hay datos en cach\xE9, mostrar inmediatamente sin barra de progreso
        loadingContainer.style.display = 'none';
        renderReceta(receta, true);
        return Promise.resolve(receta);
      } catch (error) {
        console.error('\u274C Error al parsear datos del cach\xE9:', error);
        localStorage.removeItem(CACHE_KEY);
        localStorage.removeItem(CACHE_TIMESTAMP_KEY);
      }
    }

    // Si no hay datos en cach\xE9, hacer fetch y mostrar barra de progreso
    console.log('\u{1F310} No hay datos en cach\xE9, obteniendo desde servidor...');
    
    // Crear promesa del fetch para sincronizar con la barra de progreso
    fetchPromise = fetch(\\\`\\\${BACKEND_URL}/api/receta/chocolate\\\`)
      .then(res => {
        if (!res.ok) {
          throw new Error(\\\`HTTP error! status: \\\${res.status}\\\`);
        }
        return res.json();
      })
      .then(receta => {
        // Guardar en localStorage
        localStorage.setItem(CACHE_KEY, JSON.stringify(receta));
        localStorage.setItem(CACHE_TIMESTAMP_KEY, Date.now().toString());
        console.log('\u{1F4BE} Datos guardados en cach\xE9');
        
        renderReceta(receta, false);
        return receta;
      })
      .catch(err => {
        console.error('\u274C Error al cargar receta:', err);
        container.innerHTML = \\\`
          <div class="bg-white rounded-2xl shadow-lg border border-red-200 p-8 text-center">
            <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-red-600 text-2xl">\u26A0\uFE0F</span>
            </div>
            <h3 class="text-xl font-bold text-red-800 mb-2">Error al cargar la receta</h3>
            <p class="text-red-600 mb-4">No se pudo conectar con el servidor: \\\${err.message}</p>
            <button onclick="location.reload()" class="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
              Reintentar
            </button>
          </div>
        \\\`;
        throw err;
      });

    return fetchPromise;
  }

  // Clear cache and reload
  function clearCacheAndReload() {
    if (confirm('\xBFDeseas actualizar los precios? Esto eliminar\xE1 los datos guardados y volver\xE1 a scrapear los precios actuales.')) {
      localStorage.removeItem(CACHE_KEY);
      localStorage.removeItem(CACHE_TIMESTAMP_KEY);
      console.log('\u{1F5D1}\uFE0F Cach\xE9 eliminado, recargando p\xE1gina...');
      location.reload();
    }
  }

  // Make function globally available
  window.clearCacheAndReload = clearCacheAndReload;

  // Initialize app
  function initializeApp() {
    setupCacheCleanup();
    
    // Verificar si hay datos en cach\xE9
    const cachedData = localStorage.getItem(CACHE_KEY);
    
    if (cachedData) {
      // Si hay datos en cach\xE9, cargar directamente
      console.log('\u{1F680} Inicializando con datos en cach\xE9');
      loadRecetaData();
    } else {
      // Si no hay datos en cach\xE9, iniciar barra de progreso y fetch simult\xE1neamente
      console.log('\u{1F680} Inicializando carga completa con barra de progreso');
      loadRecetaData(); // Esto iniciar\xE1 el fetch
      updateProgress(); // Esto iniciar\xE1 la barra de progreso
    }
  }

  // Initialize when page loads
  initializeApp();
<\/script> `])), renderComponent($$result, "Layout", $$Layout, { "title": "Galletas de Chocolate - CROQUERS" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex min-h-screen relative"> ${renderComponent($$result2, "Sidebar", $$Sidebar, {})} <!-- Main content with responsive margins --> <main class="flex-1 lg:ml-80 lg:mr-80 transition-all duration-300 ease-in-out"> <div class="min-h-screen bg-gradient-to-br from-gray-50 to-white"> ${renderComponent($$result2, "Header", $$Header, {})} <div class="container mx-auto px-4 py-8 pb-24 lg:pb-8"> <!-- Loading Progress Bar --> <div id="loading-container" class="mb-8"> <div class="bg-white rounded-2xl shadow-lg border border-gray-200 p-6"> <div class="flex items-center space-x-4 mb-4"> <div class="w-12 h-12 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full flex items-center justify-center"> <span class="text-xl animate-bounce">🍫</span> </div> <div> <h2 class="text-xl font-bold text-gray-800">Analizando Galletas de Chocolate</h2> <p class="text-gray-600 text-sm">Scrapeando precios en tiempo real desde múltiples supermercados...</p> </div> </div> <!-- Progress Bar --> <div class="w-full bg-gray-200 rounded-full h-3 mb-2"> <div id="progress-bar" class="bg-gradient-to-r from-amber-400 to-yellow-400 h-3 rounded-full transition-all duration-1000 ease-out" style="width: 0%"></div> </div> <div class="flex justify-between text-sm text-gray-600"> <span id="progress-text">Iniciando...</span> <span id="progress-percent">0%</span> </div> </div> </div> <!-- Content Container --> <section class="space-y-8" id="chocolate-content"> <div class="bg-white rounded-2xl shadow-lg border border-gray-200 p-6"> <div class="text-center py-8"> <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4"> <div class="w-8 h-8 border-4 border-gray-300 border-t-amber-400 rounded-full animate-spin"></div> </div> <p class="text-gray-500">Preparando información de la receta...</p> </div> </div> </section> </div> </div> </main> <!-- Chat Agent - Ahora visible en todas las pantallas --> ${renderComponent($$result2, "Agente", $$Agente, {})} </div> ` }));
}, "D:/CROQUER/y/src/pages/recetas/chocolate.astro", void 0);

const $$file = "D:/CROQUER/y/src/pages/recetas/chocolate.astro";
const $$url = "/recetas/chocolate";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Chocolate,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
