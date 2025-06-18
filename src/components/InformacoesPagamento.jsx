export default function InformacoesPagamento() {
  return (
    <section className="bg-white flex flex-col gap-3 py-8 px-8">
      <h2 className="text-[#474747] font-bold text-lg tracking-[0.75px]">Informações de Pagamento</h2>
      <hr className="bg-[#CCCCCC] h-[0.1rem] border-0" />

      <h4 className="text-[#474747] font-bold my-2">Forma de Pagamento</h4>
      <label className="flex items-center flex-row gap-2">
        <input className="accent-[#C92071] w-5 h-5" type="radio" name="pagamento" value="cartao" />
        Cartão de Crédito
      </label>
      <label className="flex items-center flex-row gap-2 mb-3">
        <input className="accent-[#C92071] w-5 h-5" type="radio" name="pagamento" value="boleto" />
        Boleto Bancário
      </label>

      <div id="pagamento-cartao" className="flex flex-col gap-4">
        {["nome_cartao", "numero_cartao", "validade_cartao", "cvv"].map((campo) => (
          <label
            key={campo}
            className="flex flex-col gap-2 text-[#474747] font-bold tracking-[0.75px] text-sm md:text-lg"
          >
            {campo.replace('_', ' ').replace('cartao', 'Cartão').replace('cvv', 'CVV').replace('validade', 'Data de Validade')} *
            <input
              className="bg-zinc-100 h-12 placeholder-[#666666] p-3 outline-none font-normal"
              type="text"
              name={campo}
              placeholder={`Insira o ${campo}`}
              required
            />
          </label>
        ))}
      </div>
    </section>
  );
}
