export default function LoginForm() {
  return (
    <form>
      <div className="flex flex-col">
        <label
          htmlFor="nome"
          className="font-[Inter] text-[12px] text-gray-700 font-medium"
        >
          Login*
        </label>
        <input
          type="text"
          id="nome"
          placeholder="Insira seu login"
          className="border-2 border-gray-100 bg-gray-100 rounded-md p-2 focus:outline-none mb-3"
        />
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="password"
          className="font-[Inter] text-[12px] text-gray-700 font-medium"
        >
          Senha*
        </label>
        <input
          type="password"
          id="password"
          placeholder="Insira sua senha"
          className="border-2 border-gray-100 bg-gray-100 rounded-md p-2 focus:outline-none"
        />
      </div>

      <div className="flex flex-col items-start">
        <a className="font-[Inter] text-[14px] mb-3 mt-5 underline" href="#">
          Esqueci minha senha
        </a>
      </div>

      <button
        className="flex text-white text-[16px] border-2 bg-[#C92071] rounded-xl w-full justify-center hover:bg-[#991956] p-3 mt-6 cursor-pointer"
        type="submit"
      >
        Acessar Conta
      </button>
    </form>
  );
}
