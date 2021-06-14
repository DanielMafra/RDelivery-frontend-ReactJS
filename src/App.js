import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import { GlobalStorage } from './GlobalContext';

function App() {
  return (
    <BrowserRouter>
      <GlobalStorage>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </GlobalStorage>
    </BrowserRouter>
  );
}

export default App;
