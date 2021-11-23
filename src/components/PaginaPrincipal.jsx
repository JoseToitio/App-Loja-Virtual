import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Categorias from './Categorias';
import Card from './Card';
import {
  getCategories,
  getProductsFromCategoryAndQuery,
} from '../services/api';

class PaginaPrincipal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      inputTextValue: '',
      inputCheckValue: '',
      products: [],
      saveItem: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.getProducts = this.getProducts.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    getCategories().then((data) => {
      this.setState({
        categories: data,
      });
    });
    this.getProducts();
  }

  handleClick(item) {
    console.log(`cliquei no item: ${item}`);
    this.setState((prev) => ({
      saveItem: [...prev.saveItem].concat(item),
    }));
  }

  /*   handleClick(item) {
    let { products } = this.props;
    products = products.push(item);
  } */

  handleChange({ target: { value, type, id } }) {
    if (type === 'radio') {
      this.setState({ inputCheckValue: id });
    } else {
      this.setState({ inputTextValue: value });
    }
  }

  getProducts() {
    const { inputTextValue, inputCheckValue } = this.state;
    getProductsFromCategoryAndQuery(inputCheckValue, inputTextValue).then(
      (data) => {
        this.setState({ products: data.results });
      },
    );
  }

  render() {
    const { categories, saveItem, products } = this.state;
    const { addToCart } = this.props;
    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          data-testid="query-input"
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={this.getProducts}>
          Pesquisar
        </button>
        <Link
          to={{
            pathname: '/carrinho',
            // state: { id: saveItem },
          }}
          data-testid="shopping-cart-button">
          Carrinho
        </Link>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <div>
          {categories.map((categoria) => (
            <Categorias
              name={categoria.name}
              key={categoria.id}
              id={categoria.id}
              handleChange={this.handleChange}
            />
          ))}
        </div>
        {products.length > 0 ? (
          products.map((product) => (
            <Card
              key={product.id}
              title={product.title}
              price={product.price}
              thumbnail={product.thumbnail}
              id={product.id}
              handleClick={() => addToCart(product.id)}
            />
          ))
        ) : (
          <p>Nenhum produto encontrado</p>
        )}
      </div>
    );
  }
}

PaginaPrincipal.propTypes = {
  products: PropTypes.array,
  addToCart: PropTypes.func,
};

export default PaginaPrincipal;
