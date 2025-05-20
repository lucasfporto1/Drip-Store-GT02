import tenis from "../assets/tenis.png";

export default function ModalMeuCarrinho() {
  return (
    <div className="w-72 p-4 bg-white rounded-lg shadow-md border rounded ml-12 pb-3 hidden">
      <h1 className="text-[#474747] text-lg font-semibold mb-4">
        Meu Carrinho
      </h1>

      {/* Produto 1 */}
      <div className="flex items-center gap-3 mb-4">
        <img
          src={tenis}
          alt="Tênis"
          className="w-16 h-16 object-contain rounded-md"
        />
        <div>
          <p className="text-sm font-medium">
            Tênis Nike Revolution 6 Next Nature Masculino
          </p>
          <p className="text-[#474747] font-semibold">R$ 219,00</p>
        </div>
      </div>

      {/* Produto 2 */}
      <div className="flex items-center gap-3 mb-4">
        <img
          src={tenis}
          alt="Tênis"
          className="w-16 h-16 object-contain rounded-md"
        />
        <div>
          <p className="text-sm font-medium">
            Tênis Nike Revolution 6 Next Nature Masculino
          </p>
          <p className="text-[#474747] font-semibold">R$ 219,00</p>
        </div>
      </div>

      <hr className="my-4" />

      {/* Valor total */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[#474747] font-medium">Valor total:</h2>
        <p className="text-[#D10079] text-lg font-bold">R$ 219,00</p>
      </div>

      {/* Botões */}
      <div className="flex justify-between items-center">
        <button className="text-sm underline text-[#474747]">Esvaziar</button>
        <button className="bg-[#D10079] text-white font-semibold py-2 px-4 rounded-md text-sm">
          Ver Carrinho
        </button>
      </div>
    </div>
  );
}
