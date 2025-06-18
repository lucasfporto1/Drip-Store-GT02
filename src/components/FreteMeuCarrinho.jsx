export default function FreteMeuCarrinho() {
  return (
    <div className="flex-1">
      <label className="text-[#474747] text-sm font-medium block mb-2">
        Calcular frete
      </label>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Insira seu CEP"
          className="p-3 gap-2 rounded-lg w-full text-sm bg-[#f8f8f8]"
        />
        <button className="bg-[#f5f5f5] text-[#c92071] font-bold rounded-lg p-4 px-10 cursor-pointer">
          OK
        </button>
      </div>
    </div>
  );
}
