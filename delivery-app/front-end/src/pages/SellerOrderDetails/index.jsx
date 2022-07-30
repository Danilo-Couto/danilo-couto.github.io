import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  useHistory,
  useParams,
} from 'react-router-dom/cjs/react-router-dom.min';
import OrderTable from '../../components/CustomerTable/OrderTable';
import { Table, ThItem, Total } from '../../components/CustomerTable/style';
import Header from '../../components/Header';
import { urlSellerOrders } from '../../services/constants';
import { getLocalStorage } from '../../services/localStorage';
import {
  Date, DeliveredStatus, OrderDetail,
  OrderInfo,
  OrderInfoContainer,
  OrderNumber, PendingStatus, Seller,
} from './style';

export default function OrderDetails() {
  const [userData] = useState(getLocalStorage('seller'));
  const [OrderItems] = useState(getLocalStorage('orders'));
  const [orderDetail, setOrderDetail] = useState({});

  const history = useHistory();

  const { name, token } = userData;

  const { id } = useParams();

  const finalPrice = OrderItems
    .reduce((acc, { totalPrice }) => acc + Number(totalPrice), 0);

  const config = {
    headers: {
      authorization: token,
    },
  };

  const changeStatus = async () => {
    const status = { status: 'Entregue' };
    try {
      const { data } = await axios.put(`${urlCustomerOrders}/${id}`, status, config);
      setOrderDetail({
        ...orderDetail,
        status: data.status,
      });
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  useEffect(() => {
    if (token) {
      const dateSlice = 10;
      (async () => {
        try {
          const { data } = await axios.get(`${urlSellerOrders}/${id}`, config);
          setOrderDetail({
            seller: data.sellerId,
            date: (data.saleDate).slice(0, dateSlice),
            status: data.status,
          });
        } catch (err) {
          console.log({ err });
        }
      })();
    } else {
      localStorage.clear();
      history.push('/login');
    }
    // return () => setUserData({ token: false });
  }, [config, history, id, token, userData]);

  return (
    <>
      <Header
        accountButtons={ [name, 'Sair'] }
        actionButtons={ ['PRODUTOS', 'MEUS PEDIDOS'] }
      />
      <OrderDetail>Detalhes do Pedido</OrderDetail>
      <OrderInfoContainer>
        <OrderInfo>
          <OrderNumber
            data-testid="seller_order_details__element-order-details-label-order-id"
          >
            {`Pedido ${id}`}
          </OrderNumber>
        </OrderInfo>
        <OrderInfo>
          <Seller
            data-testid="seller_order_details__element-order-details-label-seller-name"
          >
            {`Vendedora: ${orderDetail.seller}`}
          </Seller>
        </OrderInfo>
        <OrderInfo>
          <Date
            data-testid="seller_order_details__element-order-details-label-order-date"
          >
            {orderDetail.date}
          </Date>
        </OrderInfo>
        <OrderInfo>
          { orderDetail.statas === 'Entregue' ? (
            <DeliveredStatus
              data-testid={ 'seller_order_details__'
               + 'element-order-details-label-delivery-status' }
            >
              {orderDetail.status}
            </DeliveredStatus>
          )
            : (
              <PendingStatus
                data-testid={ 'seller_order_details__'
                 + 'element-order-details-label-delivery-status' }
              >
                {orderDetail.status}
              </PendingStatus>
            )}
        </OrderInfo>
        <OrderInfo>
          <button
            type="button"
            onClick={ changeStatus }
            // disabled={ orderDetail.status === 'Entregue' }
            data-testid="seller_order_details__button-preparing-check"
          >
            Preparar Pedido
          </button>
          <button
            type="button"
            onClick={ changeStatus }
            // disabled={ orderDetail.status === 'Entregue' }
            data-testid="seller_order_details__button-dispatch-check"
          >
            Saiu Para Entregue
          </button>
        </OrderInfo>
      </OrderInfoContainer>

      <Table>
        <thead>
          <tr>
            <ThItem>Item</ThItem>
            <ThItem>Descrição</ThItem>
            <ThItem>Quantidade</ThItem>
            <ThItem>Valor Unitário</ThItem>
            <ThItem>Sub-total</ThItem>
          </tr>
        </thead>
        <tbody>
          {OrderItems.map((item, index) => (
            <OrderTable
              key={ index }
              index={ index }
              { ...item }
            />
          ))}
        </tbody>
      </Table>
      <Total
        data-testid="seller_order_details__element-order-total-price"
      >
        {`${finalPrice.toFixed(2).replace('.', ',')}`}
      </Total>
    </>
  );
}
