import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function GridProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProdutos() {
      try {
        const response = await fetch("http://localhost:3000/api/produtos");
        const data = await response.json();
        setProdutos(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        setProdutos([]);
      } finally {
        setLoading(false);
      }
    }
    fetchProdutos();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Carregando produtos...</div>;
  }

  if (!produtos.length) {
    return (
      <div className="text-center py-10 text-red-500">
        Nenhum produto encontrado.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 flex-1">
      {produtos.map((item, index) => {
        const nome = item.nome || "Produto sem nome";
        const categoria = item.categoria?.nome || "Sem categoria";
        const preco = Number(item.preco);
        const precoComDesconto = Number(item.precocomdesconto);
        const temDesconto =
          !isNaN(preco) && !isNaN(precoComDesconto) && precoComDesconto < preco;
        const desconto = temDesconto
          ? Math.round(100 - (precoComDesconto / preco) * 100)
          : 0;

        // Imagem principal do relacionamento
        let imagem = null;
        if (item.imagens?.[0]?.path) {
          imagem = item.imagens[0].path.startsWith("http")
            ? item.imagens[0].path
            : `/${item.imagens[0].path.replace(/^\//, "")}`;
        }

        return (
          <Link to={`/detalhes/${item.id}`} key={item.id || index}>
            <div className="cursor-pointer">
              <div className="bg-white p-4 shadow-sm relative">
                {temDesconto && (
                  <span className="absolute top-3 left-3 bg-[#E7FF86] text-[#474747] text-xs font-bold px-2 py-1 rounded-full">
                    {desconto}% OFF
                  </span>
                )}
                {imagem ? (
                  <img
                    src={imagem}
                    alt={nome}
                    className="mx-auto mb-4 w-full max-w-[12.5rem] rounded shadow-md bg-white"
                    style={{ minHeight: 120, objectFit: "contain" }}
                  />
                ) : (
                  <div
                    style={{ minHeight: 120 }}
                    className="mx-auto mb-4 w-full max-w-[12.5rem] rounded shadow-md bg-gray-100 flex items-center justify-center text-gray-400"
                  >
                    Sem imagem
                  </div>
                )}
              </div>
              <div className="mt-2 px-1">
                <p className="text-[#8F8F8F] text-sm font-semibold">
                  {categoria}
                </p>
                <p className="text-[#474747] font-semibold text-sm leading-tight">
                  {nome}
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
            </div>
          </Link>
        );
      })}
    </div>
  );
}
