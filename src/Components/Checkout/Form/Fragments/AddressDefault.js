import React from 'react';
import { GlobalContext } from '../../../../GlobalContext';
import styles from './AddressDefault.module.css';

const AddressDefault = () => {
  const { user } = React.useContext(GlobalContext);

  return (
    <div>
      <p className={styles.defaultAddress}>Endereço padrão:</p>
      <div className={styles.cardAddress}>
        <p>{user.rua}, {user.number}</p>
        <p>{user.cidade} - {user.uf}</p>
        <p>{user.complement}</p>
        <button className={styles.editAddress}>Editar endereço</button>
      </div>
    </div>
  )
}

export default AddressDefault;