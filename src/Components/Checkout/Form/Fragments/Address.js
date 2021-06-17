import React from 'react';
import styles from './Address.module.css';

const Address = () => {
  const [cep, setCep] = React.useState('');
  const [address, setAddress] = React.useState([]);

  async function getCep(cep) {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const json = await response.json();
    console.log(json);
    setAddress({
      rua: json.logradouro,
      cidade: json.localidade,
      bairro: json.bairro,
      uf: json.uf,
      cep: json.cep
    });
  }

  React.useEffect(() => {
    if (cep.length >= 8) {
      getCep(cep);
    }
  }, [cep])

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