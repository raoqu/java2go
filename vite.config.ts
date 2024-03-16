/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { viteMockServe } from 'vite-plugin-mock'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import { loadEnv } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env: any = loadEnv(mode, process.cwd());
  console.log(process.cwd())
  console.log(env || env.API_INSIDE)
  const isDev = (mode === 'development')

  return {
    "allowJs": false,
    plugins: [
      react(),
      nodePolyfills({
        include: ['process'],
        exclude: ['http'],
      }),
      viteMockServe({
        mockPath: 'mock',
        enable: isDev
      })
    ],
    resolve: {
      alias: {
        '@': '/src',
        '#': '/wailsjs',
      }
    },
  }
})
