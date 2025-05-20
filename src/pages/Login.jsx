export default function Login() {
    return(
    <>
      <div
        className="flex flex-col justify-center items-center w-full gap-4 pt-15 pb-20 bg-gradient-to-b from-[#B5B6F2] to-[#EFEFFF] md:flex-row"
      >
        //texto acima formulario
        <div
          className="bg-white rounded-md shadow-md p-6 w-[80%] md:w-3/5 xl:w-2/4"
        >
          <div className="flex flex-col items-center mb-5 lg:items-start">
            <h1 className="font-bold text-[22px] font-[Inter]">Acesse sua conta</h1>
            <div className="flex flex-row gap-1 text-warp">
              <h3>
                Novo cliente? Então registre-se
                <a className="hover:underline">aqui.</a>
              </h3>
            </div>
          </div>
          // formulario

          <form action="">
            //login
            <div className="flex flex-col">
              <label
                for="name"
                className="font-[Inter] text-[12px] text-gray-700 font-medium"
                >Login*</label
              >

              <input
                type="nome"
                id="nome"
                placeholder="Insira seu login"
                className="border-2 border-gray-100 bg-gray-100 rounded-md p-2 focus:outline-none mb-3"
              />
              </*focus:ring-2 focus:ring-blue-500" */>
            </div>
            </* senha */>
            <div className="flex flex-col">
              <label
                for="senha"
                className="font-[Inter] text-[12px] text-gray-700 font-medium"
                >Senha*</label
              >

              <input
                type="password"
                id="password"
                placeholder="Insira sua senha"
                className="border-2 border-gray-100 bg-gray-100 rounded-md p-2 focus:outline-none"
              />
              </*focus:ring-2 focus:ring-blue-500" */>
            </div>
            <div className="flex flex-col items-start">
              <a className="font-[Inter] text-[14px] mb-3 mt-5 underline" href=""
                >Esqueci minha senha</a
              >
            </div>
            <button
              className="flex text-white text-[16px] border-2 bg-[#C92071] rounded-xl w-[100%] justify-center hover:bg-[#991956] p-3 mt-[1.5rem] cursor-pointer"
              type="submit"
            >
              Acessar Conta
            </button>
          </form>
          <div
            className="flex flex-col items-center md:flex-row md: justify-center"
          >
            <div className="flex flex-col items-start">
              <p className="font-[Inter] text-[14px] mb-3 mt-5 mr-2">
                Ou faça login com
              </p>
            </div>
            <div className="flex flex-row items-center space-x-4">
              </* Ícone do Gmail */>
              <a href="API GMAIL"
                ><img
                  src="https://static.vecteezy.com/system/resources/previews/016/716/465/non_2x/gmail-icon-free-png.png"
                  alt="Gmail"
                  className="h-10 w-10"
              /></a>

              </*Ícone do Facebook*/>
              <i className="text-blue-600 fa-brands fa-facebook text-3xl"></i>
            </div>
          </div>
        </div>
        </* inserir imagem */>
        <div>
          </* <img 
            src="https://andaraki.fbitsstatic.net/img/p/tenis-adidas-feminino-grand-court-base-2-0-iq-7281-80079/321960.jpg?w=575&amp;h=575&amp;v=no-change&amp;qs=ignore"
            alt=""
            className="w-[400px] h-[400px]"
          />**/>
        </div>
      </div>
    </section>

);}
