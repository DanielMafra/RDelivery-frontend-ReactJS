import React, { useState } from 'react';
import styles from './ProductsList.module.css';
import Cart from './Cart';

const ProductsList = (props) => {
  const items = props.data;
  const title = props.element;
  const [data, setData] = useState([]);

  function handleClick(id) {
    const cartItems = [];
    cartItems.push(...data, {
      id: id,
      category: title
    });
    console.log(cartItems);
    setData(cartItems);
  }

  console.log(data)

  return (
    <>
      <div className={styles.products}>
        <h1 className={styles.titlet}>{title}</h1>
        <div className={styles.items}>
          {items.map(item => (
            <div className={styles.card} key={item.id} onClick={() => handleClick(item.id)} >
              {item.offer && <div className={styles.offer}><p>Oferta</p></div>}
              <img src={item.img} alt={item.title} />
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
              <p className={styles.price}>R$ {item.price},00</p>
            </div>
          ))}
        </div>
      </div>
      {(data.length > 0) && <Cart items={data} />}
    </>
  );
};

export default ProductsList;