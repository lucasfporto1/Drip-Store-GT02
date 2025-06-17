import CorpoPaginaMinhasInformacoesEntrega from "./CorpoPaginaMinhasInformacoesEntrega";
import CorpoPaginaMinhasInformacoesPessoais from "./CorpoPaginaMinhasInformacoesPessoais";

export default function CorpoPaginaMinhasInformacoes() {
  return (
    <main className="border-b-2 shadow-md h-fit border-gray-200 bg-white w-full md:w-3/4 p-6 rounded space-y-6">
      <div className="flex justify-between items-center border-b pb-2">
        <h2 className="text-gray-700 font-semibold">Minhas Informações</h2>
        <a href="#" className="text-pink-600 text-sm hover:underline">
          Editar
        </a>
      </div>

      {/* Informações Pessoais */}
      <CorpoPaginaMinhasInformacoesPessoais />

      <hr />

      {/* Informações de Entrega */}
      <CorpoPaginaMinhasInformacoesEntrega />
    </main>
  );
}
