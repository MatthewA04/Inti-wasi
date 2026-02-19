import Header from "../Componentes/HeaderComponente.jsx";
import Footer from "../Componentes/FooterComponente.jsx";
import Experiencias from "../Componentes/Experiencias.jsx";
import Banners from "../Componentes/Banners.jsx";
import ImgPlato1 from "../Media/camino-del-sol.png";
import ImgPlato2 from "../Media/sabores-del-altiplano.png";
import ImgPlato3 from "../Media/ritual-del-maiz-sagrado.png";
import Chef from "../Media/chef.png";

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

        {/* Sección del Chef corregida */}
        <div className="container py-5 ">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <div className="pe-lg-4">
                <h2 className="display-5 fw-bold mb-4 texto">
                  Nuestro Chef Ejecutivo
                </h2>

                <p style={{ lineHeight: "1.8", textAlign: "justify" }}>
                  Diego Aramís es el chef ejecutivo de Inti Wasi. Nacido en
                  Cusco y formado en Lima, Diego combina la sabiduría culinaria
                  heredada de sus abuelos con influencias internacionales
                  adquiridas en sus años de estudio en Barcelona y Ciudad de
                  México.
                </p>

                <p style={{ lineHeight: "1.8", textAlign: "justify" }}>
                  Con más de 12 años de experiencia, se ha dedicado a investigar
                  ingredientes nativos y técnicas tradicionales que hoy plasma
                  en nuestras experiencias gastronómicas. Su filosofía es
                  simple: "Cocinar es honrar a nuestros ancestros y compartir su
                  historia en cada plato."
                </p>

                <p style={{ lineHeight: "1.8", textAlign: "justify" }}>
                  Diego ha colaborado con distintos proyectos de revalorización
                  de productos andinos y ha sido invitado a encuentros
                  gastronómicos donde ha representado la cocina peruana con
                  orgullo y creatividad. Su estilo combina lo rústico y lo
                  sofisticado, logrando platos que sorprenden sin perder la
                  autenticidad que define a Inti Wasi.
                </p>
              </div>
            </div>

            <div className="col-lg-5 text-center">
              <div className="position-relative d-inline-block">
                <img
                  src={Chef}
                  alt="Chef Diego Aramís"
                  className="img-fluid rounded-5 shadow-lg"
                  style={{
                    border: "1px solid rgba(255,255,255,0.1)",
                    objectFit: "cover",
                    maxHeight: "500px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Inicio;
