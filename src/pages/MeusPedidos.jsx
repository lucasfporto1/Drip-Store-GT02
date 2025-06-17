import tenisvermelho from "../assets/imagens/tenisvermelho.png";

export default function MeusPedidos() {
  return (
    <div className="bg-gray-100 p-4 min-h-screen overflow-x-hidden">
      <main className="container mx-auto flex flex-col lg:flex-row items-start justify-center gap-10 w-full min-h-screen pt-6">
        {/* Menu lateral */}
        <section className="bg-white rounded-lg shadow-md hidden lg:block w-full lg:max-w-sm p-6 justify-start">
          <label className="flex border-b-2 border-gray-200 py-4 items-start">
            <input type="radio" name="tamanho" className="peer hidden" />
            <div className="text-lg font-semibold mb-4 cursor-pointer peer-checked:text-pink-600 hover transition">
              Meu Perfil
            </div>
          </label>
          <label className="flex border-b-2 border-gray-200 py-4 items-start">
            <input type="radio" name="tamanho" className="peer hidden" />
            <div className="text-lg font-semibold mb-4 cursor-pointer peer-checked:text-pink-600 hover transition">
              Meus Pedidos
            </div>
          </label>
          <label className="flex border-b-2 border-gray-200 py-4 items-start">
            <input type="radio" name="tamanho" className="peer hidden" />
            <a href="minhasinformacoes">
              <div className="text-lg font-semibold mb-4 cursor-pointer peer-checked:text-pink-600 hover transition">
                Minhas Informações
              </div>
            </a>
          </label>
          <label className="flex border-b-2 border-gray-200 py-4 items-start">
            <input type="radio" name="tamanho" className="peer hidden" />
            <div className="text-lg font-semibold mb-4 cursor-pointer peer-checked:text-pink-600 hover transition">
              Métodos de Pagamento
            </div>
          </label>
        </section>

        {/* Conteúdo principal */}
        <div className="w-full max-w-full lg:max-w-[600px] rounded-lg shadow-md p-6 sm:p-10 bg-white ">
          <div className="flex w-full flex-row gap-4 flex-wrap border-b-2 border-gray-200 justify-between">
            <h2 className="text-lg font-semibold mb-4">Meus Pedidos</h2>
            <h2 className="text-sm text-gray-500 font-semibold mt-1 text-right hidden lg:block">
              STATUS
            </h2>
          </div>

          {/* Pedido 1 */}
          <div className="flex flex-col lg:flex-row justify-between items-start border-b-2 border-gray-200 py-4 gap-4 w-full">
            <div className="flex items-start gap-4 w-full">
              <img
                src={tenisvermelho}
                alt="Tênis"
                className="w-16 h-16 object-cover rounded bg-blue-100 flex-shrink-0"
              />
              <div className="w-full overflow-hidden whitespace-nowrap">
                <p className="text-sm text-gray-500 truncate">
                  Pedido nº 2234981936
                </p>
                <p className="font-semibaold text-gray-800 whitespace-nowrap">
                  Tênis Nike Revolution 6 Next Nature Masculino
                </p>
              </div>
            </div>
            <div className="w-full flex justify-between items-center mt-2">
              <div className="">
                <span className="block text-xs text-gray-500 font-semibold lg:hidden ">
                  {" "}
                  STATUS
                </span>
              </div>
              <p className="text-sm text-yellow-500 font-semibold whitespace-nowrap">
                Pedido em trasito
              </p>
            </div>
          </div>

          {/* Pedido 2 */}
          <div className="flex flex-col lg:flex-row justify-between items-start border-b-2 border-gray-200 py-4 gap-4 w-full">
            <div className="flex items-start gap-4 w-full">
              <img
                src={tenisvermelho}
                alt="Tênis"
                className="w-16 h-16 object-cover rounded bg-blue-100 flex-shrink-0"
              />
              <div className="w-full overflow-hidden whitespace-nowrap">
                <p className="text-sm text-gray-500 truncate">
                  Pedido nº 2234981936
                </p>
                <p className="font-semibaold text-gray-800 whitespace-nowrap">
                  Tênis Nike Revolution 6 Next Nature Masculino
                </p>
              </div>
            </div>
            <div className="w-full flex justify-between items-center mt-2">
              <div className="">
                <span className="block text-xs text-gray-500 font-semibold lg:hidden ">
                  {" "}
                  STATUS
                </span>
              </div>
              <p className="text-sm text-gray-400 font-semibold whitespace-nowrap">
                Finalizado
              </p>
            </div>
          </div>

          {/* Pedido 3 */}
          <div className="flex flex-col lg:flex-row justify-between items-start border-b-2 border-gray-200 py-4 gap-4 w-full">
            <div className="flex items-start gap-4 w-full">
              <img
                src={tenisvermelho}
                alt="Tênis"
                className="w-16 h-16 object-cover rounded bg-blue-100 flex-shrink-0"
              />
              <div className="w-full overflow-hidden whitespace-nowrap">
                <p className="text-sm text-gray-500 truncate">
                  Pedido nº 2234981936
                </p>
                <p className="font-semibaold text-gray-800 whitespace-nowrap">
                  Tênis Nike Revolution 6 Next Nature Masculino
                </p>
              </div>
            </div>
            <div className="w-full flex justify-between items-center mt-2">
              <div className="">
                <span className="block text-xs text-gray-500 font-semibold lg:hidden ">
                  {" "}
                  STATUS
                </span>
              </div>
              <p className="text-sm text-gray-400 font-semibold whitespace-nowrap">
                Finalizado
              </p>
            </div>
          </div>

          {/* Pedido 4 */}
          <div className="flex flex-col lg:flex-row justify-between items-start border-b-2 border-gray-200 py-4 gap-4 w-full">
            <div className="flex items-start gap-4 w-full">
              <img
                src={tenisvermelho}
                alt="Tênis"
                className="w-16 h-16 object-cover rounded bg-blue-100 flex-shrink-0"
              />
              <div className="w-full overflow-hidden whitespace-nowrap">
                <p className="text-sm text-gray-500 truncate">
                  Pedido nº 2234981936
                </p>
                <p className="font-semibaold text-gray-800 whitespace-nowrap">
                  Tênis Nike Revolution 6 Next Nature Masculino
                </p>
              </div>
            </div>
            <div className="w-full flex justify-between items-center mt-2">
              <div className="">
                <span className="block text-xs text-gray-500 font-semibold lg:hidden ">
                  {" "}
                  STATUS
                </span>
              </div>
              <p className="text-sm text-red-500 font-semibold whitespace-nowrap">
                Cancelado
              </p>
            </div>
          </div>

          {/* Pedido 5 */}
          <div className="flex flex-col lg:flex-row justify-between items-start border-b-2 border-gray-200 py-4 gap-4 w-full">
            <div className="flex items-start gap-4 w-full">
              <img
                src={tenisvermelho}
                alt="Tênis"
                className="w-16 h-16 object-cover rounded bg-blue-100 flex-shrink-0"
              />
              <div className="w-full overflow-hidden whitespace-nowrap">
                <p className="text-sm text-gray-500 truncate">
                  Pedido nº 2234981936
                </p>
                <p className="font-semibaold text-gray-800 whitespace-nowrap">
                  Tênis Nike Revolution 6 Next Nature Masculino
                </p>
              </div>
            </div>
            <div className="w-full flex justify-between items-center mt-2">
              <div className="">
                <span className="block text-xs text-gray-500 font-semibold lg:hidden ">
                  {" "}
                  STATUS
                </span>
              </div>
              <p className="text-sm text-gray-400 font-semibold whitespace-nowrap">
                Finalizado
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
