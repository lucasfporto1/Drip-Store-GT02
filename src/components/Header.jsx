import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="flex justify-center p-[1.25rem]">
      <div className="flex flex-row justify-between items-center gap-[1.25rem] w-[99%]">
        <i className="fa-solid fa-bars text-[1.7rem]"></i>

        <img className="w-[9rem] ml-8" src={logo} alt="logo-digital-store" />

        <div className="flex flex-row items-center gap-4">
          <i className="fa-solid fa-magnifying-glass text-[1.25rem] text-gray-400"></i>
          <i className="fa-solid fa-cart-shopping text-[1.7rem] text-[#C92071]"></i>
        </div>
      </div>
    </header>
  );
}
