import React, { useState, useEffect } from "react";
import "./AdminReservas.css";

const AdminReservas = () => {
  const [reservas, setReservas] = useState([]);
  const [estadosFilas, setEstadosFilas] = useState({});

  // Cargar datos al montar el componente
  useEffect(() => {
    const datosGuardados = localStorage.getItem("db_reservas");
    if (datosGuardados) {
      setReservas(JSON.parse(datosGuardados));
    }
  }, []);

  const manejarEstado = (id, nuevoEstado) => {
    setEstadosFilas({
      ...estadosFilas,
      [id]: nuevoEstado,
    });
  };

  return (
    <div className="admin-container">
      <h1 className="admin-title">Panel de Control: /reservaslistas</h1>

      {reservas.length === 0 ? (
        <p className="text-white">No hay reservas registradas en el sistema.</p>
      ) : (
        <table className="reservas-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Cliente</th>
              <th>Contacto</th>
              <th>Fecha y Hora</th>
              <th>Pax</th>
              <th>Experiencia</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {reservas.map((res) => {
              const status = estadosFilas[res.id];
              const claseFila =
                status === "cancelada"
                  ? "fila-cancelada"
                  : status === "confirmada"
                    ? "fila-confirmada"
                    : "";

              return (
                <tr key={res.id} className={claseFila}>
                  <td>
                    <small>{res.id}</small>
                  </td>
                  <td>
                    {/* Corregido: nombres y apellidos en lugar de nombre */}
                    <strong>
                      {res.cliente?.nombres} {res.cliente?.apellidos}
                    </strong>
                  </td>
                  <td>
                    {/* Corregido: celular y correo en lugar de telefono y email */}
                    {res.cliente?.celular}
                    <br />
                    <small>{res.cliente?.correo}</small>
                  </td>
                  <td>
                    {res.fecha} a las {res.hora}
                  </td>
                  <td>{res.personas} pers.</td>
                  <td>{res.experiencia || "No seleccionada"}</td>
                  <td>
                    <button
                      className="btn-confirmar"
                      onClick={() => manejarEstado(res.id, "confirmada")}
                    >
                      Confirmar
                    </button>
                    <button
                      className="btn-cancelar"
                      onClick={() => manejarEstado(res.id, "cancelada")}
                    >
                      Cancelar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminReservas;
