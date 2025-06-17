export default function CabecalhoMeuCarrinho() {
  return (
    <div className="lg:flex lg:items-center lg:justify-between ">
      <h2 className="font-semibold text-base mb-3 lg:text-xl lg:mb-0">
        MEU CARRINHO
      </h2>
      <div className="hidden lg:flex lg:gap-[8.4rem] text-base font-medium text-[#474747]">
        <span>QUANTIDADE</span>
        <span>UNITÁRIO</span>
        <span>TOTAL</span>
      </div>
    </div>
  );
}
