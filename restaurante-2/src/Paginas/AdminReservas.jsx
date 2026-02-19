import React, { useState, useEffect } from "react";
import "./AdminReservas.css";

const AdminReservas = () => {
  const [reservas, setReservas] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargarDatos = () => {
      const datosGuardados = localStorage.getItem("db_reservas");
      if (datosGuardados) {
        setReservas(JSON.parse(datosGuardados));
      }
      setCargando(false);
    };
    cargarDatos();
  }, []);

  const actualizarEstadoReserva = (id, nuevoEstado) => {
    const nuevasReservas = reservas.map((res) => {
      if (res.id === id) {
        return { ...res, estadoAdmin: nuevoEstado };
      }
      return res;
    });

    setReservas(nuevasReservas);

    localStorage.setItem("db_reservas", JSON.stringify(nuevasReservas));

    alert(
      `Reserva ${nuevoEstado === "confirmada" ? "CONFIRMADA" : "CANCELADA"} con éxito`,
    );
  };

  if (cargando)
    return (
      <div className="admin-container">
        <p className="text-white">Cargando...</p>
      </div>
    );

  return (
    <div className="admin-container">
      <h1 className="admin-title">Panel de Control:</h1>

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
              const status = res.estadoAdmin;
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
                    <strong>
                      {res.cliente?.nombres} {res.cliente?.apellidos}
                    </strong>
                  </td>
                  <td>
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
                      onClick={() =>
                        actualizarEstadoReserva(res.id, "confirmada")
                      }
                      disabled={status === "confirmada"}
                    >
                      {status === "confirmada" ? "Confirmada" : "Confirmar"}
                    </button>
                    <button
                      className="btn-cancelar"
                      onClick={() =>
                        actualizarEstadoReserva(res.id, "cancelada")
                      }
                      disabled={status === "cancelada"}
                    >
                      {status === "cancelada" ? "Cancelada" : "Cancelar"}
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
