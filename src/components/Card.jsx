import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { title, price, thumbnail, id, handleClick } = this.props;

    return (
      <div data-testid="product">
        <Link to={ `/produtos/${id}` } data-testid="product-detail-link">
          <h3>{title}</h3>
          <img src={ thumbnail } alt={ title } />
        </Link>
        <p>{price}</p>
        <button
          type="button"
          onClick={ handleClick }
          data-testid="product-add-to-cart"
        >
          Comprar
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ProductCard;
