import { memo } from "react";
import { useReserva } from "../Data/ReservaContext";

const Step2Personas = memo(() => {
  const { updateForm, nextStep } = useReserva();

  const seleccionarPersonas = (cantidad) => {
    updateForm({ personas: cantidad });
    nextStep();
  };

  return (
    <>
      <h2 className="titulo-form">Número de Personas</h2>
      <div className="d-flex gap-3 mb-4">
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            className="boton-personas"
            onClick={() => seleccionarPersonas(num)}
          >
            {num}
          </button>
        ))}
      </div>
      <p className="nota">
        Para reservas de 6 o más personas, comunícate a{" "}
        <strong className="text-white">reservas@intiwasi.com</strong>
      </p>
    </>
  );
});
Step2Personas.displayName = "Step2Personas";
export default Step2Personas;
