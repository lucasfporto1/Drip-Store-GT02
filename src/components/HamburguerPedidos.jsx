import { Link } from "react-router-dom";

export default function HamburguerPedidos() {

  
  return (
    <div className="space-y-4 flex flex-col ml-4  ">
      <h2 className="font-bold text-gray-600 mb-3">Olá, Francisco</h2>

      <Link to="/minhasinformacoes" className="text-left w-fit text-gray-800 border-b-2 border-transparent hover:text-pink-600 hover:border-pink-600 focus:text-pink-600 focus:border-pink-600 transition-all">Minhas Informações</Link>
     <Link to="/"  className="text-left w-fit text-gray-800 border-b-2 border-transparent hover:text-pink-600 hover:border-pink-600 focus:text-pink-600 focus:border-pink-600 transition-all">Métodos de Pagamento</Link>
      
       <hr className="border-t border-gray-300" />

       <div>
          <h2 className="font-bold text-gray-600 mb-3">Páginas</h2>
          <div className="flex flex-col gap-3">
           <Link to="/"  className="text-left w-fit text-gray-800 border-b-2 border-transparent hover:text-pink-600 hover:border-pink-600 focus:text-pink-600 focus:border-pink-600 transition-all">
              Home
           </Link>
           <Link to="/produtos"  className="text-left w-fit text-gray-800 border-b-2 border-transparent hover:text-pink-600 hover:border-pink-600 focus:text-pink-600 focus:border-pink-600 transition-all">
              Produtos
           </Link>
           <Link to="/"  className="text-left w-fit text-gray-800 border-b-2 border-transparent hover:text-pink-600 hover:border-pink-600 focus:text-pink-600 focus:border-pink-600 transition-all">
              Categorias
           </Link>
            <Link to="/meuspedidos"  className="text-left w-fit text-gray-800 border-b-2 border-transparent hover:text-pink-600 hover:border-pink-600 focus:text-pink-600 focus:border-pink-600 transition-all">
              Meus Pedidos
           </Link>
          </div>
          </div>

      
    </div>
  );
}