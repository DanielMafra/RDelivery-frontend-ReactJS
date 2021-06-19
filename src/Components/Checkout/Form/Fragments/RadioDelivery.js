import React from 'react';
import { GlobalContext } from '../../../../GlobalContext';
import Address from './Address';
import AddressDefault from './AddressDefault';
import styles from './RadioDelivery.module.css';

const RadioDelivery = () => {
  const { typeBuy, setTypeBuy, user } = React.useContext(GlobalContext);

  return (
    <div className={styles.radioDelivery}>
      <label className={styles.label}>
        <input name="store" type="radio" value="store" className={styles.radio} checked={typeBuy === "store"} onChange={({ target }) => setTypeBuy(target.value)} />
        Retirar na loja
      </label>
      <label className={styles.label}>
        <input name="delivery" type="radio" value="delivery" className={styles.radio} checked={typeBuy === "delivery"} onChange={({ target }) => setTypeBuy(target.value)} />
        Delivery
      </label>
      {typeBuy === 'delivery' && user !== null ? (
        <AddressDefault />
      ) : (
        ''
      )}
      {typeBuy === 'delivery' && user === null ? (
        <Address />
      ) : (
        ''
      )}
    </div>
  )
}

export default RadioDelivery;
