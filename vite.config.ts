import { defineConfig, resolveBaseUrl } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// mock插件
import { viteMockServe } from 'vite-plugin-mock'
// gzip压缩插件
import viteCompression from 'vite-plugin-compression';
// 图片压缩插件
import viteImagemin from 'vite-plugin-imagemin'

// https://vitejs.dev/config/
export default defineConfig({
  // 配置基础路径
  base: './',
  plugins: [
    vue(),
    // gzip压缩
    viteCompression(),
    // 配置mock
    viteMockServe({
      // default
      mockPath: 'mock',
      // localEnabled: command === 'serve',
    }),
    // 压缩图片
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    }),
  ],
  resolve: {
    // 导入文件别名
    alias: [
      {
        find: '@',
        // 要使用绝对路径: src、src/components
        replacement: path.resolve(__dirname, 'src')
      },
    ],
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        // 生产环境时移除console
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  server: {
    // 配置跨域
    proxy: {
      // 选项写法
      '/api': {
        target: 'http://172.xx.xxx.xx/xxxxxxx/api',
        // 是否改写 origin，设置为 true 之后，就会把请求 API header 中的 origin，改成跟 target 里边的域名一样了。
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  }
})
