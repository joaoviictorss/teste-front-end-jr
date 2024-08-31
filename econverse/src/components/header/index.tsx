import "./styles.scss";

import Container from "../ui/container";
import MainHeader from "../main-header";
import Icon from "../ui/icon";
import NavBar from "../navbar";

const Header = () => {
  return (
    <header>
      <Container>
        <div className="header-infos">
          <div className="header-item">
            <Icon name="ShieldCheck" />
            <span>
              Compra <span className="text-contrast">100% segura</span>
            </span>
          </div>
          <div className="header-item">
            <Icon name="Truck" />
            <span className="text-contrast">
              Frete Gratis <span className="text-default">acima de R$ 200</span>
            </span>
          </div>
          <div className="header-item">
            <Icon name="CreditCard" className="credit-card" />
            <span className="text-contrast">
              Parcele <span className="text-default">suas compras</span>
            </span>
          </div>
        </div>
        <MainHeader />
        <NavBar />
      </Container>
    </header>
  );
};

export default Header;
