import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CardsTenis() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function fetchProdutos() {
      try {
        const response = await fetch("http://localhost:3000/api/produtos");
        const data = await response.json();
        setProdutos(Array.isArray(data) ? data : []);
      } catch {
        setProdutos([]);
      }
    }
    fetchProdutos();
  }, []);

  return (
    <div>
      <div className="lg:flex lg:flex-col space-y-6 mt-6 mb-10 ">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-2xl lg:text-3xl text-[#474747]">
            Produtos Relacionados
          </h1>
          <button className="text-[#c92071] text-xl lg:text-2xl cursor-pointer hover:border-b hover:border-[#c92071]">
            <Link to="/produtos">Ver Todos ➝</Link>
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {produtos.slice(0, 4).map((item, index) => {
            // Imagem do relacionamento
            let imagem = "";
            if (item.imagens?.[0]?.path) {
              imagem = item.imagens[0].path.startsWith("http")
                ? item.imagens[0].path
                : `/${item.imagens[0].path.replace(/^\//, "")}`;
            }

            // Preço e desconto
            const preco = Number(item.preco);
            const precoComDesconto = Number(item.precocomdesconto);
            const temDesconto =
              !isNaN(preco) &&
              !isNaN(precoComDesconto) &&
              precoComDesconto < preco;
            const desconto = temDesconto
              ? Math.round(100 - (precoComDesconto / preco) * 100)
              : 0;

            return (
              <div key={item.id || index} className="cursor-pointer">
                <Link to={`/detalhes/${item.id}`}>
                  <div className="bg-white p-4 shadow-sm relative">
                    {temDesconto && (
                      <span className="absolute top-3 left-3 bg-[#E7FF86] text-[#474747] text-xs font-bold px-2 py-1 rounded-full">
                        {desconto}% OFF
                      </span>
                    )}
                    <img
                      src={imagem}
                      alt={item.nome}
                      className="mx-auto mb-4 w-full max-w-[12.5rem] rounded shadow-md bg-white"
                    />
                  </div>
                  <div className="mt-2 px-1">
                    <p className="text-[#8F8F8F] text-sm lg:text-base font-semibold">
                      {item.categoria?.nome || "Tênis"}
                    </p>
                    <p className="text-[#474747] font-semibold text-sm leading-tight">
                      {item.nome}
                    </p>
                    <p className="text-base mt-1">
                      {temDesconto && (
                        <span className="line-through text-[#8f8f8f] mr-2">
                          R$ {preco.toFixed(2).replace(".", ",")}
                        </span>
                      )}
                      <span className="text-[#1f1f1f] font-bold">
                        R${" "}
                        {temDesconto
                          ? precoComDesconto.toFixed(2).replace(".", ",")
                          : preco.toFixed(2).replace(".", ",")}
                      </span>
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
