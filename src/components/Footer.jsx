import logoBranca from "../assets/logo-branca.png";

export default function Footer() {
  return (
    <footer className="bg-[#1F1F1F] text-white flex justify-center py-12">
      <div className="w-[92%] flex flex-col items-center gap-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between w-full gap-10">
          {/* Logo, texto e redes sociais */}
          <div className="flex flex-col gap-6 md:max-w-[30%]">
            <img className="w-[13rem]" src={logoBranca} alt="Logo branca" />
            <p className="text-[1.1rem] w-[90%] md:w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
            <div className="flex gap-6 py-3">
              <i className="fa-brands fa-facebook-f text-2xl"></i>
              <i className="fa-brands fa-instagram text-2xl"></i>
              <i className="fa-brands fa-twitter text-2xl"></i>
            </div>
          </div>

          {/* Bloco com as colunas de links */}
          <div className="flex flex-col md:flex-row gap-10 flex-wrap md:flex-nowrap justify-between w-full">
            {/* Informação */}
            <div className="flex flex-col gap-2 min-w-[150px]">
              <h3 className="text-2xl font-semibold">Informação</h3>
              <a className="text-xl" href="#">
                Sobre Drip Store
              </a>
              <a className="text-xl" href="#">
                Segurança
              </a>
              <a className="text-xl" href="#">
                Wishlist
              </a>
              <a className="text-xl" href="#">
                Blog
              </a>
              <a className="text-xl" href="#">
                Trabalhe conosco
              </a>
              <a className="text-xl" href="#">
                Meus Pedidos
              </a>
            </div>

            {/* Categorias */}
            <div className="flex flex-col gap-2 min-w-[150px]">
              <h3 className="text-2xl font-semibold">Categorias</h3>
              <a className="text-xl" href="#">
                Camisetas
              </a>
              <a className="text-xl" href="#">
                Calças
              </a>
              <a className="text-xl" href="#">
                Bonés
              </a>
              <a className="text-xl" href="#">
                Headphones
              </a>
              <a className="text-xl" href="#">
                Tênis
              </a>
            </div>

            {/* Contato */}
            <div className="flex flex-col gap-5 min-w-[200px]">
              <h3 className="text-2xl font-semibold">Contato</h3>
              <a className="text-xl" href="#">
                Av. Santos Dumont, 1510 - 1º andar - Aldeota, Fortaleza - CE,
                60150-161
              </a>
              <p className="text-xl">(85) 3051-3411</p>
            </div>
          </div>
        </div>

        {/* Linha divisória + créditos */}
        <div className="w-full flex flex-col items-center">
          <hr className="w-full opacity-50" />
          <p className="text-center mt-5 text-sm text-neutral-300">
            @ 2022 Digital College
          </p>
        </div>
      </div>
    </footer>
  );
}
