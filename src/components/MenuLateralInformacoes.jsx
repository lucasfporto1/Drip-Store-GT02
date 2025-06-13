import { Link } from "react-router-dom";

export default function MenuLateralInformacoes() {
  return (
    <aside className="border-b-2 shadow-md border-gray-200 bg-white h-fit w-full md:w-1/4 p-5 rounded hidden md:block">
      <ul className="space-y-4">
        <li className="text-black-700 font-bold border-b-2 border-gray-300 pl-3 pb-5 ">
          Meu Perfil
        </li>
        <li className="text-black-700 font-semibold  cursor-pointer border-b-2 border-gray-300 pl-3 pb-5 hover:text-pink-600 hover:font-bold">
          <Link to="/meuspedidos">Meus Pedidos</Link>
        </li>
        <li className="text-black-700 font-semibold  cursor-pointer border-b-2 border-gray-300 pl-3 pb-5 hover:text-pink-600 hover:font-bold">
          <Link to="/minhasinformacoes">Minhas Informações</Link>
        </li>
        <li className="text-black-700 font-semibold cursor-pointer pl-3  hover:text-pink-600 hover:font-bold">
          Métodos de Pagamento
        </li>
      </ul>
    </aside>
  );
}
