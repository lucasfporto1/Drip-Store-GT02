import React from "react";
import LayoutWrapper from "../components/LayoutWrapper";

export default function HomePage() {
  return (
    <LayoutWrapper>
      <main className="bg-[#F5F5F5]">
        {/* Banner Principal */}
        <section className="bg-[#edebeb] flex justify-center">
          <div className="w-[92%] flex flex-col items-center">
            <img className="w-110" src="assets/home/tenis-banner.png" alt="" />
            <h4 className="text-[#C92071] font-bold text-base tracking-[0.04rem]">
              Melhores ofertas personalizadas
            </h4>
            <div className="flex flex-col items-center py-3 gap-6">
              <h1 className="text-center max-w-[20rem] font-extrabold leading-[2.8rem] text-4xl text-wrap">
                Queima de stoque Nike 🔥
              </h1>
              <p className="text-center font-medium text-[#474747] text-base tracking-[0.03rem] mb-4 max-w-[21rem]">
                Consequat culpa exercitation mollit nisi excepteur do do tempor
                laboris eiusmod irure consectetur.
              </p>
            </div>
            <div className="group bg-[#C92071] border-[#C92071] border-2 rounded-[10px] w-full flex justify-center items-center py-3 mt-6 mb-15 hover:cursor-pointer hover:shadow-lg shadow-[#C92071]/50">
              <a
                className="capitalize text-white font-semibold text-[1.2rem] tracking-[0.06rem]"
                href="#"
              >
                ver ofertas
              </a>
            </div>
            <div>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </section>

        {/* Coleções em Destaque */}
        <section className="flex flex-row justify-center py-10">
          <div className="w-[92%] flex  gap-5">
            <h4 className="font-bold text-xl tracking-[0.04rem] text-zinc-600">
              Coleções em destaque
            </h4>

            {/* Coleção 01 */}
            <div className="flex flex-row bg-[#d8e3f2] w-full h-[15rem] rounded-[10px] justify-between pt-5 pl-5 overflow-hidden relative">
              <div className="flex flex-col items-start gap-3 z-20">
                <aside className="bg-[#e7ff86] flex justify-center w-fit py-2 px-4 rounded-3xl">
                  <p className="uppercase font-bold text-md text-[#474747]">
                    30% off
                  </p>
                </aside>
                <h2 className="text-3xl font-bold tracking-[0.1rem] mb-2 tracking-[2px]">
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
                className="absolute w-[18rem] top-17 right-[-6.9rem] -rotate-20"
                src="assets/home/camisa.png"
                alt="camisa-img"
              />
            </div>

            {/* Coleção 02 */}
            <div className="flex flex-row bg-[#d8e3f2] w-full h-[15rem] rounded-[10px] justify-between pt-5 pl-5 overflow-hidden relative">
              <div className="flex flex-col items-start w-[50%] gap-3 z-20">
                <aside className="bg-[#e7ff86] flex justify-center w-fit py-2 px-4 rounded-3xl">
                  <p className="uppercase font-bold text-md text-[#474747]">
                    30% off
                  </p>
                </aside>
                <h2 className="text-3xl font-bold tracking-[0.1rem] mb-2 tracking-[2px]">
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
                className="absolute w-[14rem] top-17 right-[-2rem] -rotate-10 scale-x-[-1]"
                src="assets/home/tenis-oferta.png"
                alt="tenis-promo"
              />
            </div>

            {/* Coleção 03 */}
            <div className="flex flex-row bg-[#d8e3f2] w-full h-[15rem] rounded-[10px] justify-between pt-5 pl-5 overflow-hidden relative">
              <div className="flex flex-col items-start gap-3 z-20">
                <aside className="bg-[#e7ff86] flex justify-center w-fit py-2 px-4 rounded-3xl">
                  <p className="uppercase font-bold text-md text-[#474747]">
                    30% off
                  </p>
                </aside>
                <h2 className="text-3xl font-bold tracking-[0.1rem] mb-2 tracking-[2px]">
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
                className="absolute w-[11rem] top-14 right-[-2rem] rotate-30"
                src="assets/home/headphones.png"
                alt="headphones-promo"
              />
            </div>
          </div>
        </section>

        {/* Categorias */}
        <section className="flex justify-center">
          <div className="w-[92%] flex flex-col gap-4">
            <h4 className="font-bold text-xl tracking-[0.04rem] text-zinc-600">
              Coleções em destaque
            </h4>
            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col items-center justify-center gap-2 p-3 bg-white rounded-[10px]">
                <img
                  className="w-16 h-16 object-contain"
                  src="assets/home/categorias/tenis-icon.png"
                  alt="Tênis"
                />
                <span className="text-sm text-[#474747]">Tênis</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 p-3 bg-white rounded-[10px]">
                <img
                  className="w-16 h-16 object-contain"
                  src="assets/home/categorias/camiseta-icon.png"
                  alt="Camisetas"
                />
                <span className="text-sm text-[#474747]">Camisetas</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 p-3 bg-white rounded-[10px]">
                <img
                  className="w-16 h-16 object-contain"
                  src="assets/home/categorias/calsados-icon.png"
                  alt="Calçados"
                />
                <span className="text-sm text-[#474747]">Calçados</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 p-3 bg-white rounded-[10px]">
                <img
                  className="w-16 h-16 object-contain"
                  src="assets/home/categorias/fones-icon.png"
                  alt="Fones"
                />
                <span className="text-sm text-[#474747]">Fones</span>
              </div>
            </div>
          </div>
        </section>

        {/* Cards de Produtos */}
        <section className="flex justify-center py-10">
          <div className="w-[92%] flex flex-col gap-6">
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

            <div className="grid grid-cols-2 gap-5">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-[10px] p-4 shadow hover:shadow-md transition-shadow"
                >
                  <img
                    className="w-full h-36 object-contain mb-3"
                    src={`assets/home/produto-${i}.png`}
                    alt={`Produto ${i}`}
                  />
                  <h5 className="text-base font-semibold text-[#474747] mb-1">
                    Tênis Nike Revolution {i}
                  </h5>
                  <p className="text-sm text-[#C92071] font-bold">R$ 199,90</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </LayoutWrapper>
  );
}
