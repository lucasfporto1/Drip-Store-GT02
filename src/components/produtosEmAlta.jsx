import tenis from "../assets/tenis.png";
import { Link } from "react-router-dom";


export default function produtosEmAlta(){

    const tenisList = new Array(8).fill({
    name: "Tênis Nike Air Max - Feminino",
    price: "$100",
    originalPrice: "$200",
    discount: 30,
    imageUrl: tenis,
  });

return(
<div>

  <div className="lg:flex lg:flex-col space-y-6 mt-6 mb-10 ">
            <div className="flex justify-between items-center">
              <h1 className="font-bold text-2xl lg:text-3xl text-[#474747]">
                Produtos em alta
              </h1>
              <button className="text-[#c92071] text-xl lg:text-2xl cursor-pointer hover:border-b hover:border-[#c92071]"><Link to="/produtos">  Ver Todos ➝</Link></button>
              
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {tenisList.map((item, index) => (
                <div key={index} className="cursor-pointer">
                  <Link to="/produtos">
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
</Link>
                 <Link to="/produtos">
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
                  </Link>
                </div>
              ))}
            </div>
          </div>

</div>
)
}