import AtalhoDetalhes from "../components/AtalhoDetalhes.jsx";
import GaleriaProduto from "../components/GaleriaDetalhes.jsx";
import FormDetalhes from "../components/FormDetalhes.jsx";
import CardsTenis from "../components/CardsTenis.jsx";
import TamanhosDetalhes from "../components/TamanhosDetalhes.jsx";
import CoresDetalhes from "../components/CoresDetahes.jsx";

export default function DetalheProd() {
  return (
    <div>
      <AtalhoDetalhes />

      {/* <!-- Galeria de Imagens --> */}
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <GaleriaProduto />

        <div>
          <FormDetalhes />
          <TamanhosDetalhes />
          <CoresDetalhes />
          <a href="configuracaoCompra">
            <button className="mt-6 bg-yellow-400 cursor-pointer text-white font-semibold px-10 py-3 rounded hover:bg-yellow-500 active:scale-95 transition">
              COMPRAR
            </button>
          </a>
        </div>
      </div>

      <CardsTenis />
    </div>
  );
}
