import { Product } from "../../types";
import "./styles.scss";
import { motion } from "framer-motion";

import ProductCard from "../ui/product-card";
import Container from "../ui/container";
import { useEffect, useRef, useState } from "react";
import Icon from "../ui/icon";

interface ProductSliderProps {
  data: Product[];
}

const ProductSlider = ({ data }: ProductSliderProps) => {
  const slider = useRef<HTMLDivElement>(null);

  const [sliderWidth, setSliderWidth] = useState(0);

  useEffect(() => {
    setSliderWidth(slider.current?.scrollWidth! - slider.current?.offsetWidth!);
  }, []);

  // Calcula o tamanho da div slider

  const handleLeftClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event?.preventDefault();
    if (slider.current?.scrollLeft == undefined) {
      return;
    }
    slider.current.scrollLeft -= slider.current.offsetWidth;
  };

  const handleRigthClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event?.preventDefault();
    if (slider.current?.scrollLeft == undefined) {
      return;
    }
    slider.current.scrollLeft += slider.current.offsetWidth;
  };

  return (
    <div className="slider-products-container">
      <button onClick={handleLeftClick} className="slider-button">
        <Icon name="LeftArrow" />
      </button>

      <motion.div className="slider-products" ref={slider}>
        {data.map((product) => (
          <ProductCard data={product} key={product.productName} />
        ))}
      </motion.div>

      <button onClick={handleRigthClick} className="slider-button">
        <Icon name="RightArrow" />
      </button>
    </div>
  );
};

export default ProductSlider;
