import React from 'react';
import { Link } from 'react-router-dom';
import Categorias from './Categorias';

class PaginaPrincipal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Categoris: [] };
  }

  componentDidMount() {
    const promissesApi = fetch(
      'https://api.mercadolibre.com/sites/MLB/categories',
    );
    promissesApi
      .then((res) => res.json())
      .then((res) => {
        this.setState({ Categoris: res });
      });
    promissesApi.catch(() => console.log('deu ruim'));
  }

  render() {
    const { Categoris } = this.state;
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
          {Categoris.map((categoria) => (
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
