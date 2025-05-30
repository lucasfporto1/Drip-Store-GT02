import tenisvermelho from "../assets/imagens/tenisvermelho.png";

export default function MeusPedidos() {
  return (
    <main className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="flex flex-col lg:flex-row gap-10">
        <section className="bg-white rounded-lg shadow-md hidden lg:block w-full h-80 max-w-sm p-6">
          <label className="flex border-b-2 border-gray-200 py-4 items-start">
            <input type="radio" name="tamanho" className="peer hidden" />
            <div className="text-lg font-semibold mb-4 cursor-pointer order-gray-300 peer-checked:text-pink-600 hover transition">
              Meu Perfil
            </div>
          </label>
          <label className="flex border-b-2 border-gray-200 py-4 items-start">
            <input type="radio" name="tamanho" className="peer hidden" />
            <div className="text-lg font-semibold mb-4 cursor-pointer order-gray-300 peer-checked:text-pink-600 hover transition">
              Meus Pedidos
            </div>
          </label>
          <label className="flex border-b-2 border-gray-200 py-4 items-start">
            <input type="radio" name="tamanho" className="peer hidden" />
            <div className="text-lg font-semibold mb-4 cursor-pointer order-gray-300 peer-checked:text-pink-600 hover transition">
              Minhas Informações
            </div>
          </label>
          <label className="flex  border-b-2 border-gray-200 py-4 items-start">
            <input type="radio" name="tamanho" className="peer hidden" />
            <div className="text-lg font-semibold mb-4 cursor-pointer order-gray-300 peer-checked:text-pink-600 hover transition">
              Métodos de Pagamento
            </div>
          </label>
        </section>

        <div className="w-full h-full max-w-[600px] rounded-lg shadow-md p-6 sm:p-10 bg-white">
          <div className="flex w-full flex-row gap-90 border-b-2 border-gray-200 whitespace-nowrap">
            <h2 className="text-lg font-semibold mb-4">Meus Pedidos</h2>
            <h2 className="text-sm text-gray-500 font-semibold mt-1 flex-col hidden lg:block">
              STATUS
            </h2>
          </div>

          {/* Pedido 1 */}
          <div className="whitespace-nowrap flex flex-col lg:flex-row justify-between items-start border-b-2 border-gray-200 py-4 gap-4">
            <div className="flex items-start gap-4">
              <img
                src={tenisvermelho}
                alt="Tênis"
                className="w-16 h-16 object-cover rounded bg-blue-100"
              />
              <div>
                <p className="text-sm text-gray-500">Pedido nº 2234981932</p>
                <p className="font-semibold text-gray-800">
                  Tênis Nike Revolution 6 Next Nature Masculino
                </p>
              </div>
            </div>
            <div className="flex gap-80 flex-row items-start lg:items-end text-left lg:text-right">
              <span className="block lg:hidden text-xs text-gray-500 font-semibold">
                STATUS
              </span>
              <p className="text-sm text-yellow-500 font-semibold flex flex-end">
                Produto em trânsito
              </p>
            </div>
          </div>

          {/* Pedido 2 */}
          <div className="whitespace-nowrap flex flex-col lg:flex-row justify-between items-start border-b-2 border-gray-200 py-4 gap-4">
            <div className="flex items-start gap-4">
              <img
                src={tenisvermelho}
                alt="Tênis"
                className="w-16 h-16 object-cover rounded bg-blue-100"
              />
              <div>
                <p className="text-sm text-gray-500">Pedido nº 2234981932</p>
                <p className="font-semibold text-gray-800">
                  Tênis Nike Revolution 6 Next Nature Masculino
                </p>
              </div>
            </div>
            <div className="flex gap-90 flex-row items-start lg:items-end text-left lg:text-right">
              <span className="block lg:hidden text-xs text-gray-500 font-semibold">
                STATUS
              </span>
              <p className="text-sm text-gray-400 font-semibold flex flex-end">
                Finalizado
              </p>
            </div>
          </div>

          {/* Pedido 3 */}
          <div className="whitespace-nowrap flex flex-col lg:flex-row justify-between items-start border-b-2 border-gray-200 py-4 gap-4">
            <div className="flex items-start gap-4">
              <img
                src={tenisvermelho}
                alt="Tênis"
                className="w-16 h-16 object-cover rounded bg-blue-100"
              />
              <div>
                <p className="text-sm text-gray-500">Pedido nº 2234981932</p>
                <p className="font-semibold text-gray-800">
                  Tênis Nike Revolution 6 Next Nature Masculino
                </p>
              </div>
            </div>
            <div className="flex gap-90 flex-row items-start lg:items-end text-left lg:text-right">
              <span className="block lg:hidden text-xs text-gray-500 font-semibold">
                STATUS
              </span>
              <p className="text-sm text-red-500 font-semibold flex flex-end">
                Cancelado
              </p>
            </div>
          </div>

          {/* Pedido 4 */}
          <div className="whitespace-nowrap flex flex-col lg:flex-row justify-between items-start border-b-2 border-gray-200 py-4 gap-4">
            <div className="flex items-start gap-4">
              <img
                src={tenisvermelho}
                alt="Tênis"
                className="w-16 h-16 object-cover rounded bg-blue-100"
              />
              <div>
                <p className="text-sm text-gray-500">Pedido nº 2234981932</p>
                <p className="font-semibold text-gray-800">
                  Tênis Nike Revolution 6 Next Nature Masculino
                </p>
              </div>
            </div>
            <div className="flex gap-90 flex-row items-start lg:items-end text-left lg:text-right">
              <span className="block lg:hidden text-xs text-gray-500 font-semibold">
                STATUS
              </span>
              <p className="text-sm text-gray-400 font-semibold mt-1 flex flex-end">
                Finalizado
              </p>
            </div>
          </div>

          {/* Pedido 5 */}
          <div className="whitespace-nowrap flex flex-col lg:flex-row justify-between items-start border-b-2 border-gray-200 py-4 gap-4">
            <div className="flex items-start gap-4">
              <img
                src={tenisvermelho}
                alt="Tênis"
                className="w-16 h-16 object-cover rounded bg-blue-100"
              />
              <div>
                <p className="text-sm text-gray-500">Pedido nº 2234981932</p>
                <p className="font-semibold text-gray-800">
                  Tênis Nike Revolution 6 Next Nature Masculino
                </p>
              </div>
            </div>
            <div className="flex gap-90 flex-row items-start lg:items-end text-left lg:text-right">
              <span className="block lg:hidden text-xs text-gray-500 font-semibold">
                STATUS
              </span>
              <p className="text-sm text-gray-400 font-semibold mt-1 flex flex-end">
                Finalizado
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
