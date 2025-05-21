import Popper from '../assets/imagens/popper.gif';
import tenisvermelho from '../assets/imagens/tenisvermelho.png';

export default function FinalPagamento() {

return(

  <section>
    <div className=" bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
  {/* <!-- Container principal --> */}
  <div className="bg-white w-full max-w-3xl rounded-lg shadow-md p-6 sm:p-10">
    {/* <!-- Ícone e título --> */}
    <div className="flex flex-col items-center">
   <img src={Popper} alt="Popper" class="w-16 h-16 mb-2" />
      <h1 className="text-2xl font-bold text-gray-900 text-center">Compra Realizada<br/>com sucesso!</h1>
    </div>

    {/* <!-- Informações Pessoais --> */}
    <div className="mt-8 text-sm text-gray-800">
      <p className="font-semibold mb-2">Informações Pessoais</p>
      <div className="border-t border-gray-300 pt-2">
        <p><span className="font-medium">Nome:</span> Francisco Amado Pereira</p>
        <p><span className="font-medium">CPF:</span> 123.456.789-10</p>
        <p><span className="font-medium">Email:</span> francisco@gmail.com</p>
        <p><span className="font-medium">Celular:</span> (84) 99955-5555</p>
      </div>
    </div>

    {/* <!-- Informações de Entrega --> */}
    <div className="mt-6 text-sm text-gray-800">
      <p className="font-semibold mb-2">Informações de Entrega</p>
      <div className="border-t border-gray-300 pt-2">
        <p><span className="font-medium">Endereço:</span> Rua João Pessoa, 333</p>
        <p><span className="font-medium">Bairro:</span> Centro</p>
        <p><span className="font-medium">Cidade:</span> Fortaleza, Ceará</p>
        <p><span className="font-medium">CEP:</span> 4300-040</p>
      </div>
    </div>

    {/* <!-- Informações de Pagamento --> */}
    <div className="mt-6 text-sm text-gray-800">
      <p className="font-semibold mb-2">Informações de Pagamento</p>
      <div className="border-t border-gray-300 pt-2">
        <p><span className="font-medium">Titular do Cartão:</span> FRANCISCO A P</p>
        <p><span className="font-medium">Final:</span> **** **** **** 2020</p>
      </div>
    </div>

    {/* <!-- Resumo da Compra --> */}
    <div className="mt-6 text-sm text-gray-800">
      <p className="font-semibold mb-2">Resumo da compra</p>
      <div className="border-t border-gray-300 pt-4">
        <div className="flex items-center gap-4">
          <img src={tenisvermelho} alt="Produto" class="w-14 h-14 object-cover rounded" />
          <div>
            <p className="font-medium">Tênis Nike Revolution 6 Next Nature Masculino</p>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-4 pt-4 bg-[#FFF9EE] px-4 py-3 rounded">
          <div className="flex justify-between font-semibold text-gray-900">
            <span>Total</span>
            <span>R$ 219,00</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">em até 12x de R$ 21,90 sem juros</p>
        </div>
      </div>
    </div>

    {/* <!-- Botões --> */}
    <div className="mt-6 text-center text-sm text-gray-600">
      <a href="#" class="underline ">Imprimir Recibo</a>
    </div>
  
   
  </div>
  
<div className="w-full flex justify-center mt-3">
  <button className=" w-full max-w-[450px] sm:max-w-[600px] md:max-w-[700px] py-3 bg-[#F9A826] hover:bg-[#f89c17] text-white rounded transition duration-300 cursor-pointer text-center">
    Voltar para Home
  </button>

  


</div>
</div>

  </section>


)


}