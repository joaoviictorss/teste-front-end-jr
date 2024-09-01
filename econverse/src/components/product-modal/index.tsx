import "./styles.scss";
import { Product } from "../../types";
import { useState } from "react";
import { formatCurrency } from "../../lib/utils";

import Modal from "../ui/modal";
import Icon from "../ui/icon";
import Button from "../ui/button";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: Product;
}

const ProductModal = ({ isOpen, onClose, data }: ProductModalProps) => {
  const [productQuantity, setProductQuantity] = useState(1);

  const incrementQuantity = () => {
    setProductQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setProductQuantity((prevQuantity) => {
      // Garante que a quantidade não fique menor que 1
      if (prevQuantity > 1) {
        return prevQuantity - 1;
      }
      return prevQuantity;
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="product-modal">
        <img src={data.photo} alt={data.productName} />
        <div className="product-infos">
          <span className="product-name">{data.productName}</span>
          <strong className="product-price">
            {formatCurrency(data.price)}
          </strong>
          <p>
            Many desktop publishing packages and web page editors now many
            desktop publishing
          </p>

          <a href="/">Veja mais detalhes do produto &gt;</a>

          <div className="input-quantity-container">
            <button onClick={decrementQuantity}>
              <Icon name="Minus" />
            </button>
            <span>{productQuantity}</span>
            <button onClick={incrementQuantity}>
              <Icon name="Plus" />
            </button>
          </div>
          <Button className="button-modal">Comprar</Button>
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;
