import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import tenis from '../assets/imagens/tenisvermelhopng.png';

const fundos = [
  { cor: 'bg-[#E2E3FF]', id: 0 },
  { cor: 'bg-[#FFE8BC]', id: 1 },
  { cor: 'bg-[#FFC0BC]', id: 2 },
  { cor: 'bg-[#DEC699]', id: 3 },
  { cor: 'bg-[#E8DFCF]', id: 4 },
];

export default function GaleriaProduto() {
  const [indiceAtual, setIndiceAtual] = useState(0);

  const anterior = () => {
    setIndiceAtual((prev) => (prev === 0 ? fundos.length - 1 : prev - 1));
  };

  const proximo = () => {
    setIndiceAtual((prev) => (prev === fundos.length - 1 ? 0 : prev + 1));
  };

  const trocarImagem = (index) => {
    setIndiceAtual(index);
  };

  return (

    <div className="container mx-auto px-4 h-full py-10 ">
  <div className="  flex flex-col w-full h-full ">
    <div
      className={`relative w-full h-full rounded-lg ${fundos[indiceAtual].cor} flex items-center justify-center `}
    >
      <img src={tenis} alt="Tênis" className="w-full h-full object-contain" />


        {/* Seta esquerda */}
        <button
          onClick={anterior}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 rounded-full"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        {/* Seta direita */}
        <button
          onClick={proximo}
          className="absolute top-1/2 right-2 transform -translate-y-1/2  p-2 rounded-full"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      {/* Miniaturas */}
      <div className="flex justify-between gap-2 mt-4 md:gap-6 w-full h-full grip grip-cols-3 grip-cols-2 grip-cols-5 ">
        {fundos.map((item, index) => (
          <div
            key={item.id}
            onClick={() => trocarImagem(index)}
            className={`w-80rem h-80rem ${item.cor} rounded flex items-center justify-center cursor-pointer border-2 ${
              indiceAtual === index ? 'border-pink-600' : 'border-transparent'
            }`}
          >
            <img src={tenis} alt={`Variante ${index + 1}`} className="w-full h-full object-contain" />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
