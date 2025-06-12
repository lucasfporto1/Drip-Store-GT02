import CadastroCompletoInformacoesPessoais from "../components/CadastroCompletoInformacoesPessoais";
import CadastroCompletoInformacoesEntrega from "../components/CadastroCompletoInformacoesEntrega";

export default function CadastroCompletoForm() {
  return (
    <section className="flex flex-col justify-center">
      <div className="flex flex-col justify-center items-center w-full gap-6 pt-15 pb-20 bg-[#f9f8fe] md:flex-row">
        <div className="flex flex-col justify-center items-center bg-transparent w-full">
          {/* Cabeçalho */}
          <div className="flex justify-center w-[50%] md:justify-start pb-4">
            <h1 className="font-bold text-2xl font-[Inter]">Criar Conta</h1>
          </div>

          {/* Bloco 1: Informações Pessoais */}
          <CadastroCompletoInformacoesPessoais />

          <div className="w-4/5 h-[1px] bg-transparent my-2"></div>

          {/* Bloco 2: Informações de Entrega */}
          <CadastroCompletoInformacoesEntrega />
        </div>
      </div>
    </section>
  );
}
