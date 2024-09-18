import { defineConfig } from "astro/config";

import jopSoftwarematomo from "@jop-software/astro-matomo";

// https://astro.build/config
export default defineConfig({
  integrations: [jopSoftwarematomo({
	  siteId: 3,
	  baseUrl: "https://matomo.anhgelus.world"
  })],
  site: "https://www.anhgelus.world",
});
