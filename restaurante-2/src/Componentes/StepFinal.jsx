import { useEffect, useState, memo } from "react";
import { useReserva } from "../../Data/ReservaContext";
import { useNavigate } from "react-router-dom";

const StepFinal = memo(() => {
  const { state, resetReserva } = useReserva();
  const { formData } = state;
  const { cliente } = formData;
  const [numeroReserva, setNumeroReserva] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const reservasExistentes =
      JSON.parse(localStorage.getItem("db_reservas")) || [];
    const idFormateado = `#${String(reservasExistentes.length + 1).padStart(5, "0")}`;
    setNumeroReserva(idFormateado);

    localStorage.setItem(
      "db_reservas",
      JSON.stringify([
        ...reservasExistentes,
        {
          id: idFormateado,
          ...formData,
          fechaRegistro: new Date().toISOString(),
        },
      ]),
    );
  }, []);

  const handleFinalizar = () => {
    resetReserva();
    navigate("/");
  };

  const mensajeWhatsapp = `Ya tengo mi reserva.
  
Numero de reserva: ${numeroReserva}
Nombre: ${cliente.nombres} ${cliente.apellidos}
Documento: ${cliente.tipoDocumento} ${cliente.numeroDocumento}
Celular: ${cliente.celular}
Correo: ${cliente.correo}
Experiencia: ${formData.experiencia}
Fecha y Hora: ${formData.fecha} a las ${formData.hora}

Gracias.`;

  const linkWhatsapp = `https://wa.me/51960260194?text=${encodeURIComponent(mensajeWhatsapp)}`;

  return (
    <div className="confirmacion text-white">
      <div className="text-center">
        <h2 className="mb-4 titulo-form">
          Confirmación de Reserva – INTI WASI
        </h2>

        <div className="py-2 mb-3">
          <h4 className="mb-0">
            Número de reserva:{" "}
            <strong style={{ color: "#C5A059" }}>{numeroReserva}</strong>
          </h4>
        </div>

        <p className="mb-1">¡Tu reserva ha sido registrada con éxito!</p>
        <p className="mb-4">
          Gracias por elegir <strong>Inti Wasi</strong>, será un placer
          recibirte.
        </p>
      </div>

      <div className="text-start mx-auto" style={{ maxWidth: "600px" }}>
        <p className="mb-2 fw-bold">
          Para garantizar la mejor experiencia, toma en cuenta lo siguiente:
        </p>

        <p className="mb-1">
          📅 <strong>Confirmación previa obligatoria</strong>
        </p>
        <ul>
          <li>
            1 día antes de tu reserva recibirás un correo electrónico para
            confirmar tu asistencia.
          </li>
          <li>
            5 horas antes recibirás un segundo recordatorio para validar
            nuevamente tu presencia.
          </li>
        </ul>

        <p className="small mb-4 ">
          Es importante confirmar, ya que las reservas no confirmadas serán
          liberadas automáticamente.
        </p>

        <p className="mb-3">
          📞 <strong>Modificaciones o cancelaciones</strong>
        </p>
        <p>
          Si necesitas cancelar o reprogramar tu reserva, comunícate con
          nosotros con anticipación y ten en cuenta tu numero de reserva:
        </p>
        <ul>
          <li>– WhatsApp / Teléfono: +51 960 260 194</li>
          <li>– Correo: cancelar@intiwasi.com</li>
        </ul>

        <p className="small mt-4">
          Nuestro equipo estará encantado de ayudarte y asegurarse de que tu
          experiencia sea impecable.
        </p>
        <p className="mt-4 text-center fw-bold">
          ✨ Gracias por confiar en Inti Wasi.
        </p>
        <p className="text-center italic small mb-0">
          Te esperamos para brindarte una experiencia gastronómica de origen,
          tradición y calidez.
        </p>
      </div>

      <div className="mt-5 text-center d-flex flex-column align-items-center gap-3">
        <a
          href={linkWhatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="input-datos-button px-5"
        >
          Enviar reserva por WhatsApp
        </a>

        <button onClick={handleFinalizar} className="btn-finalizar-limpiar">
          Finalizar y Volver al Inicio
        </button>
      </div>
    </div>
  );
});

export default StepFinal;
