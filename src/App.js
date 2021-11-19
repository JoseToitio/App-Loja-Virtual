import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Carrinho from './components/Carrinho';
import PaginaPrincipal from './components/PaginaPrincipal';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PaginaPrincipal} />
        <Route exact path="/carrinho" component={Carrinho} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
