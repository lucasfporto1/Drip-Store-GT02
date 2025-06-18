import tenis from "../assets/tenis.png";

export default function GridDeProdutosMeuCarrinho() {
  const tenisList = new Array(4).fill({
    name: "Tênis Nike Air Max - Feminino",
    price: "$100",
    originalPrice: "$200",
    discount: 30,
    imageUrl: tenis,
  });

  return (
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
              <span className="text-[#1f1f1f] font-bold">{item.price}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
