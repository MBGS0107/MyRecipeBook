import { e as createComponent, m as maybeRenderHead, r as renderTemplate, l as defineScriptVars, k as renderComponent } from '../chunks/astro/server_DX9AkJiB.mjs';
import 'kleur/colors';
import { $ as $$Layout, b as $$Header, a as $$Sidebar } from '../chunks/Header_D54e88Xj.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Inicio = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="inicio" class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-amber-50 relative overflow-hidden"> <!-- Decorative background elements --> <div class="absolute inset-0 opacity-5"> <div class="absolute top-20 left-10 w-32 h-32 bg-amber-400 rounded-full blur-3xl"></div> <div class="absolute top-40 right-20 w-24 h-24 bg-gray-400 rounded-full blur-2xl"></div> <div class="absolute bottom-20 left-1/3 w-40 h-40 bg-amber-300 rounded-full blur-3xl"></div> </div> <div class="relative z-10 container mx-auto px-4 py-12 lg:py-20"> <!-- Hero Section --> <div class="text-center mb-16"> <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full mb-6 shadow-lg"> <span class="text-3xl">🍪</span> </div> <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
Bienvenido a
<span class="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">
CROQUERS
</span> <div class="inline-block ml-2 animate-bounce">🍪</div> </h1> <p class="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8"> <span class="font-semibold text-gray-800">Plataforma profesional</span> para calcular y visualizar el precio unitario de tus recetas caseras,
        basado en ingredientes y precios reales, con ajuste dinámico por tipo de cambio y márgenes.
</p> <!-- Stats or features --> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12"> <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100"> <div class="text-3xl mb-2">📊</div> <h3 class="font-bold text-gray-800 mb-1">Cálculo Preciso</h3> <p class="text-sm text-gray-600">Análisis detallado de costos por unidad</p> </div> <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100"> <div class="text-3xl mb-2">💰</div> <h3 class="font-bold text-gray-800 mb-1">Precios Reales</h3> <p class="text-sm text-gray-600">Conexión con supermercados actualizados</p> </div> <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100"> <div class="text-3xl mb-2">📈</div> <h3 class="font-bold text-gray-800 mb-1">Márgenes Dinámicos</h3> <p class="text-sm text-gray-600">Ajuste automático por tipo de cambio</p> </div> </div> </div> <!-- Featured Recipes --> <div class="mb-16"> <div class="text-center mb-10"> <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
Recetas Destacadas
<span class="text-amber-500">✨</span> </h2> <p class="text-gray-600 max-w-2xl mx-auto">
Explora nuestras recetas más populares con análisis completo de costos y rentabilidad
</p> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"> <a href="/recetas/chocolate" class="group block"> <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group-hover:border-amber-200"> <!-- Image placeholder --> <div class="h-48 bg-gradient-to-br from-amber-100 to-yellow-100 flex items-center justify-center relative overflow-hidden"> <span class="text-6xl group-hover:scale-110 transition-transform duration-300">🍫</span> <div class="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-gray-700">
Popular
</div> </div> <div class="p-6"> <h3 class="font-bold text-xl text-gray-800 mb-2 group-hover:text-amber-600 transition-colors">
Galletas de Chocolate
</h3> <p class="text-gray-600 text-sm mb-4 leading-relaxed">
Conexión a supermercados y precios en tiempo real. Análisis completo de rentabilidad.
</p> <div class="flex items-center justify-between"> <div class="flex items-center space-x-2 text-xs text-gray-500"> <span>⏱️ 45 min</span> <span>•</span> <span>👥 10 unidades</span> </div> <div class="text-amber-600 group-hover:translate-x-1 transition-transform">
→
</div> </div> </div> </div> </a> <!-- Placeholder for more recipes --> <div class="bg-white/50 backdrop-blur-sm rounded-2xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-8 text-center min-h-[300px]"> <div class="text-4xl mb-4 opacity-50">🧁</div> <h3 class="font-semibold text-gray-600 mb-2">Próximamente</h3> <p class="text-sm text-gray-500">Más recetas en desarrollo</p> </div> <div class="bg-white/50 backdrop-blur-sm rounded-2xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-8 text-center min-h-[300px]"> <div class="text-4xl mb-4 opacity-50">🎂</div> <h3 class="font-semibold text-gray-600 mb-2">Tu Receta</h3> <p class="text-sm text-gray-500">Crea tu propia receta personalizada</p> </div> </div> </div> <!-- CTA Section --> <div class="text-center"> <div class="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"> <!-- Decorative elements --> <div class="absolute top-0 right-0 w-32 h-32 bg-amber-400 opacity-10 rounded-full -translate-y-16 translate-x-16"></div> <div class="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-full translate-y-12 -translate-x-12"></div> <div class="relative z-10"> <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">
¿Listo para crear tu primera receta?
</h2> <p class="text-gray-300 mb-8 max-w-2xl mx-auto">
Comienza a calcular los costos reales de tus creaciones y optimiza tu rentabilidad
</p> <a href="#recetas" class="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-500 hover:to-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"> <span class="text-xl">➕</span> <span>Crear nueva receta personalizada</span> <span class="text-lg">✨</span> </a> </div> </div> </div> </div> </section>`;
}, "D:/CROQUER/y/src/components/Inicio.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$FormReceta = createComponent(async ($$result, $$props, $$slots) => {
  const BACKEND_URL = "https://myrecipebook-d7cg.onrender.com";
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<div class="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-4 sm:py-8 relative overflow-hidden" data-astro-cid-bgeztoio> <!-- Background decoration --> <div class="absolute inset-0 opacity-30" data-astro-cid-bgeztoio> <div class="absolute inset-0 bg-gradient-to-br from-orange-100/20 to-amber-100/20" data-astro-cid-bgeztoio></div> <div class="absolute top-0 left-0 w-full h-full" style="background-image: radial-gradient(circle at 25% 25%, rgba(251, 146, 60, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.1) 0%, transparent 50%);" data-astro-cid-bgeztoio></div> </div> <div class="max-w-5xl mx-auto px-3 sm:px-4 relative" data-astro-cid-bgeztoio> <form id="recipe-form" class="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl border border-orange-200/50 overflow-hidden transform hover:scale-[1.01] transition-all duration-300" data-astro-cid-bgeztoio> <!-- Header del formulario --> <div class="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 px-4 sm:px-8 py-6 sm:py-8 relative overflow-hidden" data-astro-cid-bgeztoio> <div class="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20" data-astro-cid-bgeztoio></div> <div class="flex items-center space-x-4 relative z-10" data-astro-cid-bgeztoio> <div class="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg" data-astro-cid-bgeztoio> <span class="text-white text-2xl sm:text-3xl drop-shadow-sm" data-astro-cid-bgeztoio>👨‍🍳</span> </div> <div data-astro-cid-bgeztoio> <h2 class="text-2xl sm:text-3xl font-bold text-white drop-shadow-sm" data-astro-cid-bgeztoio>Crear Nueva Receta</h2> <p class="text-orange-100 text-sm sm:text-base mt-1" data-astro-cid-bgeztoio>Diseña tu próxima creación culinaria con estilo</p> </div> </div> <!-- Decorative elements --> <div class="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full" data-astro-cid-bgeztoio></div> <div class="absolute bottom-4 right-8 w-6 h-6 bg-white/10 rounded-full" data-astro-cid-bgeztoio></div> <div class="absolute top-8 right-16 w-4 h-4 bg-white/10 rounded-full" data-astro-cid-bgeztoio></div> </div> <div class="p-6 sm:p-10 space-y-8 sm:space-y-10" data-astro-cid-bgeztoio> <!-- Descripción general --> <div class="space-y-3 group" data-astro-cid-bgeztoio> <label for="descripcion" class="block text-sm font-bold text-gray-800 flex items-center space-x-3" data-astro-cid-bgeztoio> <div class="w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-500 rounded-xl flex items-center justify-center text-white shadow-lg" data-astro-cid-bgeztoio> <span class="text-lg" data-astro-cid-bgeztoio>📝</span> </div> <span data-astro-cid-bgeztoio>Descripción de la receta</span> </label> <div class="relative" data-astro-cid-bgeztoio> <textarea id="descripcion" name="descripcion" rows="4" class="w-full border-2 border-orange-200 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all duration-300 resize-none text-sm bg-gradient-to-br from-white to-orange-50/30 shadow-inner placeholder-gray-400" placeholder="Describe tu deliciosa creación... ¿Qué la hace especial? ¿Cuál es su historia?" required data-astro-cid-bgeztoio></textarea> <div class="absolute bottom-3 right-3 text-xs text-gray-400 opacity-0 group-focus-within:opacity-100 transition-opacity" data-astro-cid-bgeztoio>\n✨ Sé creativo\n</div> </div> </div> <!-- Nombre --> <div class="space-y-3 group" data-astro-cid-bgeztoio> <label for="nombre" class="block text-sm font-bold text-gray-800 flex items-center space-x-3" data-astro-cid-bgeztoio> <div class="w-8 h-8 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl flex items-center justify-center text-white shadow-lg" data-astro-cid-bgeztoio> <span class="text-lg" data-astro-cid-bgeztoio>🏷️</span> </div> <span data-astro-cid-bgeztoio>Nombre de la receta</span> </label> <div class="relative" data-astro-cid-bgeztoio> <input id="nombre" name="nombre" required class="w-full border-2 border-orange-200 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all duration-300 text-sm bg-gradient-to-br from-white to-orange-50/30 shadow-inner placeholder-gray-400" placeholder="Ej: Brownie de chocolate premium con nueces" data-astro-cid-bgeztoio> <div class="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-300 opacity-0 group-focus-within:opacity-100 transition-opacity" data-astro-cid-bgeztoio> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-bgeztoio> <path fill-rule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" clip-rule="evenodd" data-astro-cid-bgeztoio></path> </svg> </div> </div> </div> <!-- Ingredientes --> <div class="space-y-6" data-astro-cid-bgeztoio> <div class="flex items-center justify-between" data-astro-cid-bgeztoio> <div data-astro-cid-bgeztoio> <h3 class="text-lg sm:text-xl font-bold text-gray-800 flex items-center space-x-3" data-astro-cid-bgeztoio> <div class="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center text-white shadow-lg" data-astro-cid-bgeztoio> <span class="text-xl" data-astro-cid-bgeztoio>🥄</span> </div> <span data-astro-cid-bgeztoio>Ingredientes</span> </h3> <p class="text-sm text-gray-600 mt-2 ml-13" data-astro-cid-bgeztoio>\nEspecifica todos los detalles: cantidad total, unidad, precio total (Bs.) y cantidad para 10 unidades\n</p> </div> </div> <fieldset id="ingredients" class="space-y-4" data-astro-cid-bgeztoio> <!-- Fila de ejemplo --> <div class="ingredient bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-4 sm:p-6 border-2 border-dashed border-orange-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 group" data-astro-cid-bgeztoio> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4" data-astro-cid-bgeztoio> <input name="ingrediente-nombre" required placeholder="Nombre del ingrediente" class="sm:col-span-2 lg:col-span-2 border-2 border-orange-200 rounded-xl px-4 py-3 text-sm focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all duration-300 bg-white/70 placeholder-gray-400" data-astro-cid-bgeztoio> <input name="ingrediente-cantidad-total" type="text" required placeholder="Ej: 1 kg" class="border-2 border-orange-200 rounded-xl px-4 py-3 text-sm focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all duration-300 bg-white/70 placeholder-gray-400" data-astro-cid-bgeztoio> <input name="ingrediente-unidad" type="text" required placeholder="g, kg, ml, etc." class="border-2 border-orange-200 rounded-xl px-4 py-3 text-sm focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all duration-300 bg-white/70 placeholder-gray-400" data-astro-cid-bgeztoio> <input name="ingrediente-precio" type="number" step="0.01" required placeholder="Precio Bs." class="border-2 border-orange-200 rounded-xl px-4 py-3 text-sm focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all duration-300 bg-white/70 placeholder-gray-400" data-astro-cid-bgeztoio> <div class="flex items-center gap-2 sm:col-span-2 lg:col-span-1 min-w-0" data-astro-cid-bgeztoio> <input name="ingrediente-usado" type="number" step="0.01" required placeholder="Usado" class="w-full min-w-0 max-w-[120px] border-2 border-orange-200 rounded-xl px-4 py-3 text-sm focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all duration-300 bg-white/70 placeholder-gray-400" data-astro-cid-bgeztoio> <button type="button" class="remove w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105" title="Eliminar ingrediente" data-astro-cid-bgeztoio> <span class="text-lg" data-astro-cid-bgeztoio>✕</span> </button> </div> </div> </div> </fieldset> <button type="button" id="add-ingredient" class="w-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 text-white py-4 px-6 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:scale-[1.02] text-sm sm:text-base group" data-astro-cid-bgeztoio> <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-90 transition-transform duration-300" data-astro-cid-bgeztoio> <span class="text-xl font-bold" data-astro-cid-bgeztoio>+</span> </div> <span data-astro-cid-bgeztoio>Agregar Ingrediente</span> </button> </div> <!-- Botones de acción --> <div class="flex flex-col sm:flex-row gap-4 pt-8 border-t border-orange-200/50" data-astro-cid-bgeztoio> <button type="submit" class="flex-1 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 hover:from-orange-700 hover:via-amber-700 hover:to-yellow-700 text-white py-4 sm:py-5 px-6 sm:px-8 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center space-x-3 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] text-base sm:text-lg group" data-astro-cid-bgeztoio> <div class="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300" data-astro-cid-bgeztoio> <span class="text-2xl" data-astro-cid-bgeztoio>🎂</span> </div> <span data-astro-cid-bgeztoio>Crear Receta</span> </button> <button type="reset" class="flex-1 sm:flex-none sm:w-auto bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white py-4 sm:py-5 px-6 sm:px-8 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:scale-[1.02] text-base sm:text-lg group" data-astro-cid-bgeztoio> <div class="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300" data-astro-cid-bgeztoio> <span class="text-xl" data-astro-cid-bgeztoio>🗑️</span> </div> <span data-astro-cid-bgeztoio>Limpiar</span> </button> </div> <div id="form-status" class="hidden mt-6 p-4 rounded-2xl text-sm font-medium shadow-lg" data-astro-cid-bgeztoio></div> </div> </form> </div> </div>  <script type="module">', `
  // Helpers
  const slugify = txt =>
    txt.trim().toLowerCase()
      .normalize('NFD').replace(/[\\u0300-\\u036f]/g, '')
      .replace(/[^\\w\\s-]/g, '').replace(/\\s+/g, '-');
  const showStatus = (msg, isErr = false) => {
    const s = document.getElementById('form-status');
    s.textContent = msg;
    s.className = \`mt-6 p-4 rounded-2xl text-sm font-medium shadow-lg \${
      isErr ? 'bg-red-50 text-red-800 border border-red-200' : 'bg-green-50 text-green-800 border border-green-200'
    }\`;
    s.classList.remove('hidden');
    setTimeout(() => s.classList.add('hidden'), 5000);
  };

  // Añadir/eliminar filas de ingrediente
  const addIngredientRow = () => {
    const fs = document.getElementById('ingredients');
    const div = document.createElement('div');
    div.className = 'ingredient bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-4 sm:p-6 border-2 border-dashed border-orange-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 group';
    div.innerHTML = \`
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
        <input name="ingrediente-nombre" required placeholder="Nombre del ingrediente" class="sm:col-span-2 lg:col-span-2 border-2 border-orange-200 rounded-xl px-4 py-3 text-sm focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all duration-300 bg-white/70 placeholder-gray-400" />
        <input name="ingrediente-cantidad-total" type="text" required placeholder="Ej: 1 kg" class="border-2 border-orange-200 rounded-xl px-4 py-3 text-sm focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all duration-300 bg-white/70 placeholder-gray-400" />
        <input name="ingrediente-unidad" type="text" required placeholder="g, kg, ml, etc." class="border-2 border-orange-200 rounded-xl px-4 py-3 text-sm focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all duration-300 bg-white/70 placeholder-gray-400" />
        <input name="ingrediente-precio" type="number" step="0.01" required placeholder="Precio Bs." class="border-2 border-orange-200 rounded-xl px-4 py-3 text-sm focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all duration-300 bg-white/70 placeholder-gray-400" />
        <div class="flex items-center gap-2 sm:col-span-2 lg:col-span-1 min-w-0">
          <input name="ingrediente-usado" type="number" step="0.01" required placeholder="Usado" class="w-full min-w-0 max-w-[120px] border-2 border-orange-200 rounded-xl px-4 py-3 text-sm focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all duration-300 bg-white/70 placeholder-gray-400" />
          <button type="button" class="remove w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105" title="Eliminar ingrediente"><span class="text-lg">✕</span></button>
        </div>
      </div>
    \`;
    fs.appendChild(div);
    div.querySelector('.remove').onclick = () => div.remove();
  };

  document.addEventListener('DOMContentLoaded', () => {
    // Setup add/remove
    document.getElementById('add-ingredient').onclick = addIngredientRow;
    document.querySelectorAll('.remove')
      .forEach(btn => btn.onclick = e => e.target.closest('.ingredient').remove());    // Submit
    document.getElementById('recipe-form').onsubmit = async e => {
      e.preventDefault();
      const form = e.target;
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnContent = submitBtn.innerHTML;

      const nombre = form.nombre.value.trim();
      const descripcion = form.descripcion.value.trim();
      if (!nombre || !descripcion)
        return showStatus('📝 Por favor completa el nombre y la descripción', true);

      // Recoger ingredientes
      const ingredientes = Array.from(
        document.querySelectorAll('.ingredient')
      ).map(div => ({
        nombre: div.querySelector('[name="ingrediente-nombre"]').value.trim(),
        unidad: div.querySelector('[name="ingrediente-unidad"]').value.trim(),
        total: parseFloat(div.querySelector('[name="ingrediente-cantidad-total"]').value),
        precio: parseFloat(div.querySelector('[name="ingrediente-precio"]').value),
        usado: parseFloat(div.querySelector('[name="ingrediente-usado"]').value),
      }))
      .filter(i =>
        i.nombre &&
        i.unidad &&
        !isNaN(i.total) &&
        !isNaN(i.precio) &&
        !isNaN(i.usado) &&
        i.total > 0 &&
        i.precio > 0 &&
        i.usado > 0
      );

      if (!ingredientes.length)
        return showStatus('🥄 Agrega al menos un ingrediente válido', true);

      const payload = {
        id: slugify(nombre),
        nombre,
        descripcion,
        ingredientes
      };

      // Loading state
      submitBtn.innerHTML = \`
        <div class="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
          <div class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
        <span>Creando receta...</span>
      \`;
      submitBtn.disabled = true;
      submitBtn.classList.add('opacity-75', 'cursor-not-allowed');

      try {
        const res = await fetch('https://myrecipebook-d7cg.onrender.com/api/recetas', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
        await res.text();

        // Forzar recarga de recetas en el Sidebar
        localStorage.removeItem('recetas');

        showStatus(\`🎉 ¡Receta "\${nombre}" creada exitosamente!\`);
        form.reset();
        
        // Success animation
        submitBtn.innerHTML = \`
          <div class="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
            <span class="text-2xl">✅</span>
          </div>
          <span>¡Creada!</span>
        \`;
        
        // Reset button after delay
        setTimeout(() => {
          submitBtn.innerHTML = originalBtnContent;
          submitBtn.disabled = false;
          submitBtn.classList.remove('opacity-75', 'cursor-not-allowed');
        }, 2000);
        
      } catch (err) {
        console.error(err);
        showStatus(\`❌ Error: \${err.message}\`, true);
        
        // Reset button on error
        submitBtn.innerHTML = originalBtnContent;
        submitBtn.disabled = false;
        submitBtn.classList.remove('opacity-75', 'cursor-not-allowed');
      }
    };
  });
</script>`], ["", '<div class="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-4 sm:py-8 relative overflow-hidden" data-astro-cid-bgeztoio> <!-- Background decoration --> <div class="absolute inset-0 opacity-30" data-astro-cid-bgeztoio> <div class="absolute inset-0 bg-gradient-to-br from-orange-100/20 to-amber-100/20" data-astro-cid-bgeztoio></div> <div class="absolute top-0 left-0 w-full h-full" style="background-image: radial-gradient(circle at 25% 25%, rgba(251, 146, 60, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.1) 0%, transparent 50%);" data-astro-cid-bgeztoio></div> </div> <div class="max-w-5xl mx-auto px-3 sm:px-4 relative" data-astro-cid-bgeztoio> <form id="recipe-form" class="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl border border-orange-200/50 overflow-hidden transform hover:scale-[1.01] transition-all duration-300" data-astro-cid-bgeztoio> <!-- Header del formulario --> <div class="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 px-4 sm:px-8 py-6 sm:py-8 relative overflow-hidden" data-astro-cid-bgeztoio> <div class="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20" data-astro-cid-bgeztoio></div> <div class="flex items-center space-x-4 relative z-10" data-astro-cid-bgeztoio> <div class="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg" data-astro-cid-bgeztoio> <span class="text-white text-2xl sm:text-3xl drop-shadow-sm" data-astro-cid-bgeztoio>👨‍🍳</span> </div> <div data-astro-cid-bgeztoio> <h2 class="text-2xl sm:text-3xl font-bold text-white drop-shadow-sm" data-astro-cid-bgeztoio>Crear Nueva Receta</h2> <p class="text-orange-100 text-sm sm:text-base mt-1" data-astro-cid-bgeztoio>Diseña tu próxima creación culinaria con estilo</p> </div> </div> <!-- Decorative elements --> <div class="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full" data-astro-cid-bgeztoio></div> <div class="absolute bottom-4 right-8 w-6 h-6 bg-white/10 rounded-full" data-astro-cid-bgeztoio></div> <div class="absolute top-8 right-16 w-4 h-4 bg-white/10 rounded-full" data-astro-cid-bgeztoio></div> </div> <div class="p-6 sm:p-10 space-y-8 sm:space-y-10" data-astro-cid-bgeztoio> <!-- Descripción general --> <div class="space-y-3 group" data-astro-cid-bgeztoio> <label for="descripcion" class="block text-sm font-bold text-gray-800 flex items-center space-x-3" data-astro-cid-bgeztoio> <div class="w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-500 rounded-xl flex items-center justify-center text-white shadow-lg" data-astro-cid-bgeztoio> <span class="text-lg" data-astro-cid-bgeztoio>📝</span> </div> <span data-astro-cid-bgeztoio>Descripción de la receta</span> </label> <div class="relative" data-astro-cid-bgeztoio> <textarea id="descripcion" name="descripcion" rows="4" class="w-full border-2 border-orange-200 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all duration-300 resize-none text-sm bg-gradient-to-br from-white to-orange-50/30 shadow-inner placeholder-gray-400" placeholder="Describe tu deliciosa creación... ¿Qué la hace especial? ¿Cuál es su historia?" required data-astro-cid-bgeztoio></textarea> <div class="absolute bottom-3 right-3 text-xs text-gray-400 opacity-0 group-focus-within:opacity-100 transition-opacity" data-astro-cid-bgeztoio>\n✨ Sé creativo\n</div> </div> </div> <!-- Nombre --> <div class="space-y-3 group" data-astro-cid-bgeztoio> <label for="nombre" class="block text-sm font-bold text-gray-800 flex items-center space-x-3" data-astro-cid-bgeztoio> <div class="w-8 h-8 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl flex items-center justify-center text-white shadow-lg" data-astro-cid-bgeztoio> <span class="text-lg" data-astro-cid-bgeztoio>🏷️</span> </div> <span data-astro-cid-bgeztoio>Nombre de la receta</span> </label> <div class="relative" data-astro-cid-bgeztoio> <input id="nombre" name="nombre" required class="w-full border-2 border-orange-200 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all duration-300 text-sm bg-gradient-to-br from-white to-orange-50/30 shadow-inner placeholder-gray-400" placeholder="Ej: Brownie de chocolate premium con nueces" data-astro-cid-bgeztoio> <div class="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-300 opacity-0 group-focus-within:opacity-100 transition-opacity" data-astro-cid-bgeztoio> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-bgeztoio> <path fill-rule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" clip-rule="evenodd" data-astro-cid-bgeztoio></path> </svg> </div> </div> </div> <!-- Ingredientes --> <div class="space-y-6" data-astro-cid-bgeztoio> <div class="flex items-center justify-between" data-astro-cid-bgeztoio> <div data-astro-cid-bgeztoio> <h3 class="text-lg sm:text-xl font-bold text-gray-800 flex items-center space-x-3" data-astro-cid-bgeztoio> <div class="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center text-white shadow-lg" data-astro-cid-bgeztoio> <span class="text-xl" data-astro-cid-bgeztoio>🥄</span> </div> <span data-astro-cid-bgeztoio>Ingredientes</span> </h3> <p class="text-sm text-gray-600 mt-2 ml-13" data-astro-cid-bgeztoio>\nEspecifica todos los detalles: cantidad total, unidad, precio total (Bs.) y cantidad para 10 unidades\n</p> </div> </div> <fieldset id="ingredients" class="space-y-4" data-astro-cid-bgeztoio> <!-- Fila de ejemplo --> <div class="ingredient bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-4 sm:p-6 border-2 border-dashed border-orange-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 group" data-astro-cid-bgeztoio> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4" data-astro-cid-bgeztoio> <input name="ingrediente-nombre" required placeholder="Nombre del ingrediente" class="sm:col-span-2 lg:col-span-2 border-2 border-orange-200 rounded-xl px-4 py-3 text-sm focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all duration-300 bg-white/70 placeholder-gray-400" data-astro-cid-bgeztoio> <input name="ingrediente-cantidad-total" type="text" required placeholder="Ej: 1 kg" class="border-2 border-orange-200 rounded-xl px-4 py-3 text-sm focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all duration-300 bg-white/70 placeholder-gray-400" data-astro-cid-bgeztoio> <input name="ingrediente-unidad" type="text" required placeholder="g, kg, ml, etc." class="border-2 border-orange-200 rounded-xl px-4 py-3 text-sm focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all duration-300 bg-white/70 placeholder-gray-400" data-astro-cid-bgeztoio> <input name="ingrediente-precio" type="number" step="0.01" required placeholder="Precio Bs." class="border-2 border-orange-200 rounded-xl px-4 py-3 text-sm focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all duration-300 bg-white/70 placeholder-gray-400" data-astro-cid-bgeztoio> <div class="flex items-center gap-2 sm:col-span-2 lg:col-span-1 min-w-0" data-astro-cid-bgeztoio> <input name="ingrediente-usado" type="number" step="0.01" required placeholder="Usado" class="w-full min-w-0 max-w-[120px] border-2 border-orange-200 rounded-xl px-4 py-3 text-sm focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all duration-300 bg-white/70 placeholder-gray-400" data-astro-cid-bgeztoio> <button type="button" class="remove w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105" title="Eliminar ingrediente" data-astro-cid-bgeztoio> <span class="text-lg" data-astro-cid-bgeztoio>✕</span> </button> </div> </div> </div> </fieldset> <button type="button" id="add-ingredient" class="w-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 text-white py-4 px-6 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:scale-[1.02] text-sm sm:text-base group" data-astro-cid-bgeztoio> <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-90 transition-transform duration-300" data-astro-cid-bgeztoio> <span class="text-xl font-bold" data-astro-cid-bgeztoio>+</span> </div> <span data-astro-cid-bgeztoio>Agregar Ingrediente</span> </button> </div> <!-- Botones de acción --> <div class="flex flex-col sm:flex-row gap-4 pt-8 border-t border-orange-200/50" data-astro-cid-bgeztoio> <button type="submit" class="flex-1 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 hover:from-orange-700 hover:via-amber-700 hover:to-yellow-700 text-white py-4 sm:py-5 px-6 sm:px-8 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center space-x-3 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] text-base sm:text-lg group" data-astro-cid-bgeztoio> <div class="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300" data-astro-cid-bgeztoio> <span class="text-2xl" data-astro-cid-bgeztoio>🎂</span> </div> <span data-astro-cid-bgeztoio>Crear Receta</span> </button> <button type="reset" class="flex-1 sm:flex-none sm:w-auto bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white py-4 sm:py-5 px-6 sm:px-8 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:scale-[1.02] text-base sm:text-lg group" data-astro-cid-bgeztoio> <div class="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300" data-astro-cid-bgeztoio> <span class="text-xl" data-astro-cid-bgeztoio>🗑️</span> </div> <span data-astro-cid-bgeztoio>Limpiar</span> </button> </div> <div id="form-status" class="hidden mt-6 p-4 rounded-2xl text-sm font-medium shadow-lg" data-astro-cid-bgeztoio></div> </div> </form> </div> </div>  <script type="module">', `
  // Helpers
  const slugify = txt =>
    txt.trim().toLowerCase()
      .normalize('NFD').replace(/[\\\\u0300-\\\\u036f]/g, '')
      .replace(/[^\\\\w\\\\s-]/g, '').replace(/\\\\s+/g, '-');
  const showStatus = (msg, isErr = false) => {
    const s = document.getElementById('form-status');
    s.textContent = msg;
    s.className = \\\`mt-6 p-4 rounded-2xl text-sm font-medium shadow-lg \\\${
      isErr ? 'bg-red-50 text-red-800 border border-red-200' : 'bg-green-50 text-green-800 border border-green-200'
    }\\\`;
    s.classList.remove('hidden');
    setTimeout(() => s.classList.add('hidden'), 5000);
  };

  // Añadir/eliminar filas de ingrediente
  const addIngredientRow = () => {
    const fs = document.getElementById('ingredients');
    const div = document.createElement('div');
    div.className = 'ingredient bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-4 sm:p-6 border-2 border-dashed border-orange-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 group';
    div.innerHTML = \\\`
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
        <input name="ingrediente-nombre" required placeholder="Nombre del ingrediente" class="sm:col-span-2 lg:col-span-2 border-2 border-orange-200 rounded-xl px-4 py-3 text-sm focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all duration-300 bg-white/70 placeholder-gray-400" />
        <input name="ingrediente-cantidad-total" type="text" required placeholder="Ej: 1 kg" class="border-2 border-orange-200 rounded-xl px-4 py-3 text-sm focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all duration-300 bg-white/70 placeholder-gray-400" />
        <input name="ingrediente-unidad" type="text" required placeholder="g, kg, ml, etc." class="border-2 border-orange-200 rounded-xl px-4 py-3 text-sm focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all duration-300 bg-white/70 placeholder-gray-400" />
        <input name="ingrediente-precio" type="number" step="0.01" required placeholder="Precio Bs." class="border-2 border-orange-200 rounded-xl px-4 py-3 text-sm focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all duration-300 bg-white/70 placeholder-gray-400" />
        <div class="flex items-center gap-2 sm:col-span-2 lg:col-span-1 min-w-0">
          <input name="ingrediente-usado" type="number" step="0.01" required placeholder="Usado" class="w-full min-w-0 max-w-[120px] border-2 border-orange-200 rounded-xl px-4 py-3 text-sm focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all duration-300 bg-white/70 placeholder-gray-400" />
          <button type="button" class="remove w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105" title="Eliminar ingrediente"><span class="text-lg">✕</span></button>
        </div>
      </div>
    \\\`;
    fs.appendChild(div);
    div.querySelector('.remove').onclick = () => div.remove();
  };

  document.addEventListener('DOMContentLoaded', () => {
    // Setup add/remove
    document.getElementById('add-ingredient').onclick = addIngredientRow;
    document.querySelectorAll('.remove')
      .forEach(btn => btn.onclick = e => e.target.closest('.ingredient').remove());    // Submit
    document.getElementById('recipe-form').onsubmit = async e => {
      e.preventDefault();
      const form = e.target;
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnContent = submitBtn.innerHTML;

      const nombre = form.nombre.value.trim();
      const descripcion = form.descripcion.value.trim();
      if (!nombre || !descripcion)
        return showStatus('📝 Por favor completa el nombre y la descripción', true);

      // Recoger ingredientes
      const ingredientes = Array.from(
        document.querySelectorAll('.ingredient')
      ).map(div => ({
        nombre: div.querySelector('[name="ingrediente-nombre"]').value.trim(),
        unidad: div.querySelector('[name="ingrediente-unidad"]').value.trim(),
        total: parseFloat(div.querySelector('[name="ingrediente-cantidad-total"]').value),
        precio: parseFloat(div.querySelector('[name="ingrediente-precio"]').value),
        usado: parseFloat(div.querySelector('[name="ingrediente-usado"]').value),
      }))
      .filter(i =>
        i.nombre &&
        i.unidad &&
        !isNaN(i.total) &&
        !isNaN(i.precio) &&
        !isNaN(i.usado) &&
        i.total > 0 &&
        i.precio > 0 &&
        i.usado > 0
      );

      if (!ingredientes.length)
        return showStatus('🥄 Agrega al menos un ingrediente válido', true);

      const payload = {
        id: slugify(nombre),
        nombre,
        descripcion,
        ingredientes
      };

      // Loading state
      submitBtn.innerHTML = \\\`
        <div class="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
          <div class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
        <span>Creando receta...</span>
      \\\`;
      submitBtn.disabled = true;
      submitBtn.classList.add('opacity-75', 'cursor-not-allowed');

      try {
        const res = await fetch('https://myrecipebook-d7cg.onrender.com/api/recetas', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        if (!res.ok) throw new Error(\\\`HTTP \\\${res.status}\\\`);
        await res.text();

        // Forzar recarga de recetas en el Sidebar
        localStorage.removeItem('recetas');

        showStatus(\\\`🎉 ¡Receta "\\\${nombre}" creada exitosamente!\\\`);
        form.reset();
        
        // Success animation
        submitBtn.innerHTML = \\\`
          <div class="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
            <span class="text-2xl">✅</span>
          </div>
          <span>¡Creada!</span>
        \\\`;
        
        // Reset button after delay
        setTimeout(() => {
          submitBtn.innerHTML = originalBtnContent;
          submitBtn.disabled = false;
          submitBtn.classList.remove('opacity-75', 'cursor-not-allowed');
        }, 2000);
        
      } catch (err) {
        console.error(err);
        showStatus(\\\`❌ Error: \\\${err.message}\\\`, true);
        
        // Reset button on error
        submitBtn.innerHTML = originalBtnContent;
        submitBtn.disabled = false;
        submitBtn.classList.remove('opacity-75', 'cursor-not-allowed');
      }
    };
  });
</script>`])), maybeRenderHead(), defineScriptVars({ BACKEND_URL }));
}, "D:/CROQUER/y/src/components/FormReceta.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Resultado = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<!-- Aqu\xED m\xE1s adelante ir\xE1 el c\xE1lculo de totales -->", `<div class="border-t pt-4 mt-4 text-gray-700"> <button id="reload-recipes" class="mt-6 px-5 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-bold shadow hover:from-orange-600 hover:to-amber-600 transition-all">\u{1F504} Recargar Recetas</button> <div id="reload-status" class="mt-3 text-sm"></div> </div> <script type="module">
const API_URL = 'https://myrecipebook-d7cg.onrender.com/api/recetas';
const btn = document.getElementById('reload-recipes');
const status = document.getElementById('reload-status');

btn.onclick = async () => {
  status.textContent = 'Recargando...';
  status.className = 'mt-3 text-sm text-amber-600';
  try {
    localStorage.removeItem('recetas');
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error('Error al obtener recetas');
    const recetas = await res.json();
    localStorage.setItem('recetas', JSON.stringify(recetas));
    status.textContent = '\u2705 Recetas recargadas y cache actualizado';
    status.className = 'mt-3 text-sm text-green-700';
    setTimeout(() => window.location.reload(), 1000);
  } catch (e) {
    status.textContent = '\u274C Error al recargar recetas';
    status.className = 'mt-3 text-sm text-red-700';
  }
};
<\/script>`])), maybeRenderHead());
}, "D:/CROQUER/y/src/components/Resultado.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "CROQUERS - Inicio" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="flex min-h-screen relative"> ', ' <!-- Main content with responsive margins --> <main class="flex-1 lg:ml-80 transition-all duration-300 ease-in-out"> <div class="min-h-screen"> ', ' <!-- Vista principal --> <section id="vista-inicio" class="block"> ', ' </section> <!-- Vista de creaci\xF3n --> <section id="vista-receta" class="hidden"> <div class="container mx-auto px-4 py-8 space-y-8"> ', " ", ` </div> </section> </div> </main> </div> <script>
    const rutas = {
      "#inicio": "vista-inicio",
      "#recetas": "vista-receta"
    };

    function mostrarVista(hash) {
      // Hide all views
      Object.values(rutas).forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          el.classList.add("hidden");
          el.classList.remove("block");
        }
      });

      // Show selected view
      const vista = rutas[hash] || "vista-inicio";
      const mostrar = document.getElementById(vista);
      if (mostrar) {
        mostrar.classList.remove("hidden");
        mostrar.classList.add("block");
      }

      // Update URL without triggering hashchange
      if (hash && window.location.hash !== hash) {
        history.replaceState(null, null, hash);
      }
    }

    // Handle initial load
    window.addEventListener("DOMContentLoaded", () => {
      mostrarVista(location.hash);
    });

    // Handle hash changes
    window.addEventListener("hashchange", () => {
      mostrarVista(location.hash);
    });

    // Handle navigation clicks
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (link) {
        e.preventDefault();
        const hash = link.getAttribute('href');
        mostrarVista(hash);
        window.location.hash = hash;
      }
    });
  <\/script> `])), maybeRenderHead(), renderComponent($$result2, "Sidebar", $$Sidebar, {}), renderComponent($$result2, "Header", $$Header, {}), renderComponent($$result2, "Inicio", $$Inicio, {}), renderComponent($$result2, "RecetaForm", $$FormReceta, {}), renderComponent($$result2, "Resultado", $$Resultado, {})) })}`;
}, "D:/CROQUER/y/src/pages/index.astro", void 0);

const $$file = "D:/CROQUER/y/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
