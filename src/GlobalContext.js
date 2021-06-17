import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [data, setData] = React.useState([]);
  const [listProducts, setListProducts] = React.useState([]);
  const [cart, setCart] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const [user, setUser] = React.useState(null);

  function addCart(item) {
    item.quantity = 1;
    item.currentPrice = item.price;
    item.isSelected = true;
    setCart(oldArray => [...oldArray, item]);
  }

  function incrementItem(item) {
    let indexItem = cart.map((e) => e.id).indexOf(item.id);
    let updatedCart = [...cart];
    updatedCart[indexItem].quantity = updatedCart[indexItem].quantity + 1;
    updatedCart[indexItem].currentPrice = updatedCart[indexItem].currentPrice + updatedCart[indexItem].price;
    setCart(updatedCart);
  }

  function decrementItem(item) {
    let indexItem = cart.map((e) => e.id).indexOf(item.id);
    let updatedCart = [...cart];
    updatedCart[indexItem].quantity = updatedCart[indexItem].quantity - 1;
    updatedCart[indexItem].currentPrice = updatedCart[indexItem].currentPrice - updatedCart[indexItem].price;
    if (updatedCart[indexItem].quantity === 0) {
      updatedCart[indexItem].isSelected = false;
      updatedCart.splice(indexItem, 1);
      setCart(updatedCart);
    }
    setCart(updatedCart);
  }

  const getProducts = async (category) => {
    const response = await fetch(`https://my-json-server.typicode.com/danielmafra/api/${category}`);
    const json = await response.json();
    setData(json);
  }

  React.useEffect(() => {
    if (cart.length > 0) {
      const prices = cart.map((item) => item.currentPrice);
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
    setUser(window.localStorage.getItem('user'));
  }, []);

  return (
    <GlobalContext.Provider value={{ getProducts, listProducts, addCart, cart, total, incrementItem, decrementItem, user }}>
      {children}
    </GlobalContext.Provider>
  );
};