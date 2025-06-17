export default function CadastroCompletoInformacoesEntrega() {
  return (
    <div className="bg-white rounded-md shadow-md p-6 w-4/5 md:w-3/5 xl:w-2/4">
      <div className="mb-5">
        <h3 className="text-[14px] font-semibold">Informações de Entrega</h3>
      </div>

      <div className="w-full border border-gray-400 bg-transparent my-2"></div>

      <form>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label
              htmlFor="endereco"
              className="font-[Inter] text-sm text-gray-700 font-medium"
            >
              Endereço *
            </label>
            <input
              type="text"
              id="endereco"
              placeholder="Insira seu endereço"
              className="border-2 border-gray-100 bg-gray-100 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
          </div>

          <div>
            <label
              htmlFor="bairro"
              className="font-[Inter] text-sm text-gray-700 font-medium"
            >
              Bairro *
            </label>
            <input
              type="text"
              id="bairro"
              placeholder="Insira seu bairro"
              className="border-2 border-gray-100 bg-gray-100 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
          </div>

          <div>
            <label
              htmlFor="cidade"
              className="font-[Inter] text-sm text-gray-700 font-medium"
            >
              Cidade *
            </label>
            <input
              type="text"
              id="cidade"
              placeholder="Insira sua cidade"
              className="border-2 border-gray-100 bg-gray-100 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
          </div>

          <div>
            <label
              htmlFor="cep"
              className="font-[Inter] text-sm text-gray-700 font-medium"
            >
              CEP *
            </label>
            <input
              type="text"
              id="cep"
              placeholder="Insira seu CEP"
              className="border-2 border-gray-100 bg-gray-100 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
          </div>

          <div>
            <label
              htmlFor="complemento"
              className="font-[Inter] text-sm text-gray-700 font-medium"
            >
              Complemento
            </label>
            <input
              type="text"
              id="complemento"
              placeholder="Opcional"
              className="border-2 border-gray-100 bg-gray-100 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
          </div>
        </div>

        {/* Checkbox */}
        <label className="flex items-center gap-2 cursor-pointer mt-10">
          <input type="checkbox" id="termos" className="hidden peer" />
          <div className="w-5 h-5 border-2 border-gray-300 rounded-md peer-checked:bg-[#C92071] transition"></div>
          <span className="text-gray-700 text-sm">
            Quero receber por email ofertas e novidades das lojas da Digital
            Store. A frequência de envios pode variar de acordo com a interação
            do cliente.
          </span>
        </label>

        <button className="mt-6 w-full flex justify-center text-white text-lg font-semibold bg-[#C92071] rounded-xl p-3 hover:bg-[#991956] transition">
          Acessar Conta
        </button>
      </form>
    </div>
  );
}
