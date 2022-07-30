import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { ThemeProvider } from "styled-components";
import App from "../App";
import Login from "../pages/Login";
import theme from "../styles/theme";
import renderWithRouter from "./RenderWithRouter";

// https://stackoverflow.com/questions/71470072/react-testing-library-and-styled-components-cannot-read-properties-of-undefine
describe("Testes da pagina Login", () => {
  it("Verifica se a rota da pagina de Login esta correta", () => {
    const { history } = renderWithRouter(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    );

    expect(history.location.pathname).toBe("/login");
  });

  it("Verifica se a tela de login existe um input para o usuario inserir o email", () => {
    render(
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    );

    const labelEmail = screen.getByRole("heading", { name: /email/i });
    const InputEmail = screen.getByTestId("common_login__input-email");

    expect(labelEmail).toBeInTheDocument();
    expect(InputEmail).toBeInTheDocument();
  });

  it("Verifica se a tela de login existe um input para o usuario inserir a senha", () => {
    render(
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    );

    const labelSenha = screen.getByRole("heading", { name: /senha/i });
    const InputSenha = screen.getByTestId("common_login__input-password");

    expect(labelSenha).toBeInTheDocument();
    expect(InputSenha).toBeInTheDocument();
  });

  it("Verifica se ao clicar em 'ainda não tenho conta' o usuario e redirecionado para a tela de registro", () => {
    const { history } = renderWithRouter(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    );

    const buttonRegister = screen.getByTestId("common_login__button-register");

    userEvent.click(buttonRegister);

    expect(history.location.pathname).toBe("/register");
  });
});
