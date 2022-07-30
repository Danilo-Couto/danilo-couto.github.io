import { React, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import { CheckoutButton } from '../../components/ProductCard/styles';
import {
  getLocalStorage, setLocalStorage, amountLocalStorage,
} from '../../services/localStorage';
import Container from './styles';
import { menosUm, numberOfCards, urlCustomerProducts } from '../../services/constants';

export default function CustomerProducts() {
  const [products, setProducts] = useState([]);
  const [userData] = useState(getLocalStorage('user'));
  const [cartItems, setCartItems] = useState([]);

  const history = useHistory();

  const { name, token } = userData;

  const config = {
    headers: {
      authorization: token,
    },
  };

  const logOut = () => {
    localStorage.clear();
    history.push('/login');
  };

  const getProducts = async () => {
    try {
      const response = await axios.get(urlCustomerProducts, config);
      setProducts(response.data);
    } catch (err) {
      console.log({ err });
    }
  };

  const newArray = [...cartItems];
  const addToCartInput = (id, input, price, productName) => {
    const existProduct = newArray.findIndex((item) => item.id === id); // -1 se nao encontra elemento

    if (existProduct > menosUm) {
      newArray[existProduct].qnt = input;
      newArray[existProduct].amount = newArray[existProduct].qnt * price;
      setCartItems(newArray);
      return;
    }
    setCartItems([...cartItems, { id, productName, qnt: input, amount: input * price }]);
  };

  const addToCartButton = (id, input, price, productName) => {
    const existProduct = newArray.findIndex((item) => item.id === id); // -1 se nao encontra elemento

    if (existProduct > menosUm) {
      newArray[existProduct].qnt += input;
      if (newArray[existProduct].qnt === menosUm) return 0;
      newArray[existProduct].amount = newArray[existProduct].qnt * price;
      setCartItems(newArray);
      return;
    }
    setCartItems([...cartItems, { id, productName, qnt: 1, amount: price }]);
  };

  const submitCheckout = (e) => {
    e.preventDefault();
    history.push('/customer/checkout');
  };

  useEffect(() => {
    if (token) return getProducts();
    return logOut();
  });

  useEffect(() => (setLocalStorage('cart', cartItems)), [cartItems]);

  const renderCards = () => (
    products.slice(0, numberOfCards)
      .map((product) => (
        <ProductCard
          key={ product.id }
          addToCartButton={ addToCartButton }
          addToCartInput={ addToCartInput }
          { ...product }
        />
      ))
  );

  return (
    <>
      <Header
        accountButtons={ [name, 'Sair'] }
        actionButtons={ ['PRODUTOS', 'MEUS PEDIDOS'] }
      />
      <Container>
        {token ? renderCards() : <p> Sem produtos no estoque</p>}
      </Container>
      <div>
        <CheckoutButton
          type="submit"
          data-testid="customer_products__button-cart"
          onClick={ submitCheckout }
          disabled={ amountLocalStorage() === '0,00' }
        >
          <p
            data-testid="customer_products__checkout-bottom-value"
          >
            {amountLocalStorage()}
          </p>
        </CheckoutButton>
      </div>
    </>
  );
}
