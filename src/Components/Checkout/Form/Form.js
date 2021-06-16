import React from 'react';
import useForm from '../../../Hooks/useForm';
import Input from './Fragments/Input';
import styles from './Form.module.css';

const Form = () => {
  const phone = useForm('phone');
  const name = useForm();

  return (
    <div className={styles.form}>
      <h3 className={styles.title}>Seus dados</h3>
      <Input label="Nome" type="text" name="name" placeholder="Digite seu nome" {...name} />
      <Input label="Celular" type="text" name="phone" placeholder="Digite seu número" {...phone} />
      <h3 className={styles.subTitle}>Entrega</h3>
    </div>
  );
};

export default Form;