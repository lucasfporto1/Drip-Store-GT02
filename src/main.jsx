import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Produtos from "./pages/Produtos.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import CadastroCriarConta from "./pages/CadastroCriarConta.jsx";
import CadastroCompleto from "./pages/CadastroCompleto.jsx";
import MinhasInformacoes from "./pages/MinhaImformacoes.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import FinalPagamento from './pages/FinalPagamento.jsx';
import MinhaInformacao from './pages/MinhaInformacao.jsx';
import HambuguerInformacao from './pages/HambuguerInformacao.jsx';
import ConfiguracaoCompra from './pages/configuracaoCompra.jsx';
import DetalheProd from "./pages/detalheProd.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/configuracaoCompra" element={<ConfiguracaoCompra />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastroCriarConta" element={<CadastroCriarConta />} />
        <Route path="/cadastroCompleto" element={<CadastroCompleto />} />
        <Route path="/minhasInformacoes" element={<MinhasInformacoes />} />
        <Route path="/finalPagamento" element={<FinalPagamento />} />
        <Route path="/minhainformacao" element={<MinhaInformacao />} />
        <Route path="/hambuguerInformacao" element={<HambuguerInformacao />} />
        <Route path="/detalhes" element={<DetalheProd />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
