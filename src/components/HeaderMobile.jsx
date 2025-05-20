import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="flex justify-center p-5">
    <div className="flex justify-between items-center w-[99%] gap-5">
      
      {/* Ícone hamburguer visível só no mobile */}
      <i className="fa-solid fa-bars text-2xl block cursor-pointer md:hidden"></i>
  
      {/* Logo */}
      <img className="w-36 ml-8" src={logo} alt="logo-digital-store" />
  
      {/* Menu de navegação visível a partir do md */}
      <nav className="hidden md:flex gap-6 text-gray-700 font-semibold">
        <a href="#">Produtos</a>
        <a href="#">Categorias</a>
        <a href="#">Meu Perfil</a>
      </nav>
  
      {/* Ícones de busca e carrinho */}
      <div className="flex items-center gap-4">
        <i className="fa-solid fa-magnifying-glass text-lg text-gray-400"></i>
        <i className="fa-solid fa-cart-shopping text-2xl text-[#C92071]"></i>
      </div>
    </div>
  </header>
  
  );
}
