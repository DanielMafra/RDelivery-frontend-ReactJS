import React from 'react';
import { GlobalContext } from '../../../../GlobalContext';
import styles from './Address.module.css';

const Address = () => {
  const { cep, setCep, address } = React.useContext(GlobalContext);

  return (
    <div className={styles.wrapper}>
      <label htmlFor="cep" className={styles.label}>CEP</label>
      <input id="cep" name="cep" placeholder="Digite seu CEP" className={styles.input} type="text" maxLength="8" onChange={(event) => setCep(event.target.value)} value={cep} />
      <p>{address.rua}</p>
      <p>{address.cidade}</p>
      <p>{address.bairro}</p>
      <p>{address.uf}</p>
      <p>{address.cep}</p>
    </div>
  )
}

export default Address;