import CadastroCriarContaForm from "./CadastroCriarContaForm";
import CadastroCriarContaTopForm from "./CadastroCriarContaTopForm";
import CadastroCriarContaBottomForm from "./CadastroCriarContaBottomForm";
import CredentialImage from "./CredentialImage";

export default function CadastroCriarContaScreen() {
  return (
    <section>
      <div className="flex flex-col justify-center items-center w-full gap-4 pt-15 pb-20 bg-gradient-to-b from-[#B5B6F2] to-[#EFEFFF] md:flex-row">
        {/* Texto acima do formulário */}
        <div className="bg-white rounded-md shadow-md p-6 w-[80%] md:w-3/5 xl:w-2/4">
          <CadastroCriarContaTopForm />

          {/* Formulário */}
          <CadastroCriarContaForm />

          <CadastroCriarContaBottomForm />
        </div>

        {/* Imagem opcional */}
        <CredentialImage />
      </div>
    </section>
  );
}
