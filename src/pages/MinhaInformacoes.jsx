import React from "react";

import MenuLateralInformacoes from "../components/MenuLateralInformacoes";
import CorpoPaginaMinhasInformacoes from "../components/CorpoPaginaMinhasInformacoes";

export default function MinhasInformacoes() {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center pt-10">
      <div className=" container mx-auto p-4 flex flex-col md:flex-row gap-6">
        {/* Menu lateral */}
        <MenuLateralInformacoes />

        {/* Conteúdo principal */}
        <CorpoPaginaMinhasInformacoes />
      </div>
    </div>
  );
}
