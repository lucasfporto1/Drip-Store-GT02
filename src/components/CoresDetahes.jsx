import { Link } from "react-router-dom";

export default function CoresDetalhes() {

return(
    <div>
 <div className="mt-6">
            <h3 className="font-medium mb-2">Cor</h3>
            <div className="flex gap-2">
              <label>
                <input type="radio" name="cor" className="peer hidden" />
                <div className="w-6 h-6 rounded-full bg-pink-300 border-2 peer-checked:ring-2 peer-checked:ring-black hover:scale-110 cursor-pointer transition"></div>
              </label>
              <label>
                <input type="radio" name="cor" className="peer hidden" />
                <div className="w-6 h-6 rounded-full bg-blue-300 border-2 peer-checked:ring-2 peer-checked:ring-black hover:scale-110 cursor-pointer transition"></div>
              </label>
              <label>
                <input type="radio" name="cor" className="peer hidden" />
                <div className="w-6 h-6 rounded-full bg-gray-600 border-2 peer-checked:ring-2 peer-checked:ring-black hover:scale-110 cursor-pointer transition"></div>
              </label>
              <label>
                <input type="radio" name="cor" className="peer hidden" />
                <div className="w-6 h-6 rounded-full bg-purple-800 border-2 peer-checked:ring-2 peer-checked:ring-black hover:scale-110 cursor-pointer transition"></div>
              </label>
            </div>
          </div>

    </div>
)
}