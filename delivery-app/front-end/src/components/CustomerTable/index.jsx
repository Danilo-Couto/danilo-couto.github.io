import React from 'react';
import PropTypes from 'prop-types';

import { setLocalStorage } from '../../services/localStorage';

import { Table, ThItem } from './style';
import ProductTable from './ProductTable';

export default function CustomerTable({ cartItems, setCartItems }) {
  const removeCartItem = (id) => {
    const newCartItem = cartItems.filter((item) => item.id !== id);
    setLocalStorage('cart', newCartItem);
    setCartItems(newCartItem);
  };

  return (
    <Table>
      <thead>
        <tr>
          <ThItem>Item</ThItem>
          <ThItem>Descrição</ThItem>
          <ThItem>Quantidade</ThItem>
          <ThItem>Valor Unitário</ThItem>
          <ThItem>Sub-total</ThItem>
          <ThItem>Remover Item</ThItem>
        </tr>
      </thead>
      <tbody>
        { !cartItems
          ? null
          : cartItems
            .filter((item) => item.qnt > 0)
            .map((item, index) => (
              <ProductTable
                { ...item }
                index={ index }
                key={ index }
                removeCartItem={ removeCartItem }
              />
            ))}
      </tbody>
    </Table>
  );
}

CustomerTable.propTypes = ({
  cartItems: PropTypes.array,
  which: PropTypes.boolean,
  setCartItems: PropTypes.function,
}.required);
