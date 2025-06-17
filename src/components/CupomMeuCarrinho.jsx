export default function CupomMeuCarrinho() {
  return (
    <div className="bg-white rounded p-4 shadow lg:hidden">
      <p className="font-medium mb-2">Cupom de desconto</p>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Insira seu código"
          className="p-3 gap-2 rounded-lg w-full text-sm bg-[#f8f8f8]"
        />
        <button className="bg-[#f5f5f5] text-[#c92071] font-bold rounded-lg p-4 cursor-pointer">
          OK
        </button>
      </div>
    </div>
  );
}
