import React from "react";

export default function CadastroCompletoInformacoesPessoais({
  values,
  onChange,
}) {
  return (
    <div className="bg-white rounded-md shadow-md p-6 w-4/5 md:w-3/5 xl:w-2/4 flex flex-col justify-center ">
      <div className="mb-5">
        <h3 className="text-[14px] font-semibold">Informações Pessoais</h3>
      </div>
      <div className="w-full border border-gray-400 bg-transparent my-2"></div>
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label
            htmlFor="nome"
            className="font-[Inter] text-sm text-gray-700 font-medium"
          >
            Nome *
          </label>
          <input
            type="text"
            id="nome"
            placeholder="Insira seu nome"
            value={values.nome}
            onChange={onChange}
            className="border-2 border-gray-100 bg-gray-100 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            required
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
            value={values.cpf}
            onChange={onChange}
            className="border-2 border-gray-100 bg-gray-100 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="font-[Inter] text-sm text-gray-700 font-medium"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            placeholder="Insira seu email"
            value={values.email}
            onChange={onChange}
            className="border-2 border-gray-100 bg-gray-100 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            required
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
            type="tel"
            id="celular"
            placeholder="Insira seu celular"
            value={values.celular}
            onChange={onChange}
            className="border-2 border-gray-100 bg-gray-100 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            required
          />
        </div>
        <div>
          <label
            htmlFor="senha"
            className="font-[Inter] text-sm text-gray-700 font-medium"
          >
            Senha *
          </label>
          <input
            type="password"
            id="senha"
            placeholder="Insira sua senha"
            value={values.senha}
            onChange={onChange}
            className="border-2 border-gray-100 bg-gray-100 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            required
          />
        </div>
      </div>
    </div>
  );
}
