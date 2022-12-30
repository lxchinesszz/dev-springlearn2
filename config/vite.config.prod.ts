import { mergeConfig } from 'vite';
import baseConfig from './vite.config.base';
import configCompressPlugin from './plugin/compress';
import configVisualizerPlugin from './plugin/visualizer';
import configArcoResolverPlugin from './plugin/arcoResolver';
import configStyleImportPlugin from './plugin/styleImport';
import configImageminPlugin from './plugin/imagemin';

export default mergeConfig(
  {
    mode: 'production',
    server: {
      open: true,
      proxy: {
        '/sugrec': {
          target: 'https://www.baidu.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/sugrec/, ''),
        },
        '/kaifa': {
          target: 'https://kaifa.baidu.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/kaifa/, ''),
        },
      },
      fs: {
        strict: true,
      },
    },
    plugins: [
      configCompressPlugin('gzip'),
      configVisualizerPlugin(),
      configArcoResolverPlugin(),
      configStyleImportPlugin(),
      configImageminPlugin(),
    ],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            arco: ['@arco-design/web-vue'],
            chart: ['echarts', 'vue-echarts'],
            vue: ['vue', 'vue-router', 'pinia', '@vueuse/core', 'vue-i18n'],
          },
        },
      },
      chunkSizeWarningLimit: 2000,
    },
  },
  baseConfig
);
