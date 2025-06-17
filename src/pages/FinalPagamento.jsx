import { Link } from "react-router-dom";
import Popper from "../assets/imagens/popper.gif";
import InfoFinal from "../components/InfoFinal"

export default function FinalPagamento() {
  const dadosPessoais = {
    nome: "Francisco Amado Pereira",
    cpf: "123.456.789-10",
    email: "francisco@gmail.com",
    celular: "(84) 99955-5555",
  };

  const entrega = {
    endereco: "Rua João Pessoa, 333",
    bairro: "Centro",
    cidade: "Fortaleza, Ceará",
    cep: "4300-040",
  };

  const pagamento = {
    titular: "FRANCISCO A P",
    final: "**** **** **** 2020",
  };

  const produto = {
    nome: "Tênis Nike Revolution 6 Next Nature Masculino",
    total: "R$ 219,00",
    parcelamento: "em até 12x de R$ 21,90 sem juros",
  };

  return (
    <section>
      <div className="pt-24 bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <div className="bg-white w-full max-w-3xl rounded-lg shadow-md p-6 sm:p-10">
          <div className="flex flex-col items-center">
            <img src={Popper} alt="Popper" className="w-16 h-16 mb-2" />
            <h1 className="text-2xl font-bold text-gray-900 text-center">
              Compra Realizada<br />com sucesso!
            </h1>
          </div>

          <InfoFinal
            dadosPessoais={dadosPessoais}
            entrega={entrega}
            pagamento={pagamento}
            produto={produto}
          />

          <div className="mt-6 text-center text-sm text-gray-600">
            <Link to="/" className="text-sm underline">Imprimir Recibo</Link>
          </div>

          <div className="w-full flex justify-center mt-3">
            <Link
              to="/"
              className="w-full max-w-[450px] sm:max-w-[600px] md:max-w-[700px] py-3 bg-[#F9A826] hover:bg-[#f89c17] text-white rounded transition duration-300 cursor-pointer text-center"
            >
              Voltar para Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
