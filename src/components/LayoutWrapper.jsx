import Footer from "./Footer";
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

export default function LayoutWrapper({ children }) {
  return (
    <>
      {/* Header Responsivo */}
      <div className="block md:hidden">
        <HeaderMobile />
      </div>
      <div className="hidden md:block">
        <HeaderDesktop />
      </div>

      {/* Conteúdo principal */}
      <main>{children}</main>

      {/* Rodapé */}
      <Footer />
    </>
  );
}
