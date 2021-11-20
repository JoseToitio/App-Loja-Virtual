import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { title, price, thumbnail, id } = this.props;

    return (
      <Link to={ `/produtos/${id}` } data-testid="product-detail-link">
        <div data-testid="product">
          <h3>{title}</h3>
          <img src={ thumbnail } alt={ title } />
          <p>{price}</p>
        </div>
      </Link>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ProductCard;
