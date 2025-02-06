import { c as createComponent, b as createAstro, r as renderTemplate, m as maybeRenderHead, e as renderScript, a as renderComponent, d as addAttribute } from '../chunks/astro/server_DSZFJV3t.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DTRl7VfE.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BqC8Cyau.mjs';
/* empty css                                 */
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { a as getBlogList } from '../chunks/microcms_C3Fv51Ha.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Carousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Carousel;
  const { images } = Astro2.props;
  return renderTemplate`<!-- Slider main container -->${maybeRenderHead()}<div class="swiper" data-astro-cid-wfe7xcno> <!-- Additional required wrapper --> <div class="swiper-wrapper" data-astro-cid-wfe7xcno> <!-- Slides --> ${images.map((image) => renderTemplate`<div class="swiper-slide" data-astro-cid-wfe7xcno> ${renderComponent($$result, "Image", $$Image, { "src": image.url, "alt": "", "inferSize": true, "width": image.width, "height": image.height, "data-astro-cid-wfe7xcno": true })} </div>`)} </div> <!-- If we need pagination --> <div class="swiper-pagination" data-astro-cid-wfe7xcno></div> <!-- If we need navigation buttons --> <div class="swiper-button-prev" data-astro-cid-wfe7xcno></div> <div class="swiper-button-next" data-astro-cid-wfe7xcno></div> </div>  ${renderScript($$result, "/Users/hirokonakano/works/microCMS/GitHub/astro-blog-test/src/components/Carousel.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/hirokonakano/works/microCMS/GitHub/astro-blog-test/src/components/Carousel.astro", undefined);

function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1e3);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("h2", { children: [
    "リアルタイムカウント: ",
    count
  ] }) });
}

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const response = await getBlogList();
  const images = response.contents.map((content) => content.thumbnail);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="main" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Carousel", $$Carousel, { "images": images, "data-astro-cid-j7pv25f6": true })} <ul data-astro-cid-j7pv25f6> ${response.contents.map((content) => renderTemplate`<li data-astro-cid-j7pv25f6> <a${addAttribute(content.id, "href")} data-astro-cid-j7pv25f6>${content.title}</a> </li>`)} </ul> ${renderComponent($$result2, "Counter", Counter, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/hirokonakano/works/microCMS/GitHub/astro-blog-test/src/components/Counter", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} <a href="/static" data-astro-cid-j7pv25f6>静的ページへ</a> <a href="/dynamic" data-astro-cid-j7pv25f6>動的ページへ</a> </main> ` })} `;
}, "/Users/hirokonakano/works/microCMS/GitHub/astro-blog-test/src/pages/index.astro", undefined);

const $$file = "/Users/hirokonakano/works/microCMS/GitHub/astro-blog-test/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
