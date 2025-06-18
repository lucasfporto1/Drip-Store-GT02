import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CadastroCompletoInformacoesPessoais from "./CadastroCompletoInformacoesPessoais";

export default function CadastroCompleto() {
  const [values, setValues] = useState({
    nome: "",
    cpf: "",
    email: "",
    celular: "",
    senha: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Cadastro realizado com sucesso!");
        navigate("/login");
      } else {
        alert(data.message || "Erro ao realizar o cadastro.");
      }
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      alert("Erro interno ao tentar cadastrar. Tente novamente mais tarde.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <CadastroCompletoInformacoesPessoais
        values={values}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="mt-6 bg-[#C92071] hover:bg-[#991956] text-white font-semibold py-2 px-6 rounded-xl"
      >
        Cadastrar
      </button>
    </form>
  );
}
