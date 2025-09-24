import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleCadastro = (e) => {
    e.preventDefault();

    if (nome.trim() && email.trim() && senha.trim()) {
      localStorage.setItem("usuarioCadastrado", JSON.stringify({ nome, email, senha }));
      alert("Cadastro realizado com sucesso!");
      navigate("/login");
    } else {
      alert("Preencha todos os campos.");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleCadastro}>
        <h2>Cadastro</h2>
        <input
          type="text"
          placeholder="Usuário"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
        <p onClick={() => navigate("/login")} className="link">
          Já tem conta? Login
        </p>
      </form>
    </div>
  );
}

export default Cadastro;
