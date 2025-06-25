import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Auth.css";

function Login() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();
  const { setUsuario } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();

    const userStorage = localStorage.getItem("usuarioCadastrado");
    const usuarioSalvo = userStorage ? JSON.parse(userStorage) : null;

    if (usuarioSalvo && nome === usuarioSalvo.nome && senha === usuarioSalvo.senha) {
      setUsuario({ nome });
      navigate("/");
    } else {
      alert("Usuário ou senha inválidos.");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Usuário"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button type="submit">Entrar</button>
        <p onClick={() => navigate("/cadastro")} className="link">Não tem conta? Cadastre-se</p>
      </form>
    </div>
  );
}

export default Login;
