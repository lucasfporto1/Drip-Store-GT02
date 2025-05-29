import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="flex justify-center p-5 z-30 relative">
    <div className="flex justify-between items-center w-[99%] gap-5">
      
      {/* Ícone hamburguer visível só no mobile */}
      <i className="fa-solid fa-bars text-2xl block cursor-pointer md:hidden"></i>
  
      {/* Logo */}
      <img className="w-36 ml-8" src={logo} alt="logo-digital-store" />
  
  
      {/* Ícones de busca e carrinho */}
      <div className="flex items-center gap-4">
        <i className="fa-solid fa-magnifying-glass text-lg text-gray-400"></i>
        <i className="fa-solid fa-cart-shopping text-2xl text-[#C92071]"></i>
      </div>
    </div>
  </header>
  
  );
}
