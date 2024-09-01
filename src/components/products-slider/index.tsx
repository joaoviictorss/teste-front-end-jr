import { Product } from "../../types";
import "./styles.scss";
import { useRef } from "react";

import ProductCard from "../ui/product-card";
import Icon from "../ui/icon";

interface ProductSliderProps {
  data: Product[];
  openModal: (data: Product) => void;
}

const ProductSlider = ({ data, openModal }: ProductSliderProps) => {
  const slider = useRef<HTMLDivElement>(null);

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

      <div className="slider-products" ref={slider}>
        <ul className="inner">
          {data.map((product) => (
            <ProductCard
              data={product}
              key={product.productName}
              openModal={openModal}
            />
          ))}
        </ul>
      </div>

      <button onClick={handleRigthClick} className="slider-button">
        <Icon name="RightArrow" />
      </button>
    </div>
  );
};

export default ProductSlider;
