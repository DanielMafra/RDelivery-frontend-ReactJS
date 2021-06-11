import React from 'react';
import HomeNav from './HomeNav';
import { Routes, Route } from 'react-router-dom';
import Products from './Products';
import Cart from './Cart';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <HomeNav />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/:product" element={<Products />} />
      </Routes>
      <Cart />
    </div>
  );
};

export default Home;