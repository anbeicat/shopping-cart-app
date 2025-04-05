/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2025-03-31 13:29:58
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2025-04-05 21:38:55
 * @description: 
 * @FilePath: /shopping-cart-app/src/App.tsx
 */
import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home/Home';
import SearchList from './pages/searchlist/index';
// import Cart from './pages/Cart/Cart';
// import My from './pages/My/My';
import './App.css'
function App() {

  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/searchlist" element={<SearchList />} />
          {/* <Route path="/cart" element={<Cart />} />
            <Route path="/my" element={<My />} /> */}
        </Routes>
      </div>
    </>
  )
}

export default App
