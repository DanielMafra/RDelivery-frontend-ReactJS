import React from 'react';
import { GlobalContext } from '../../../../GlobalContext';
import RadioPayment from './RadioPayment';
import styles from './AddressDefault.module.css';

const AddressDefault = () => {
  const { user, setUser } = React.useContext(GlobalContext);

  function handleAddress() {
    setUser(null);
  }

  return (
    <div>
      <p className={styles.defaultAddress}>Endereço padrão:</p>
      <div className={styles.cardAddress}>
        <p>{user.rua}, {user.number}</p>
        <p>{user.cidade} - {user.uf}</p>
        <p>{user.complement}</p>
        <button className={styles.editAddress} onClick={handleAddress}>Editar endereço</button>
      </div>
      <h3 className={styles.subTitle}>Pagamento</h3>
      <p className={styles.typePay}>Método de pagamento:</p>
      <RadioPayment />
    </div>
  )
}

export default AddressDefault;