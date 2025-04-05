/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2025-03-31 13:29:58
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2025-03-31 15:26:15
 * @description: 
 * @FilePath: /shopping-cart-app/vite.config.ts
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2015', // 推荐，适配 iOS 11+、Chrome 60+
  }
})
