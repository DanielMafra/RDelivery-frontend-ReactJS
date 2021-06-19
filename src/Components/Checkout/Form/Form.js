import React from 'react';
import useForm from '../../../Hooks/useForm';
import { GlobalContext } from '../../../GlobalContext';
import { useNavigate } from 'react-router-dom';
import Input from './Fragments/Input';
import RadioDelivery from './Fragments/RadioDelivery';
import styles from './Form.module.css';

const Form = () => {
  const { typeBuy, number, complement, address, typePayment, cart, total, order, setOrder, user } = React.useContext(GlobalContext);
  const phone = useForm('phone');
  const name = useForm();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (name.validate() && phone.validate()) {
      if (typeBuy !== '' && typeBuy === 'store') {
        setOrder({
          name: name.value,
          phone: phone.value,
          cart: {
            ...cart,
            totalPrice: total
          }
        });
        navigate('/completed');
        console.log(order);
      } else if (typeBuy !== '' && typeBuy === 'delivery' && address !== null) {
        if (number !== '' && complement !== '' && typePayment !== '') {
          setOrder({
            name: name.value,
            phone: phone.value,
            cart: {
              ...cart,
              totalPrice: total,
            },
            address: {
              ...address,
              number: number,
              complement: complement
            },
            payment: typePayment
          });
          navigate('/completed');
          console.log(order);
        }
      } else if (typeBuy !== '' && typeBuy === 'delivery' && user !== null) {
        setOrder({
          name: name.value,
          phone: phone.value,
          cart: {
            ...cart,
            totalPrice: total,
          },
          address: {
            ...user
          },
          payment: typePayment
        });
        navigate('/completed');
        console.log(order);
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3 className={styles.title}>Seus dados</h3>
      <Input label="Nome" type="text" name="name" placeholder="Digite seu nome" {...name} />
      <Input label="Celular" type="text" name="phone" placeholder="Digite seu número" {...phone} />
      <h3 className={styles.subTitle}>Entrega</h3>
      <RadioDelivery />
      <button className={styles.confirm} type="submit">Confirmar pedido</button>
    </form>
  );
};

export default Form;