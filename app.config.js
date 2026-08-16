import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";
import { execSync } from "child_process";

import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import pkg from "@vinxi/plugin-mdx";
const { default: mdx } = pkg;

import { visualizer } from "rollup-plugin-visualizer";

const commit = execSync("git rev-parse HEAD")
    .toString()
    .trim();

export default defineConfig({
    ssr: false,
    server: {
        static: true,
    },
    extensions: ["mdx", "md"],
    vite: {
        plugins: [
            tailwindcss(),
            visualizer({
                filename: "bundle-stats.html",
                gzipSize: true,
                brotliSize: true,
            }),
            mdx.withImports({})({
                jsx: true,
                jsxImportSource: "solid-js",
                providerImportSource: "solid-mdx",
                remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter]
            }),
        ],
        define: {
            __COMMIT_HASH__: JSON.stringify(commit),
        },
    },
});