import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: true,
    },
    build: {
        outDir: "build",
    },
    resolve: {
        alias: {
            "@components": "/src/components",
            "@pages": "/src/pages",
            "@assets": "/src/assets",
            "@utils": "/src/utils",

            "@": "/src", // Add this alias if you want to use '@' as the base path for src
        },
    },
});
