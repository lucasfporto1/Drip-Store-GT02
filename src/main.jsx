import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Produtos from "./pages/Produtos.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import CadastroCriarConta from "./pages/CadastroCriarConta.jsx";
import CadastroCompleto from "./pages/CadastroCompleto.jsx";
import MinhasInformacoes from "./pages/MinhaInformacoes.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FinalPagamento from "./pages/FinalPagamento.jsx";
import MeusPedidos from "./pages/MeusPedidos.jsx";
import ConfiguracaoCompra from "./pages/ConfiguracaoCompra.jsx";
import DetalheProd from "./pages/detalheProd.jsx";
import MeuCarrinhoPage from "./pages/MeuCarrinhoPage.jsx";
import LayoutWrapper from "./components/LayoutWrapper.jsx";
import HamburguerPedidos from "./pages/HamburguerPedidos.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/configuracaoCompra" element={<ConfiguracaoCompra />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cadastroCriarConta" element={<CadastroCriarConta />} />
          <Route path="/cadastroCompleto" element={<CadastroCompleto />} />
          <Route path="/minhasinformacoes" element={<MinhasInformacoes />} />
          <Route path="/finalPagamento" element={<FinalPagamento />} />
          <Route path="/meuspedidos" element={<MeusPedidos />} />
          <Route path="/hamburguerPedidos" element={<HamburguerPedidos />} />
          <Route path="/detalhes" element={<DetalheProd />} />
          <Route path="/meucarrinho" element={<MeuCarrinhoPage />} />
        </Routes>
      </LayoutWrapper>
    </BrowserRouter>
  </StrictMode>
);
