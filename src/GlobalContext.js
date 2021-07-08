import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [data, setData] = React.useState([]);
  const [listProducts, setListProducts] = React.useState([]);
  const [openCart, setOpenCart] = React.useState(false);
  const [openObs, setOpenObs] = React.useState(false);
  const [obs, setObs] = React.useState(null);
  const [idObs, setIdObs] = React.useState(null);
  const [cart, setCart] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const [user, setUser] = React.useState(null);
  const [typeBuy, setTypeBuy] = React.useState('');
  const [cep, setCep] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [complement, setComplement] = React.useState('');
  const [typePayment, setTypePayment] = React.useState('');
  const [address, setAddress] = React.useState(null);
  const [order, setOrder] = React.useState('');

  function addCart(item) {
    item.quantity = 1;
    item.currentPrice = item.price;
    item.isSelected = true;
    setCart(oldArray => [...oldArray, item]);
  }

  function addObs(id) {
    let indexItem = cart.map((e) => e.id).indexOf(id);
    let updatedCart = [...cart];
    updatedCart[indexItem].obs = obs;
    setCart(updatedCart);
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

  async function getCep(cep) {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const json = await response.json();
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

  React.useEffect(() => {
    if (cart.length > 0) {
      const prices = cart.map((item) => item.currentPrice);
      setTotal(prices.reduce((a, b) => a + b));
    }
  }, [cart]);

  React.useEffect(() => {
    if (typeBuy === 'delivery') {
      window.localStorage.setItem('address', JSON.stringify(order.address));
    }
  }, [order]);

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
    const addressDefault = window.localStorage.getItem('address');
    if (addressDefault !== '' && addressDefault !== null && addressDefault !== undefined) {
      setUser(JSON.parse(addressDefault));
    } else {
      setUser(null);
    }
  }, []);

  return (
    <GlobalContext.Provider value={{ getProducts, listProducts, addCart, cart, total, incrementItem, decrementItem, user, setUser, typeBuy, setTypeBuy, cep, setCep, number, setNumber, complement, setComplement, typePayment, setTypePayment, address, setAddress, order, setOrder, openCart, setOpenCart, openObs, setOpenObs, idObs, setIdObs, obs, setObs, addObs }}>
      {children}
    </GlobalContext.Provider>
  );
};