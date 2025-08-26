import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";                 // NOVA Home
import Agendar from "./pages/Agendar";
import EmpresaDetalhe from "./pages/EmpresaDetalhe";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import WithHeader from './layouts/WithHeader';
import { useAuth } from "./context/AuthContext";

function App() {
  const { usuario } = useAuth();

  return (
    <Routes>
      {/* páginas SEM header */}
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />

      {/* páginas protegidas */}
      {usuario ? (
        <>
          {/* Grupo de rotas COM header */}
          <Route element={<WithHeader />}>
            <Route path="/" element={<Home />} />
            <Route path="/agendar" element={<Agendar />} />
            <Route path="/empresa/:id" element={<EmpresaDetalhe />} />
            {/* exemplo de rota futura com header */}
            <Route path="/meus-agendamentos" element={<div style={{padding:24}}>Em breve…</div>} />
          </Route>

          {/* Se quiser alguma protegida sem header, adicione aqui fora do grupo */}
        </>
      ) : (
        <Route path="*" element={<Navigate to="/login" replace />} />
      )}
    </Routes>
  );
}
export default App;
