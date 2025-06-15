import tenisvermelho from "../assets/imagens/tenisvermelhopng.png"

export default function InfoFinal({
  dadosPessoais,
  entrega,
  pagamento,
  produto
}) {
  return (
    <>
      {/* Informações Pessoais */}
      <div className="mt-8 text-sm text-gray-800">
        <p className="font-semibold mb-2">Informações Pessoais</p>
        <div className="border-t border-gray-300 pt-2">
          <p><span className="font-medium">Nome:</span> {dadosPessoais.nome}</p>
          <p><span className="font-medium">CPF:</span> {dadosPessoais.cpf}</p>
          <p><span className="font-medium">Email:</span> {dadosPessoais.email}</p>
          <p><span className="font-medium">Celular:</span> {dadosPessoais.celular}</p>
        </div>
      </div>

      {/* Informações de Entrega */}
      <div className="mt-6 text-sm text-gray-800">
        <p className="font-semibold mb-2">Informações de Entrega</p>
        <div className="border-t border-gray-300 pt-2">
          <p><span className="font-medium">Endereço:</span> {entrega.endereco}</p>
          <p><span className="font-medium">Bairro:</span> {entrega.bairro}</p>
          <p><span className="font-medium">Cidade:</span> {entrega.cidade}</p>
          <p><span className="font-medium">CEP:</span> {entrega.cep}</p>
        </div>
      </div>

      {/* Informações de Pagamento */}
      <div className="mt-6 text-sm text-gray-800">
        <p className="font-semibold mb-2">Informações de Pagamento</p>
        <div className="border-t border-gray-300 pt-2">
          <p><span className="font-medium">Titular do Cartão:</span> {pagamento.titular}</p>
          <p><span className="font-medium">Final:</span> {pagamento.final}</p>
        </div>
      </div>

      {/* Resumo da Compra */}
      <div className="mt-6 text-sm text-gray-800">
        <p className="font-semibold mb-2">Resumo da compra</p>
        <div className="border-t border-gray-300 pt-4">
          <div className="flex items-center gap-4">
            <img src={tenisvermelho} alt="Produto" className="w-14  bg-[#E2E3FF] h-14 object-cover rounded" />
            <div>
              <p className="font-medium">{produto.nome}</p>
            </div>
          </div>
          <div className="border-t border-gray-300 mt-4 pt-4 bg-[#F6AA1C0D] px-4 py-3 rounded">
            <div className="flex justify-between font-semibold text-gray-900">
              <span>Total</span>
              <span>{produto.total}</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">{produto.parcelamento}</p>
          </div>
        </div>
      </div>
    </>
  );
}
