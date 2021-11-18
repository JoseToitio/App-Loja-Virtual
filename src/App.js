import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { getProductsFromCategoryAndQuery } from './services/api';

function App() {
  return (
    <>
      <input type="text" />
      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    </>
  );
}

export default App;
