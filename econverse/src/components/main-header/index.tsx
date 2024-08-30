import "./styles.scss";

import Logo from "../../assets/logo/logo.png";
import Icon from "../ui/icon";

const MainHeader = () => {
  return (
    <div className="main-header">
      <img src={Logo} alt="Logo" />
      <div className="search-input">
        <div className="input-container">
          <input type="text" placeholder="O que você está buscando?" />
          <Icon name="Glass" />
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">
              <Icon name="Box" width="32px" height="32px" />
            </a>
          </li>
          <li>
            <a href="#">
              <Icon name="Heart" width="32px" height="32px" />
            </a>
          </li>
          <li>
            <a href="#">
              <Icon name="UserCicle" width="32px" height="32px" />
            </a>
          </li>
          <li>
            <a href="#">
              <Icon name="ShoppingCart" width="32px" height="32px" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainHeader;
