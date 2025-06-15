import { Link } from "react-router-dom";

export default function ResumoTotalDesktop() {
  return (
    <section className="bg-white justify-center py-5 hidden xl:block">
      <div className="flex flex-col py-5 px-8">
        <h4 className="text-[#474747] font-bold tracking-[0.75px] text-lg mb-5">Finalizar Compra</h4>
        <hr className="bg-[#CCCCCC] h-[0.1rem] border-0 mb-5" />
        <div className="h-25 flex flex-col gap-2">
          <div className="text-2xl font-bold flex flex-row justify-between">
            <h4>Total</h4>
            <p className="text-red-500">R$ 219,00</p>
          </div>
          <p className="text-end font-medium text-zinc-400 text-lg">ou 10x de R$ 21,00 sem juros</p>
        </div>
        <Link to="/FinalPagamento" className=" flex justify-center bg-amber-400 py-4 text-lg text-white font-bold tracking-[0.90px] rounded-xl hover:bg-amber-500 hover:cursor-pointer" type="submit">
          Realizar Pagamento
        </Link>
      </div>
    </section>
  );
}