import { Link } from "react-router-dom";

export default function ResumoTotalMobile() {
  return (
    <section className="bg-white flex justify-center py-5 xl:hidden">
      <div className="flex flex-col w-[85%] py-5">
        <div className="h-25 flex flex-col gap-2">
          <div className="text-2xl font-bold flex flex-row justify-between md:text-3xl">
            <h4>Total</h4>
            <p className="text-red-500">R$ 219,00</p>
          </div>
          <p className="text-end font-medium text-zinc-400 text-lg md:text-2xl">
            ou 10x de R$ 21,00 sem juros
          </p>
        </div>

        <Link to="/FinalPagamento" className=" justify-center flex bg-amber-400 py-4 text-lg text-white font-bold tracking-[0.90px] rounded-xl hover:bg-amber-500 hover:cursor-pointer md:text-2xl" type="submit">
          Realizar Pagamento
        </Link>
      </div>
    </section>
  );
}