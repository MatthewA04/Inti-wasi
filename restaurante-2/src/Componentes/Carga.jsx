import React from "react";
import logo from "/Media/Footer_intiwasi.png";

const LoadingSpinner = () => {
  return (
    <div className="carga-fondo">
      <img src={logo} alt="Cargando..." className="cargando" />
    </div>
  );
};

export default LoadingSpinner;
