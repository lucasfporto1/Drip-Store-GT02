import { Link } from "react-router-dom";

export default function AtalhoDetalhes() {
  return (
    <nav className="text-sm text-gray-500 mt-3 px-4 flex gap-1 flex-wrap">
      <Link to="/" className="hover:underline">Home</Link>
      <span>/</span>
      <Link to="/produtos" className="hover:underline">Produtos</Link>
      <span>/</span>
      <Link to="/produtos" className="hover:underline">Tênis</Link>
      <span>/</span>
      <Link to="/produtos" className="hover:underline">Nike</Link>
      <span>/</span>
      <span className="text-gray-900">
        Tênis Nike Revolution 6 Next Nature Masculino
      </span>
    </nav>
  );
}
