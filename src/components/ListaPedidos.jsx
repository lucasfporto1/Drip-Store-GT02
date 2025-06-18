import PedidoItem from "../components/PedidoItem.jsx";

export default function ListaPedidos() {
  const pedidos = [
    {
      numero: "2234981936",
      nome: "Tênis Nike Revolution 6 Next Nature Masculino",
      status: "Pedido em trânsito",
      corStatus: "text-yellow-500"
    },
    {
      numero: "2234981937",
      nome: "Tênis Nike Revolution 6 Next Nature Masculino",
      status: "Finalizado",
      corStatus: "text-gray-400"
    },
    {
      numero: "2234981938",
      nome: "Tênis Nike Revolution 6 Next Nature Masculino",
      status: "Finalizado",
      corStatus: "text-gray-400"
    },
    {
      numero: "2234981939",
      nome: "Tênis Nike Revolution 6 Next Nature Masculino",
      status: "Cancelado",
      corStatus: "text-red-500"
    },
    {
      numero: "2234981940",
      nome: "Tênis Nike Revolution 6 Next Nature Masculino",
      status: "Finalizado",
      corStatus: "text-gray-400"
    }
  ];

  return (
    <div className="w-full max-w-full lg:max-w-[600px] rounded-lg shadow-md p-6 sm:p-10 bg-white">
      <div className="flex w-full flex-row gap-4 flex-wrap border-b-2 border-gray-200 justify-between">
        <h2 className="text-lg font-semibold mb-4">Meus Pedidos</h2>
        <h2 className="text-sm text-gray-500 font-semibold mt-1 text-right hidden lg:block">
          STATUS
        </h2>
      </div>

      {pedidos.map((pedido, index) => (
        <PedidoItem
          key={index}
          numero={pedido.numero}
          nome={pedido.nome}
          status={pedido.status}
          corStatus={pedido.corStatus}
        />
      ))}
    </div>
  );
}
