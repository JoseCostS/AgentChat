import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";                 
import Agendar from "./pages/Agendar";
import EmpresaDetalhe from "./pages/EmpresaDetalhe";
import MeusAgendamentos from "./pages/MeusAgendamentos";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import RecuperarSenha from "./pages/RecuperarSenha";
import NovaSenha from "./pages/NovaSenha";   // ✅ novo import
import WithHeader from './layouts/WithHeader';
import { useAuth } from "./context/AuthContext";

function App() {
  const { usuario } = useAuth();

  return (
    <Routes>
      {/* páginas SEM header */}
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/recuperar" element={<RecuperarSenha />} /> 
      <Route path="/nova-senha" element={<NovaSenha />} /> {/* ✅ nova rota */}

      {/* páginas protegidas */}
      {usuario ? (
        <>
          <Route element={<WithHeader />}>
            <Route path="/" element={<Home />} />
            <Route path="/agendar" element={<Agendar />} />
            <Route path="/empresa/:id" element={<EmpresaDetalhe />} />
            <Route path="/meus-agendamentos" element={<MeusAgendamentos />} />
          </Route>
        </>
      ) : (
        <Route path="*" element={<Navigate to="/login" replace />} />
      )}
    </Routes>
  );
}

export default App;
