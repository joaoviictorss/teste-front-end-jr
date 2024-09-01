import "./styles.scss";
import { FormEvent } from "react";

import Container from "../ui/container";
import Icon from "../ui/icon";
import Button from "../ui/button";

const Footer = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    alert("Email enviado!");
  };

  return (
    <footer>
      <Container>
        <div className="footer-container">
          <div className="footer-infos">
            <div className="footer-section about-section">
              <span>Sobre nós</span>
              <ul>
                <li>
                  <a href="/">Conheça</a>
                </li>
                <li>
                  <a href="/">Como comprar</a>
                </li>
                <li>
                  <a href="/">Indicação e Desconto</a>
                </li>
              </ul>

              <ul className="social-links">
                <li>
                  <a href="/">
                    <Icon name="Facebook" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <Icon name="Instagram" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <Icon name="Youtube" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-section infos-section">
              <span>Informações úteis</span>
              <ul>
                <li>
                  <a href="/">FALE CONOSCO</a>
                </li>
                <li>
                  <a href="/">DÚVIDAS</a>
                </li>
                <li>
                  <a href="/">Prazos de Entrega</a>
                </li>
                <li>
                  <a href="/">Formas de Pagamento</a>
                </li>
                <li>
                  <a href="/">Política de privacidade</a>
                </li>
                <li>
                  <a href="/">Trocas e Devoluções</a>
                </li>
              </ul>
            </div>
            <div className="footer-section paymant-section">
              <span>FORMAS DE PAGAMENTO</span>

              <ul className="icons-paymants">
                <li>
                  <Icon name="Visa" width="50px" />
                </li>
                <li>
                  <Icon name="Elo" width="50px" />
                </li>
                <li>
                  <Icon name="Alelo" width="50px" />
                </li>
                <li>
                  <Icon name="Dinners" width="50px" />
                </li>
                <li>
                  <Icon name="Ifood" width="50px" />
                </li>
                <li>
                  <Icon name="Mastercard" width="50px" />
                </li>
                <li>
                  <Icon name="Pix" width="50px" />
                </li>
                <li>
                  <Icon name="Amex" width="50px" />
                </li>
                <li>
                  <Icon name="Ticket" width="50px" />
                </li>
                <li>
                  <Icon name="Sodexo" width="50px" />
                </li>
              </ul>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <h4>
              Cadastre-se e Receba nossas
              <br />
              <span>novidades e promoções</span>
            </h4>

            <p>
              Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia
              lorem ipsum
            </p>

            <div className="container-inputs">
              <input type="email" placeholder="SEU E-MAIL" />
              <Button type="submit">OK</Button>
            </div>
          </form>
        </div>
      </Container>
      <div className="bottom-base">
        <Container>
          <div className="bottom-base-container">
            <div className="copyright">
              <p>
                Copyright © 2019. Todos os direitos reservados. Todas as marcas
                e suas imagens são de propriedade de seus respectivos donos.{" "}
                <br />É vedada a reprodução, total ou parcial, de qualquer
                conteúdo sem expressa autorização.
              </p>
            </div>
            <div className="logos">
              <Icon name="Econverse" width="100px" />
              <Icon name="VtexLogo" width="100px" />
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
