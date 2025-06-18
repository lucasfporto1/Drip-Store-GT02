import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CadastroCompletoInformacoesPessoais from "./CadastroCompletoInformacoesPessoais";
import CadastroCompletoInformacoesEntrega from "./CadastroCompletoInformacoesEntrega";

export default function CadastroCompletoForm() {
  const navigate = useNavigate();
  const [pessoais, setPessoais] = useState({
    nome: "",
    cpf: "",
    email: "",
    celular: "",
    senha: "",
  });
  const [entrega, setEntrega] = useState({
    endereco: "",
    bairro: "",
    cidade: "",
    cep: "",
    complemento: "",
    receber_ofertas: false,
  });

  const handlePessoaisChange = (e) => {
    setPessoais({ ...pessoais, [e.target.id]: e.target.value });
  };

  const handleEntregaChange = (e) => {
    const { id, value, type, checked } = e.target;
    setEntrega({
      ...entrega,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { ...pessoais, ...entrega };

    try {
      // Cadastro
      let response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include",
      });
      if (!response.ok) {
        const erro = await response.json();
        throw new Error(erro.message || "Erro ao cadastrar");
      }

      // Login automático
      response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: pessoais.email, senha: pessoais.senha }),
        credentials: "include",
      });
      if (!response.ok) {
        const erro = await response.json();
        throw new Error(erro.message || "Erro ao logar");
      }

      // Buscar perfil
      response = await fetch("http://localhost:3000/api/auth/perfil", {
        method: "GET",
        credentials: "include",
      });
      const perfil = await response.json();
      if (!response.ok) {
        throw new Error(perfil.message || "Erro ao buscar perfil");
      }

      // Salvar nome no localStorage (ou contexto)
      localStorage.setItem("usuario_nome", perfil.nome);

      // Redirecionar para home
      navigate("/");
    } catch (err) {
      alert(err.message || "Erro ao cadastrar");
    }
  };

  return (
    <section className="flex flex-col justify-center">
      <div className="flex flex-col justify-center items-center w-full gap-6 pt-15 pb-20 bg-[#f9f8fe] md:flex-row">
        <div className="flex flex-col justify-center items-center bg-transparent w-full">
          {/* Cabeçalho */}
          <div className="flex justify-center w-[50%] md:justify-start pb-4">
            <h1 className="font-bold text-2xl font-[Inter]">Criar Conta</h1>
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col items-center gap-6"
          >
            <CadastroCompletoInformacoesPessoais
              values={pessoais}
              onChange={handlePessoaisChange}
            />
            <div className="w-4/5 h-[1px] bg-transparent my-2"></div>
            <CadastroCompletoInformacoesEntrega
              values={entrega}
              onChange={handleEntregaChange}
            />
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-row w-[650px] gap-2.5">
                <div className="w-5 h-5 border-2 border-gray-300 rounded-md peer-checked:bg-[#C92071] transition"></div>
                <span className="text-gray-700 text-sm">
                  Quero receber por email ofertas e novidades das lojas da
                  Digital Store. A frequência de envios pode variar de acordo
                  com a interação do cliente.
                </span>
              </div>
              <button
                type="submit"
                className="mt-6  h-[48px] w-[670px] flex justify-center text-white text-lg font-semibold bg-[#C92071] rounded-xl p-3 hover:bg-[#991956] transition items-center cursor-pointer"
              >
                Criar Conta
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
