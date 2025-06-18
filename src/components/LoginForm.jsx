import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();

      if (response.ok && data.token) {
        localStorage.setItem("token", data.token);

        const perfilResponse = await fetch(
          "http://localhost:3000/api/auth/perfil",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${data.token}`,
            },
          }
        );

        const perfil = await perfilResponse.json();

        if (perfilResponse.ok) {
          localStorage.setItem("usuario_nome", perfil.nome);
          alert("Login bem-sucedido!");
          navigate("/");
          window.location.reload(); // Força o refresh para atualizar o header
        } else {
          alert(perfil.message || "Erro ao buscar perfil");
        }
      } else {
        alert(data.message || "Email ou senha inválidos");
      }
    } catch (error) {
      console.error("Erro ao acessar a conta:", error);
      alert("Erro ao acessar a conta. Por favor, tente novamente.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label
          htmlFor="email"
          className="font-[Inter] text-[12px] text-gray-700 font-medium"
        >
          Email*
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Insira seu email"
          className="border-2 border-gray-100 bg-gray-100 rounded-md p-2 focus:outline-none mb-3"
          required
        />
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="senha"
          className="font-[Inter] text-[12px] text-gray-700 font-medium"
        >
          Senha*
        </label>
        <input
          type="password"
          id="senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Insira sua senha"
          className="border-2 border-gray-100 bg-gray-100 rounded-md p-2 focus:outline-none"
          required
        />
      </div>

      <div className="flex flex-col items-start">
        <a className="font-[Inter] text-[14px] mb-3 mt-5 underline" href="#">
          Esqueci minha senha
        </a>
      </div>

      <button
        className="flex text-white text-[16px] border-2 bg-[#C92071] rounded-xl w-full justify-center hover:bg-[#991956] p-3 mt-6 cursor-pointer"
        type="submit"
      >
        Entrar
      </button>
    </form>
  );
}
