import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();
  const { setUsuario } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();

    const userStorage = localStorage.getItem("usuarioCadastrado");
    const usuarioSalvo = userStorage ? JSON.parse(userStorage) : null;

    if (usuarioSalvo && email === usuarioSalvo.email && senha === usuarioSalvo.senha) {
      setUsuario({ email });
      navigate("/");
    } else {
      alert("Email ou senha inválidos.");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button type="submit">Entrar</button>

        {/* links extras */}
        <div className="auth-links">
          <p onClick={() => navigate("/cadastro")} className="link">
            Não tem conta? Cadastre-se
          </p>
          <p onClick={() => navigate("/recuperar")} className="link">
            Esqueceu sua senha?
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
