import TenisVermelho from "../assets/imagens/tenisvermelho.png";
import { Link } from "react-router-dom";

export default function BannerPrincipalHome() {
  return (
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
            <Link to="/detalhes"> Ver ofertas</Link>
          </a>
        </div>
        <img
          src={TenisVermelho}
          alt="Tênis Nike Vermelho em promoção"
          className="w-[300px] md:w-[420px] lg:w-[500px] mb-10 md:mb-0"
        />
      </div>
    </section>
  );
}
