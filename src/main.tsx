/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2025-03-31 13:29:58
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2025-04-05 21:17:03
 * @description: 
 * @FilePath: /shopping-cart-app/src/main.tsx
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
