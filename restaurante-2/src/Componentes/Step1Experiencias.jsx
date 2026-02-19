import { useReserva } from "../Data/ReservaContext.jsx";
import { experiencias } from "../Data/Experiencias";
import { memo } from "react";

const Step1Experiencias = memo(() => {
  const { updateForm, nextStep } = useReserva();

  const seleccionarExperiencia = (titulo) => {
    updateForm({ experiencia: titulo });
    nextStep();
  };

  return (
    <div className="container">
      <h2 className="titulo-form">Elige tu Experiencia</h2>
      <div>
        {experiencias.map((exp) => (
          <div key={exp.id} className="mb-3">
            <div
              className="tarjeta-experiencia"
              onClick={() => seleccionarExperiencia(exp.titulo)}
            >
              <div>
                <h5 className="sub-titulo-expe">{exp.titulo}</h5>
                <p>{exp.except}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
Step1Experiencias.displayName = "Step1Experiencias";
export default Step1Experiencias;
