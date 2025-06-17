import estrelas from "../assets/imagens/estrelas.png";

export default function FormDetalhes(){

return(
    <div>
        <h2 className="text-2xl font-semibold">
                    Tênis Nike Revolution 6 Next Nature Masculino
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Casual | Nike | REF:38410171
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <img src={estrelas} alt="estrelas" />
                  </div>
                  <div className="mt-4">
                    <span className="text-2xl font-bold">R$ 219,00</span>
                    <span className="line-through text-gray-400 ml-2">R$ 249,00</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
    </div>
)}