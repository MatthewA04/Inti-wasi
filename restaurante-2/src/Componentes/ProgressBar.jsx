import { memo } from "react";
import { useReserva } from "../Data/ReservaContext";

const ProgressBar = memo(() => {
  const { state, setStep } = useReserva();
  const currentStep = state.step;

  const steps = [
    { id: 1, label: "EXPERIENCIAS", icon: "📋" },
    { id: 2, label: "PERSONAS", icon: "👥" },
    { id: 3, label: "FECHA", icon: "📅" },
    { id: 4, label: "HORA", icon: "🕜" },
    { id: 5, label: "DATOS", icon: "💬" },
  ];

  const stepParaVisualizacion = currentStep > 5 ? 5 : currentStep;

  return (
    <div className="progreso mb-5 px-4">
      <div
        className="position-relative d-flex justify-content-between align-items-center"
        style={{ maxWidth: "1000px", margin: "0 auto" }}
      >
        <div
          className="position-absolute top-50 start-0 translate-middle-y"
          style={{
            height: "1px",
            width: "100%",
            backgroundColor: "#ccc",
            zIndex: 0,
          }}
        ></div>
        <div
          className="position-absolute top-50 start-0 translate-middle-y"
          style={{
            height: "2px",
            width: `${((stepParaVisualizacion - 1) / (steps.length - 1)) * 100}%`,
            backgroundColor: "#000",
            zIndex: 1,
            transition: "width 0.4s",
          }}
        ></div>

        {steps.map((s) => (
          <div
            key={s.id}
            className="d-flex flex-column align-items-center"
            style={{
              zIndex: 2,
              cursor: s.id < currentStep ? "pointer" : "default",
            }}
            onClick={() => s.id < currentStep && setStep(s.id)}
          >
            <div className="d-flex align-items-center mb-2">
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: "600",
                  color: stepParaVisualizacion >= s.id ? "#000" : "#999",
                }}
              >
                {s.label}
              </span>
            </div>
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor:
                  stepParaVisualizacion >= s.id ? "#000" : "#ccc",
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
});
ProgressBar.displayName = "Progreso Barra";
export default ProgressBar;
