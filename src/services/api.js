export async function getCategories() {
  // Implemente aqui
  const response = await fetch(
    'https://api.mercadolibre.com/sites/MLB/categories',
  );
  const dataResponse = await response.json();
  return dataResponse;
}

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
}
