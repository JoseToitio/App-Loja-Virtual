import React from 'react';

export default function Categorias(prop) {
  const { name, id, handleChange } = prop;
  return (
    <div>
      <label htmlFor={ id }>
        {name}
        <input
          type="radio"
          data-testid="category"
          id={ id }
          value={ name }
          name="categories"
          onChange={ handleChange }
        />
      </label>
    </div>
  );
}
