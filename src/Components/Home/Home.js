import React from 'react';
import MenuHome from './Elements/MenuHome';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <MenuHome />
    </div>
  );
};

export default Home;