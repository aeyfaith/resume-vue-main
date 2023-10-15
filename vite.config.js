import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import Components from 'unplugin-vue-components/vite'
// import {BootstrapVueNextResolver} from 'unplugin-vue-components/resolvers'
// import { URL, fileURLToPath } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/resume-vue/',
  plugins: [vue()],
})
