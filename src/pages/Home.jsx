import React from "react";
import TenisJordan from "../assets/imagens/Tenis-jordan.png";
import TenisVermelho from "../assets/imagens/tenisvermelho.png";
import tenis from "../assets/tenis.png";
import TenisPreto from "../assets/imagens/Tenis-preto.png";
import Camisa from "../assets/imagens/camisa.png";
import FoneDeOuvido from "../assets/imagens/Fone-de-ouvido.png";
import calçaIcon from "../assets/imagens/calça-icon.png";
import tenisIcon from "../assets/imagens/tenis-icon.png";
import HeadPhone from "../assets/imagens/headphone-icon.png";

export default function HomePage() {
  const tenisList = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    name: "Tênis Nike Revolution 6 Next Nature",
    imageUrl: tenis, // Corrigido para usar a imagem importada
    discount: 30,
    originalPrice: "R$ 200",
    price: "R$ 100",
  }));

  return (
      <main className="bg-[#F5F5F5]">
        {/* Banner Principal */}
        <section className="bg-[#F6F6F6] py-12 flex justify-center relative overflow-hidden">
          <div className="w-[92%] max-w-7xl flex flex-col-reverse md:flex-row items-center justify-between">
            <div className="max-w-xl text-center md:text-left">
              <h4 className="text-[#f6aa1c] font-bold text-base mb-4">
                Melhores ofertas personalizadas
              </h4>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#1f1f1f]">
                Queima de <br /> estoque Nike 🔥
              </h1>
              <p className="text-[#474747] text-base mt-4 mb-6">
                Consequat culpa exercitation mollit nisi excepteur do do tempor
                laboris eiusmod irure consectetur.
              </p>
              <a
                href="#"
                className="inline-block bg-[#C92071] text-white px-10 py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Ver ofertas
              </a>
            </div>
            <img
              src={TenisVermelho}
              alt="Tênis Nike Vermelho em promoção"
              className="w-[300px] md:w-[420px] lg:w-[500px] mb-10 md:mb-0"
            />
          </div>
        </section>

        {/* Coleções em Destaque */}
        <section className="flex flex-row justify-center py-10">
          <div className="w-[92%] flex gap-5">
            {/* Coleção 01 */}
            <div className="flex flex-row bg-[#d8e3f2] w-full h-[15rem] rounded-[10px] justify-between pt-5 pl-5 overflow-hidden relative">
              <div className="flex flex-col items-start gap-3 z-20">
                <aside className="bg-[#e7ff86] py-2 px-4 rounded-3xl">
                  <p className="uppercase font-bold text-base text-[#474747]">
                    30% off
                  </p>
                </aside>
                <h2 className="text-3xl font-bold mb-2 tracking-[2px]">
                  Novo drop <br /> Supreme
                </h2>
                <a
                  className="bg-white py-3 px-11 rounded-[10px] text-[#C92071] capitalize font-semibold text-[1.1rem] hover:bg-[#C92071] hover:text-white"
                  href="#"
                >
                  comprar
                </a>
              </div>
              <img
                className="absolute w-[18rem] top-[4.25rem] right-[-6.9rem] rotate-[30deg]"
                src={Camisa}
                alt="Camisa Supreme em promoção"
              />
            </div>

            {/* Coleção 02 */}
            <div className="flex flex-row bg-[#d8e3f2] w-full h-[15rem] rounded-[10px] justify-between pt-5 pl-5 overflow-hidden relative">
              <div className="flex flex-col items-start w-[50%] gap-3 z-20">
                <aside className="bg-[#e7ff86] py-2 px-4 rounded-3xl">
                  <p className="uppercase font-bold text-base text-[#474747]">
                    30% off
                  </p>
                </aside>
                <h2 className="text-3xl font-bold mb-2 tracking-[2px]">
                  Coleção Adidas
                </h2>
                <a
                  className="bg-white py-3 px-11 rounded-[10px] text-[#C92071] capitalize font-semibold text-[1.1rem] hover:bg-[#C92071] hover:text-white"
                  href="#"
                >
                  comprar
                </a>
              </div>
              <img
                className="absolute w-[14rem] top-[4.25rem] right-[-2rem] -rotate-10 scale-x-[-1]"
                src={TenisPreto}
                alt="Tênis Adidas preto em promoção"
              />
            </div>

            {/* Coleção 03 */}
            <div className="flex flex-row bg-[#d8e3f2] w-full h-[15rem] rounded-[10px] justify-between pt-5 pl-5 overflow-hidden relative">
              <div className="flex flex-col items-start gap-3 z-20">
                <aside className="bg-[#e7ff86] py-2 px-4 rounded-3xl">
                  <p className="uppercase font-bold text-base text-[#474747]">
                    30% off
                  </p>
                </aside>
                <h2 className="text-3xl font-bold mb-2 tracking-[2px]">
                  Novo <br /> Beats Bass
                </h2>
                <a
                  className="bg-white py-3 px-11 rounded-[10px] text-[#C92071] capitalize font-semibold text-[1.1rem] hover:bg-[#C92071] hover:text-white"
                  href="#"
                >
                  comprar
                </a>
              </div>
              <img
                className="absolute w-[11rem] top-[3.5rem] right-[-2rem] rotate-30"
                src={FoneDeOuvido}
                alt="Fone de ouvido Beats Bass em promoção"
              />
            </div>
          </div>
        </section>

        {/* Categorias */}
        <section className="flex justify-center">
          <div className="w-[92%] flex items-center flex-col gap-4">
            <h4 className="font-bold text-xl tracking-[0.04rem] text-zinc-600">
              Coleções em destaque
            </h4>
            <div className="flex flex-row gap-4">
              {[
                { img: tenisIcon }, // Substituído null por imagem válida
                { img: calçaIcon },
                { img: HeadPhone }, // Reorganizado para evitar placeholders
                { img: tenisIcon },
                { img: HeadPhone },
              ].map((cat, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center cursor-pointer gap-2 p-3 bg-white rounded-full hover:bg-pink-400 transition-colors"
                >
                  {cat.img ? (
                    <img
                      className="w-16 h-16 object-contain"
                      src={cat.img}
                      alt={`Ícone de ${cat.nome}`}
                    />
                  ) : (
                    <div className="w-16 h-16 bg-gray-200 flex items-center justify-center text-sm text-gray-500 rounded-full hover:bg-pink-200 transition-colors">
                      Sem imagem
                    </div>
                  )}
                  <p className="text-sm font-semibold text-[#474747]">
                    {cat.nome}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Produtos em Alta */}
        <section className="flex justify-center py-10">
          <div className="w-[92%] flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h4 className="font-bold text-xl tracking-[0.04rem] text-zinc-600">
                Produtos em alta
              </h4>
              <a
                className="text-[#C92071] font-medium hover:underline"
                href="#"
              >
                Ver todos
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 flex-1">
              {tenisList.map((item) => (
                <div key={item.id} className="cursor-pointer">
                  <div className="bg-white p-4 shadow-sm relative">
                    {item.discount > 0 && (
                      <span className="absolute top-3 left-3 bg-[#E7FF86] text-[#474747] text-xs font-bold px-2 py-1 rounded-full">
                        {item.discount}% OFF
                      </span>
                    )}
                    <img
                      src={item.imageUrl}
                      alt={`Imagem do ${item.name}`}
                      className="mx-auto mb-4 w-full"
                    />
                  </div>
                  <div className="mt-2 px-1">
                    <p className="text-[#8F8F8F] text-sm font-semibold">
                      Tênis
                    </p>
                    <p className="text-[#474747] font-semibold text-sm leading-tight">
                      {item.name}
                    </p>
                    <p className="text-base mt-1">
                      {item.discount > 0 && (
                        <span className="line-through text-[#8f8f8f] mr-2">
                          {item.originalPrice}
                        </span>
                      )}
                      <span className="text-[#1f1f1f] font-bold">
                        {item.price}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Destaque Air Jordan */}
        <section className="flex justify-center">
          <div className="w-full flex bg-[#ffffff] rounded-[20px] py-20 p-8 items-center  flex-col md:flex-row">
            <div className="flex-1">
              <img
                src={TenisJordan}
                alt="Air Jordan Edição de Colecionador"
                className="w-full max-w-sm mx-auto z-10"
              />
            </div>
            <div className="flex-1 flex flex-col gap-4 text-center md:text-left">
              <h4 className="uppercase text-[#C92071] font-bold text-sm tracking-[0.1rem]">
                Air Jordan
              </h4>
              <h2 className="text-2xl md:text-4xl font-bold text-[#1f1f1f] leading-tight">
                Air Jordan edição de <br /> colecionador
              </h2>
              <p className="text-[#474747] text-base max-w-lg">
                A edição limitada do Air Jordan que une performance e estilo
                como nenhuma outra. Disponível por tempo limitado.
              </p>
              <a
                href="#"
                className="bg-[#C92071] text-white py-2 px-20 rounded-[10px] text-lg font-semibold w-fit mx-auto md:mx-0 hover:shadow-lg hover:opacity-90 transition"
              >
                Ver Oferta
              </a>
            </div>
          </div>
        </section>
      </main>
  );
}
