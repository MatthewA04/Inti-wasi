import { Route, Routes } from "react-router-dom";
import Contacto from "./Paginas/Contacto";
import Historia from "./Paginas/Historia";
import Inicio from "./Paginas/Inicio";
import Reservas from "./Paginas/Reservas";

import Mesas from "./Paginas/Mesas";

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
