import React from 'react';
import styles from './ProductItem.module.css';

const ProductItem = ({ inputCart, item }) => {
  return (
    <div className={`${styles.card} ${styles.enterLeft}`} key={item.id} onClick={() => inputCart(item)}>
      {item.offer && <div className={styles.offer}><p>Oferta</p></div>}
      <img src={item.img} alt={item.title} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.description}>{item.description}</p>
      <p className={styles.price}>R$ {item.price},00</p>
    </div>
  );
};

export default ProductItem;