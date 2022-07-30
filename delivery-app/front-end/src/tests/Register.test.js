import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import Register from "../pages/Register";
import theme from "../styles/theme";

describe("Testes da pagina Registro", () => {
  it("Verifica se a tela de registro existe um input para o usuario cadastrar um nome", () => {
    render(
      <ThemeProvider theme={theme}>
        <Register />
      </ThemeProvider>
    );

    const labelNome = screen.getByRole("heading", { name: /nome/i });
    const InputNome = screen.getByTestId("common_register__input-name");

    expect(labelNome).toBeInTheDocument();
    expect(InputNome).toBeInTheDocument();
  });

  it("Verifica se a tela de registro existe um input para o usuario cadastrar um email", () => {
    render(
      <ThemeProvider theme={theme}>
        <Register />
      </ThemeProvider>
    );

    const labelEmail = screen.getByRole("heading", { name: /email/i });
    const InputEmail = screen.getByTestId("common_register__input-email");

    expect(labelEmail).toBeInTheDocument();
    expect(InputEmail).toBeInTheDocument();
  });

  it("Verifica se a tela de registro existe um input para o usuario cadastrar uma senha", () => {
    render(
      <ThemeProvider theme={theme}>
        <Register />
      </ThemeProvider>
    );

    const labelSenha = screen.getByRole("heading", { name: /email/i });
    const InputSenha = screen.getByTestId("common_register__input-password");

    expect(labelSenha).toBeInTheDocument();
    expect(InputSenha).toBeInTheDocument();
  });
});
