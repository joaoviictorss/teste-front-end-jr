import "./styles.scss";

import Icon from "../icon";
import icons from "../../../lib/icons";

interface CategoryItemProps {
  href: string;
  label: string;
  isActive: boolean;
  icon: string;
  setSelectedCategory: (label: string) => void;
}

const CategoryItem = ({
  href,
  label,
  isActive,
  icon,
  setSelectedCategory,
}: CategoryItemProps) => {
  // O correto seria trocar o button por um Link, passando um href para poder navegar as categorias, porem coloquei um botão apenas para a apresentação da funcionalidade no desafio.
  return (
    <button
      className={isActive ? "category-item active" : "category-item inactive"}
      key={href}
      onClick={() => setSelectedCategory(label)}
    >
      <div className="icon-container">
        <Icon name={icon as keyof typeof icons} width="61px" height="61px" />
      </div>
      <span className="category-label">{label}</span>
    </button>
  );
};

export default CategoryItem;
