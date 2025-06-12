import LoginForm from "./LoginForm";
import CadastroLoginBottomForm from "./CadastroCriarContaBottomForm";
import CredentialImage from "./CredentialImage";
import LoginTopForm from "./LoginTopForm";

export default function LoginScreen() {
  return (
    <section>
      <div className="flex flex-col justify-center items-center w-full gap-4 pt-15 pb-20 bg-gradient-to-b from-[#B5B6F2] to-[#EFEFFF] md:flex-row">
        <div className="bg-white rounded-md shadow-md p-6 w-[80%] md:w-3/5 xl:w-2/4">
          <LoginTopForm />

          <LoginForm />

          <CadastroLoginBottomForm />
        </div>

        <CredentialImage />
      </div>
    </section>
  );
}
