import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LoginPage from "./pages/LoginPage.jsx";
import CadastroCriarConta from "./pages/CadastroCriarConta.jsx";
import CadastroCompleto from "./pages/CadastroCompleto.jsx";
import MinhasInformacoes from "./pages/MinhaImformacoes.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import FinalPagamento from './pages/FinalPagamento.jsx';
import myInformacao from './pages/MinhaInformacao.jsx';
import MinhaInformacao from './pages/MinhaInformacao.jsx';
import HambuguerInformacao from './pages/HambuguerInformacao.jsx';
import ConfiguracaoCompra from './pages/configuracaoCompra.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<DetalheProd />} /> */}
       {/* <Route path="/" element={<FinalPagamento />} /> */}
       {/* <Route path="/" element={<MinhaInformacao />} /> */}
       {/* <Route path="/" element={<HambuguerInformacao />} /> */}
       <Route path="/" element={<ConfiguracaoCompra />} />



    </Routes>
  </BrowserRouter>
  </StrictMode>,
)
