import React from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../GlobalContext';
import styles from './Products.module.css';
import ProductItem from './ProductItem';

const Products = () => {
  const { getProducts, listProducts, addCart } = React.useContext(GlobalContext);
  const { product } = useParams();

  React.useEffect(() => {
    product && getProducts(product);
  }, [product]);

  function handleClick(product) {
    addCart(product)
  }

  return (
    <div className={styles.products}>
      <div className={styles.container}>
        <h2 className={styles.title}>{product ? product : 'Burguers'}</h2>
        <div className={styles.areaProducts}>
          {listProducts.map((product) => <ProductItem inputCart={handleClick} key={product.id} item={product} />)}
        </div>
      </div>
    </div>
  );
};

export default Products;