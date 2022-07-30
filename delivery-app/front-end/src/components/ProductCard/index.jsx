import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { menosUm } from '../../services/constants';
import { Image, MButton, SButton, Wrapper } from './styles';

export default function ProductCard({
  id,
  name: productName,
  price,
  urlImage,
  addToCartInput,
  addToCartButton,
}) {
  const [qntState, setQntState] = useState(0);

  const handleInputQnt = ({ value }) => {
    const qnt = Number(value);
    if (qnt === menosUm) return null;
    setQntState(qnt);
    addToCartInput(id, qnt, Number(price), productName); // id, qnt, price, nome do produto
  };

  const setCart = ({ name, value }) => { // name = qntState, value = price
    const qnt = Number(name);
    const input = qntState + qnt;
    if (input === menosUm) return null;
    setQntState(input);
    addToCartButton(id, qnt, Number(value), productName); // id, qnt, price, nome do produto
  };

  return (
    <Wrapper>
      <SButton
        type="button"
        data-testid={ `customer_products__element-card-${id}` }
      >
        <Image
          data-testid={ `customer_products__img-card-bg-image-${id}` }
          src={ urlImage }
          alt={ urlImage }
        />
        <p data-testid={ `customer_products__element-card-title-${id}` }>
          { productName }
        </p>
        <h2 data-testid={ `customer_products__element-card-price-${id}` }>
          { price.replace('.', ',') }
        </h2>
      </SButton>
      <div>
        <MButton
          name={ 1 } // qnt
          value={ price }
          type="button"
          data-testid={ `customer_products__button-card-add-item-${id}` }
          onClick={ (e) => setCart(e.target) }
        >
          +
        </MButton>

        <input
          type="number"
          data-testid={ `customer_products__input-card-quantity-${id}` }
          value={ qntState }
          onChange={ (e) => { handleInputQnt(e.target); } }
        />

        <SButton
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          name={ -1 } // qnt
          value={ price }
          onClick={ (e) => setCart(e.target) }
        >
          -
        </SButton>
      </div>
    </Wrapper>
  );
}

ProductCard.propTypes = ({
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.string,
  urlImage: PropTypes.string,
  onAddToCart: PropTypes.func,
}.required);
