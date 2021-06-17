import React from 'react';
import useForm from '../../../Hooks/useForm';
import Input from './Fragments/Input';
import RadioDelivery from './Fragments/RadioDelivery';
import styles from './Form.module.css';

const Form = () => {
  const phone = useForm('phone');
  const name = useForm();

  function handleSubmit(event) {
    event.preventDefault();
    console.log(name.value);
    console.log(phone.value);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3 className={styles.title}>Seus dados</h3>
      <Input label="Nome" type="text" name="name" placeholder="Digite seu nome" {...name} />
      <Input label="Celular" type="text" name="phone" placeholder="Digite seu número" {...phone} />
      <h3 className={styles.subTitle}>Entrega</h3>
      <RadioDelivery />
      <button>Confirmar pedido</button>
    </form>
  );
};

export default Form;