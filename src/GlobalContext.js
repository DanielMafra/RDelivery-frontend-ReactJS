import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [data, setData] = React.useState([]);
  const [listProducts, setListProducts] = React.useState([]);
  const [cart, setCart] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  function addCart(item) {
    setCart(oldArray => [...oldArray, item])
  }

  const getProducts = async (category) => {
    const response = await fetch(`https://my-json-server.typicode.com/danielmafra/api/${category}`);
    const json = await response.json();
    setData(json);
  }

  React.useEffect(() => {
    if (cart.length > 0) {
      const prices = cart.map((item) => item.price);
      setTotal(prices.reduce((a, b) => a + b));
    }
  }, [cart]);

  React.useEffect(() => {
    setListProducts(data);
  }, [data]);

  React.useEffect(() => {
    async function loadData() {
      const response = await fetch('https://my-json-server.typicode.com/danielmafra/api/burguers');
      const json = await response.json();
      setData(json);
    }
    loadData();
  }, []);

  return (
    <GlobalContext.Provider value={{ getProducts, listProducts, addCart, cart, total }}>
      {children}
    </GlobalContext.Provider>
  );
};