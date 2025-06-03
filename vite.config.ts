// import react from "@vitejs/plugin-react";
// import tailwind from "tailwindcss";
// import { defineConfig } from "vite";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   publicDir: "./static",
//   base: "./",
//   css: {
//     postcss: {
//       plugins: [tailwind()],
//     },
//   },
// });



// import react from "@vitejs/plugin-react";
// import tailwind from "tailwindcss";
// import { defineConfig } from "vite";
// import path from "path";  // Import path module

// export default defineConfig({
//   plugins: [react()],
//   publicDir: "./static",
//   base: "./",
//   css: {
//     postcss: {
//       plugins: [tailwind()],
//     },
//   },
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "src"),  // Map @ to src folder
//     },
//   },
// });



import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

// Fix __dirname in ESM context:
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  publicDir: "./static",
  base: "./",
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),  // Alias @ to src folder
    },
  },
});
