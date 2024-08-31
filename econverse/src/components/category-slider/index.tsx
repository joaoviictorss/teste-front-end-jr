import "./styles.scss";

import { useState, useEffect, useRef } from "react";

import Container from "../ui/container";
import CategoryItem from "../ui/category-item";

import { motion } from "framer-motion";

const CategorySlider = () => {
 

  const [selectedCategory, setSelectedCategory] = useState("Tecnologia");

  const routes = [
    {
      href: `/technology`,
      label: "Tecnologia",
      isActive: selectedCategory === "Tecnologia",
      icon: "Devices",
    },
    {
      href: `/supermarket`,
      label: "Supermercado",
      isActive: selectedCategory === "Supermercado",
      icon: "Supermarket",
    },
    {
      href: `/drinks`,
      label: "Bebidas",
      isActive: selectedCategory === "Bebidas",
      icon: "Whiskey",
    },
    {
      href: `/tools`,
      label: "Ferramentas",
      isActive: selectedCategory === "Ferramentas",
      icon: "Tools",
    },
    {
      href: `/health`,
      label: "Saúde",
      isActive: selectedCategory === "Saúde",
      icon: "Health",
    },
    {
      href: `/sports-fitness`,
      label: "Esportes e Fitness",
      isActive: selectedCategory === "Esportes e Fitness",
      icon: "Fitness",
    },
    {
      href: `/fashion`,
      label: "Moda",
      isActive: selectedCategory === "Moda",
      icon: "Fashion",
    },
    {
      href: `/markets`,
      label: "Mercados",
      isActive: selectedCategory === "Mercados",
      icon: "Market",
    },
    {
      href: `/bakeries`,
      label: "Padarias",
      isActive: selectedCategory === "Padarias",
      icon: "Bread",
    },
    {
      href: `/oriental`,
      label: "Oriental",
      isActive: selectedCategory === "Oriental",
      icon: "Sushi",
    },
  ];
  
  const slider = useRef<HTMLDivElement>(null);
  const [sliderWidth, setSliderWidth] = useState(0);

  useEffect(() => {
    setSliderWidth(slider.current?.scrollWidth! - slider.current?.offsetWidth!);
  }, []);

  // Calcula o tamanho da div slider

  return (
    <Container>
      <motion.div className="slider" ref={slider}>
        <motion.ul
          drag="x"
          className="inner"
          dragConstraints={{ right: 0, left: -sliderWidth }}
        >
          {routes.map((route) => (
            <CategoryItem
              href={route.href}
              icon={route.icon}
              isActive={route.isActive}
              label={route.label}
              setSelectedCategory={setSelectedCategory}
              key={route.href}
            />
          ))}
        </motion.ul>
      </motion.div>
    </Container>
  );
};

export default CategorySlider;
