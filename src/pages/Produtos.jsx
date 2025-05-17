import filterIcon from "../assets/Filter-icon.png";
import tenisImage from "../assets/tenis.png";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Produtos() {
  return (
    <>
      <Header />

      <section className="px-4 py-6 bg-[#f9f8fe]">
        <div className="flex justify-between items-center mb-4 gap-2">
          {/* Componente "Ordenar por" */}
          <div className="flex items-center justify-between border border-[#474747] rounded bg-white w-fit h-14 px-5 py-3 text-sm text-[#474747]">
            <span className="font-bold mr-1">Ordenar por:</span>
            <span className="text-[#8f8f8f] mr-2">mais relevantes</span>
            <svg
              className="w-4 h-4 text-[#8f8f8f]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          {/* Botão de filtro */}
          <button
            id="openFilter"
            className="bg-[#c92071] hover:bg-pink-700 w-14 h-14 mr-2 flex items-center justify-center rounded-md"
          >
            <img src={filterIcon} alt="Filtro" />
          </button>
        </div>

        <div className="flex gap-3 mb-4">
          <p className="font-bold text-[#4c4c4c]">Resultados para "Tênis" - </p>
          <p className="text-[#474747] font-semibold">389 produtos</p>
        </div>

        {/* Sidebar de filtros */}
        <aside className="fixed top-0 left-0 w-60 h-full bg-white shadow-lg px-4 py-6 border-r text-sm z-50 shadow-black/20 hidden">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-base font-semibold text-gray-800">
              Filtrar por
            </h2>
            <button
              id="closeFilter"
              className="text-gray-600 text-xl font-bold leading-none"
            >
              ×
            </button>
          </div>

          {/* Marca */}
          <div className="mb-4">
            <h3 className="text-gray-700 font-bold mb-2">Marca</h3>
            <div className="space-y-2">
              {["Adiddas", "Calenciaga", "K-Swiss", "Nike", "Puma"].map(
                (marca) => (
                  <label key={marca} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="accent-[#c92071] h-5 w-5"
                      defaultChecked
                    />
                    <span>{marca}</span>
                  </label>
                )
              )}
            </div>
          </div>

          {/* Categoria */}
          <div className="mb-4">
            <h3 className="text-gray-700 font-bold mb-2">Categoria</h3>
            <div className="space-y-2">
              {["Esporte e lazer", "Casual", "Utilitário", "Corrida"].map(
                (categoria) => (
                  <label key={categoria} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="accent-[#c92071] h-5 w-5"
                      defaultChecked
                    />
                    <span>{categoria}</span>
                  </label>
                )
              )}
            </div>
          </div>

          {/* Gênero */}
          <div className="mb-4">
            <h3 className="text-gray-700 font-bold mb-2">Gênero</h3>
            <div className="space-y-2">
              {["Masculino", "Feminino", "Unisex"].map((genero) => (
                <label key={genero} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="accent-[#c92071] h-5 w-5"
                    defaultChecked
                  />
                  <span>{genero}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Estado */}
          <div className="mb-4">
            <h3 className="text-gray-700 font-bold mb-2">Estado</h3>
            <div className="space-y-2">
              {["Novo", "Usado"].map((estado) => (
                <label
                  key={estado}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    defaultChecked
                  />
                  <div className="h-5 w-5 rounded-full border-2 border-gray-400 peer-checked:bg-[#c92071] transition-colors" />
                  <span>{estado}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Lista de produtos */}
        <div className="grid grid-cols-2 gap-4 mb-20">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index}>
              <div className="relative">
                <img
                  src={tenisImage}
                  alt="Tênis"
                  className="w-full bg-white p-4 py-8 cursor-pointer"
                />
                {index < 2 && (
                  <span className="absolute top-2 left-2 bg-[#e7ff86] text-[#474747] font-bold text-xs px-2 py-1 rounded-full">
                    30% OFF
                  </span>
                )}
              </div>
              <h3 className="text-xs mt-2 text-[#8f8f8f] font-semibold">
                Tênis
              </h3>
              <p className="text-xs text-gray-600 font-semibold">
                K-Swiss V8 - Masculino
              </p>
              <p className="text-sm mt-1">
                <span className="line-through text-gray-400">$200</span>
                <span className="text-black font-bold"> $100</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer/>
    </>
  );
}
