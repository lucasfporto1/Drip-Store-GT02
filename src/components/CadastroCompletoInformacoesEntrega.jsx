import React from "react";

export default function CadastroCompletoInformacoesEntrega({
  values,
  onChange,
}) {
  return (
    <div className="bg-white rounded-md shadow-md p-6 w-4/5 md:w-3/5 xl:w-2/4 flex flex-col justify-center ">
      <div className="mb-5">
        <h3 className="text-[14px] font-semibold">Informações de Entrega</h3>
      </div>

      <div className="w-full border border-gray-400 bg-transparent my-2"></div>

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
            value={values.endereco}
            onChange={onChange}
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
            value={values.bairro}
            onChange={onChange}
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
            value={values.cidade}
            onChange={onChange}
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
            value={values.cep}
            onChange={onChange}
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
            value={values.complemento}
            onChange={onChange}
            className="border-2 border-gray-100 bg-gray-100 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
        </div>
      </div>
    </div>
  );
}
