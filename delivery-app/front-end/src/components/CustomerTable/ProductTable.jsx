import React from 'react';
import PropTypes from 'prop-types';
import { RemoveItemBttn, TdItem } from './style';

export default function ProductTable({
  id,
  productName,
  qnt,
  amount,
  index,
  removeCartItem,
}) {
  return (
    <tr>
      <TdItem
        data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
      >
        { index + 1 }
      </TdItem>
      <TdItem
        data-testid={ `customer_checkout__element-order-table-name-${index}` }
      >
        { productName }
      </TdItem>
      <TdItem
        data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
      >
        { qnt }
      </TdItem>
      <TdItem
        data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
      >
        { Number(amount / qnt).toFixed(2).replace('.', ',') }
      </TdItem>
      <TdItem
        data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
      >
        { Number(amount).toFixed(2).replace('.', ',') }
      </TdItem>
      <TdItem>
        <RemoveItemBttn
          onClick={ () => removeCartItem(id) }
          data-testid={
            `customer_checkout__element-order-table-remove-${index}`
          }
        >
          REMOVER
        </RemoveItemBttn>
      </TdItem>
    </tr>
  );
}

ProductTable.propTypes = ({
  cartItems: PropTypes.array,
}.required);
