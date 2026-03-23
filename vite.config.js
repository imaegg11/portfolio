import { defineConfig } from "vite";
import { nitro } from "nitro/vite";
import { solidStart } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  envPrefix: ["PUBLIC_"],
  plugins: [
    solidStart(),
    tailwindcss(),
    nitro()
  ]
});
