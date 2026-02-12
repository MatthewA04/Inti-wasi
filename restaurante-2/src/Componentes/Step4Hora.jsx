import { memo } from "react";
import { useReserva } from "../Data/ReservaContext";

const Step4Hora = memo(() => {
  const { state, updateForm, nextStep } = useReserva();
  const horarios = [
    "3:00 PM",
    "3:15 PM",
    "3:30 PM",
    "4:00 PM",
    "4:15 PM",
    "4:30 PM",
    "5:00 PM",
    "5:15 PM",
    "6:15 PM",
    "6:45 PM",
    "7:15 PM",
    "8:30 PM",
  ];

  const reservas = JSON.parse(localStorage.getItem("db_reservas")) || [];
  const horarioOcupado = (hora) =>
    reservas.some((r) => r.fecha === state.formData.fecha && r.hora === hora);

  return (
    <div className="container text-white">
      <h2 className="mb-5 titulo-form">Selecciona una Hora</h2>
      <div className="row">
        {horarios.map((hora) => {
          const ocupado = horarioOcupado(hora);
          return (
            <div key={hora} className="col-6 col-md-3 mb-3">
              <div className="contenedor-tooltip">
                <button
                  className={`btn w-100 py-2 ${ocupado ? "btn-secondary opacity-50" : "btn-outline-light"}`}
                  disabled={ocupado}
                  onClick={() => {
                    updateForm({ hora });
                    nextStep();
                  }}
                >
                  {hora}
                </button>
                {ocupado && <span className="nube-tooltip">No disponible</span>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default Step4Hora;
