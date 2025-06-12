
export default function HamburguerPedidos() {
  return (
    <div className="relative">
        <div>
          <h2 className="text-sm text-gray-500 mb-2 font-medium">Olá Francisco</h2>
          <div className="flex flex-col gap-3">
            <button className="text-left w-fit text-gray-800 border-b-2 border-transparent hover:text-pink-600 hover:border-pink-600 focus:text-pink-600 focus:border-pink-600 transition-all">
              Minhas Informações
            </button>
            <button className="text-left w-fit text-gray-800 border-b-2 border-transparent hover:text-pink-600 hover:border-pink-600 focus:text-pink-600 focus:border-pink-600 transition-all">
              Métodos de Pagamento
            </button>
          </div>
        </div>

        <hr className="border-t border-gray-300" />

        <div>
          <h2 className="text-sm text-gray-500 mb-2">Páginas</h2>
          <div className="flex flex-col gap-3">
            <button className="text-left w-fit text-gray-800 border-b-2 border-transparent hover:text-pink-600 hover:border-pink-600 focus:text-pink-600 focus:border-pink-600 transition-all">
              Home
            </button>
            <button className="text-left w-fit text-gray-800 border-b-2 border-transparent hover:text-pink-600 hover:border-pink-600 focus:text-pink-600 focus:border-pink-600 transition-all">
              Produtos
            </button>
            <button className="text-left w-fit text-gray-800 border-b-2 border-transparent hover:text-pink-600 hover:border-pink-600 focus:text-pink-600 focus:border-pink-600 transition-all">
              Categorias
            </button>
            <button className="text-left w-fit text-gray-800 border-b-2 border-transparent hover:text-pink-600 hover:border-pink-600 focus:text-pink-600 focus:border-pink-600 transition-all">
              Meus Pedidos
            </button>
          </div>
        </div>
     
    </div>
  );
}
