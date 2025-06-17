import InformacoesPessoais from "../components/InformacoesPessoais";
import InformacoesEntrega from "../components/InformacaoEntrega";
import InformacoesPagamento from "../components/InformacoesPagamento";
import ResumoTotalDesktop from "../components/ResumoTotalDesktop";

export default function FormularioCompra() { 
  return (
    <form className="flex flex-col w-[88%] gap-5 xl:w-[60%]" method="POST">
      <h2 className="text-3xl font-bold tracking-[0.75px]">Finalizar Compra</h2>
      <InformacoesPessoais />
      <InformacoesEntrega />
      <InformacoesPagamento />
      <ResumoTotalDesktop />
    </form> )
}