import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Carrinho from './components/Carrinho';
import PaginaPrincipal from './components/PaginaPrincipal';
import Detalhes from './components/Detalhes';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ PaginaPrincipal } />
        <Route exact path="/carrinho" component={ Carrinho } />
        <Route exact path="/produtos/:id"><Detalhes /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
