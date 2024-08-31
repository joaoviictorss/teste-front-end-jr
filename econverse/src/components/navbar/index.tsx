import "./styles.scss";

import { useState } from "react";

const NavBar = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todas Categorias");

  const routes = [
    {
      href: `/all-categories`,
      label: "Todas Categorias",
      isActive: selectedCategory === "Todas Categorias",
    },
    {
      href: `/supermarket`,
      label: "Supermercado",
      isActive: selectedCategory === "Supermercado",
    },
    {
      href: `/books`,
      label: "Livros",
      isActive: selectedCategory === "Livros",
    },
    {
      href: `/fashion`,
      label: "Moda",
      isActive: selectedCategory === "Moda",
    },
    {
      href: `/releases`,
      label: "Lançamentos",
      isActive: selectedCategory === "Lançamentos",
    },
    {
      href: `/daily-deals`,
      label: "Ofertas do Dia",
      isActive: selectedCategory === "Ofertas do Dia",
    },
    {
      href: `/subscription`,
      label: "Assinatura",
      isActive: selectedCategory === "Assinatura",
    },
  ];

  // TODO: Trocar buttons por ancoras e definir o link ativo ao comparar o selectedCategory com o path da url.

  return (
    <nav className="main-nav">
      <ul>
        {routes.map((route) => (
          <li key={route.href}>
            <button
              className={route.isActive ? "active" : ""}
              onClick={() => setSelectedCategory(route.label)}
            >
              {route.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
