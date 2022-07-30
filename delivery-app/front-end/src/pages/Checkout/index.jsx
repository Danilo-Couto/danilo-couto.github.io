import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Header from '../../components/Header';
import { getLocalStorage } from '../../services/localStorage';
import {
  FinishOrder,
  FinishOrderBttn,
  DetailsAndAddress,
  DetailsAndAddressContainer,
  Label,
  Select,
  InputLabelContainer,
  AddressInput,
  NumberInput,
  DivFinishOrdBttn,
} from './style';
import { Total } from '../../components/CustomerTable/style';
import { urlCustomerOrders } from '../../services/constants';
import CustomerTable from '../../components/CustomerTable';

export default function Checkout() {
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');
  const [sellerId, setSeller] = useState(2);
  const [cartItems, setCartItems] = useState(getLocalStorage('cart'));
  const [userData] = useState(getLocalStorage('user'));

  const history = useHistory();
  const { location: { pathname } } = history;
  const [which] = useState(pathname.includes('checkout'));

  const totalPrice = cartItems.reduce((acc, { amount }) => acc + amount, 0);

  const { name, token } = userData;

  const config = {
    headers: {
      authorization: token,
    },
  };

  const finishOrder = async () => {
    try {
      const productData = await Promise.all(cartItems.map(async (item) => ({
        productId: item.id, quantity: item.qnt,
      })));

      const body = {
        sellerId: Number(sellerId),
        totalPrice,
        deliveryAddress,
        deliveryNumber,
        productId: productData.map((item) => item.productId),
        quantity: productData.map((item) => item.quantity) };

      const sale = await axios.post(urlCustomerOrders, body, config);

      return history.push(`/customer/orders/${sale.data.id}`);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <>
      <Header
        accountButtons={ [name, 'Sair'] }
        actionButtons={ ['PRODUTOS', 'MEUS PEDIDOS'] }
      />
      <FinishOrder>Check Out</FinishOrder>
      <CustomerTable
        cartItems={ cartItems }
        setCartItems={ setCartItems }
        which={ which }
      />
      <Total
        data-testid="customer_checkout__element-order-total-price"
      >
        {`R$ ${totalPrice.toFixed(2).replace('.', ',')}`}
      </Total>

      <DetailsAndAddressContainer>
        <DetailsAndAddress>Detalhes e Endereço para Entrega</DetailsAndAddress>
        <InputLabelContainer>
          <Label htmlFor="seller">Vendedora Responsável</Label>
          <br />
          <Select
            name="seller"
            data-testid="customer_checkout__select-seller"
            value={ sellerId }
            onChange={ (e) => setSeller(e.target.value) }
          >
            <option value={ 2 }>Fulana de Tal</option>
          </Select>
        </InputLabelContainer>
        <InputLabelContainer>
          <Label htmlFor="address">Endereço</Label>
          <br />
          <AddressInput
            value={ deliveryAddress }
            onChange={ (e) => setDeliveryAddress(e.target.value) }
            data-testid="customer_checkout__input-address"
          />
        </InputLabelContainer>
        <InputLabelContainer>
          <Label htmlFor="number">Número</Label>
          <br />
          <NumberInput
            value={ deliveryNumber }
            onChange={ (e) => setDeliveryNumber(e.target.value) }
            data-testid="customer_checkout__input-addressNumber"
          />
        </InputLabelContainer>
        <br />
      </DetailsAndAddressContainer>
      <DivFinishOrdBttn>
        <FinishOrderBttn
          onClick={ () => finishOrder() }
          data-testid="customer_checkout__button-submit-order"
        >
          FINALIZAR PEDIDO
        </FinishOrderBttn>
      </DivFinishOrdBttn>
    </>
  );
}
