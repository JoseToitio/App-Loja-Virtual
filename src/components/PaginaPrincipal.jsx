import React from 'react';
import { Link } from 'react-router-dom';
import Categorias from './Categorias';
import { getCategories } from '../services/api';

class PaginaPrincipal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categories: [] };
  }

  componentDidMount() {
    getCategories()
      .then((data) => {
        this.setState({
          categories: data,
        });
      });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <input type="text" />
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
            />
          ))}
        </div>
      </div>
    );
  }
}

export default PaginaPrincipal;
