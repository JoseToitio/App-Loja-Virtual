import React, { useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getProductsById } from '../services/api';

function Detalhes() {
  const [produto, setProduto] = useState();
  const { id } = useParams();
  useLayoutEffect(() => {
    getProductsById(id)
      .then((data) => {
        setProduto(data);
      })
      .catch((erro) => console.log(erro));
  }, [id]);

  return (
    <div>
      <h3 data-testid="product-detail-name">{produto?.title}</h3>
      <img src={produto?.thumbnail} alt={produto?.title} />
      <p>{produto?.price}</p>
      {produto?.attributes?.map((attribute, index) => (
        <p key={index}>{attribute.name}</p>
      ))}
      <button type="button">ir para o carrinho</button>
      <button data-testid="product-detail-add-to-cart" type="button">
        Comprar
      </button>
    </div>
  );
}

export default Detalhes;
