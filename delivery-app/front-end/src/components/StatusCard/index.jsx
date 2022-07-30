import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import * as S from './style';

export default function Index(
  { order: { id,
    totalPrice,
    saleDate,
    status,
  } },
) {
  const [typePage, setTypePage] = useState('');
  const history = useHistory();
  const location = useLocation();
  const ten = 10;
  const four = 4;

  const formatDatePt = (date) => {
    const slitDate = date.slice(0, ten).split('-');
    return `${slitDate[2]}/${slitDate[1]}/${slitDate[0]}`;
  };

  useEffect(() => {
    const path = location.pathname.includes('customer');
    if (path) setTypePage('customer');
    if (!path) setTypePage('seller');
  }, [location.pathname]);

  const haddleClick = () => {
    if (typePage === 'customer') history.push(`/customer/orders/${id}`);
    if (typePage === 'seller') history.push(`/seller/orders/${id}`);
  };

  return (
    <S.wrapper type="button" onClick={ haddleClick }>
      <S.orderNumber>
        <p>Pedido</p>
        <p data-testid={ `${typePage}_orders__element-order-id-${id}` }>
          {String(id).padStart(four, '0')}
        </p>
      </S.orderNumber>
      <S.status data-testid={ `${typePage}_orders__element-delivery-status-${id}` }>
        {status}
      </S.status>
      <S.infos>
        <S.date data-testid={ `${typePage}_orders__element-order-date-${id}` }>
          {formatDatePt(saleDate)}
        </S.date>
        <S.price data-testid={ `${typePage}_orders__element-card-price-${id}` }>
          { totalPrice.replace('.', ',') }
        </S.price>
      </S.infos>
    </S.wrapper>
  );
}

Index.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number,
    totalPrice: PropTypes.string,
    saleDate: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
};
