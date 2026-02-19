import { useState, useMemo, memo } from "react";
import { useReserva } from "../Data/ReservaContext";

const Step3Fecha = memo(() => {
  const { state, updateForm, nextStep } = useReserva();
  const [indiceMes, setIndiceMes] = useState(0);

  const listaMeses = [
    { nombre: "FEBRERO", numero: 1, anio: 2026 },
    { nombre: "MARZO", numero: 2, anio: 2026 },
    { nombre: "ABRIL", numero: 3, anio: 2026 },
    { nombre: "MAYO", numero: 4, anio: 2026 },
    { nombre: "JUNIO", numero: 5, anio: 2026 },
  ];

  const horariosTotales = [
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
  const diasSemana = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

  const esFechaBloqueada = (dia, mesObj) => {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    const fechaComparar = new Date(mesObj.anio, mesObj.numero, dia);
    if (fechaComparar < hoy) return true;

    const fechaID = `${mesObj.anio}-${String(mesObj.numero + 1).padStart(2, "0")}-${String(dia).padStart(2, "0")}`;
    const reservas = JSON.parse(localStorage.getItem("db_reservas")) || [];
    const ocupados = reservas.filter((r) => r.fecha === fechaID).length;
    return ocupados >= horariosTotales.length;
  };

  const renderizarMes = (mesObj) => {
    // Optimizamos el cálculo de los días del mes
    const { espaciosVacios, totalDias } = useMemo(() => {
      const primerDiaSemana = new Date(mesObj.anio, mesObj.numero, 1).getDay();
      const vacios = primerDiaSemana === 0 ? 6 : primerDiaSemana - 1;
      const total = new Date(mesObj.anio, mesObj.numero + 1, 0).getDate();
      return { espaciosVacios: vacios, totalDias: total };
    }, [mesObj.anio, mesObj.numero]);

    return (
      <div className="calendario-bloque">
        <h4 className="calendario-mes-titulo">
          {mesObj.nombre} {mesObj.anio}
        </h4>
        <div className="calendario-dias-semana">
          {diasSemana.map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>
        <div className="calendario-rejilla">
          {Array(espaciosVacios)
            .fill(null)
            .map((_, i) => (
              <div key={`v-${i}`} />
            ))}
          {Array.from({ length: totalDias }, (_, i) => i + 1).map((dia) => {
            const fechaStr = `${mesObj.anio}-${String(mesObj.numero + 1).padStart(2, "0")}-${String(dia).padStart(2, "0")}`;
            const bloqueado = esFechaBloqueada(dia, mesObj);
            const estaSeleccionado = state.formData.fecha === fechaStr;

            return (
              <button
                key={dia}
                type="button"
                className={`calendario-dia ${estaSeleccionado ? "activo" : ""} ${bloqueado ? "bloqueado" : ""}`}
                disabled={bloqueado}
                onClick={() => {
                  updateForm({ fecha: fechaStr });
                  setTimeout(nextStep, 300);
                }}
              >
                {dia}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="calendario-seccion">
      <div className="calendario-header-flex">
        <h2 className="calendario-titulo-paso">FECHA</h2>
        <div className="calendario-nav">
          <button
            type="button"
            onClick={() => setIndiceMes(indiceMes - 1)}
            disabled={indiceMes === 0}
          >
            <span className="flecha-circular">&#8249;</span>
          </button>
          <button
            type="button"
            onClick={() => setIndiceMes(indiceMes + 1)}
            disabled={indiceMes >= listaMeses.length - 2}
          >
            <span className="flecha-circular">&#8250;</span>
          </button>
        </div>
      </div>
      <hr className="calendario-hr" />
      <div className="calendario-vista-doble">
        {renderizarMes(listaMeses[indiceMes])}
        {indiceMes + 1 < listaMeses.length &&
          renderizarMes(listaMeses[indiceMes + 1])}
      </div>
    </div>
  );
});
Step3Fecha.displayName = "Step3Fecha";
export default Step3Fecha;
