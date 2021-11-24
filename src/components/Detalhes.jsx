import React, { useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductsById } from '../services/api';

function Detalhes(props) {
  const [produto, setProduto] = useState();
  const { id } = useParams();
  useLayoutEffect(() => {
    getProductsById(id)
      .then((data) => {
        data.amount = 1;
        setProduto(data);
      })
      .catch((erro) => console.log(erro));
  }, [id]);

  const { addToCart } = props;
  return (
    <div>
      <h3 data-testid="product-detail-name">{produto?.title}</h3>
      <img src={ produto?.thumbnail } alt={ produto?.title } />
      <p>{produto?.price}</p>
      {produto?.attributes?.map((attribute, index) => (
        <p key={ index }>{attribute.name}</p>
      ))}
      <button
        data-testid="product-detail-add-to-cart"
        type="button"
        onClick={ () => {
          addToCart(produto);
        } }
      >
        Comprar
      </button>
      <Link to="/carrinho" data-testid="shopping-cart-button">
        Carrinho
      </Link>
    </div>
  );
}
Detalhes.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default Detalhes;
