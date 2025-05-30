import React from "react";

export default function LoginPage() {
  return (
    <section>
      <div className="flex flex-col justify-center items-center w-full gap-4 pt-15 pb-20 bg-gradient-to-b from-[#B5B6F2] to-[#EFEFFF] md:flex-row">
        <div className="bg-white rounded-md shadow-md p-6 w-[80%] md:w-3/5 xl:w-2/4">
          <div className="flex flex-col items-center mb-5 lg:items-start">
            <h1 className="font-bold text-[22px] font-[Inter]">
              Acesse sua conta
            </h1>
            <div className="flex flex-row gap-1 text-warp">
              <h3>
                Novo cliente? Então registre-se{" "}
                <a className="hover:underline" href="#">
                  aqui.
                </a>
              </h3>
            </div>
          </div>

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
              <a
                className="font-[Inter] text-[14px] mb-3 mt-5 underline"
                href="#"
              >
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

          <div className="flex flex-col items-center md:flex-row md:justify-center">
            <div className="flex flex-col items-start">
              <p className="font-[Inter] text-[14px] mb-3 mt-5 mr-2">
                Ou faça login com:
              </p>
            </div>
            <div className="flex flex-row items-center space-x-4">
              {/* Ícone do Gmail */}
              <a href="API GMAIL">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/016/716/465/non_2x/gmail-icon-free-png.png"
                  alt="Gmail"
                  className="h-10 w-10"
                />
              </a>
            </div>
          </div>
        </div>

        <div>
          {/*
          <img
            src="https://andaraki.fbitsstatic.net/img/p/tenis-adidas-feminino-grand-court-base-2-0-iq-7281-80079/321960.jpg?w=575&amp;h=575&amp;v=no-change&amp;qs=ignore"
            alt="Produto"
            className="w-[400px] h-[400px]"
          />
          */}
        </div>
      </div>
    </section>
  );
}
