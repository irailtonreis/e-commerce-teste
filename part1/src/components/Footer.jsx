import "./Footer.css";
import logo from "../assets/logo-serie.svg";
import logoFbits from "../assets/logo-fbits-branco.png";
import logoSerie from "../assets/logo-serie.png";
import IconInstagram from "../assets/instagram.svg";
import IconFacebook from "../assets/facebook.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletter-container">
        <div className="newsletter-text">
          <h3>Newsletter</h3>
          <p>
            Cadastre seu e-mail e receba <span>novidades!</span>
          </p>
        </div>
        <div className="newsletter-input">
          <input type="text" placeholder="seu@email.com.br" />
        </div>
        <div className="newsletter-button">
          <button type="submit">Cadastrar</button>
        </div>
      </div>
      <div className="footer-content">
        <div className="footer-logo-container">
          <img className="footer-logo" src={logo} alt="Logo Serie" />
        </div>
        <div className="footer-about">
          <h3 className="footer-title-links">Precisa de ajuda?</h3>
          <ul>
            <a className="footer-link" href="#">
              Sobre
            </a>
            <a className="footer-link" href="#">
              Politicas da Loja
            </a>
            <a className="footer-link" href="#">
              Politicas de Privacidade
            </a>
            <a className="footer-link" href="#">
              Contato
            </a>
          </ul>
        </div>
        <div className="footer-social">
          <h3 className="footer-title-social">redes sociais</h3>
          <ul>
            <a className="footer-link" href="#">
              <img
                className="social-icone"
                src={IconInstagram}
                alt="Instagram link"
              />
            </a>
            <a className="footer-link" href="#">
              <img
                className="social-icone"
                src={IconFacebook}
                alt="Facebook link"
              />
            </a>
          </ul>
        </div>
      </div>
      <div className="copyright-container">
        <div className="content-logo-container">
        <div className="copyright-logo">
          <img className="logo-copyright-1" src={logoFbits} alt="Logo Fbits" />
        </div>
        <div className="copyright-logo">
          <img className="logo-copyright-2" src={logoSerie} alt="Logo Serie" />
        </div>
        </div>
        <div className="copyright-text">
          <p>@2023 Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
};
