import { Link } from "react-router-dom";

export default function BotaoMeuCarrinho() {
  return (
    <div className="bg-white bottom-0 left-0 right-0 p-4 shadow-inner z-10 lg:hidden">
      <div className="flex justify-between font-semibold mb-2">
        <span className="font-bold">Total</span>
        <span className="text-pink-600 font-bold">R$ 219,00</span>
      </div>
      <div className="mb-4">
        <p className="text-[10px] text-gray-400 mt-2 flex justify-end">
          Em até 10x de R$ 21,90 sem juros
        </p>
      </div>
      <Link
        to="/configuracaoCompra"
        className="w-full bg-[#f6aa1c] text-white py-3 rounded-xl hover:bg-orange-500 cursor-pointer font-semibold"
      >
        Continuar
      </Link>
    </div>
  );
}
