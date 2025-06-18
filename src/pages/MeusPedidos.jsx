import ListaPedidos from "../components/ListaPedidos.jsx";
import MenuLateralInformacao from "../components/MenuLateralInformacoes.jsx";


export default function MeusPedidos() {
  return (
    <div className="bg-gray-100 p-4 min-h-screen overflow-x-hidden">
      <main className="container mx-auto flex flex-col lg:flex-row items-start justify-center gap-10 w-full min-h-screen pt-6">
       <MenuLateralInformacao/>
        <ListaPedidos />
      </main>
    </div>
  );
}
