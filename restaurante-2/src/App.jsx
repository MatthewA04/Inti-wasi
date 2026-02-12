import { useEffect, useState, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingSpinner from "./Componentes/Carga";

// Lazy Loading para optimización avanzada
const Inicio = lazy(() => import("./Paginas/Inicio"));
const Contacto = lazy(() => import("./Paginas/Contacto"));
const Historia = lazy(() => import("./Paginas/Historia"));
const Reservas = lazy(() => import("./Paginas/Reservas"));
const Mesas = lazy(() => import("./Paginas/Mesas"));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imagenesCriticas = [
      "/Media/hero-bg.jpg",
      "/Media/Sabores-del-Altiplano.png",
      "/Media/logo-oscuro.png",
      "/Media/banner.png",
      "/Media/imagen-reserva-lateral.png",
    ];

    const precargarImagenes = (urls) => {
      const promesas = urls.map((url) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = url;
          img.onload = resolve;
          img.onerror = resolve;
        });
      });
      return Promise.all(promesas);
    };

    Promise.all([
      precargarImagenes(imagenesCriticas),
      new Promise((resolve) => setTimeout(resolve, 2500)),
    ]).then(() => {
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/mesas" element={<Mesas />} />
      </Routes>
    </Suspense>
  );
}

export default App;
