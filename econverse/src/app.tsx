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
import Card from "./components/ui/card";
import BrandsSlider from "./components/brands-slider";
import Footer from "./components/footer";
import ProductModal from "./components/product-modal";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data.products);
      setLoading(false);
    });
  }, []);

  // Simula uma falsa requisição a API, utiliza dados mockados pois tive problemas de cors ao utilizar a rota da api fornecida

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product>();
  
  const closeModal = () => setIsModalOpen(false);

  const handleOpenModal = (data: Product) => {
    setIsModalOpen(true);
    setSelectedProduct(data);
  };

  return (
    <>
      <Header />
      <Banner />
      <main>
        <CategorySlider />

        <section className="products-section">
          {selectedProduct && (
            <ProductModal
              isOpen={isModalOpen}
              onClose={closeModal}
              data={selectedProduct}
            />
          )}

          <Container>
            <div className="title-section">
              <div className="line" />
              <h3 className="title">Produtos relacionados</h3>
              <div className="line" />
            </div>
          </Container>
          <ProductNav />
          <ProductSlider data={products} openModal={handleOpenModal} />

          <Container>
            <div className="cards-container">
              <Card
                className="partner-card"
                title="Parceiros"
                description="Lorem ipsum dolor sit amet, consectetur"
                href="/"
              />
              <Card
                className="partner-card"
                title="Parceiros"
                description="Lorem ipsum dolor sit amet, consectetur"
                href="/"
              />
            </div>
          </Container>
        </section>
        <section>
          <Container>
            <div className="title-section">
              <div className="line" />
              <h3 className="title">Produtos relacionados</h3>
              <div className="line" />
            </div>
            <a href="#" className="see-all">
              Ver todos
            </a>

            <div className="cards-container">
              <Card
                title="Produtos"
                description="Lorem ipsum dolor sit amet, consectetur"
                href="/"
              />
              <Card
                title="Produtos"
                description="Lorem ipsum dolor sit amet, consectetur"
                href="/"
              />
            </div>
          </Container>
        </section>
        <section>
          <h3 className="title">Navegue por marcas</h3>
          <BrandsSlider />
        </section>
        <Footer />
      </main>
    </>
  );
}

export default App;
