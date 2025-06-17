export default function BarraDeCupomeFreteMeuCarrinho() {
  return (
    <div className="flex flex-col gap-3 mt-4 lg:mt-0 lg:flex-row lg:items-center lg:gap-[4rem]">
      {/* Quantidade */}
      <div>
        <p className="font-medium mb-1 lg:hidden">QUANTIDADE</p>
        <div className="flex items-center gap-2 justify-between lg:justify-center">
          <button className="w-[80px] h-[35px] lg:w-[40px] lg:h-[35px] border border-[#cccccc] rounded text-xl font-semibold">
            -
          </button>
          <span className="w-6 text-center lg:text-lg">1</span>
          <button className="w-[80px] h-[35px] lg:w-[40px] lg:h-[35px] border border-[#cccccc] rounded text-xl font-semibold">
            +
          </button>
        </div>
      </div>

      {/* Unitário */}
      <span className="flex justify-center">
        <p className="text-black underline py-2 lg:hidden">Remover item</p>
      </span>
      <div className="flex flex-row justify-between lg:flex-col items-end lg:items-center">
        <span className="font-medium lg:hidden">UNITÁRIO</span>
        <span className="text-[#CCCCCC] line-through text-xs">R$ 219,00</span>
        <span className="font-medium">R$ 219,00</span>
      </div>

      {/* Total */}
      <div className="flex flex-row justify-between lg:flex-col items-end lg:items-center">
        <span className="font-medium lg:hidden">TOTAL</span>
        <span className="text-[#CCCCCC] line-through pl-6 text-xs">
          R$ 219,00
        </span>
        <span className="font-medium">R$ 219,00</span>
      </div>

      {/* Remover (somente desktop) */}
      <p className="hidden lg:block text-black underline">Remover item</p>
    </div>
  );
}
