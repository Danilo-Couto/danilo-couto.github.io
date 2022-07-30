import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as S from './styles';

export default function Index({ actionButtons, accountButtons }) {
  const { push, location: { pathname } } = useHistory();
  const [which] = useState(pathname.includes('orders'));

  return (
    <S.wrapper>
      <S.actionButtons route={ !which }>
        {actionButtons.map((eachButton, index) => (
          <S.Button
            key={ eachButton + index }
            data-testid={
              index === 0
                ? 'customer_products__element-navbar-link-products'
                : 'customer_products__element-navbar-link-orders'
            }
            onClick={ () => {
              if (index !== 1) return push('/customer/products');
              return push('/customer/orders');
            } }
          >
            {eachButton}
          </S.Button>
        ))}
      </S.actionButtons>
      <S.accountButtons>
        {accountButtons.map((eachButton, index) => (
          <S.Button
            data-testid={
              index === 0
                ? 'customer_products__element-navbar-user-full-name'
                : 'customer_products__element-navbar-link-logout'
            }
            key={ eachButton + index }
            onClick={ () => {
              if (eachButton === 'Sair') {
                // setLocalStorage('user', {});
                localStorage.clear();
                push('/login');
              }
            } }
          >
            {eachButton}
          </S.Button>
        ))}
      </S.accountButtons>
    </S.wrapper>
  );
}

Index.propTypes = {
  actionButtons: PropTypes.arrayOf(PropTypes.string).isRequired,
  accountButtons: PropTypes.arrayOf(PropTypes.string).isRequired,
};
