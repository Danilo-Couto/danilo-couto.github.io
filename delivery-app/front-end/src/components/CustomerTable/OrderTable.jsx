import React from 'react';
import PropTypes from 'prop-types';

import { TdItem } from './style';

export default function OrderTable({
  productName,
  qnt,
  amount,
  totalPrice,
  index,
}) {
  return (
    <tr>
      <TdItem
        data-testid={ `customer_order_details__element-order-table-item-number-${index}` }
      >
        { index + 1 }
      </TdItem>
      <TdItem
        data-testid={ `customer_order_details__element-order-table-name-${index}` }
      >
        { productName }
      </TdItem>
      <TdItem
        data-testid={ `customer_order_details__element-order-table-quantity-${index}` }
      >
        { qnt }
      </TdItem>
      <TdItem
        data-testid={ `customer_order_details__element-order-table-sub-total-${index}` }
      >
        { Number((amount || totalPrice) / qnt).toFixed(2).replace('.', ',') }
      </TdItem>
      <TdItem
        data-testid={ `customer_order_details__element-order-total-price-${index}` }
      >
        { Number(amount || totalPrice).toFixed(2).replace('.', ',') }
      </TdItem>
    </tr>
  );
}

OrderTable.propTypes = ({
  orderItems: PropTypes.array,
}.required);
