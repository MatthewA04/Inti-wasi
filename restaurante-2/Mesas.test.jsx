import { render, screen } from "@testing-library/react";
import { ReservaProvider } from "./Data/ReservaContext";
import Mesas from "./Paginas/Mesas";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("Debe renderizar el título de experiencias al cargar el componente", () => {
  render(
    <ReservaProvider>
      <BrowserRouter>
        <Mesas />
      </BrowserRouter>
    </ReservaProvider>,
  );

  // Verificamos que el primer paso sea visible
  const titulo = screen.getByText(/Elige tu Experiencia/i);
  expect(titulo).toBeInTheDocument();
});
