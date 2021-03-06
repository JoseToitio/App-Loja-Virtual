export async function getCategories() {
  // Implemente aqui
  const response = await fetch(
    'https://api.mercadolibre.com/sites/MLB/categories',
  );
  const dataResponse = await response.json();
  return dataResponse;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const response = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`,
  );
  const responseData = await response.json();
  return responseData;
}

export async function getProducts(query) {
  const response = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?q=${query}`,
  );
  const responseData = await response.json();
  return responseData;
}

export async function getProductsById(id) {
  const response = await fetch(
    `https://api.mercadolibre.com/items/${id}`,
  );
  const responseData = await response.json();
  return responseData;
}
