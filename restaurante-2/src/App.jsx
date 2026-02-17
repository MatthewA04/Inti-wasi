import { useEffect, useState, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingSpinner from "./Componentes/Carga";

// 1. IMPORTAMOS LAS IMÁGENES (Esto soluciona el 404)
import logo from "./Media/logo-oscuro.png";
import altiplano from "./Media/Sabores-del-Altiplano.png";
import hero from "./Media/hero-bg.jpg";
import banner from "./Media/banner.png";
import lateral from "./Media/imagen-reserva-lateral.png";

// Lazy Loading
const Inicio = lazy(() => import("./Paginas/Inicio"));
const Contacto = lazy(() => import("./Paginas/Contacto"));
const Historia = lazy(() => import("./Paginas/Historia"));
const Reservas = lazy(() => import("./Paginas/Reservas"));
const Mesas = lazy(() => import("./Paginas/Mesas"));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 2. Usamos las variables importadas, no strings de texto
    const imagenesCriticas = [logo, altiplano, hero, banner, lateral];

    const precargarImagenes = (urls) => {
      const promesas = urls.map((url) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = url;
          img.onload = resolve;
          img.onerror = resolve; // Si una falla, resolvemos igual para no trabar la web
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
