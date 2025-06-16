import React from "react";
import { Link } from "react-router-dom";
import TenisJordan from "../assets/imagens/Tenis-jordan.png";
import tenis from "../assets/tenis.png";
import TenisPreto from "../assets/imagens/Tenis-preto.png";
import Camisa from "../assets/imagens/camisa.png";
import FoneDeOuvido from "../assets/imagens/Fone-de-ouvido.png";
import calçaIcon from "../assets/imagens/calça-icon.png";
import tenisIcon from "../assets/imagens/tenis-icon.png";
import HeadPhone from "../assets/imagens/headphone-icon.png";
import BannerPrincipalHome from "../components/BannerPrincipaHomel";
import camisa2 from "../assets/imagens/camisa2.png";
import calça2 from "../assets/imagens/calça2.png";
import sapato2 from "../assets/imagens/sapato2.png";
import Icones from "../components/icones";
import ProdutosEmAlta from "../components/produtosEmAlta.jsx";


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
      <BannerPrincipalHome />
      {/* Coleções em Destaque */}
      <section className=" flex flex-row justify-center py-10 ">
        <div className="w-[92%] flex flex-col md:flex-row gap-5">
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
              className="absolute w-[18rem] top-[4.25rem] right-[-6.9rem] rotate-[30deg] "
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
     <Icones />

     {/* Produtos em alta */}
     <ProdutosEmAlta/>

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
              A edição limitada do Air Jordan que une performance e estilo como
              nenhuma outra. Disponível por tempo limitado.
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
