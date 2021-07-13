import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Checkout from './Components/Checkout/Checkout';
import Finish from './Components/Finish/Finish';
import { GlobalStorage } from './GlobalContext';

function App() {
  return (
    <BrowserRouter>
      <GlobalStorage>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="rdelivery" element={<Home />} /* this route is only for use on GitHub Pages */ />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/completed" element={<Finish />} />
        </Routes>
      </GlobalStorage>
    </BrowserRouter>
  );
}

export default App;
