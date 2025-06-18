export default function ResumoMeuCarrinho() {
  return (
    <div className="lg:col-span-1 lg:mr-8 lg:h-[10rem]">
      <div className="bg-white rounded p-4 shadow mt-10">
        <div className="border-b border-[#CCCCCC] pb-3 mb-5">
          <p className="font-semibold text-[#474747] mb-3 lg:text-xl">RESUMO</p>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between font-semibold">
            <span className="text-[#8f8f8f]">Subtotal:</span>
            <span className="text-black lg:text-base">R$ 219,00</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span className="text-[#8f8f8f]">Frete:</span>
            <span className="text-black">R$ 0,00</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span className="text-[#8f8f8f]">Desconto:</span>
            <span className="text-black">R$ 30,00</span>
          </div>
          <div className="flex justify-between font-bold text-l pt-2">
            <span>Total</span>
            <span className="text-pink-600">R$ 219,00</span>
          </div>
        </div>
        <p className="text-[10px] text-gray-400 mt-2 flex justify-end">
          Em até 10x de R$ 21,90 sem juros
        </p>
        <button className="w-full bg-[#f6aa1c] text-white mt-5 py-2 lg:py-3 text-base lg:text-lg rounded-md hover:bg-orange-500 cursor-pointer font-semibold hidden lg:block">
          Continuar
        </button>
      </div>
    </div>
  );
}
