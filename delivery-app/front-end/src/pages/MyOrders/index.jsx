import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import StatusCard from '../../components/StatusCard';
import { urlCustomerOrders } from '../../services/constants';
import { getLocalStorage } from '../../services/localStorage';
import S from './style';

export default function Index() {
  const [{ id, token, name }] = useState(getLocalStorage('user'));
  const [orders, setOrders] = useState([]);

  const history = useHistory();

  const config = {
    headers: {
      authorization: token,
    },
  };

  useEffect(() => {
    if (token) {
      (async () => {
        try {
          const { data } = await axios.get(`${urlCustomerOrders}`, config);
          setOrders(data);
        } catch (err) {
          console.log({ err });
        }
      })();
    } else {
      localStorage.clear();
      history.push('/login');
    }
  }, [config, history, id, token]);

  return (
    <>
      <Header
        accountButtons={
          [name, 'Sair']
        }
        actionButtons={
          ['PRODUTOS', 'MEUS PEDIDOS']
        }
      />
      <S>
        {orders && orders.map((order) => (
          <StatusCard
            id={ order.id }
            totalPrice={ order.totalPrice }
            status={ order.status }
            saleDate={ order.saleDate }
            key={ order.id }
            order={ order }
          />
        ))}
      </S>
    </>
  );
}
