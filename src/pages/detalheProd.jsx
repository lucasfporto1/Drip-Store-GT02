import estrelas from "../assets/imagens/estrelas.png";
import tenisvermelho from "../assets/imagens/tenisvermelho.png";
import tenisazul from "../assets/imagens/tenisazul.png";
import tenisazul2 from "../assets/imagens/sptazulxbonus.png";

export default function DetalheProd() {
  return (
    <div>
      <span className="text-sm text-gray-500 mt-3 px-4 block">
        Home / Produtos / Tenis / Nike / Tenis Nike Revolution 6 Nature
        Masculino
      </span>

      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* <!-- Galeria de Imagens --> */}
        <div>
          <div className="flex items-center justify-center p-4 rounded-lg">
            <img
              className="w-full h-full "
              src={tenisvermelho}
              alt="tenisvermelho"
            />
          </div>
          <div className="flex gap-4 mt-4">
            <button className="w-20 h-20 rounded border-gray-300 bg-red-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-600 transition">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={tenisvermelho}
                alt="sapatovermelho"
              />
            </button>
            <button className="w-20 h-20 rounded border-gray-300 bg-red-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-600 transition">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={tenisvermelho}
                alt="sapatovermelho"
              />
            </button>
            <button className="w-20 h-20 rounded border-gray-300 bg-red-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-600 transition">
              <img
                class="w-full h-full object-cover rounded-lg"
                src={tenisvermelho}
                alt="sapatovermelho"
              />
            </button>
            <button className="w-20 h-20 rounded border-gray-300 bg-red-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-600 transition">
              <img
                class="w-full h-full object-cover rounded-lg"
                src={tenisvermelho}
                alt="sapatovermelho"
              />
            </button>
            <button className="w-20 h-20 rounded border-gray-300 bg-red-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-600 transition">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={tenisvermelho}
                alt="sapatovermelho"
              />
            </button>
          </div>
        </div>

        {/* <!-- Informações do Produto --> */}
        <div>
          <h2 className="text-2xl font-semibold">
            Tênis Nike Revolution 6 Next Nature Masculino
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Casual | Nike | REF:38410171
          </p>
          <div className="flex items-center gap-2 mt-2">
            <img src={estrelas} alt="estrelas" />
          </div>
          <div className="mt-4">
            <span className="text-2xl font-bold">R$ 219,00</span>
            <span className="line-through text-gray-400 ml-2">R$ 249,00</span>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          {/* <!-- Tamanhos --> */}
          <div className="mt-6">
            <h3 className="font-medium mb-2">Tamanho</h3>
            <div className="flex flex-wrap gap-2">
              <label>
                <input type="radio" name="tamanho" class="peer hidden" />
                <div class="border px-4 py-3 rounded border-gray-300 peer-checked:bg-pink-600 peer-checked:text-white hover:bg-gray-100 cursor-pointer transition">
                  39
                </div>
              </label>
              <label>
                <input type="radio" name="tamanho" class="peer hidden" />
                <div class="border px-4 py-3 rounded border-gray-300 peer-checked:bg-pink-600 peer-checked:text-white hover:bg-gray-100 cursor-pointer transition">
                  40
                </div>
              </label>
              <label>
                <input type="radio" name="tamanho" class="peer hidden" />
                <div class="border px-4 py-3 rounded border-gray-300 peer-checked:bg-pink-600 peer-checked:text-white hover:bg-gray-100 cursor-pointer transition">
                  41
                </div>
              </label>
              <label>
                <input type="radio" name="tamanho" class="peer hidden" />
                <div class="border px-4 py-3 rounded border-gray-300 peer-checked:bg-pink-600 peer-checked:text-white hover:bg-gray-100 cursor-pointer transition">
                  42
                </div>
              </label>
              <label>
                <input type="radio" name="tamanho" class="peer hidden" />
                <div class="border px-4 py-3 rounded border-gray-300 peer-checked:bg-pink-600 peer-checked:text-white hover:bg-gray-100 cursor-pointer transition">
                  43
                </div>
              </label>
            </div>
          </div>

          {/* <!-- Cores --> */}
          <div className="mt-6">
            <h3 className="font-medium mb-2">Cor</h3>
            <div className="flex gap-2">
              <label>
                <input type="radio" name="cor" class="peer hidden" />
                <div class="w-6 h-6 rounded-full bg-pink-300 border-2 peer-checked:ring-2 peer-checked:ring-black hover:scale-110 cursor-pointer transition"></div>
              </label>
              <label>
                <input type="radio" name="cor" class="peer hidden" />
                <div class="w-6 h-6 rounded-full bg-blue-300 border-2 peer-checked:ring-2 peer-checked:ring-black hover:scale-110 cursor-pointer transition"></div>
              </label>
              <label>
                <input type="radio" name="cor" class="peer hidden" />
                <div class="w-6 h-6 rounded-full bg-gray-600 border-2 peer-checked:ring-2 peer-checked:ring-black hover:scale-110 cursor-pointer transition"></div>
              </label>
              <label>
                <input type="radio" name="cor" class="peer hidden" />
                <div class="w-6 h-6 rounded-full bg-purple-800 border-2 peer-checked:ring-2 peer-checked:ring-black hover:scale-110 cursor-pointer transition"></div>
              </label>
            </div>
          </div>

          {/* <!-- Botão Comprar --> */}
          <a href="configuracaoCompra">
            <button className="mt-6 bg-yellow-400 cursor-pointer text-white font-semibold px-10 py-3 rounded hover:bg-yellow-500 active:scale-95 transition">
              COMPRAR
            </button>
          </a>
        </div>
      </div>

      {/* <!-- Produtos Relacionados --> */}
      <section className="container mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-4">
          <h3 classname="text-xl font-semibold">Produtos Relacionados</h3>
          <a href="#" class="text-pink-600 hover:underline">
            Ver todos →
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          <div className="rounded-lg p-3 hover:shadow-lg transition cursor-pointer bg-white">
            <img
              className="border-black rounded-lg bg-white w-full shadow-md hover:shadow-md"
              src={tenisazul}
              alt="tenisazul1"
            />
            <h4 className="mt-2 text-sm text-gray-500">Tênis</h4>
            <p className="font-medium">K-Swiss V8 - Masculino</p>
            <p className="text-sm">
              <span class="line-through text-gray-400">$200</span>{" "}
              <span class="text-black font-semibold">$100</span>
            </p>
          </div>
          <div className="rounded-lg p-3 hover:shadow-lg transition cursor-pointer bg-white">
            <img
              className="border-black rounded-lg bg-white w-full shadow-md hover:shadow-md"
              src={tenisazul}
              alt="tenisazul1"
            />
            <h4 className="mt-2 text-sm text-gray-500">Tênis</h4>
            <p className="font-medium">K-Swiss V8 - Masculino</p>
            <p class="text-sm">
              <span class="line-through text-gray-400">$200</span>{" "}
              <span class="text-black font-semibold">$100</span>
            </p>
          </div>
          <div className="rounded-lg p-3 hover:shadow-lg transition cursor-pointer bg-white">
            <img
              className="border-black rounded-lg bg-white w-full shadow-md hover:shadow-md"
              src={tenisazul2}
              alt="tenisazul1"
            />
            <h4 className="mt-2 text-sm text-gray-500">Tênis</h4>
            <p className="font-medium">K-Swiss V8 - Masculino</p>
            <p className="text-sm">
              <span class="line-through text-gray-400">$200</span>{" "}
              <span class="text-black font-semibold">$100</span>
            </p>
          </div>
          <div class="rounded-lg p-3 hover:shadow-lg transition cursor-pointer bg-white">
            <img
              className="border-black rounded-lg bg-white w-full shadow-md hover:shadow-md"
              src={tenisazul2}
              alt="tenisazul1"
            />
            <h4 className="mt-2 text-sm text-gray-500">Tênis</h4>
            <p className="font-medium">K-Swiss V8 - Masculino</p>
            <p className="text-sm">
              <span class="line-through text-gray-400">$200</span>{" "}
              <span class="text-black font-semibold">$100</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
