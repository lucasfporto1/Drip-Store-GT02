import tenisvermelho from "../assets/imagens/tenisvermelho.png";

export default function ConfiguracaoCompra() {
  return (
    <div>
      <main className="bg-[#F9F8FE] flex py-10 flex-col items-center gap-5 xl:flex-row xl:px-20 relative">
        <form className="flex flex-col w-[88%] gap-5 xl:w-[60%]" method="POST">
          <h2 className="text-3xl font-bold tracking-[0.75px]">
            Finalizar Compra
          </h2>

          {/* <!-- Informações Pessoais --> */}
          <section className="bg-white flex flex-col gap-3 py-8 px-8">
            <h2 className="text-[#474747] font-bold text-lg tracking-[0.75px]">
              Informações Pessoais
            </h2>
            <hr className="bg-[#CCCCCC] h-[0.1rem] border-0" />

            <label
              htmlFor="nome"
              className="flex flex-col gap-2 text-[#474747] font-bold tracking-[0.75px] text-sm md:text-lg"
            >
              Nome Completo *
              <input
                className="bg-zinc-100 h-12 placeholder-[#666666] p-3 outline-none font-normal"
                type="text"
                name="nome"
                id="nome"
                placeholder="Insira seu nome"
                required
              />
            </label>

            <label
              htmlFor="cpf"
              className="flex flex-col gap-2 text-[#474747] font-bold tracking-[0.75px] text-sm md:text-lg"
            >
              CPF *
              <input
                className="bg-zinc-100 h-12 placeholder-[#666666] p-3 outline-none font-normal"
                type="text"
                name="cpf"
                id="cpf"
                placeholder="Insira seu CPF"
                maxlength="14"
                required
              />
            </label>

            <label
              htmlFor="email"
              className="flex flex-col gap-2 text-[#474747] font-bold tracking-[0.75px] text-sm md:text-lg"
            >
              E-mail *
              <input
                className="bg-zinc-100 h-12 placeholder-[#666666] p-3 outline-none font-normal"
                type="email"
                name="email"
                id="email"
                placeholder="Insira seu email"
                required
              />
            </label>

            <label
              htmlFor="celular"
              className="flex flex-col gap-2 text-[#474747] font-bold tracking-[0.75px] text-sm md:text-lg"
            >
              Celular *
              <input
                className="bg-zinc-100 h-12 placeholder-[#666666] p-3 outline-none font-normal"
                type="tel"
                name="celular"
                id="celular"
                placeholder="Insira seu celular"
                required
              />
            </label>
          </section>

          {/* <!-- Informações de Entrega --> */}
          <section className="bg-white flex flex-col gap-3 py-8 px-8">
            <h2 className="text-[#474747] font-bold text-lg tracking-[0.75px]">
              Informações de Entrega
            </h2>
            <hr className="bg-[#CCCCCC] h-[0.1rem] border-0" />

            <label
              htmlFor="endereco"
              className="flex flex-col gap-2 text-[#474747] font-bold tracking-[0.75px] text-sm md:text-lg"
            >
              Endereço *
              <input
                className="bg-zinc-100 h-12 placeholder-[#666666] p-3 outline-none font-normal"
                type="text"
                name="endereco"
                id="endereco"
                placeholder="Insira seu endereço"
                required
              />
            </label>

            <label
              htmlFor="bairro"
              className="flex flex-col gap-2 text-[#474747] font-bold tracking-[0.75px] text-sm md:text-lg"
            >
              Bairro *
              <input
                className="bg-zinc-100 h-12 placeholder-[#666666] p-3 outline-none font-normal"
                type="text"
                name="bairro"
                id="bairro"
                placeholder="Insira seu bairro"
                required
              />
            </label>

            <label
              htmlFor="cidade"
              className="flex flex-col gap-2 text-[#474747] font-bold tracking-[0.75px] text-sm md:text-lg"
            >
              Cidade *
              <input
                className="bg-zinc-100 h-12 placeholder-[#666666] p-3 outline-none font-normal"
                type="text"
                name="cidade"
                id="cidade"
                placeholder="Insira seu cidade"
                required
              />
            </label>

            <label
              htmlFor="cep"
              className="flex flex-col gap-2 text-[#474747] font-bold tracking-[0.75px] text-sm md:text-lg"
            >
              CEP *
              <input
                className="bg-zinc-100 h-12 placeholder-[#666666] p-3 outline-none font-normal"
                type="text"
                name="cep"
                id="cep"
                placeholder="Insira seu cep"
                required
              />
            </label>

            <label
              htmlFor="complemento"
              className="flex flex-col gap-2 text-[#474747] font-bold tracking-[0.75px] text-sm md:text-lg"
            >
              Complemento
              <input
                className="bg-zinc-100 h-12 placeholder-[#666666] p-3 outline-none font-normal"
                type="text"
                name="complemento"
                id="Complemento"
                placeholder="Insira seu complemento"
              />
            </label>
          </section>

          {/* <!-- Informações de Pagamento --> */}
          <section className="bg-white flex flex-col gap-3 py-8 px-8">
            <h2 className="text-[#474747] font-bold text-lg tracking-[0.75px]">
              Informações de Pagamento
            </h2>
            <hr className="bg-[#CCCCCC] h-[0.1rem] border-0" />

            <h4 className="text-[#474747] font-bold my-2">
              Forma de Pagamento
            </h4>
            <label className="flex items-center flex-row gap-2">
              <input
                className="accent-[#C92071] w-5 h-5"
                type="radio"
                name="pagamento"
                value="cartao"
              />
              Cartão de Crédito
            </label>

            <label className="flex items-center flex-row gap-2 mb-3">
              <input
                className="accent-[#C92071] w-5 h-5"
                type="radio"
                name="pagamento"
                value="boleto"
              />
              Boleto Bancário
            </label>

            <div id="pagamento-cartao" className="flex flex-col gap-4">
              <label className="flex flex-col gap-2 text-[#474747] font-bold tracking-[0.75px] text-sm md:text-lg">
                Nome do Cartão *
                <input
                  className="bg-zinc-100 h-12 placeholder-[#666666] p-3 outline-none font-normal"
                  type="text"
                  name="nome_cartao"
                  placeholder="Insira o nome do Cartão"
                  required
                />
              </label>

              <label className="flex flex-col gap-2 text-[#474747] font-bold tracking-[0.75px] text-sm md:text-lg">
                Número do Cartão *
                <input
                  className="bg-zinc-100 h-12 placeholder-[#666666] p-3 outline-none font-normal"
                  type="text"
                  name="numero_cartao"
                  placeholder="Insira o número do Cartão"
                  required
                />
              </label>

              <label className="flex flex-col gap-2 text-[#474747] font-bold tracking-[0.75px] text-sm md:text-lg">
                Data de Validade do Cartão *
                <input
                  className="bg-zinc-100 h-12 placeholder-[#666666] p-3 outline-none font-normal"
                  type="text"
                  name="validade_cartao"
                  placeholder="Insira a validade do Cartão"
                  required
                />
              </label>

              <label className="flex flex-col gap-2 text-[#474747] font-bold tracking-[0.75px] text-sm md:text-lg">
                CVV *
                <input
                  className="bg-zinc-100 h-12 placeholder-[#666666] p-3 outline-none text-[#474747] font-normal"
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  required
                />
              </label>
            </div>
          </section>

          {/* <!-- Total a Pagar --> */}
          <section className="bg-white justify-center py-5 hidden xl:block ">
            <div className="flex flex-col py-5 px-8">
              <h4 className="text-[#474747] font-bold tracking-[0.75px] text-lg mb-5">
                Finalizar Compra
              </h4>
              <hr className="bg-[#CCCCCC] h-[0.1rem] border-0 mb-5" />

              <div className="h-25 flex flex-col gap-2">
                <div className="text-2xl font-bold flex flex-row justify-between">
                  <h4>Total</h4>
                  <p className="text-red-500">R$ 219,00</p>
                </div>

                <p className="text-end font-medium text-zinc-400 text-lg">
                  ou 10x de R$ 21,00 sem juros
                </p>
              </div>

              <button
                className="bg-amber-400 py-4 text-lg text-white font-bold tracking-[0.90px] rounded-xl hover:bg-amber-500 hover:cursor-pointer"
                type="submit"
              >
                Realizar Pagamento
              </button>
            </div>
          </section>
        </form>

        {/* <!-- Resumo do Pedido --> */}
        <section className="bg-white flex flex-col gap-3 py-8 px-8 w-[88%] xl:absolute xl:top-24 xl:right-20 xl:w-130 ">
          <h2 className="text-[#474747] font-bold text-xl tracking-[0.75px] uppercase">
            Resumo
          </h2>

          <hr className="bg-[#CCCCCC] h-[0.1rem] border-0" />
          <div className="flex flex-row items-center h-[5.7rem] gap-4 md:h-[8rem] md:my-3 md:justify-center xl:my-1">
            <div className="bg-[#E2E3FF] p-3 h-[5rem] flex items-center justify-center w-50 rounded-md md:h-[8rem] xl:h-[4.7rem] xl:w-40">
              <img
                className="rotate-15 w-20 md:w-30 xl:w-20"
                src={tenisvermelho}
                alt="tenisvermelho"
              />
            </div>
            <p className="text-base font-bold text-left md:text-2xl xl:text-base">
              Tênis Nike Revolution 6 Next Nature Masculino
            </p>
          </div>
          <hr className="bg-[#CCCCCC] h-[0.1rem] border-0" />

          <div className="flex flex-col gap-4 py-4">
            <div className="flex flex-row justify-between">
              <h4 className="text-[#8F8F8F] text-lg font-medium md:text-2xl xl:text-xl">
                Subtotal:
              </h4>
              <p className="text-lg font-medium md:text-2xl xl:text-xl">
                R$ 219,00
              </p>
            </div>

            <div className="flex flex-row justify-between">
              <h4 className="text-[#8F8F8F] text-lg font-medium md:text-2xl xl:text-xl">
                Frete:
              </h4>
              <p className="text-lg font-medium md:text-2xl xl:text-xl">
                R$ 0,00
              </p>
            </div>

            <div className="flex flex-row justify-between">
              <h4 className="text-[#8F8F8F] text-lg font-medium md:text-2xl xl:text-xl">
                Desconto:
              </h4>
              <p className="text-lg font-medium md:text-2xl xl:text-xl">
                R$ 30,00
              </p>
            </div>
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

          <button
            className="bg-amber-400 py-6 text-lg mt-5 text-white font-bold tracking-[0.90px] rounded-xl hover:bg-amber-500 hover:cursor-pointer md:text-2xl xl:text-xl"
            type="submit"
          >
            Realizar Pagamento
          </button>
        </section>
      </main>

      {/* <!-- Total a Pagar --> */}
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

          <button
            className="bg-amber-400 py-4 text-lg text-white font-bold tracking-[0.90px] rounded-xl hover:bg-amber-500 hover:cursor-pointer md:text-2xl"
            type="submit"
          >
            Realizar Pagamento
          </button>
        </div>
      </section>
    </div>
  );
}
