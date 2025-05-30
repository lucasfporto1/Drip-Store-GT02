import React from "react";
import { Link } from "react-router-dom";

export default function MinhasInformacoes() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className=" container mx-auto p-4 flex flex-col md:flex-row gap-6">
        {/* Menu lateral */}
        <aside className="border-b-2 shadow-md border-gray-200 bg-white h-fit w-full md:w-1/4 p-5 rounded hidden md:block">
          <ul className="space-y-4">
            <li className="text-gray-700 font-semibold border-b-2 border-gray-300 cursor-pointer pl-3 pb-5  hover:text-pink-600">
              Meu Perfil
            </li>
            <li className="text-gray-700 font-semibold  cursor-pointer border-b-2 border-gray-300 pl-3 pb-5 hover:text-pink-600">
              <Link to="/meuspedidos">Meus Pedidos</Link>
            </li>
            <li className="text-gray-700 font-semibold  cursor-pointer border-b-2 border-gray-300 pl-3 pb-5 hover:text-pink-600">
              Minhas Informações
            </li>
            <li className="text-gray-700 font-semibold cursor-pointer pl-3  hover:text-pink-600">
              Métodos de Pagamento
            </li>
          </ul>
        </aside>

        {/* Conteúdo principal */}
        <main className="border-b-2 shadow-md  border-gray-200 bg-white w-full md:w-3/4 p-6 rounded space-y-6">
          <div className="flex justify-between items-center border-b pb-2">
            <h2 className="text-gray-700 font-semibold">Minhas Informações</h2>
            <a href="#" className="text-pink-600 text-sm hover:underline">
              Editar
            </a>
          </div>

          {/* Informações Pessoais */}
          <section className="space-y-2">
            <h3 className="font-semibold text-gray-700">
              Informações Pessoais
            </h3>
            <p>
              <span className="font-semibold">Nome:</span> Francisco Antonio
              Pereira
            </p>
            <p>
              <span className="font-semibold">CPF:</span> 123.456.913-35
            </p>
            <p>
              <span className="font-semibold">Email:</span> francisco@gmail.com
            </p>
            <p>
              <span className="font-semibold">Celular:</span> (85) 5555-5555
            </p>
          </section>

          <hr />

          {/* Informações de Entrega */}
          <section className="space-y-2">
            <h3 className="font-semibold text-gray-700">
              Informações de Entrega
            </h3>
            <p>
              <span className="font-semibold">Endereço:</span> Rua João Pessoa,
              333
            </p>
            <p>
              <span className="font-semibold">Bairro:</span> Centro
            </p>
            <p>
              <span className="font-semibold">Cidade:</span> Fortaleza, Ceará
            </p>
            <p>
              <span className="font-semibold">CEP:</span> 433-8800
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
