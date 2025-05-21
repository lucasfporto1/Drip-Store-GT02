import Logo from "../assets/logo.png";

export default function HeaderDesktop() {
  return (
    <header className="border-b shadow-sm bg-white text-gray-800 w-full">
      {/* Linha superior */}
      <div className="container mx-auto flex items-center justify-between px-4 py-4 gap-4">
        {/* Logo */}
        <div className="flex-shrink-0 text-pink-600 font-bold text-xl">
          <img src={Logo} alt="Logo" className="w-36" />
        </div>

        {/* Campo de busca */}
        <div className="flex-grow max-w-[600px] mx-4 hidden md:flex">
          <input
            type="text"
            placeholder="Tênis"
            className="w-full rounded-l px-4 py-2 bg-[#f8f8f8] focus:outline-none text-sm"
          />
          <button className="bg-[#f8f8f8] px-4 py-2 rounded-r">
            <i className="fa-solid fa-magnifying-glass text-gray-500"></i>
          </button>
        </div>

        {/* Ações: cadastro, login, carrinho */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <a href="#" className="text-sm underline">
            Cadastre-se
          </a>
          <button className="bg-pink-600 text-white px-6 py-2 rounded text-sm hover:text-pink-600 hover:bg-white transition duration-300">
            Entrar
          </button>
          <i className="fa-solid fa-cart-shopping text-xl text-pink-600"></i>
        </div>
      </div>

      {/* Navegação */}
      <nav className="container mx-auto px-4 pb-4">
        <ul className="flex justify-left gap-6 text-sm">
          <li>
            <a href="#" className="hover:text-pink-600">
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-pink-600 font-semibold border-b-2 border-pink-600"
            >
              Produtos
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-600">
              Categorias
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-600">
              Meus Pedidos
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
