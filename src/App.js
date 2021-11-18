import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Carrinho from './components/Carrinho';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Header } />
        <Route exact path="/carrinho" component={ Carrinho } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
