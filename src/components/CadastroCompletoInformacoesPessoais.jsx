export default function CadastroCompletoInformacoesPessoais() {
  return (
    <div className="bg-white rounded-md shadow-md p-6 w-4/5 md:w-3/5 xl:w-2/4">
      <div className="mb-5">
        <h3 className="text-[14px] font-semibold">Informações Pessoais</h3>
      </div>

      <div className="w-full border border-gray-400 bg-transparent my-2"></div>

      <form>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label
              htmlFor="nome"
              className="font-[Inter] text-sm text-gray-700 font-medium"
            >
              Nome Completo *
            </label>
            <input
              type="text"
              id="nome"
              placeholder="Insira seu nome"
              className="border-2 border-gray-100 bg-gray-100 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-500 w-full"
            />
          </div>

          <div>
            <label
              htmlFor="cpf"
              className="font-[Inter] text-sm text-gray-700 font-medium"
            >
              CPF *
            </label>
            <input
              type="text"
              id="cpf"
              placeholder="Insira seu CPF"
              className="border-2 border-gray-100 bg-gray-100 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-500 w-full"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="font-[Inter] text-sm text-gray-700 font-medium"
            >
              E-mail *
            </label>
            <input
              type="email"
              id="email"
              placeholder="Insira seu e-mail"
              className="border-2 border-gray-100 bg-gray-100 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-500 w-full"
            />
          </div>

          <div>
            <label
              htmlFor="celular"
              className="font-[Inter] text-sm text-gray-700 font-medium"
            >
              Celular *
            </label>
            <input
              type="text"
              id="celular"
              placeholder="Insira seu celular"
              className="border-2 border-gray-100 bg-gray-100 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-500 w-full"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
