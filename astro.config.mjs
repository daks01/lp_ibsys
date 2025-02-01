// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vue from "@astrojs/vue";
import { Features } from "lightningcss";

// https://astro.build/config
export default defineConfig({
	vite: {
		css: {
			transformer: "lightningcss",
			devSourcemap: true,
			lightningcss: {
				targets: {},
				include: Features.Nesting,
				drafts: { customMedia: true },
				// cssModules: true,
			},
		},
	},
	integrations: [sitemap(), vue({ include: ["**/vue/**.vue"] })],
});
