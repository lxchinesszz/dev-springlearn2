import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";

export default defineConfig({
  plugins:[vue(),eslintPlugin(
    {
      include:['src/**/*.js','src/**/*.jsx',"src/**/*.vue","src/**/*.tsx"],
      exclude:['./node_modules/**'],
      cache:false
    }
  )]
})
