import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import Form from './Form';
import styles from './Checkout.module.css';

const Checkout = () => {
  return (
    <div className={styles.checkout}>
      <div className={styles.mainCheckout}>
        <Link to="/">← Voltar</Link>
        <div className={styles.formArea}>
          <Form />
        </div>
      </div>
      <Cart isCheckout={true} />
    </div>
  );
};

export default Checkout;