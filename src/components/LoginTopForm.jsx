export default function LoginTopForm() {
  return (
    <div className="flex flex-col items-center mb-5 lg:items-start">
      <h1 className="font-bold text-[22px] font-[Inter]">Acesse sua conta</h1>
      <div className="flex flex-row gap-1 text-warp">
        <h3>
          Novo cliente? Então registre-se{" "}
          <a className="hover:underline" href="#">
            aqui.
          </a>
        </h3>
      </div>
    </div>
  );
}
