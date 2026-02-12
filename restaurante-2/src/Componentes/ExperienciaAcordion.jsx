const experienciasData = [
  {
    titulo: "Experiencia Camino del Sol",
    excerp:
      "Un recorrido por sabores tradicionales que honran la conexión entre la tierra y el Inti (sol). Incluye platos emblemáticos reinterpretados con técnicas modernas.",
    descripcion: `La experiencia Camino del Sol es un viaje sensorial inspirado en los antiguos caminos que unían los pueblos del Tahuantinsuyo bajo la luz del Inti.

Cada plato rinde homenaje a una región del Perú, mostrando cómo los ingredientes de costa, sierra y selva se encuentran en armonía.

El menú inicia con un tributo a la frescura del litoral, para luego ascender hacia los sabores robustos y cálidos de los Andes, y culminar con notas dulces y aromáticas de la Amazonía.

Es una experiencia perfecta para quienes desean descubrir la esencia del Perú en una secuencia equilibrada, moderna y profundamente conectada con nuestra identidad.`,
    precio: "S/ 189",
  },
  {
    titulo: "Experiencia Sabores del Altiplano",
    excerp:
      "Una propuesta que reúne la riqueza de ingredientes de altura, como la quinua, la alpaca y tubérculos nativos. Ideal para quienes buscan una vivencia auténtica y ancestral.",
    descripcion: `Sabores del Altiplano exalta la nobleza de los ingredientes que crecen por encima de los 3,500 metros. Es una experiencia intensa, profunda y espiritual, creada para quienes desean un menú más técnico, sofisticado y lleno de tradición.
s
Aquí la protagonista es la biodiversidad del altiplano: tubérculos nativos, carnes de crianza responsable y granos ancestrales presentan su mejor versión gracias a técnicas contemporáneas.

Cada plato lleva consigo el espíritu de resistencia y abundancia de los pueblos andinos, resaltando temperaturas, texturas terrosas y fondos potentes combinados con elegancia y minimalismo.`,
    precio: "S/ 169",
  },
  {
    titulo: "Experiencia Ritual del Maíz Sagrado",
    excerp:
      "Un menú dedicado al maíz en sus distintas variedades y preparaciones. Una celebración de uno de los cultivos más importantes del mundo andino.",
    descripcion: `El Ritual del Maíz Sagrado es un homenaje contemporáneo al cultivo que sostiene la vida andina desde tiempos ancestrales.

Todo el menú gira en torno a las variedades de maíz peruano: morado, blanco gigante del Cusco, chulpe y más. Es una experiencia profundamente simbólica, diseñada para quienes aman la gastronomía conceptual y desean vivir algo único.

Aquí, el maíz no es solo un ingrediente, sino un relato. Cada plato muestra una faceta distinta: dulce y ahumada, crujiente, tostada, líquida o fermentada.

El equilibrio entre creatividad y tradición hace que esta experiencia sea una de las más exclusivas de Inti Wasi.`,
    precio: "S/ 149",
  },
];

import { useState } from "react";

export default function ExperienciasAcordion() {
  const [activo, setActivo] = useState(null);

  const toggle = (index) => {
    setActivo(activo === index ? null : index);
  };

  return (
    <div className="mb-4">
      {experienciasData.map((exp, index) => (
        <div key={index} className="experiencia-aco">
          <div className="experiencia-header" onClick={() => toggle(index)}>
            <div>
              <h3 className="titulo-experciencia">{exp.titulo}</h3>
              <p className="excerp-experciencia">{exp.excerp}</p>
            </div>
            <span>{activo === index ? "▲" : "▼"}</span>
          </div>

          {activo === index && (
            <div className="experiencia-body">
              <p>{exp.descripcion}</p>
              <p className="precio">{exp.precio} POR PERSONA</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
