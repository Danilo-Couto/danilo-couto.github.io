import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function OrderCard(props) {
  const { id, status, saleDate, totalPrice, deliveryAddress, deliveryNumber } = props;
  // const [status, setStatus] = useState(status);

  return (
    <div>
      <p data-testid={ `seller_orders__element-order-id-${id}` }>
        {id}
      </p>
      <p data-testid={ `seller_orders__element-delivery-status-${id}` }>
        {status}
      </p>
      <p data-testid={ `seller_orders__element-order-date-${id}` }>
        {saleDate}
      </p>
      <p data-testid={ `seller_orders__element-card-price-${id}` }>
        {totalPrice}
      </p>
      <p data-testid={ `seller_orders__element-card-address-${id}` }>
        {`${deliveryAddress} ${deliveryNumber}` }
      </p>
      <Link
        to={ {
          pathname: `/seller/orders/${id}`,
          state: props,
        } }
      >
        Ver Detalhes
      </Link>
    </div>
  );
}

OrderCard.propTypes = ({
  id: PropTypes.number,
  totalPrice: PropTypes.string,
  deliveryAddress: PropTypes.string,
  deliveryNumber: PropTypes.string,
  saleDate: PropTypes.string,
  status: PropTypes.string,
}.required);
