import tenisvermelho from "../assets/imagens/tenisvermelhopng.png";
import { Link } from "react-router-dom";

export default function ResumoPedido() {
  return (
    <section className="bg-white flex flex-col gap-3 py-8 px-8 w-[88%] xl:absolute xl:top-24 xl:right-20 xl:w-130">
      <h2 className="text-[#474747] font-bold text-xl tracking-[0.75px] uppercase">Resumo</h2>
      <hr className="bg-[#CCCCCC] h-[0.1rem] border-0" />

      <div className="flex flex-row items-center h-[5.7rem] gap-4 md:h-[8rem] md:my-3 md:justify-center xl:my-1">
        <div className="bg-[#E2E3FF] p-3 h-[5rem] flex items-center justify-center w-50 rounded-md md:h-[8rem] xl:h-[4.7rem] xl:w-40">
          <img className="" src={tenisvermelho} alt="tenisvermelho" />
        </div>
        <p className="text-base font-bold text-left md:text-2xl xl:text-base">
          Tênis Nike Revolution 6 Next Nature Masculino
        </p>
      </div>

      <hr className="bg-[#CCCCCC] h-[0.1rem] border-0" />

      <div className="flex flex-col gap-4 py-4">
        <ResumoLinha titulo="Subtotal:" valor="R$ 219,00" />
        <ResumoLinha titulo="Frete:" valor="R$ 0,00" />
        <ResumoLinha titulo="Desconto:" valor="R$ 30,00" />
      </div>

      <div className="bg-amber-300/10 border-2 rounded-sm border-amber-200/50 h-30 px-9 py-7 flex flex-col gap-2 md:h-40 md:py-9 xl:h-35">
        <div className="text-xl font-bold flex flex-row justify-between md:text-3xl xl:text-2xl">
          <h4>Total</h4>
          <p>R$ 219,00</p>
        </div>
        <p className="text-end font-medium text-zinc-400 text-sm md:text-xl xl:text-lg">
          ou 10x de R$ 21,00 sem juros
        </p>
      </div>

      <Link to="/FinalPagamento" className="bg-amber-400 py-6 text-lg mt-5 text-white font-bold tracking-[0.90px] rounded-xl hover:bg-amber-500 hover:cursor-pointer md:text-2xl xl:text-xl justify-center flex">
        Realizar Pagamento
      </Link>
    </section>
  );
}

function ResumoLinha({ titulo, valor }) {
  return (
    <div className="flex flex-row justify-between">
      <h4 className="text-[#8F8F8F] text-lg font-medium md:text-2xl xl:text-xl">{titulo}</h4>
      <p className="text-lg font-medium md:text-2xl xl:text-xl">{valor}</p>
    </div>
  );
}
