import React from "react";
import { useNavigate } from "react-router-dom";
import "./MaintenancePage.css";

const MantenimientoPage = () => {
  const navigate = useNavigate();

  return (
    <div className="maintenance-container">
      <div className="content-wrapper">
        <div className="chef-icon">👨‍🍳</div>

        <h1 className="display-4 maintenance-title">Receta en Preparación</h1>

        <p className="lead maintenance-text">
          Estamos ajustando los ingredientes de esta página para que tu
          experiencia sea exquisita. ¡Volvemos pronto!
        </p>

        <div className="cooking-pot"></div>

        <div className="mt-4">
          <button className="btn btn-return" onClick={() => navigate("/")}>
            Volver al Menú Principal
          </button>
        </div>
      </div>
    </div>
  );
};

export default MantenimientoPage;
