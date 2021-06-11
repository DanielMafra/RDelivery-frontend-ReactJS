import React from 'react';
import styles from './CartItem.module.css';

const CartItem = ({ product }) => {
  return (
    <div className={`${styles.item} ${styles.enterLeft}`}>
      <div className={styles.quantity}>
        <button>-</button>
        <p>1</p>
        <button>+</button>
      </div>
      <div className={styles.bgImage}>
        <img src={product.img} alt={product.title} />
      </div>
      <div className={styles.product}>
        <h4>{product.title}</h4>
        <button>Adicionar observação</button>
      </div>
      <h4 className={styles.price}>R$ {product.price},00</h4>
    </div>
  );
};

export default CartItem;