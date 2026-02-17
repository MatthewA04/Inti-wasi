import Header from "../Componentes/HeaderComponente.jsx";
import Footer from "../Componentes/FooterComponente.jsx";
import ExperienciasAcordion from "../Componentes/ExperienciaAcordion.jsx";
import bannerlateral from "../Media/imagen-reserva-lateral.png";
import { Outlet, Link } from "react-router-dom";

function Reservas() {
  return (
    <>
      <Header />
      <section>
        <div className="columns-2 ">
          <div className="col reserva">
            <ExperienciasAcordion />
            <div className="center-boton">
              <Link to="/mesas" className="boton-reserva">
                Reservar ahora
              </Link>
            </div>
          </div>
          <div className="col p-0">
            <img
              className="imagen-lateral"
              src={bannerlateral}
              alt="imagen de Comida"
            ></img>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Reservas;
