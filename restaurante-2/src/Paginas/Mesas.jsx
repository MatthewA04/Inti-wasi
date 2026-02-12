import { memo } from "react";
import { useReserva } from "../Data/ReservaContext";
import ProgressBar from "../Componentes/ProgressBar.jsx";
import Step1Experiencias from "../Componentes/Step1Experiencias.jsx";
import Step2Personas from "../Componentes/Step2Personas.jsx";
import Step3Fecha from "../Componentes/Step3Fecha.jsx";
import Step4Hora from "../Componentes/Step4Hora.jsx";
import Step5Datos from "../Componentes/Step5Datos.jsx";
import StepFinal from "../Componentes/StepFinal.jsx";
import Header from "../Componentes/HeaderComponente.jsx";
import Footer from "../Componentes/FooterComponente.jsx";
import "../Index.css";

const Mesas = memo(() => {
  const { state } = useReserva();
  const { step } = state;

  return (
    <>
      <Header />
      <div className="formulario-1">
        {/* ProgressBar ya no necesita props de estado, consumirá del contexto */}
        <ProgressBar />

        <div className="contenedor-partes">
          {step === 1 && <Step1Experiencias />}
          {step === 2 && <Step2Personas />}
          {step === 3 && <Step3Fecha />}
          {step === 4 && <Step4Hora />}
          {step === 5 && <Step5Datos />}
          {step === 6 && <StepFinal />}
        </div>
      </div>
      <Footer />
    </>
  );
});

export default Mesas;
