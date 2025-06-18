import { Link } from "react-router-dom";
import GridDeProdutosMeuCarrinho from "./GridDeProdutosMeuCarrinho";

export default function ProdutosRelacionadosMeuCarrinho() {
  return (
    <div className="hidden lg:flex lg:flex-col space-y-6 mt-6">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl lg:text-3xl text-[#474747]">
          Produtos Relacionados
        </h1>
        <Link to="/Produtos">
          <p className="text-[#c92071] text-xl lg:text-2xl cursor-pointer hover:border-b hover:border-[#c92071]">
            Ver Todos ➝
          </p>
        </Link>
      </div>{" "}
      {/* ← FECHOU a <div> aqui corretamente */}
      <GridDeProdutosMeuCarrinho />
    </div>
  );
}
