import { e as createComponent, f as createAstro, r as renderTemplate, l as defineScriptVars, k as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_DX9AkJiB.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Sidebar, b as $$Header } from '../../chunks/Header_D54e88Xj.mjs';
import { $ as $$Agente } from '../../chunks/agente_DFTgJz-a.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { params } = Astro2;
  const recetaId = params.id;
  return renderTemplate(_a || (_a = __template(["", " <script>(function(){", `
  document.addEventListener('DOMContentLoaded', () => {
    const loadingState = document.getElementById('loading-state');
    const recetaData = document.getElementById('receta-data');
    const errorState = document.getElementById('error-state');

    // Show loading initially
    setTimeout(() => {
      try {
        const recetas = JSON.parse(localStorage.getItem('recetas') || '[]');
        const receta = recetas.find(r => r.id === recetaId);

        if (!receta) {
          showError();
          return;
        }

        showRecetaData(receta);
      } catch (error) {
        console.error('Error loading recipe:', error);
        showError();
      }
    }, 1500); // Simulate loading time

    function showError() {
      loadingState.classList.add('hidden');
      errorState.classList.remove('hidden');
    }

    function showRecetaData(receta) {
      loadingState.classList.add('hidden');
      recetaData.classList.remove('hidden');

      // Update content
      document.getElementById('receta-nombre').textContent = receta.nombre;
      if (receta.descripcion) {
        document.getElementById('receta-descripcion').textContent = receta.descripcion;
      }

      // Calculate costs
      let costo10 = 0;
      const ingredientesHTML = receta.ingredientes.map(item => {
        const usado = parseFloat(item.usado);
        const total = parseFloat(item.total);
        const precio = parseFloat(item.precio);
        const unitCost = precio / total;
        const costUsed = unitCost * usado;
        costo10 += costUsed;

        return \`
          <li class="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-200 hover:shadow-md transition-shadow">
            <div class="flex items-start space-x-3">
              <span class="text-2xl">\u{1F9C4}</span>
              <div class="flex-1">
                <h4 class="font-semibold text-gray-800 mb-1">\${item.nombre}</h4>
                <p class="text-sm text-gray-600 mb-1">Precio base: Bs \${unitCost.toFixed(2)} / \${item.unidad || 'unidad'}</p>
                <p class="text-sm font-medium text-amber-600">Costo \${usado}\${item.unidad}: Bs \${costUsed.toFixed(2)}</p>
              </div>
            </div>
          </li>
        \`;
      }).join('');

      document.getElementById('receta-ingredientes').innerHTML = ingredientesHTML;

      const costPerUnit = costo10 / 10;
      renderCosts(costo10, costPerUnit);
      suggestPricing(costPerUnit);
      
      // Show tips
      document.getElementById('receta-tips').classList.remove('hidden');
    }

    function renderCosts(costo10, costPerUnit) {
      const costosEl = document.getElementById('receta-costos');
      costosEl.innerHTML = \`
        <div class="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 border border-amber-200">
          <h3 class="text-xl font-bold text-amber-800 mb-4 flex items-center space-x-2">
            <span>\u{1F4CA}</span>
            <span>Resumen de costos</span>
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-white rounded-xl p-4 border border-amber-200">
              <h4 class="font-semibold text-amber-700 mb-1">Costo total (10 unidades)</h4>
              <p class="text-2xl font-bold text-amber-800">Bs \${costo10.toFixed(2)}</p>
            </div>
            <div class="bg-white rounded-xl p-4 border border-amber-200">
              <h4 class="font-semibold text-amber-700 mb-1">Costo unitario</h4>
              <p class="text-2xl font-bold text-amber-800">Bs \${costPerUnit.toFixed(2)}</p>
            </div>
          </div>
        </div>
      \`;
    }

    function suggestPricing(costPerUnit) {
      const chocolateCost = 1.75;
      const chocolateSaleMin = 6;
      const factor = chocolateSaleMin / chocolateCost;

      const saleUnit = costPerUnit * factor;
      const sale4 = saleUnit * 4;
      const sale6 = saleUnit * 6;

      document.getElementById('venta-unidad').textContent = \`Bs \${saleUnit.toFixed(2)}\`;
      document.getElementById('venta-paquete4').textContent = \`Bs \${sale4.toFixed(2)}\`;
      document.getElementById('venta-paquete6').textContent = \`Bs \${sale6.toFixed(2)}\`;
      document.getElementById('venta-info').textContent = \`Factor de venta aplicado: \${factor.toFixed(2)}x | Margen de ganancia recomendado incluido\`;

      document.getElementById('receta-venta').classList.remove('hidden');
    }
  });
})();<\/script>`], ["", " <script>(function(){", `
  document.addEventListener('DOMContentLoaded', () => {
    const loadingState = document.getElementById('loading-state');
    const recetaData = document.getElementById('receta-data');
    const errorState = document.getElementById('error-state');

    // Show loading initially
    setTimeout(() => {
      try {
        const recetas = JSON.parse(localStorage.getItem('recetas') || '[]');
        const receta = recetas.find(r => r.id === recetaId);

        if (!receta) {
          showError();
          return;
        }

        showRecetaData(receta);
      } catch (error) {
        console.error('Error loading recipe:', error);
        showError();
      }
    }, 1500); // Simulate loading time

    function showError() {
      loadingState.classList.add('hidden');
      errorState.classList.remove('hidden');
    }

    function showRecetaData(receta) {
      loadingState.classList.add('hidden');
      recetaData.classList.remove('hidden');

      // Update content
      document.getElementById('receta-nombre').textContent = receta.nombre;
      if (receta.descripcion) {
        document.getElementById('receta-descripcion').textContent = receta.descripcion;
      }

      // Calculate costs
      let costo10 = 0;
      const ingredientesHTML = receta.ingredientes.map(item => {
        const usado = parseFloat(item.usado);
        const total = parseFloat(item.total);
        const precio = parseFloat(item.precio);
        const unitCost = precio / total;
        const costUsed = unitCost * usado;
        costo10 += costUsed;

        return \\\`
          <li class="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-200 hover:shadow-md transition-shadow">
            <div class="flex items-start space-x-3">
              <span class="text-2xl">\u{1F9C4}</span>
              <div class="flex-1">
                <h4 class="font-semibold text-gray-800 mb-1">\\\${item.nombre}</h4>
                <p class="text-sm text-gray-600 mb-1">Precio base: Bs \\\${unitCost.toFixed(2)} / \\\${item.unidad || 'unidad'}</p>
                <p class="text-sm font-medium text-amber-600">Costo \\\${usado}\\\${item.unidad}: Bs \\\${costUsed.toFixed(2)}</p>
              </div>
            </div>
          </li>
        \\\`;
      }).join('');

      document.getElementById('receta-ingredientes').innerHTML = ingredientesHTML;

      const costPerUnit = costo10 / 10;
      renderCosts(costo10, costPerUnit);
      suggestPricing(costPerUnit);
      
      // Show tips
      document.getElementById('receta-tips').classList.remove('hidden');
    }

    function renderCosts(costo10, costPerUnit) {
      const costosEl = document.getElementById('receta-costos');
      costosEl.innerHTML = \\\`
        <div class="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 border border-amber-200">
          <h3 class="text-xl font-bold text-amber-800 mb-4 flex items-center space-x-2">
            <span>\u{1F4CA}</span>
            <span>Resumen de costos</span>
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-white rounded-xl p-4 border border-amber-200">
              <h4 class="font-semibold text-amber-700 mb-1">Costo total (10 unidades)</h4>
              <p class="text-2xl font-bold text-amber-800">Bs \\\${costo10.toFixed(2)}</p>
            </div>
            <div class="bg-white rounded-xl p-4 border border-amber-200">
              <h4 class="font-semibold text-amber-700 mb-1">Costo unitario</h4>
              <p class="text-2xl font-bold text-amber-800">Bs \\\${costPerUnit.toFixed(2)}</p>
            </div>
          </div>
        </div>
      \\\`;
    }

    function suggestPricing(costPerUnit) {
      const chocolateCost = 1.75;
      const chocolateSaleMin = 6;
      const factor = chocolateSaleMin / chocolateCost;

      const saleUnit = costPerUnit * factor;
      const sale4 = saleUnit * 4;
      const sale6 = saleUnit * 6;

      document.getElementById('venta-unidad').textContent = \\\`Bs \\\${saleUnit.toFixed(2)}\\\`;
      document.getElementById('venta-paquete4').textContent = \\\`Bs \\\${sale4.toFixed(2)}\\\`;
      document.getElementById('venta-paquete6').textContent = \\\`Bs \\\${sale6.toFixed(2)}\\\`;
      document.getElementById('venta-info').textContent = \\\`Factor de venta aplicado: \\\${factor.toFixed(2)}x | Margen de ganancia recomendado incluido\\\`;

      document.getElementById('receta-venta').classList.remove('hidden');
    }
  });
})();<\/script>`])), renderComponent($$result, "Layout", $$Layout, { "title": `Receta: ${recetaId} - CROQUERS` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex min-h-screen relative"> ${renderComponent($$result2, "Sidebar", $$Sidebar, {})} <!-- Main content with responsive margins --> <main class="flex-1 lg:ml-80 lg:mr-80 transition-all duration-300 ease-in-out"> <div class="min-h-screen bg-gradient-to-br from-gray-50 to-white"> ${renderComponent($$result2, "Header", $$Header, {})} <div class="container mx-auto px-4 py-8 pb-24 lg:pb-8"> <section id="receta-content" class="space-y-8"> <!-- Loading State --> <div id="loading-state" class="text-center py-12"> <div class="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4"> <div class="w-8 h-8 border-4 border-amber-400 border-t-transparent rounded-full animate-spin"></div> </div> <h2 class="text-2xl font-bold text-gray-800 mb-2">Cargando receta...</h2> <p class="text-gray-600">Obteniendo información de ingredientes</p> </div> <!-- Content (hidden initially) --> <div id="receta-data" class="hidden space-y-8"> <!-- Header --> <div class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"> <div class="bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-6"> <h2 id="receta-nombre" class="text-3xl font-bold text-white mb-2">Nombre de la receta</h2> <p id="receta-descripcion" class="text-gray-300"></p> </div> </div> <!-- Ingredients Grid --> <div class="bg-white rounded-2xl shadow-lg border border-gray-200 p-6"> <h3 class="text-2xl font-bold text-gray-800 mb-6 flex items-center space-x-2"> <span>🥄</span> <span>Ingredientes</span> </h3> <ul id="receta-ingredientes" class="grid grid-cols-1 md:grid-cols-2 gap-4"> <!-- Dynamic content --> </ul> </div> <!-- Costs Summary --> <div id="receta-costos" class="space-y-4"> <!-- Dynamic content --> </div> <!-- Pricing Suggestions --> <div id="receta-venta" class="hidden bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200"> <h3 class="text-xl font-bold text-green-800 mb-4 flex items-center space-x-2"> <span>💰</span> <span>Precio de venta sugerido</span> </h3> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"> <div class="bg-white rounded-xl p-4 border border-green-200"> <h4 class="font-semibold text-green-700 mb-1">Unidad</h4> <p id="venta-unidad" class="text-2xl font-bold text-green-800"></p> </div> <div class="bg-white rounded-xl p-4 border border-green-200"> <h4 class="font-semibold text-green-700 mb-1">Paquete de 4</h4> <p id="venta-paquete4" class="text-2xl font-bold text-green-800"></p> </div> <div class="bg-white rounded-xl p-4 border border-green-200"> <h4 class="font-semibold text-green-700 mb-1">Paquete de 6</h4> <p id="venta-paquete6" class="text-2xl font-bold text-green-800"></p> </div> </div> <p id="venta-info" class="text-sm text-green-600 mt-4 bg-green-100 rounded-lg p-3"></p> </div> <!-- Tips --> <aside id="receta-tips" class="hidden bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-l-4 border-blue-400"> <div class="flex items-start space-x-3"> <span class="text-2xl">💡</span> <div> <h4 class="font-semibold text-blue-800 mb-2">Tip Profesional</h4> <p class="text-blue-700">Si el costo sugerido tienen decimales, redondea a un numero entero mayor al actual.</p> </div> </div> </aside> <!-- Navigation --> <div class="flex flex-col sm:flex-row gap-4 pt-6"> <a href="/" class="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl font-semibold hover:from-gray-800 hover:to-gray-700 transition-all shadow-lg hover:shadow-xl"> <span class="mr-2">←</span>
Volver al inicio
</a> <button onclick="window.print()" class="inline-flex items-center justify-center px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl"> <span class="mr-2">🖨️</span>
Imprimir receta
</button> </div> </div> <!-- Error State --> <div id="error-state" class="hidden text-center py-12"> <div class="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4"> <span class="text-red-600 text-2xl">⚠️</span> </div> <h2 class="text-2xl font-bold text-red-800 mb-2">Receta no encontrada</h2> <p class="text-red-600 mb-6">No se pudo cargar la información de esta receta.</p> <a href="/" class="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold transition-all"> <span class="mr-2">←</span>
Volver al inicio
</a> </div> </section> </div> </div> </main> <!-- Chat Agent - Ahora visible en todas las pantallas --> ${renderComponent($$result2, "Agente", $$Agente, {})} </div> ` }), defineScriptVars({ recetaId }));
}, "D:/CROQUER/y/src/pages/recetas/[id].astro", void 0);

const $$file = "D:/CROQUER/y/src/pages/recetas/[id].astro";
const $$url = "/recetas/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
