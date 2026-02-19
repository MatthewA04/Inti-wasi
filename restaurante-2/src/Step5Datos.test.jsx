import React from "react";
import { jest } from "@jest/globals";

jest.mock("./env.js", () => ({
  VITE_API_TOKEN: "token-de-prueba-seguro",
}));

import { render, screen } from "@testing-library/react";
import { ReservaProvider } from "./Data/ReservaContext.jsx";
import Step5Datos from "./Componentes/Step5Datos.jsx";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("El botón de continuar debe estar deshabilitado si el formulario está vacío", () => {
  render(
    <ReservaProvider>
      <BrowserRouter>
        <Step5Datos />
      </BrowserRouter>
    </ReservaProvider>,
  );

  const boton = screen.getByRole("button", { name: /continuar/i });
  expect(boton).toBeDisabled();
});
