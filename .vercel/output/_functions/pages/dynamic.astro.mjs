import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DSZFJV3t.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DTRl7VfE.mjs';
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Dynamic = createComponent(($$result, $$props, $$slots) => {
  const title = "\u52D5\u7684\u30DA\u30FC\u30B8";
  const currentTime = (/* @__PURE__ */ new Date()).toLocaleString();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="main"> <h1>${title}</h1> <p>現在の時刻: ${currentTime}</p> </main> ` })}`;
}, "/Users/hirokonakano/works/microCMS/GitHub/astro-blog-test/src/pages/dynamic.astro", undefined);

const $$file = "/Users/hirokonakano/works/microCMS/GitHub/astro-blog-test/src/pages/dynamic.astro";
const $$url = "/dynamic";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dynamic,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
