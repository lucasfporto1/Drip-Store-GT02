import LayoutWrapper from "../components/LayoutWrapper";
import filterIcon from "../assets/Filter-icon.png";
import tenis from "../assets/tenis.png";
import ModalMeuCarrinho from "../components/ModalMeuCarrinho";
import { useState } from "react";

export default function ProdutosPage() {
  const [mostrarFiltro, setMostrarFiltro] = useState(false);

  const ModalAbrirFiltro = () => {
    setMostrarFiltro(!mostrarFiltro);
  };

  const tenisList = new Array(15).fill({
    name: "Tênis Nike Air Max - Feminino",
    price: "$100",
    originalPrice: "$200",
    discount: 30,
    imageUrl: tenis,
  });

  return (
    <LayoutWrapper>
      <ModalMeuCarrinho />
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
          <div className="flex gap-1 mb-6 md:flex">
            <p className="font-bold text-[#4c4c4c]">
              Resultados para "Tênis" -
            </p>
            <p className="text-[#474747] font-semibold">389 produtos</p>
          </div>

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
              {/** Botão para fechar (somente no mobile) */}
              <div className="flex justify-end md:hidden mb-4">
                <button
                  onClick={ModalAbrirFiltro}
                  className="text-[#474747] font-bold"
                >
                  ✕
                </button>
              </div>
              <h2 className="font-bold mb-4 text-base text-gray-800">
                Filtrar por
              </h2>
              {/* Filtros */}
              <div className="space-y-5">
                {[
                  {
                    title: "Marca",
                    options: [
                      "Adidas",
                      "Balenciaga",
                      "K-Swiss",
                      "Nike",
                      "Puma",
                    ],
                    type: "checkbox",
                  },
                  {
                    title: "Categoria",
                    options: [
                      "Esporte e lazer",
                      "Casual",
                      "Utilitário",
                      "Corrida",
                    ],
                    type: "checkbox",
                  },
                  {
                    title: "Gênero",
                    options: ["Masculino", "Feminino", "Unisex"],
                    type: "checkbox",
                  },
                  {
                    title: "Estado",
                    options: ["Novo", "Usado"],
                    type: "radio",
                  },
                ].map((filter) => (
                  <div key={filter.title}>
                    <h4 className="text-sm font-medium">{filter.title}</h4>
                    <div className="space-y-2 mt-2">
                      {filter.options.map((option) => (
                        <label
                          key={option}
                          className="flex items-center space-x-2"
                        >
                          <input
                            type={filter.type}
                            name={filter.title}
                            value={option}
                            className={`
                              ${
                                filter.type === "radio"
                                  ? "form-radio"
                                  : "form-checkbox"
                              }
                              accent-[#c92071]
                            `}
                          />
                          <span className="text-sm">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </aside>

            {/* Grid de produtos */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 flex-1">
              {tenisList.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-sm relative cursor-pointer"
                >
                  {/* Badge de desconto */}
                  {index < 2 && (
                    <span className="absolute top-3 left-3 bg-[#E7FF86] text-[#474747] text-xs font-bold px-2 py-1 rounded-full">
                      {item.discount}% OFF
                    </span>
                  )}

                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="mx-auto mb-4 w-full max-w-[180px]"
                  />
                  <p className="text-[#8F8F8F] text-sm font-semibold">Tênis</p>
                  <p className="text-[#474747] font-semibold text-sm leading-tight">
                    {item.name}
                  </p>
                  <p className="text-base mt-1">
                    <span className="line-through text-[#8f8f8f] mr-2">
                      {item.originalPrice}
                    </span>
                    <span className="text-[#1f1f1f] font-bold">
                      {item.price}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
}
