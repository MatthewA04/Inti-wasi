import React, { useState } from "react";
import { useReserva } from "../Data/ReservaContext";
import "./AdminReservas.css";

const AdminReservas = () => {
  const { state } = useReserva();

  // Estado para controlar qué filas están confirmadas o canceladas localmente
  const [estadosFilas, setEstadosFilas] = useState({});

  const manejarEstado = (index, nuevoEstado) => {
    setEstadosFilas({
      ...estadosFilas,
      [index]: nuevoEstado,
    });
  };

  // Obtenemos la lista de reservas del contexto.
  // Si state.reservasRealizadas no existe, mostramos al menos la reserva actual.
  const listaReservas =
    state.reservasRealizadas || (state.cliente?.nombre ? [state] : []);

  return (
    <div className="admin-container">
      <h1 className="admin-title">Panel de Control: /reservaslistas</h1>

      {listaReservas.length === 0 ? (
        <p>No hay reservas registradas actualmente.</p>
      ) : (
        <table className="reservas-table">
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Contacto</th>
              <th>Fecha y Hora</th>
              <th>Pax</th>
              <th>Experiencia</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {listaReservas.map((res, index) => {
              const status = estadosFilas[index];
              const claseFila =
                status === "cancelada"
                  ? "fila-cancelada"
                  : status === "confirmada"
                    ? "fila-confirmada"
                    : "";

              return (
                <tr key={index} className={claseFila}>
                  <td>
                    <strong>{res.cliente?.nombre}</strong>
                  </td>
                  <td>
                    {res.cliente?.telefono}
                    <br />
                    <small>{res.cliente?.email}</small>
                  </td>
                  <td>
                    {res.fecha} a las {res.hora}
                  </td>
                  <td>{res.personas} pers.</td>
                  <td>{res.experiencia || "No seleccionada"}</td>
                  <td>
                    <button
                      className="btn-confirmar"
                      onClick={() => manejarEstado(index, "confirmada")}
                    >
                      Mesa Confirmada
                    </button>
                    <button
                      className="btn-cancelar"
                      onClick={() => manejarEstado(index, "cancelada")}
                    >
                      Mesa Cancelada
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
