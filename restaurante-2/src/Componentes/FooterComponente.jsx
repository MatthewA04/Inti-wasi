import footerImg from "/Media/Footer_intiwasi.png";
import facebookImg from "/Media/Facebook.png";
import instagramImg from "/Media/Instagram.png";
import "./FooterComponente.css";

export default function Footer() {
  return (
    <footer>
      {" "}
      <div className="footer">
        <a href="#">
          <img src={footerImg} className="footer-logo" alt="Logo Inti Wasi" />
        </a>
        <div className="footer-container">
          <div className="footer-left">
            <a href="#">
              <p>Política de Privacidad</p>
            </a>
            <a href="#">
              <p>Términos & Condiciones</p>
            </a>
            <a href="#">
              <p>Libro de Reclamaciones</p>
            </a>
          </div>

          <div className="footer-center">
            <p>Direccion , direccion, direccion Perú</p>
            <p>+51 999-999-999 / reservas@pagina.com.pe</p>

            <div className="footer-social">
              <a href="https://instagram.com/">
                <img src={facebookImg} alt="Facebook" />
              </a>
              <a href="https://facebook.com/">
                <img src={instagramImg} alt="Instagram" />
              </a>
            </div>
          </div>

          <div className="footer-right">
            <p>Lunes a Sábado</p>
            <p>Almuerzo 12:45 – 13:30</p>
            <p>Cena 19:00 – 20:30</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
