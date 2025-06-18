import Logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function HeaderDesktop() {
  const [usuarioNome, setUsuarioNome] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const nome = localStorage.getItem("usuario_nome");
    if (nome) {
      setUsuarioNome(nome);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("usuario_nome");
    localStorage.removeItem("token"); // também remove o token se quiser
    setUsuarioNome("");
    navigate("/");
    window.location.reload(); // 👈 força atualização para refletir logout
  };

  return (
    <header className="shadow-lg bg-white text-gray-800 w-full">
      {/* Linha superior */}
      <div className="w-full px-8 xl:px-16 flex items-center justify-between py-6 gap-6">
        {/* Logo */}
        <Link to="/">
          <div className="flex-shrink-0 text-pink-600 font-bold text-2xl cursor-pointer">
            <img src={Logo} alt="Logo" className="w-40" />
          </div>
        </Link>

        {/* Campo de busca */}
        <div className="flex-grow max-w-[600px] mx-4 flex">
          <input
            type="text"
            placeholder="Tênis"
            className="w-full rounded-l px-4 py-3 bg-[#f8f8f8] focus:outline-none text-base"
          />
          <button className="bg-[#f8f8f8] px-4 py-3 rounded-r">
            <i className="fa-solid fa-magnifying-glass text-gray-500"></i>
          </button>
        </div>

        {/* Ações: cadastro, login, carrinho */}
        <div className="flex items-center gap-6 flex-shrink-0">
          {usuarioNome ? (
            <div className="user-status flex items-center gap-4">
              <Link
                to="/minhasinformacoes"
                className="text-base font-semibold text-[#C92071]"
              >
                Olá, {usuarioNome.split(" ")[0]} 😊
              </Link>
              <button
                className="logout-button text-sm text-gray-500 underline hover:text-pink-600"
                onClick={handleLogout}
              >
                Sair
              </button>
            </div>
          ) : (
            <>
              <Link to="/cadastroCompleto" className="busca-cadastro">
                Cadastre-se
              </Link>
              <Link
                to="/login"
                className="busca-button-primary bg-[#c92071] text-white px-6 py-3 rounded text-base hover:text-pink-600 hover:bg-white transition duration-300 cursor-pointer"
              >
                Entrar
              </Link>
            </>
          )}
          <Link to="/meucarrinho">
            <i className="fa-solid fa-cart-shopping text-2xl text-pink-600 cursor-pointer"></i>
          </Link>
        </div>
      </div>

      {/* Navegação */}
      <nav className="w-full px-8 xl:px-16 pb-4">
        <ul className="flex justify-left gap-8 text-base">
          <li>
            <Link to="/" className="hover:text-pink-600 hover:border-b-2">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/produtos"
              className="hover:text-pink-600 hover:border-b-2"
            >
              Produtos
            </Link>
          </li>
          <li>
            <Link
              to="/categorias"
              className="hover:text-pink-600 hover:border-b-2"
            >
              Categorias
            </Link>
          </li>
          <li>
            <Link
              to="/meuspedidos"
              className="hover:text-pink-600 hover:border-b-2"
            >
              Meus Pedidos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
