import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Carrinho from './components/Carrinho';
import PaginaPrincipal from './components/PaginaPrincipal';
import Detalhes from './components/Detalhes';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  addToCart = (item) => {
    this.setState((prev) => ({
      products: [...prev.products].concat(item),
    }));
  };

  render() {
    const { products } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (
              <PaginaPrincipal products={ products } addToCart={ this.addToCart } />
            ) }
          />
          <Route
            exact
            path="/carrinho"
            render={ () => (
              <Carrinho products={ products } addToCart={ this.addToCart } />
            ) }
          />
          <Route
            exact
            path="/produtos/:id"
            render={ () => (
              <Detalhes products={ products } addToCart={ this.addToCart } />
            ) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
