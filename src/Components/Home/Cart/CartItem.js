import React from 'react';
import styles from './CartItem.module.css';
import { GlobalContext } from '../../../GlobalContext';

const CartItem = ({ product, isFinish }) => {
  const { incrementItem, decrementItem, openObs, setOpenObs, setIdObs } = React.useContext(GlobalContext);

  function openObsBox() {
    setOpenObs(!openObs);
    setIdObs(product.id);
  }

  return (
    <div className={`${styles.item} ${styles.enterLeft}`}>
      <div className={styles.quantity}>
        {!isFinish && <button onClick={() => decrementItem(product)}>-</button>}
        <p>{product.quantity}</p>
        {!isFinish && <button onClick={() => incrementItem(product)}>+</button>}
      </div>
      <div className={styles.bgImage}>
        <img src={product.img} alt={product.title} />
      </div>
      <div className={styles.product}>
        <h4>{product.title}</h4>
        {!isFinish && <button onClick={openObsBox}>{product.obs ? product.obs : "Adicionar observação"}</button>}
      </div>
      <h4 className={styles.price}>R$ {product.currentPrice},00</h4>
    </div>
  );
};

export default CartItem;