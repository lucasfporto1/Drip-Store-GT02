import BarraDeCupomeFreteMeuCarrinho from "../components/BarraDeCupomeFreteMeuCarrinho";
import BotaoMeuCarrinho from "../components/BotaoMeuCarrinho";
import CabecalhoMeuCarrinho from "../components/CabecalhoMeuCarrinho";
import CardProdutoMeuCarrinho from "../components/CardDeProdutoMeuCarrinho";
import CupomMeuCarrinho from "../components/CupomMeuCarrinho";
import GridDeProdutosMeuCarrinho from "../components/GridDeProdutosMeuCarrinho";
import ProdutosRelacionadosMeuCarrinho from "../components/ProdutosRelacionadosMeuCarrinho";
import ResumoMeuCarrinho from "../components/ResumoMeuCarrinho";
import QuantidadeUnitarioTotalMeuCarrinho from "../components/QuantidadeUnitarioTotalMeuCarrinho";

export default function MeuCarrinhoPage() {
  return (
    <>
      <div className="bg-[#f9f8fe] min-h-screen p-4 text-sm text-gray-800 lg:grid lg:grid-cols-3 lg:gap-6">
        {/* COLUNA ESQUERDA (2/3 da tela no desktop) */}
        <div className="lg:col-span-2 space-y-4 lg:ml-8">
          {/* Produto no carrinho */}
          <div className="bg-white rounded p-4 shadow mt-10">
            {/* Cabeçalho */}
            <CabecalhoMeuCarrinho />

            <hr className="text-[#CCCCCC] mb-4 mt-5" />

            {/* Bloco principal do item */}
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:border-b lg:border-[#CCCCCC] lg:pb-4">
              {/* Imagem + Info */}
              <CardProdutoMeuCarrinho />

              {/* Quantidade / Unitário / Total */}
              <QuantidadeUnitarioTotalMeuCarrinho />
            </div>

            {/* Barra de cupom e frete do desktop */}
            <BarraDeCupomeFreteMeuCarrinho />
          </div>

          {/* Cupom */}
          <CupomMeuCarrinho />

          {/* Frete */}
          {/* Produtos Relacionados */}
          <ProdutosRelacionadosMeuCarrinho />
        </div>

        {/* COLUNA DIREITA (Resumo) */}
        <ResumoMeuCarrinho />
      </div>

      {/* Botão fixo no final */}
      <BotaoMeuCarrinho />
    </>
  );
}
