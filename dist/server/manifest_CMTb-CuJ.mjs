import 'kleur/colors';
import { p as decodeKey } from './chunks/astro/server_DX9AkJiB.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_otIEQ1RD.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///D:/CROQUER/y/","cacheDir":"file:///D:/CROQUER/y/node_modules/.astro/","outDir":"file:///D:/CROQUER/y/dist/","srcDir":"file:///D:/CROQUER/y/src/","publicDir":"file:///D:/CROQUER/y/public/","buildClientDir":"file:///D:/CROQUER/y/dist/client/","buildServerDir":"file:///D:/CROQUER/y/dist/server/","adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.Bj7vPPw0.css"},{"type":"inline","content":"@keyframes slide-up{0%{transform:translateY(100%)}to{transform:translateY(0)}}@keyframes fade-in{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}.animate-slide-up[data-astro-cid-toxelhmj]{animation:slide-up .3s ease-out}.animate-fade-in[data-astro-cid-toxelhmj]{animation:fade-in .3s ease-out}#chat-messages[data-astro-cid-toxelhmj]::-webkit-scrollbar,#chat-messages-mobile[data-astro-cid-toxelhmj]::-webkit-scrollbar{width:6px}#chat-messages[data-astro-cid-toxelhmj]::-webkit-scrollbar-track,#chat-messages-mobile[data-astro-cid-toxelhmj]::-webkit-scrollbar-track{background:#f1f5f9;border-radius:3px}#chat-messages[data-astro-cid-toxelhmj]::-webkit-scrollbar-thumb,#chat-messages-mobile[data-astro-cid-toxelhmj]::-webkit-scrollbar-thumb{background:#cbd5e1;border-radius:3px}#chat-messages[data-astro-cid-toxelhmj]::-webkit-scrollbar-thumb:hover,#chat-messages-mobile[data-astro-cid-toxelhmj]::-webkit-scrollbar-thumb:hover{background:#94a3b8}@keyframes pulse-ring{0%{transform:scale(1);opacity:1}to{transform:scale(1.3);opacity:0}}#agent-toggle-btn[data-astro-cid-toxelhmj]:before{content:\"\";position:absolute;inset:-2px;border-radius:50%;background:linear-gradient(45deg,#f59e0b,#eab308);animation:pulse-ring 2s infinite;z-index:-1}\n"}],"routeData":{"route":"/recetas/chocolate","isIndex":false,"type":"page","pattern":"^\\/recetas\\/chocolate\\/?$","segments":[[{"content":"recetas","dynamic":false,"spread":false}],[{"content":"chocolate","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/recetas/chocolate.astro","pathname":"/recetas/chocolate","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.Bj7vPPw0.css"},{"type":"inline","content":"@keyframes slide-up{0%{transform:translateY(100%)}to{transform:translateY(0)}}@keyframes fade-in{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}.animate-slide-up[data-astro-cid-toxelhmj]{animation:slide-up .3s ease-out}.animate-fade-in[data-astro-cid-toxelhmj]{animation:fade-in .3s ease-out}#chat-messages[data-astro-cid-toxelhmj]::-webkit-scrollbar,#chat-messages-mobile[data-astro-cid-toxelhmj]::-webkit-scrollbar{width:6px}#chat-messages[data-astro-cid-toxelhmj]::-webkit-scrollbar-track,#chat-messages-mobile[data-astro-cid-toxelhmj]::-webkit-scrollbar-track{background:#f1f5f9;border-radius:3px}#chat-messages[data-astro-cid-toxelhmj]::-webkit-scrollbar-thumb,#chat-messages-mobile[data-astro-cid-toxelhmj]::-webkit-scrollbar-thumb{background:#cbd5e1;border-radius:3px}#chat-messages[data-astro-cid-toxelhmj]::-webkit-scrollbar-thumb:hover,#chat-messages-mobile[data-astro-cid-toxelhmj]::-webkit-scrollbar-thumb:hover{background:#94a3b8}@keyframes pulse-ring{0%{transform:scale(1);opacity:1}to{transform:scale(1.3);opacity:0}}#agent-toggle-btn[data-astro-cid-toxelhmj]:before{content:\"\";position:absolute;inset:-2px;border-radius:50%;background:linear-gradient(45deg,#f59e0b,#eab308);animation:pulse-ring 2s infinite;z-index:-1}\n"}],"routeData":{"route":"/recetas/[id]","isIndex":false,"type":"page","pattern":"^\\/recetas\\/([^/]+?)\\/?$","segments":[[{"content":"recetas","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/recetas/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.Bj7vPPw0.css"},{"type":"inline","content":"@keyframes float{0%,to{transform:translateY(0)}50%{transform:translateY(-10px)}}@keyframes pulse-glow{0%,to{box-shadow:0 0 20px #fb923c4d}50%{box-shadow:0 0 30px #fb923c80}}.ingredient[data-astro-cid-bgeztoio]:hover{animation:float 3s ease-in-out infinite}button[data-astro-cid-bgeztoio][type=submit]:hover{animation:pulse-glow 2s ease-in-out infinite}input[data-astro-cid-bgeztoio]:focus,textarea[data-astro-cid-bgeztoio]:focus{transform:translateY(-2px)}[data-astro-cid-bgeztoio]{transition-timing-function:cubic-bezier(.4,0,.2,1)}textarea[data-astro-cid-bgeztoio]::-webkit-scrollbar{width:8px}textarea[data-astro-cid-bgeztoio]::-webkit-scrollbar-track{background:#f1f5f9;border-radius:10px}textarea[data-astro-cid-bgeztoio]::-webkit-scrollbar-thumb{background:linear-gradient(to bottom,#fb923c,#f59e0b);border-radius:10px}textarea[data-astro-cid-bgeztoio]::-webkit-scrollbar-thumb:hover{background:linear-gradient(to bottom,#ea580c,#d97706)}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/CROQUER/y/src/pages/index.astro",{"propagation":"none","containsHead":true}],["D:/CROQUER/y/src/pages/recetas/[id].astro",{"propagation":"none","containsHead":true}],["D:/CROQUER/y/src/pages/recetas/chocolate.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/recetas/chocolate@_@astro":"pages/recetas/chocolate.astro.mjs","\u0000@astro-page:src/pages/recetas/[id]@_@astro":"pages/recetas/_id_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/node@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CMTb-CuJ.mjs","D:/CROQUER/y/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","D:/CROQUER/y/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BGmL4sFg.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.Bj7vPPw0.css","/favicon.svg","/Logo.jpg","/recetas.json"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"Ez71E/AFC8gxatwqsaYHhDJhgHtjQB4exy40QS8ePCM=","sessionConfig":{"driver":"fs-lite","options":{"base":"D:\\CROQUER\\y\\node_modules\\.astro\\sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
