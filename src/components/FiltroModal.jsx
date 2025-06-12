import { useState } from "react";

export default function FiltroModal() {
  const [mostrarFiltro, setMostrarFiltro] = useState(false);

  const ModalAbrirFiltro = () => {
    setMostrarFiltro(!mostrarFiltro);
  };

  return (
    <>
      <div className="flex justify-end md:hidden mb-4">
        <button onClick={ModalAbrirFiltro} className="text-[#474747] font-bold">
          ✕
        </button>
      </div>
      <h2 className="font-bold mb-4 text-base text-gray-800">Filtrar por</h2>
      <hr className="text-[#CCCCCC] mb-5" />
      <div className="space-y-5">
        {[
          {
            title: "Marca",
            options: ["Adidas", "Balenciaga", "K-Swiss", "Nike", "Puma"],
            type: "checkbox",
          },
          {
            title: "Categoria",
            options: ["Esporte e lazer", "Casual", "Utilitário", "Corrida"],
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
                <label key={option} className="flex items-center space-x-2">
                  <input
                    type={filter.type}
                    name={filter.title}
                    value={option}
                    className={`
                      ${
                        filter.type === "radio" ? "form-radio" : "form-checkbox"
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
    </>
  );
}
