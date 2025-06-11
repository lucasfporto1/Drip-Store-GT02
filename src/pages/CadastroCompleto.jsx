import React from "react";

export default function CadastroCompleto() {
  return (
    <section className="flex flex-col justify-center">
      <div className="flex flex-col justify-center items-center w-full gap-6 pt-15 pb-20 bg-[#f9f8fe] md:flex-row">
        <div className="flex flex-col justify-center items-center bg-transparent w-full">
          {/* Cabeçalho */}
          <div className="flex justify-center w-[50%] md:justify-start pb-4">
            <h1 className="font-bold text-2xl font-[Inter]">Criar Conta</h1>
          </div>

          {/* Bloco 1: Informações Pessoais */}
          <div className="bg-white rounded-md shadow-md p-6 w-4/5 md:w-3/5 xl:w-2/4">
            <div className="mb-5">
              <h3 className="text-[14px] font-semibold">
                Informações Pessoais
              </h3>
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

          <div className="w-4/5 h-[1px] bg-transparent my-2"></div>

          {/* Bloco 2: Informações de Entrega */}
          <div className="bg-white rounded-md shadow-md p-6 w-4/5 md:w-3/5 xl:w-2/4">
            <div className="mb-5">
              <h3 className="text-[14px] font-semibold">
                Informações de Entrega
              </h3>
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
                  Quero receber por email ofertas e novidades das lojas da
                  Digital Store. A frequência de envios pode variar de acordo
                  com a interação do cliente.
                </span>
              </label>

              <button className="mt-6 w-full flex justify-center text-white text-lg font-semibold bg-[#C92071] rounded-xl p-3 hover:bg-[#991956] transition">
                Acessar Conta
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
