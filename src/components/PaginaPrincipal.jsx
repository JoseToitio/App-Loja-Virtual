import React from 'react';
import { Link } from 'react-router-dom';
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
    };
    this.handleChange = this.handleChange.bind(this);
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    getCategories().then((data) => {
      this.setState({
        categories: data,
      });
    });
    this.getProducts();
  }

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
    const { categories, products } = this.state;
    return (
      <div>
        <input
          type="text"
          onChange={ this.handleChange }
          data-testid="query-input"
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.getProducts }
        >
          Pesquisar
        </button>
        <Link to="/carrinho" data-testid="shopping-cart-button">
          Carrinho
        </Link>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <div>
          {categories.map((categoria) => (
            <Categorias
              name={ categoria.name }
              key={ categoria.id }
              id={ categoria.id }
              handleChange={ this.handleChange }
            />
          ))}
        </div>
        {products.length > 0 ? (
          products.map((product) => (
            <Card
              key={ product.id }
              title={ product.title }
              price={ product.price }
              thumbnail={ product.thumbnail }
              id={ product.id }
            />
          ))
        ) : (
          <p>Nenhum produto encontrado</p>
        )}
      </div>
    );
  }
}

export default PaginaPrincipal;
