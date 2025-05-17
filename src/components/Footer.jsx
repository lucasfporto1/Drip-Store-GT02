import logoBranca from "../assets/logo-branca.png";

export default function Footer() {
  return (
    <footer className="bg-[#1F1F1F] text-white flex justify-center py-12">
      <div className="w-[92%] flex flex-col items-center">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <img className="w-[13rem]" src={logoBranca} alt="Logo branca" />
            <p className="text-[1.1rem] w-[90%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>

          <div className="flex flex-row gap-10 py-3">
            <i className="fa-brands fa-facebook-f text-2xl"></i>
            <i className="fa-brands fa-instagram text-2xl"></i>
            <i className="fa-brands fa-twitter text-2xl"></i>
          </div>

          <div className="flex flex-wrap gap-10">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-semibold">Informação</h3>
              <div className="flex flex-col gap-2">
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
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-semibold">Categorias</h3>
              <div className="flex flex-col gap-2">
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
            </div>

            <div className="flex flex-col gap-2 mb-10">
              <h3 className="text-2xl font-semibold">Contato</h3>
              <div className="flex flex-col gap-5">
                <a className="text-xl w-[90%]" href="#">
                  Av. Santos Dumont, 1510 - 1º andar - Aldeota, Fortaleza - CE,
                  60150-161
                </a>
                <p className="text-xl">(85) 3051-3411</p>
              </div>
            </div>
          </div>
        </div>

        <hr className="w-[95%] opacity-50" />

        <p className="text-center mt-5">@ 2022 Digital College</p>
      </div>
    </footer>
  );
}
