import React from 'react';
import HomeNav from './Nav/HomeNav';
import { Routes, Route } from 'react-router-dom';
import { GlobalContext } from '../../GlobalContext';
import useMedia from '../../Hooks/useMedia';
import Products from './Product/Products';
import Cart from './Cart/Cart';
import ObsItem from './Cart/ObsItem';
import styles from './Home.module.css';

const Home = () => {
  const mobile = useMedia('(max-width: 480px)');
  const { openCart, setOpenCart, openObs, cart } = React.useContext(GlobalContext);

  function handleOpenCart() {
    setOpenCart(!openCart);
  }

  return (
    <div className={styles.home}>
      {mobile && (
        <div className={styles.btnCart}>
          <button onClick={handleOpenCart}>
            <ion-icon name="cart-outline"></ion-icon>
            {cart.length !== 0 ? (
              <div className={styles.badgeQuantity}>
                {cart.length}
              </div>
            ) : ''}
          </button>
        </div>
      )}
      <HomeNav />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/:product" element={<Products />} />
      </Routes>
      <Cart />
      {openObs && <ObsItem />}
    </div>
  );
};

export default Home;