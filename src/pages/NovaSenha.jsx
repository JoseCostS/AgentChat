import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function NovaSenha() {
  const [novaSenha, setNovaSenha] = useState("");
  const navigate = useNavigate();

  const handleRedefinir = (e) => {
    e.preventDefault();

    const userStorage = localStorage.getItem("usuarioCadastrado");
    const usuarioSalvo = userStorage ? JSON.parse(userStorage) : null;

    if (usuarioSalvo) {
      // Atualiza a senha no localStorage
      const usuarioAtualizado = { ...usuarioSalvo, senha: novaSenha };
      localStorage.setItem("usuarioCadastrado", JSON.stringify(usuarioAtualizado));

      alert("Senha redefinida com sucesso!");
      navigate("/login");
    } else {
      alert("Nenhum usuário encontrado.");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleRedefinir}>
        <h2>Nova Senha</h2>
        <input
          type="password"
          placeholder="Digite a nova senha"
          value={novaSenha}
          onChange={(e) => setNovaSenha(e.target.value)}
        />
        <button type="submit">Salvar Nova Senha</button>
      </form>
    </div>
  );
}

export default NovaSenha;
