export default function CadastroCriarContaForm() {
  return (
    <form>
      <div className="flex flex-col">
        <label
          htmlFor="email"
          className="font-[Inter] text-[12px] text-gray-700 font-medium"
        >
          Email *
        </label>
        <input
          type="email"
          id="email"
          placeholder="Insira seu email"
          className="border-2 border-gray-100 bg-gray-100 rounded-md p-2 focus:outline-none"
        />
      </div>

      <button
        className="flex text-white text-[16px] border-2 bg-[#C92071] rounded-xl w-full justify-center hover:bg-[#991956] p-3 mt-6 cursor-pointer"
        type="submit"
      >
        Criar Conta
      </button>
    </form>
  );
}
