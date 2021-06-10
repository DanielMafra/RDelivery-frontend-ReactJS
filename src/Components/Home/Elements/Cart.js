import React from 'react';
import styles from './Cart.module.css';

const Cart = ({ items }) => {
  return (
    <div className={styles.cart}>
      <h2>Seu pedido</h2>
      {items.map(item => (
        <div key={item.id} className={styles.itemCard}>
          <p>category: {item.category}</p>
          <p>id: {item.id}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;