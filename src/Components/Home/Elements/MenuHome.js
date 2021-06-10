import React, { useState } from 'react';
import styles from './MenuHome.module.css'
import { ReactComponent as PizzaIcon } from '../../../Assets/pizza-icon.svg';
import { ReactComponent as BurguersIcon } from '../../../Assets/burguers-icon.svg';
import { ReactComponent as CombosIcon } from '../../../Assets/combos-icon.svg';
import { ReactComponent as DessertsIcon } from '../../../Assets/desserts-icon.svg';
import { ReactComponent as DrinksIcon } from '../../../Assets/drinks-icon.svg';
import ProductList from './ProductsList';

const MenuHome = () => {
  const [activeItem, setActiveItem] = useState('Burguers');
  const [dataItems, setDataItems] = useState([]);

  async function handleClick(element) {
    setActiveItem(element);
    const response = await fetch(`https://my-json-server.typicode.com/danielmafra/api/${element}`);
    const json = await response.json();
    setDataItems(json);
  }

  React.useEffect(() => {
    async function getBurguers() {
      const response = await fetch('https://my-json-server.typicode.com/danielmafra/api/burguers');
      const json = await response.json();
      setDataItems(json);
    }
    getBurguers();
  }, []);

  return (
    <>
      <div className={styles.menu}>

        <button className={`${styles.menuItem} ${activeItem === 'Pizza' && styles.active}`} onClick={() => handleClick('Pizza')}>
          <PizzaIcon />
          <p className={styles.titleMenu}>Pizza</p>
        </button>

        <button className={`${styles.menuItem} ${activeItem === 'Bebidas' && styles.active}`} onClick={() => handleClick('Bebidas')}>
          <DrinksIcon />
          <p className={styles.titleMenu}>Bebidas</p>
        </button>

        <button className={`${styles.menuItem} ${activeItem === 'Sobremesas' && styles.active}`} onClick={() => handleClick('Sobremesas')}>
          <DessertsIcon />
          <p className={styles.titleMenu}>Sobremesas</p>
        </button>

        <button className={`${styles.menuItem} ${activeItem === 'Combos' && styles.active}`} onClick={() => handleClick('Combos')}>
          <CombosIcon />
          <p className={styles.titleMenu}>Combos</p>
        </button>

        <button className={`${styles.menuItem} ${activeItem === 'Burguers' && styles.active}`} onClick={() => handleClick('Burguers')}>
          <BurguersIcon />
          <p className={styles.titleMenu}>Burguers</p>
        </button>

      </div>
      <ProductList data={dataItems} element={activeItem} />
    </>
  );
};

export default MenuHome;