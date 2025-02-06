import { c as createComponent, b as createAstro, r as renderTemplate, d as addAttribute, e as renderScript, m as maybeRenderHead, a as renderComponent, f as renderHead, g as renderSlot } from './astro/server_DSZFJV3t.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                            */

const $$Astro$2 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/hirokonakano/works/microCMS/GitHub/astro-blog-test/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/hirokonakano/works/microCMS/GitHub/astro-blog-test/node_modules/astro/components/ClientRouter.astro", undefined);

const $$Astro$1 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-3ef6ksr2> <h1 class="pageTitle" data-astro-cid-3ef6ksr2>Astro Blog</h1> </header> `;
}, "/Users/hirokonakano/works/microCMS/GitHub/astro-blog-test/src/components/Header.astro", undefined);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro Basics</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, { "data-astro-cid-sckkx6r4": true })}${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-sckkx6r4": true })} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/hirokonakano/works/microCMS/GitHub/astro-blog-test/src/layouts/Layout.astro", undefined);

export { $$Layout as $ };
