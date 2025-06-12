import React, { useState } from "react";

import camisa3 from "../assets/imagens/camisa3.png";
import calçaIcon from "../assets/imagens/calça-icon.png";
import HeadPhone from "../assets/imagens/headphone-icon.png";
import tenisIcon from "../assets/imagens/fone.png"


import sapato2 from "../assets/imagens/sapato2.png";
import calça2 from "../assets/imagens/calça2.png";
import fone from "../assets/imagens/fone.png";
import camisa2 from "../assets/imagens/camisa2.png";

export default function () {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const categorias = [
    { img: camisa3, hover: camisa2, nome: "Camisetas" },
    { img: calçaIcon, hover: calça2, nome: "Calças" },
    { img: calçaIcon, hover: fone, nome: "Bonés" },
    { img: HeadPhone, hover: sapato2, nome: "HeadPhones" },
    { img: tenisIcon, hover: fone, nome: "Tênis" },
  ];

  return (
    <section className="flex justify-center">
      <div className="w-[90%] flex items-center flex-col gap-4">
        <h4 className="font-bold text-xl tracking-[0.04rem] text-zinc-600">
          Coleções em destaque
        </h4>
        <div className="flex flex-row gap-10 flex-wrap justify-center">
          {categorias.map((cat, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="flex flex-col items-center justify-center cursor-pointer gap-2 p-3 bg-white rounded-full  transition-colors"
            >
              {cat.img ? (
                <img
                  className="w-16 h-16 object-contain transition-all duration-300 object-cover   "
                  src={
                    hoveredIndex === i && cat.hover
                      ? cat.hover
                      : cat.img ?? "/fallback.png"
                  }
                  alt={`Ícone de ${cat.nome}`}
                />
              ) : (
                <div className="w-16 h-16 bg-gray-200 flex items-center justify-center text-sm text-gray-500 rounded-full hover:bg-pink-200 transition-colors">
                  Sem imagem
                </div>
              )}
              <p className="text-sm font-semibold text-[#474747]">
                {cat.nome}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
