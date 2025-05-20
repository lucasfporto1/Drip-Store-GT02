import LayoutWrapper from "../components/LayoutWrapper";
import filterIcon from "../assets/Filter-icon.png";
import tenis from "../assets/tenis.png";
import ModalMeuCarrinho from "../components/ModalMeuCarrinho";

export default function ProdutosPage() {
  const tenisList = [
    {
      id: 1,
      name: "Tênis K-Swiss V8 - Masculino",
      price: 100,
      originalPrice: 200,
      discount: 30,
      imageUrl: tenis,
    },
    {
      id: 2,
      name: "Tênis Nike Air Max - Feminino",
      price: 150,
      originalPrice: 250,
      discount: 40,
      imageUrl: tenis,
    },
    {
      id: 3,
      name: "Tênis Nike Air Max - Feminino",
      price: 150,
      originalPrice: 250,
      discount: 40,
      imageUrl: tenis,
    },
    {
      id: 4,
      name: "Tênis Nike Air Max - Feminino",
      price: 150,
      originalPrice: 250,
      discount: 40,
      imageUrl: tenis,
    },
  ];

  return (
    <LayoutWrapper>
      <ModalMeuCarrinho/>
      <section className="px-4 py-6 bg-[#f9f8fe]">
        <div className="flex justify-between items-center mb-4 gap-2">
          <div className="flex items-center justify-between border border-[#474747] rounded bg-white h-14 px-5 py-3 w-fit text-sm text-[#474747]">
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
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

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

        <aside className="fixed top-[65px] left-0 w-60 h-[calc(100vh-65px)] bg-white shadow-lg shadow-black/20 px-4 py-6 border-r text-sm z-50 hidden">
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

          {/* MARCA */}
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

          {/* CATEGORIA */}
          <div className="mb-4">
            <h3 className="text-gray-700 font-bold mb-2">Categoria</h3>
            <div className="space-y-2">
              {["Esporte e lazer", "Casual", "Utilitário", "Corrida"].map(
                (cat) => (
                  <label key={cat} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="accent-[#c92071] h-5 w-5"
                      defaultChecked
                    />
                    <span>{cat}</span>
                  </label>
                )
              )}
            </div>
          </div>

          {/* GÊNERO */}
          <div className="mb-4">
            <h3 className="text-gray-700 font-bold mb-2">Gênero</h3>
            <div className="space-y-2">
              {["Masculino", "Feminino", "Unisex"].map((gen) => (
                <label key={gen} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="accent-[#c92071] h-5 w-5"
                    defaultChecked
                  />
                  <span>{gen}</span>
                </label>
              ))}
            </div>
          </div>

          {/* ESTADO */}
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
                  <div className="h-5 w-5 rounded-full border-2 border-gray-400 peer-checked:bg-[#c92071] transition-colors"></div>
                  <span>{estado}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        <div className="grid grid-cols-2 gap-4 mb-20">
          {tenisList.map((item, index) => (
            <div key={index}>
              <div className="relative">
                <img
                  src={item.imageUrl}
                  alt="Tênis"
                  className="w-full bg-white p-4 py-8 cursor-pointer"
                />
                {index < 2 && (
                  <span className="absolute top-2 left-2 bg-[#e7ff86] text-[#474747] font-bold text-xs px-2 py-1 rounded-full">
                    {item.discount}% OFF
                  </span>
                )}
              </div>
              <h3 className="text-xs mt-2 text-[#8f8f8f] font-semibold">
                Tênis
              </h3>
              <p className="text-xs text-gray-600 font-semibold">{item.name}</p>
              <p className="text-sm mt-1">
                <span className="line-through text-gray-400">
                  {item.originalPrice}
                </span>{" "}
                <span className="text-black font-bold">{item.price}</span>
              </p>
            </div>
          ))}
        </div>
      </section>
    </LayoutWrapper>
  );
}