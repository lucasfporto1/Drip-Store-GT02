import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import CadastroCriarConta from "./pages/CadastroCriarConta.jsx";
import CadastroCompleto from "./pages/CadastroCompleto.jsx";
import MinhasInformacoes from "./pages/MinhaImformacoes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MinhasInformacoes />
  </StrictMode>
);
