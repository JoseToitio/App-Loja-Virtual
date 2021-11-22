import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { getProductsById } from '../services/api';

class Carrinho extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    const { location: { state: id } } = this.props;
    id.id.map((ids) => (
      getProductsById(ids).then((data) => (
        this.setState((prev) => ({
          items: [...prev.items].concat(data),
        }))
      ))
    ));
  }

  render() {
    const { items } = this.state;
    const vazio = (
      <p
        data-testid="shopping-cart-empty-message"
      >
        Seu carrinho está vazio
      </p>);
    const products = items.map((item) => (
      <div key={ item.id }>
        <p data-testid="shopping-cart-product-name">{item.title}</p>
        <img src={ item.thumbnail } alt={ item.title } />
        <p>
          R$
          {' '}
          {item.price}
        </p>
        <p data-testid="shopping-cart-product-quantity">
          Quantidade:
          {' '}
          {1}
        </p>
      </div>
    ));

    return (
      <div>
        {items.length > 0 ? products : vazio}
      </div>
    );
  }
}
Carrinho.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      id: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }) }).isRequired,
  }).isRequired,
};
export default withRouter(Carrinho);
