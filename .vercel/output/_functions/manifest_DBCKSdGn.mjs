import 'kleur/colors';
import { h as decodeKey } from './chunks/astro/server_DSZFJV3t.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CKyriIOj.mjs';
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
    pathname: rawRouteData.pathname || undefined,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : undefined,
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

const manifest = deserializeManifest({"hrefRoot":"file:///Users/hirokonakano/works/microCMS/GitHub/astro-blog-test/","cacheDir":"file:///Users/hirokonakano/works/microCMS/GitHub/astro-blog-test/node_modules/.astro/","outDir":"file:///Users/hirokonakano/works/microCMS/GitHub/astro-blog-test/dist/","srcDir":"file:///Users/hirokonakano/works/microCMS/GitHub/astro-blog-test/src/","publicDir":"file:///Users/hirokonakano/works/microCMS/GitHub/astro-blog-test/public/","buildClientDir":"file:///Users/hirokonakano/works/microCMS/GitHub/astro-blog-test/dist/client/","buildServerDir":"file:///Users/hirokonakano/works/microCMS/GitHub/astro-blog-test/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}.pageTitle[data-astro-cid-3ef6ksr2]{text-align:center}html,body{margin:0;width:100%;height:100%}\n"}],"routeData":{"route":"/dynamic","isIndex":false,"type":"page","pattern":"^\\/dynamic\\/?$","segments":[[{"content":"dynamic","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/dynamic.astro","pathname":"/dynamic","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}.pageTitle[data-astro-cid-3ef6ksr2]{text-align:center}html,body{margin:0;width:100%;height:100%}\n"}],"routeData":{"route":"/static","isIndex":false,"type":"page","pattern":"^\\/static\\/?$","segments":[[{"content":"static","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/static.astro","pathname":"/static","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".main[data-astro-cid-bo2jcfig]{margin:0 auto;max-width:960px}.thumbnail[data-astro-cid-bo2jcfig]{width:100%}\n.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}.pageTitle[data-astro-cid-3ef6ksr2]{text-align:center}html,body{margin:0;width:100%;height:100%}\n"}],"routeData":{"route":"/[blogid]","isIndex":false,"type":"page","pattern":"^\\/([^/]+?)\\/?$","segments":[[{"content":"blogId","dynamic":true,"spread":false}]],"params":["blogId"],"component":"src/pages/[blogId].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/Carousel.BH4JZYC6.css"},{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}.pageTitle[data-astro-cid-3ef6ksr2]{text-align:center}html,body{margin:0;width:100%;height:100%}\n.swiper[data-astro-cid-wfe7xcno]{width:600px;height:300px}.main[data-astro-cid-j7pv25f6]{margin:0 auto;max-width:960px}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/hirokonakano/works/microCMS/GitHub/astro-blog-test/src/pages/[blogId].astro",{"propagation":"none","containsHead":true}],["/Users/hirokonakano/works/microCMS/GitHub/astro-blog-test/src/pages/dynamic.astro",{"propagation":"none","containsHead":true}],["/Users/hirokonakano/works/microCMS/GitHub/astro-blog-test/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/hirokonakano/works/microCMS/GitHub/astro-blog-test/src/pages/static.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/dynamic@_@astro":"pages/dynamic.astro.mjs","\u0000@astro-page:src/pages/static@_@astro":"pages/static.astro.mjs","\u0000@astro-page:src/pages/[blogId]@_@astro":"pages/_blogid_.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","/Users/hirokonakano/works/microCMS/GitHub/astro-blog-test/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DsVZ9TUZ.mjs","\u0000@astrojs-manifest":"manifest_DBCKSdGn.mjs","/Users/hirokonakano/works/microCMS/GitHub/astro-blog-test/src/components/Counter":"_astro/Counter.es1CKyjo.js","@astrojs/react/client.js":"_astro/client.D5VCDl9Y.js","/Users/hirokonakano/works/microCMS/GitHub/astro-blog-test/src/components/Carousel.astro?astro&type=script&index=0&lang.ts":"_astro/Carousel.astro_astro_type_script_index_0_lang.BIXcWpjS.js","/Users/hirokonakano/works/microCMS/GitHub/astro-blog-test/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.rasoniT7.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/favicon.svg","/_astro/Carousel.BH4JZYC6.css","/_astro/Carousel.astro_astro_type_script_index_0_lang.BIXcWpjS.js","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.rasoniT7.js","/_astro/Counter.es1CKyjo.js","/_astro/client.D5VCDl9Y.js","/_astro/index.BL7xzsR_.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"poJqMuOQ5NlvAPtSqs0eprql6VnH2YXsrGI9/k+gDIM="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
