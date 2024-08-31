import products from "./products.json";

// Cria uma falsa chamada a API, tive problemas ao fazer fetch com os dados, problemas de cors

const fetchProducts = (): Promise<typeof products> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000); // 1 segundo de atraso
  });
};

export default fetchProducts;
