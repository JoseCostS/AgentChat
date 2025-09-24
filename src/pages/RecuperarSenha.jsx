import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function RecuperarSenha() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleRecuperar = (e) => {
    e.preventDefault();

    const userStorage = localStorage.getItem("usuarioCadastrado");
    const usuarioSalvo = userStorage ? JSON.parse(userStorage) : null;

    if (usuarioSalvo && usuarioSalvo.email === email) {
      // Simula envio de link e gera token
      localStorage.setItem("resetToken", "123456");
      alert(`Um link de recuperação foi enviado para ${email}`);
      navigate("/nova-senha");
    } else {
      alert("Email não encontrado.");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleRecuperar}>
        <h2>Recuperar Senha</h2>
        <input
          type="email"
          placeholder="Digite seu email cadastrado"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Enviar link</button>
      </form>
    </div>
  );
}

export default RecuperarSenha;
