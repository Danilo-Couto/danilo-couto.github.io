import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { urlSellerOrders } from '../../services/constants';
import { getLocalStorage, setLocalStorage } from '../../services/localStorage';
import Header from '../../components/Header';
// import OrderCard from '../../components/OrderCard';
import StatusCard from '../../components/StatusCard';

export default function SellerOrders() {
  const [userData] = useState(getLocalStorage('seller'));
  const [orderItems, setOrders] = useState([]);
  const { name, token } = userData;

  const history = useHistory();

  const config = {
    headers: {
      authorization: token,
    },
  };

  const logOut = () => {
    localStorage.clear();
    history.push('/login');
  };

  const getOrders = async () => {
    try {
      const response = await axios.get(urlSellerOrders, config);
      setOrders(response.data);
    } catch (err) {
      console.log({ err });
    }
  };

  useEffect(() => (token ? getOrders() : logOut));

  useEffect(() => (setLocalStorage('orders', orderItems)), [orderItems]);

  const renderCards = () => (
    orderItems.map((order) => (
      // <OrderCard
      //   key={ order.id }
      //   { ...order }
      // />
      <StatusCard
        id={ order.id }
        totalPrice={ order.totalPrice }
        status={ order.status }
        saleDate={ order.saleDate }
        key={ order.id }
        order={ order }
      />
    ))
  );

  return (
    <>
      <Header
        accountButtons={ [name, 'Sair'] }
        actionButtons={ ['PRODUTOS', 'MEUS PEDIDOS'] }
      />
      {orderItems ? renderCards() : <p>Sem pedidos por enquanto</p> }
    </>
  );
}
