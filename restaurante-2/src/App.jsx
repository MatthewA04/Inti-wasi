import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/historia" element={<Historia />} />
      <Route path="/reservas" element={<Reservas />} />
      <Route path="/mesas" element={<Mesas />} />
    </Routes>
  );
}

export default App;
