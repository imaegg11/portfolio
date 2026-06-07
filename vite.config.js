import { defineConfig } from "vite";
import { nitro } from "nitro/vite";
import { solidStart } from "@solidjs/start/config";
import { execSync } from "child_process";


import tailwindcss from "@tailwindcss/vite";

import { visualizer } from "rollup-plugin-visualizer";


const commit = execSync("git rev-parse HEAD")
  .toString()
  .trim();

export default defineConfig({
  envPrefix: ["PUBLIC_"],
  plugins: [
    solidStart(),
    tailwindcss(),
    nitro(),
    visualizer({
      filename: "bundle-stats.html",
      gzipSize: true,
      brotliSize: true
    })
  ],
  define: {
    __COMMIT_HASH__: JSON.stringify(commit),
  },

});
