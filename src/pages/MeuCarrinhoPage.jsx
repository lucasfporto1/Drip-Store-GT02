import LayoutWrapper from "../components/LayoutWrapper";
import tenis from "../assets/tenis.png";

export default function MeuCarrinhoPage() {
  const tenisList = new Array(4).fill({
    name: "Tênis Nike Air Max - Feminino",
    price: "$100",
    originalPrice: "$200",
    discount: 30,
    imageUrl: tenis,
  });

  return (
    <LayoutWrapper>
      <div className="bg-[#f9f8fe] min-h-screen p-4 text-sm text-gray-800 lg:grid lg:grid-cols-3 lg:gap-6">
        {/* COLUNA ESQUERDA (2/3 da tela no desktop) */}
        <div className="lg:col-span-2 space-y-4 lg:ml-8">
          {/* Produto no carrinho */}
          <div className="bg-white rounded p-4 shadow mt-10">
            {/* Cabeçalho */}
            <div className="lg:flex lg:items-center lg:justify-between ">
              <h2 className="font-semibold text-base mb-3 lg:text-xl lg:mb-0">
                MEU CARRINHO
              </h2>
              <div className="hidden lg:flex lg:gap-[8.4rem] text-base font-medium text-[#474747]">
                <span>QUANTIDADE</span>
                <span>UNITÁRIO</span>
                <span>TOTAL</span>
              </div>
            </div>

            <hr className="text-[#CCCCCC] mb-4 mt-5" />

            {/* Bloco principal do item */}
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:border-b lg:border-[#CCCCCC] lg:pb-4">
              {/* Imagem + Info */}
              <div className="flex gap-3">
                <img
                  src={tenis}
                  alt="Tênis"
                  className="w-20 h-20 object-contain"
                />
                <div>
                  <h3 className="font-bold text-sm lg:text-base text-[#474747]">
                    Tênis Nike Revolution 6 Next Nature Masculino
                  </h3>
                  <div className="flex gap-1 text-sm text-[#474747]">
                    <p>Cor:</p>
                    <p className="font-medium">Vermelho / Branco</p>
                  </div>
                  <div className="flex gap-1 text-sm text-[#474747]">
                    <p>Tamanho:</p>
                    <p className="font-medium">42</p>
                  </div>
                </div>
              </div>

              {/* Quantidade / Unitário / Total */}
              <div className="flex flex-col gap-3 mt-4 lg:mt-0 lg:flex-row lg:items-center lg:gap-[4rem]">
                {/* Quantidade */}
                <div>
                  <p className="font-medium mb-1 lg:hidden">QUANTIDADE</p>
                  <div className="flex items-center gap-2 justify-between lg:justify-center">
                    <button className="w-[80px] h-[35px] lg:w-[40px] lg:h-[35px] border border-[#cccccc] rounded text-xl font-semibold">
                      -
                    </button>
                    <span className="w-6 text-center lg:text-lg">1</span>
                    <button className="w-[80px] h-[35px] lg:w-[40px] lg:h-[35px] border border-[#cccccc] rounded text-xl font-semibold">
                      +
                    </button>
                  </div>
                </div>

                {/* Unitário */}
                <span className="flex justify-center">
                  <p className="text-black underline py-2 lg:hidden">
                    Remover item
                  </p>
                </span>
                <div className="flex flex-row justify-between lg:flex-col items-end lg:items-center">
                  <span className="font-medium lg:hidden">UNITÁRIO</span>
                  <span className="text-[#CCCCCC] line-through text-xs">
                    R$ 219,00
                  </span>
                  <span className="font-medium">R$ 219,00</span>
                </div>

                {/* Total */}
                <div className="flex flex-row justify-between lg:flex-col items-end lg:items-center">
                  <span className="font-medium lg:hidden">TOTAL</span>
                  <span className="text-[#CCCCCC] line-through pl-6 text-xs">
                    R$ 219,00
                  </span>
                  <span className="font-medium">R$ 219,00</span>
                </div>

                {/* Remover (somente desktop) */}
                <p className="hidden lg:block text-black underline">
                  Remover item
                </p>
              </div>
            </div>

            {/* Barra de cupom e frete do desktop */}
            <div className="hidden lg:flex lg:justify-between lg:gap-4 mt-6">
              {/* Cupom */}
              <div className="flex-1">
                <label className="text-[#474747] text-sm font-medium block mb-2">
                  Cupom de desconto
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Insira seu código"
                    className="p-3 gap-2 rounded-lg w-full text-sm bg-[#f8f8f8]"
                  />
                  <button className="bg-[#f5f5f5] text-[#c92071] font-bold rounded-lg p-4 px-10 cursor-pointer">
                    OK
                  </button>
                </div>
              </div>

              {/* Frete */}
              <div className="flex-1">
                <label className="text-[#474747] text-sm font-medium block mb-2">
                  Calcular frete
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Insira seu CEP"
                    className="p-3 gap-2 rounded-lg w-full text-sm bg-[#f8f8f8]"
                  />
                  <button className="bg-[#f5f5f5] text-[#c92071] font-bold rounded-lg p-4 px-10 cursor-pointer">
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Cupom */}
          <div className="bg-white rounded p-4 shadow lg:hidden">
            <p className="font-medium mb-2">Cupom de desconto</p>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Insira seu código"
                className="p-3 gap-2 rounded-lg w-full text-sm bg-[#f8f8f8]"
              />
              <button className="bg-[#f5f5f5] text-[#c92071] font-bold rounded-lg p-4 cursor-pointer">
                OK
              </button>
            </div>
          </div>

          {/* Frete */}
          <div className="bg-white rounded p-4 shadow lg:hidden">
            <p className="font-medium mb-2">Calcular frete</p>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Insira seu CEP"
                className="p-3 gap-2 rounded-lg w-full text-sm bg-[#f8f8f8]"
              />
              <button className="bg-[#f5f5f5] text-[#c92071] font-bold rounded-lg p-4 cursor-pointer">
                OK
              </button>
            </div>
          </div>

          {/* Produtos Relacionados */}
          <div className="hidden lg:flex lg:flex-col space-y-6 mt-6">
            <div className="flex justify-between items-center">
              <h1 className="font-bold text-2xl lg:text-3xl text-[#474747]">
                Produtos Relacionados
              </h1>
              <p className="text-[#c92071] text-xl lg:text-2xl cursor-pointer hover:border-b hover:border-[#c92071]">
                Ver Todos ➝
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {tenisList.map((item, index) => (
                <div key={index} className="cursor-pointer">
                  {/* Card da imagem + badge */}
                  <div className="bg-white p-4 shadow-sm relative">
                    {index < 2 && (
                      <span className="absolute top-3 left-3 bg-[#E7FF86] text-[#474747] text-xs font-bold px-2 py-1 rounded-full">
                        {item.discount}% OFF
                      </span>
                    )}
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="mx-auto mb-4 w-full"
                    />
                  </div>

                  {/* Informações do produto */}
                  <div className="mt-2 px-1">
                    <p className="text-[#8F8F8F] text-sm lg:text-base font-semibold">
                      Tênis
                    </p>
                    <p className="text-[#474747] font-semibold text-sm leading-tight">
                      {item.name}
                    </p>
                    <p className="text-base mt-1">
                      <span className="line-through text-[#8f8f8f] mr-2">
                        {item.originalPrice}
                      </span>
                      <span className="text-[#1f1f1f] font-bold">
                        {item.price}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* COLUNA DIREITA (Resumo) */}
        <div className="lg:col-span-1 lg:mr-8 lg:h-[10rem]">
          <div className="bg-white rounded p-4 shadow mt-10">
            <div className="border-b border-[#CCCCCC] pb-3 mb-5">
              <p className="font-semibold text-[#474747] mb-3 lg:text-xl">
                RESUMO
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between font-semibold">
                <span className="text-[#8f8f8f]">Subtotal:</span>
                <span className="text-black lg:text-base">R$ 219,00</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span className="text-[#8f8f8f]">Frete:</span>
                <span className="text-black">R$ 0,00</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span className="text-[#8f8f8f]">Desconto:</span>
                <span className="text-black">R$ 30,00</span>
              </div>
              <div className="flex justify-between font-bold text-l pt-2">
                <span>Total</span>
                <span className="text-pink-600">R$ 219,00</span>
              </div>
            </div>
            <p className="text-[10px] text-gray-400 mt-2 flex justify-end">
              Em até 10x de R$ 21,90 sem juros
            </p>
            <button className="w-full bg-[#f6aa1c] text-white mt-5 py-2 lg:py-3 text-base lg:text-lg rounded-md hover:bg-orange-500 cursor-pointer font-semibold hidden lg:block">
              Continuar
            </button>
          </div>
        </div>
      </div>

      {/* Botão fixo no final */}
      <div className="bg-white bottom-0 left-0 right-0 p-4 shadow-inner z-10 lg:hidden">
        <div className="flex justify-between font-semibold mb-2">
          <span className="font-bold">Total</span>
          <span className="text-pink-600 font-bold">R$ 219,00</span>
        </div>
        <div className="mb-4">
          <p className="text-[10px] text-gray-400 mt-2 flex justify-end">
            Em até 10x de R$ 21,90 sem juros
          </p>
        </div>
        <button className="w-full bg-[#f6aa1c] text-white py-3 rounded-xl hover:bg-orange-500 cursor-pointer font-semibold">
          Continuar
        </button>
      </div>
    </LayoutWrapper>
  );
}
