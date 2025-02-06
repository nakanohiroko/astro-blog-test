import { c as createComponent, b as createAstro, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as addAttribute, u as unescapeHTML } from '../chunks/astro/server_DSZFJV3t.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DTRl7VfE.mjs';
import { g as getBlogDetail, a as getBlogList } from '../chunks/microcms_C3Fv51Ha.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const response = await getBlogList({ fields: ["id"] });
  return response.contents.map((content) => ({
    params: {
      blogId: content.id
    }
  }));
}
const $$blogId = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$blogId;
  const { blogId } = Astro2.params;
  const blog = await getBlogDetail(blogId);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-bo2jcfig": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="main" data-astro-cid-bo2jcfig> <h1 class="title" data-astro-cid-bo2jcfig>${blog.title}</h1> <ul data-astro-cid-bo2jcfig> ${blog.tags.map((tag) => renderTemplate`<li data-astro-cid-bo2jcfig>${tag.name}</li>`)} </ul> <p class="publishedAt" data-astro-cid-bo2jcfig>公開日時：${blog.publishedAt}</p> <img class="thumbnail"${addAttribute(blog.thumbnail.url, "src")} alt="" data-astro-cid-bo2jcfig> <div class="post" data-astro-cid-bo2jcfig>${unescapeHTML(blog.body)}</div> </main> ` })} `;
}, "/Users/hirokonakano/works/microCMS/GitHub/astro-blog-test/src/pages/[blogId].astro", undefined);

const $$file = "/Users/hirokonakano/works/microCMS/GitHub/astro-blog-test/src/pages/[blogId].astro";
const $$url = "/[blogId]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$blogId,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
