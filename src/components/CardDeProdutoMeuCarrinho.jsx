import tenis from "../assets/tenis.png";

export default function CardProdutoMeuCarrinho() {
  return (
    <div className="flex gap-3">
      <img src={tenis} alt="Tênis" className="w-20 h-20 object-contain" />
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
  );
}
