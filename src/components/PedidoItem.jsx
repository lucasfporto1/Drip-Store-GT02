import tenisvermelho from "../assets/imagens/tenisvermelhopng.png";

export default function PedidoItem({ numero, nome, status, corStatus }) {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start border-b-2 border-gray-200 py-4 gap-4 w-full">
      <div className="flex items-start gap-4 w-full">
        <img
          src={tenisvermelho}
          alt="Tênis"
          className="w-16 h-16 object-cover rounded bg-blue-100 flex-shrink-0"
        />
        <div className="w-full overflow-hidden whitespace-nowrap">
          <p className="text-sm text-gray-500 truncate">Pedido nº {numero}</p>
          <p className="font-semibaold text-gray-800 whitespace-nowrap">
            {nome}
          </p>
        </div>
      </div>
      <div className="w-full flex justify-between items-center mt-2">
        <div>
          <span className="block text-xs text-gray-500 font-semibold lg:hidden">
            STATUS
          </span>
        </div>
        <p className={`text-sm font-semibold whitespace-nowrap ${corStatus}`}>
          {status}
        </p>
      </div>
    </div>
  );
}
