import "./app.scss";

import { useState, useEffect } from "react";
import { Product } from "./types";
import fetchProducts from "./lib/mock/fetch-products";

import Banner from "./components/banner";
import CategorySlider from "./components/category-slider";
import Header from "./components/header";
import ProductNav from "./components/products-nav";
import ProductSlider from "./components/products-slider";
import Container from "./components/ui/container";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data.products);
      setLoading(false);
    });
  }, []);

  // Simula uma falsa requisição a API, utiliza dados mockados pois tive problemas de cors ao utilizar a api

  console.log(products);

  return (
    <>
      <Header />
      <Banner />
      <main>
        <CategorySlider />

        <section className="products-section">
          <Container>
            <div className="title-section">
              <div className="line" />
              <h3 className="title">Produtos relacionados</h3>
              <div className="line" />
            </div>
          </Container>
          <ProductNav />
          <ProductSlider data={products} />
        </section>
      </main>
    </>
  );
}

export default App;
