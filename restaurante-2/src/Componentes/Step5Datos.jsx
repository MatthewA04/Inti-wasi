import { useState, useEffect, memo } from "react";
import { useReserva } from "../Data/ReservaContext.jsx";

const Step5Datos = memo(() => {
  const { state, updateCliente, nextStep } = useReserva();
  const { cliente } = state.formData;
  const [loading, setLoading] = useState(false);
  const [isAutoFilled, setIsAutoFilled] = useState(false);

  // SEGURIDAD: Token desde variable de entorno
  const API_TOKEN = import.meta.env.VITE_API_TOKEN;

  const validarEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Validación completa para habilitar el botón
  const formularioValido = () =>
    cliente.numeroDocumento.length >= 8 &&
    cliente.nombres.trim().length > 2 &&
    cliente.apellidos.trim().length > 2 &&
    validarEmail(cliente.correo) &&
    cliente.celular.length >= 9;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "numeroDocumento" || name === "celular") {
      const soloNumeros = value.replace(/\D/g, "");
      if (name === "numeroDocumento" && soloNumeros.length > 12) return;
      if (name === "celular" && soloNumeros.length > 9) return;
      updateCliente({ [name]: soloNumeros });
      if (name === "numeroDocumento") setIsAutoFilled(false);
    } else {
      updateCliente({ [name]: value });
    }
  };

  useEffect(() => {
    const consultarDNI = async () => {
      if (!API_TOKEN) return;
      if (
        cliente.tipoDocumento === "DNI" &&
        cliente.numeroDocumento.length === 8
      ) {
        setLoading(true);
        try {
          const res = await fetch(
            `https://apiperu.dev/api/dni/${cliente.numeroDocumento}?api_token=${API_TOKEN}`,
          ).then((r) => r.json());

          if (res.success) {
            updateCliente({
              nombres: res.data.nombres,
              apellidos: `${res.data.apellido_paterno} ${res.data.apellido_materno}`,
            });
            setIsAutoFilled(true);
          }
        } catch (e) {
          console.error("Error API:", e);
          setIsAutoFilled(false);
        } finally {
          setLoading(false);
        }
      }
    };
    consultarDNI();
  }, [cliente.numeroDocumento, cliente.tipoDocumento]);

  return (
    <div className="container text-white mb-5" style={{ maxWidth: "800px" }}>
      <h2 className="mb-4 titulo-form">Datos del cliente</h2>
      <form className="row g-4">
        {/* TIPO DE DOCUMENTO */}
        <div className="col-md-6">
          <label className="form-label small text-uppercase">
            Tipo de documento
          </label>
          <select
            className="form-select input-datos"
            name="tipoDocumento"
            value={cliente.tipoDocumento}
            onChange={handleChange}
          >
            <option value="DNI">DNI</option>
            <option value="Pasaporte">Pasaporte</option>
            <option value="Carnet Ext.">Carnet Ext.</option>
          </select>
        </div>

        {/* NÚMERO DE DOCUMENTO */}
        <div className="col-md-6">
          <label className="form-label small text-uppercase">
            Número {loading && " (Validando...)"}
          </label>
          <input
            type="text"
            className="form-control input-datos"
            name="numeroDocumento"
            value={cliente.numeroDocumento}
            onChange={handleChange}
            required
          />
        </div>

        {/* NOMBRES */}
        <div className="col-md-6">
          <label className="form-label small text-uppercase">Nombres *</label>
          <input
            type="text"
            className="form-control input-datos"
            name="nombres"
            value={cliente.nombres}
            onChange={handleChange}
            readOnly={isAutoFilled}
            required
          />
        </div>

        {/* APELLIDOS */}
        <div className="col-md-6">
          <label className="form-label small text-uppercase">Apellidos *</label>
          <input
            type="text"
            className="form-control input-datos"
            name="apellidos"
            value={cliente.apellidos}
            onChange={handleChange}
            readOnly={isAutoFilled}
            required
          />
        </div>

        {/* CORREO */}
        <div className="col-12">
          <label className="form-label small text-uppercase">Correo *</label>
          <input
            type="email"
            className="form-control input-datos"
            name="correo"
            value={cliente.correo}
            onChange={handleChange}
            required
          />
        </div>

        {/* CELULAR */}
        <div className="col-md-6">
          <label className="form-label small text-uppercase">Celular *</label>
          <input
            type="text"
            className="form-control input-datos"
            name="celular"
            value={cliente.celular}
            onChange={handleChange}
            required
          />
        </div>

        {/* OCASIÓN */}
        <div className="col-md-6">
          <label className="form-label small text-uppercase">Ocasión</label>
          <input
            type="text"
            className="form-control input-datos"
            name="ocasion"
            value={cliente.ocasion}
            onChange={handleChange}
            placeholder="Ej: Aniversario"
          />
        </div>

        {/* REQUERIMIENTOS ADICIONALES */}
        <div className="col-12">
          <label className="form-label small text-uppercase">
            Requerimientos Adicionales
          </label>
          <textarea
            className="form-control input-datos"
            rows="2"
            name="requerimientos"
            value={cliente.requerimientos}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* ALERGIAS */}
        <div className="col-12">
          <label className="form-label small text-uppercase">
            Intolerancias o Alergias
          </label>
          <textarea
            className="form-control input-datos"
            rows="2"
            name="alergias"
            value={cliente.alergias}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* BOTÓN DE ACCIÓN */}
        <div className="col-12 text-center mt-5">
          <button
            type="button"
            className="btn px-5 py-2 btn-outline-light text-uppercase"
            onClick={nextStep}
            disabled={!formularioValido()}
          >
            Continuar
          </button>
        </div>
      </form>
    </div>
  );
});

export default Step5Datos;
