import { Link } from "react-router-dom";

export default function TamanhosDetalhes() {
return(
    <div className="mt-6">
            <h3 className="font-medium mb-2">Tamanho</h3>
            <div className="flex flex-wrap gap-2">
              <label>
                <input type="radio" name="tamanho" className="peer hidden" />
                <div className="border px-4 py-3 rounded border-gray-300 peer-checked:bg-pink-600 peer-checked:text-white hover:bg-gray-100 cursor-pointer transition">
                  39
                </div>
              </label>
              <label>
                <input type="radio" name="tamanho" className="peer hidden" />
                <div className="border px-4 py-3 rounded border-gray-300 peer-checked:bg-pink-600 peer-checked:text-white hover:bg-gray-100 cursor-pointer transition">
                  40
                </div>
              </label>
              <label>
                <input type="radio" name="tamanho" className="peer hidden" />
                <div className="border px-4 py-3 rounded border-gray-300 peer-checked:bg-pink-600 peer-checked:text-white hover:bg-gray-100 cursor-pointer transition">
                  41
                </div>
              </label>
              <label>
                <input type="radio" name="tamanho" className="peer hidden" />
                <div className="border px-4 py-3 rounded border-gray-300 peer-checked:bg-pink-600 peer-checked:text-white hover:bg-gray-100 cursor-pointer transition">
                  42
                </div>
              </label>
              <label>
                <input type="radio" name="tamanho" className="peer hidden" />
                <div className="border px-4 py-3 rounded border-gray-300 peer-checked:bg-pink-600 peer-checked:text-white hover:bg-gray-100 cursor-pointer transition">
                  43
                </div>
              </label>
            </div>
          </div>
)

}