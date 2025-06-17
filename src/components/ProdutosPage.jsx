import { useState } from "react";
import filterIcon from "../assets/Filter-icon.png";
import FiltroModal from "./FiltroModal";
import ResultadosTenisProdutos from "./ResultadosTenisProdutos";
import GridProdutos from "./GridProdutos";

export default function ProdutosPage() {
  const [mostrarFiltro, setMostrarFiltro] = useState(false);

  const ModalAbrirFiltro = () => {
    setMostrarFiltro(!mostrarFiltro);
  };
  return (
    <section className="bg-[#f9f8fe] px-4 md:px-10 py-6">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4 md:flex md:justify-end md:-[65px]">
          <div className="flex items-center border border-[#474747] rounded bg-white h-12 px-4 text-sm text-[#474747] cursor-pointer ">
            <span className="font-bold mr-1">Ordenar por:</span>
            <span className="text-[#8f8f8f] mr-2">mais relevantes</span>
            <svg
              className="w-4 h-4 text-[#8f8f8f]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d="M19 9l-7 7-7-7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <button
            className="bg-[#c92071] hover:bg-pink-700 w-12 h-12 flex items-center justify-center rounded-md md:hidden"
            onClick={ModalAbrirFiltro}
          >
            <img src={filterIcon} alt="Filtro" className="cursor-pointer" />
          </button>
        </div>

        {/* Título de resultados */}
        <ResultadosTenisProdutos />

        {/* Conteúdo principal */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside
            className={` 
       ${
         mostrarFiltro
           ? "block absolute top-[65px] bottom-0 left-0 right-0 z-30 overflow-y-auto"
           : "hidden"
       }
       md:block 
       w-full max-w-[280px]  bg-white p-5 rounded-lg shadow-lg text-sm
     `}
          >
            {/* Filtro Modal */}

            <FiltroModal />
          </aside>

          {/* Grid de produtos */}
          <GridProdutos />
        </div>
      </div>
    </section>
  );
}
