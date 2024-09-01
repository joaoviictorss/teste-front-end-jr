import "./styles.scss";

import Container from "../ui/container";
import Button from "../ui/button";

const Banner = () => {
  return (
    <div className="banner">
      <div className="gradient-banner" />
      <Container>
        <div className="banner-content">
          <h1 className="text-banner">Venha conhecer nossas promoções</h1>
          <span>50% Off nos produtos </span>
          <Button className="banner-button">Ver produto</Button>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
