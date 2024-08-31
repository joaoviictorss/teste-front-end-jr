import "./styles.scss";
import { useState } from "react";

import Container from "../ui/container";

const ProductNav = () => {
  const [productsCategorySelected, setProductsCategorySelected] =
    useState("Celular");

  const productsRoutes = [
    {
      href: "/phones",
      label: "Celular",
      isActive: productsCategorySelected === "Celular",
    },
    {
      href: "/accessories",
      label: "Acessórios",
      isActive: productsCategorySelected === "Acessórios",
    },
    {
      href: "/tablets",
      label: "Tablets",
      isActive: productsCategorySelected === "Tablets",
    },
    {
      href: "/notebooks",
      label: "Notebooks",
      isActive: productsCategorySelected === "Notebooks",
    },
    {
      href: "/tvs",
      label: "TVs",
      isActive: productsCategorySelected === "TVs",
    },
    {
      href: "/all-products",
      label: "Ver Todos",
      isActive: productsCategorySelected === "Ver Todos",
    },
  ];

  return (
    <Container>
      <nav className="product-nav">
        <ul>
          {productsRoutes.map((route) => (
            <li key={route.href}>
              <button
                className={route.isActive ? "item active" : "item inactive"}
                onClick={() => setProductsCategorySelected(route.label)}
              >
                {route.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
};

export default ProductNav;
