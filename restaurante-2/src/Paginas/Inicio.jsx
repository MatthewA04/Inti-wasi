import Header from "../Componentes/HeaderComponente.jsx";
import Footer from "../Componentes/FooterComponente.jsx";
import Experiencias from "../Componentes/Experiencias.jsx";
import Banners from "../Componentes/Banners.jsx";
import ImgPlato1 from "../Media/camino-del-sol.png";
import ImgPlato2 from "../Media/Sabores-del-Altiplano.png";
import ImgPlato3 from "../Media/Ritual-del-maiz-sagrado.png";

function Inicio() {
  return (
    <div>
      <Header />
      <section>
        <Banners />
      </section>
      <section className="experiencias">
        <h1 className="titulos">Experiencias</h1>
        <article className="experiencias-grid margin-bottom-l">
          <Experiencias
            imgExperciencias={ImgPlato1}
            tituloExperiencia="Camino del Sol"
          />
          <Experiencias
            imgExperciencias={ImgPlato2}
            tituloExperiencia="Sabores del Altiplano"
          />
          <Experiencias
            imgExperciencias={ImgPlato3}
            tituloExperiencia="Ritual del Maíz Sagrado"
          />
        </article>
        <h2 className="titulos">Conoce a Nuestro Chef — Diego Aramís</h2>
      </section>

      <Footer />
    </div>
  );
}
export default Inicio;
