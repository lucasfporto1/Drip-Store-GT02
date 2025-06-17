import FormularioCompra from "../components/FormularioCompra";
import ResumoPedido from "../components/ResumoPedido";
import ResumoTotalMobile from "../components/ResumoTotalMobile";

export default function ConfiguracaoCompra() {
  return (
    <div>
      <main className="bg-[#F9F8FE] flex py-10 flex-col items-center gap-5 xl:flex-row xl:px-20 relative">
        <FormularioCompra />
        <ResumoPedido />
      </main>
      <ResumoTotalMobile />
    </div>
  );
}