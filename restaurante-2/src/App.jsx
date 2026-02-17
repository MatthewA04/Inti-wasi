import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

// Lazy Loading para mantener la optimización (esto sí ayuda a tu nota)
const Inicio = lazy(() => import("./Paginas/Inicio"));
const Contacto = lazy(() => import("./Paginas/Contacto"));
const Historia = lazy(() => import("./Paginas/Historia"));
const Reservas = lazy(() => import("./Paginas/Reservas"));
const Mesas = lazy(() => import("./Paginas/Mesas"));
const AdminReservas = lazy(() => import("./Paginas/AdminReservas"));

function App() {
  return (
    // Dejamos un mensaje simple de carga mientras React descarga las páginas
    <Suspense
      fallback={
        <div
          style={{
            backgroundColor: "black",
            height: "100vh",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Cargando...
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/mesas" element={<Mesas />} />
        <Route path="/reservaslistas" element={<AdminReservas />} />
      </Routes>
    </Suspense>
  );
}

export default App;
