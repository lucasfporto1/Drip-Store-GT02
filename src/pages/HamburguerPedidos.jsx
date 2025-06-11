
export default function HamburguerPedidos() {
  return (
    <div className="relative">
      {/* A checkbox controla o menu usando peer */}
      {/* <input type="checkbox" id="menu-toggle" className="hidden peer" /> */}

      {/* Cabeçalho com botão hambúrguer */}
      {/* <header className="flex items-center justify-between px-4 py-3 border-b">
        <label htmlFor="menu-toggle" className="text-2xl cursor-pointer">
          <i className="fas fa-bars"></i>
        </label>
      </header> */}

      {/* Menu lateral */}
      {/* <aside className="fixed top-0 left-0 h-full w-64 bg-white shadow-md p-6 transform -translate-x-full peer-checked:translate-x-0 transition-transform duration-300 z-50 space-y-6"> */}
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
      {/* </aside> */}

      {/* Overlay */}
      {/* <label
        htmlFor="menu-toggle"
        className="hidden peer-checked:block fixed inset-0 bg-black bg-opacity-40 z-40"
      ></label> */}
    </div>
  );
}
