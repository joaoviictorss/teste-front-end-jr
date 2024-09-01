import "./styles.scss";
import { useRef } from "react";

import Logo from "../../assets/logo/logo.png";
import Container from "../ui/container";
import Icon from "../ui/icon";

const BrandsSlider = () => {
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

  const brands = Array.from({ length: 9 });
  // Cria um array de nove elementos

  return (
    <Container>
      <div className="brands-slider-container">
        <button
          className="button-slider left-button-slider"
          onClick={handleLeftClick}
        >
          <Icon name="LeftArrow" />
        </button>
        <div className="brands-slider" ref={slider}>
          <ul>
            {brands.map((_brand, _index) => (
              <li key={_index}>
                <a href="/" className="brand-item">
                  <img src={Logo} alt="Logo" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <button
          className="button-slider rigth-button-slider"
          onClick={handleRigthClick}
        >
          <Icon name="RightArrow" />
        </button>
      </div>
    </Container>
  );
};

export default BrandsSlider;
