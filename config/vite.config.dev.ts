import { mergeConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import baseConfig from './vite.config.base';

// https://vitejs.cn/vite3-cn/config/server-options.html#server-proxy
export default mergeConfig(
  {
    mode: 'development',
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
      eslint({
        cache: false,
        include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue'],
        exclude: ['node_modules'],
      }),
    ],
  },
  baseConfig
);
