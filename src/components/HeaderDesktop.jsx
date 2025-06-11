import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function HeaderDesktop() {
  return (
    <header className="shadow-lg bg-white text-gray-800 w-full">
      {/* Linha superior */}
      <div className="w-full px-8 xl:px-16 flex items-center justify-between py-6 gap-6">
        {/* Logo */}
        <a href="/">
          <div className="flex-shrink-0 text-pink-600 font-bold text-2xl cursor-pointer">
            <img src={Logo} alt="Logo" className="w-40" />
          </div>
        </a>

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
          <a href="#" className="text-base text-[#474747]">
            <Link to="/cadastroCompleto">Cadastre-se</Link>
          </a>
          <button className="bg-[#c92071] text-white px-6 py-3 rounded text-base hover:text-pink-600 hover:bg-white transition duration-300 cursor-pointer">
            <Link to="/login">Entrar</Link>
          </button>
          <a href="meucarrinho">
            <i className="fa-solid fa-cart-shopping text-2xl text-pink-600 cursor-pointer"></i>
          </a>
        </div>
      </div>

      {/* Navegação */}
      <nav className="w-full px-8 xl:px-16 pb-4">
        <ul className="flex justify-left gap-8 text-base">
          <li>
            <a href="#" className="hover:text-pink-600 hover:border-b-2">
              <Link to="/#">Home</Link>
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-600 hover:border-b-2">
              <Link to="/produtos">Produtos</Link>
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-600 hover:border-b-2">
              <Link to="/categorias">Categorias</Link>
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-600 hover:border-b-2">
              <Link to="/meuspedidos">Meus Pedidos</Link>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
