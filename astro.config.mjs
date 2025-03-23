import sitemap from "@astrojs/sitemap";
import vue from "@astrojs/vue";
// @ts-check
import { defineConfig } from "astro/config";
import browserslist from "browserslist";
import { Features, browserslistToTargets } from "lightningcss";

const siteMapUrlMap = {
	production: "https://ibsys.ru",
	staging: "https://daks01.github.io",
	development: "http://localhost:4321",
};
const siteUrl = siteMapUrlMap[process?.env?.NODE_ENV];
const baseUrl = process?.env?.NODE_ENV === "staging" ? "lp_ibsys" : "";

// https://astro.build/config
export default defineConfig({
	site: siteUrl,
	base: baseUrl,
	vite: {
		css: {
			devSourcemap: true,
			transformer: "lightningcss",
			lightningcss: {
				targets: browserslistToTargets(browserslist(">= 1%, not dead")),
				include: Features.Nesting,
				drafts: { customMedia: true },
			},
		},
		build: {
			cssMinify: "lightningcss",
			sourcemap: true,
		},
	},
	integrations: [sitemap(), vue({ include: ["**/vue/**.vue"] })],
	experimental: {
		svg: true,
	},
});
