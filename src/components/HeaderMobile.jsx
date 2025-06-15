import { useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import DrawerWrapper from "./DrawerWrapper";
import HamburguerPedidos from "./HamburguerPedidos";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  let menuContent;
  if (location.pathname === "/meuspedidos") {
    menuContent = <HamburguerPedidos />;}
     if (location.pathname === "/minhasinformacoes") {
    menuContent = <HamburguerPedidos />;}
     if (location.pathname === "/") {
    menuContent = <HamburguerPedidos />;}
     if (location.pathname === "/produtos") {
    menuContent = <HamburguerPedidos />;}
      if (location.pathname === "/configuracaoCompra") {
    menuContent = <HamburguerPedidos />;}
     if (location.pathname === "/finalPagamento") {
    menuContent = <HamburguerPedidos />;}
  

  return (
    <>
      <header className="flex justify-center p-5 z-30 relative">
        <div className="flex justify-between items-center w-[99%] gap-5">
         
          <i
            className="fa-solid fa-bars text-2xl block cursor-pointer md:hidden"
            onClick={() => setOpen(true)}
          ></i>

      
          <img className="w-36 ml-8" src={logo} alt="logo-digital-store" />

          <div className="flex items-center gap-4">
            <i className="fa-solid fa-magnifying-glass text-lg text-gray-400"></i>
            <i className="fa-solid fa-cart-shopping text-2xl text-[#C92071]"></i>
          </div>
        </div>
      </header>

      {/* Drawer que abre o menu lateral */}
      <DrawerWrapper open={open} setOpen={setOpen}>
        {menuContent}
      </DrawerWrapper>
    </>

  );

 
}
