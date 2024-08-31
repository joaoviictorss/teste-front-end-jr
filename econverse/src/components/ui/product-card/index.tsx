import "./style.scss";

import { Product } from "../../../types";
import Button from "../button";
import { formatCurrency } from "../../../lib/utils";

interface ProductCardProps {
  data: Product;
}

const ProductCard = ({ data }: ProductCardProps) => {
  return (
    <div className="product-card">
      <div className="image-container">
        <img src={data.photo} alt={data.productName} />
      </div>
      <div className="infos">
        <span className="product-name">{data.productName}</span>
        <p className="description">{data.descriptionShort}</p>
        <div className="price-container">
          <span className="old-price">{formatCurrency(data.price + 150)}</span>
          <strong className="price">{formatCurrency(data.price)}</strong>
        </div>
        <span className="paymant-methods">ou 2x de R$ 49,95 sem juros</span>
        <span className="free-shipping">Frete grátis</span>
      </div>
      <Button className="buy-button">Comprar</Button>
    </div>
  );
};

export default ProductCard;
