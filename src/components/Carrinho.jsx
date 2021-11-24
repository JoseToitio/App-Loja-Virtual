import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

class Carrinho extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.products,
    };
    this.diminuir = this.diminuir.bind(this);
    this.soma = this.soma.bind(this);
  }

  soma(index) {
    const { items } = this.state;
    console.log(`${items[index].amount += 1} cliquei no item ${items[index].id}`);
    items[index].amount += 0;
    this.setState({ items });
  }

  diminuir(index) {
    const { items } = this.state;
    if (items[index].amount === 0) {
      items[index].amount = 0;
      this.setState({ items });
    } else {
      items[index].amount -= 1;
      this.setState({ items });
    }
  }

  render() {
    const { items } = this.state;
    const vazio = (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    );

    return (
      <div>
        {items.length > 0 ? items.map((item, index) => (
          <div key={ item.id }>
            <p data-testid="shopping-cart-product-name">{item.title}</p>
            <img src={ item.thumbnail } alt={ item.title } />
            <p>
              R$
              {' '}
              {item.price * item.amount}
            </p>
            <p data-testid="shopping-cart-product-quantity">
              Quantidade:
              {' '}
              {item.amount}
              <button
                type="button"
                data-testid="product-increase-quantity"
                onClick={ () => this.soma(index) }
              >
                +
              </button>
              <button
                type="button"
                data-testid="product-decrease-quantity"
                onClick={ () => this.diminuir(index) }
              >
                -
              </button>
            </p>
          </div>
        )) : vazio}
      </div>);
  }
}
Carrinho.propTypes = {
  products: PropTypes.string.isRequired,
};

export default withRouter(Carrinho);
