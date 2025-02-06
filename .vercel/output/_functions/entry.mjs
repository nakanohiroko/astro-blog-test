import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_ZG0uRjRE.mjs';
import { manifest } from './manifest_C1c6jMI_.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/dynamic.astro.mjs');
const _page2 = () => import('./pages/static.astro.mjs');
const _page3 = () => import('./pages/_blogid_.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/dynamic.astro", _page1],
    ["src/pages/static.astro", _page2],
    ["src/pages/[blogId].astro", _page3],
    ["src/pages/index.astro", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "894fc799-8d03-4779-a47b-09f07a76dff1",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
