import { Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Agendar from './pages/Agendar';
import EmpresaDetalhe from './pages/EmpresaDetalhe';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import { useAuth } from './context/AuthContext';

function App() {
  const { usuario } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />

      {/* Protegidas por autenticação */}
      {usuario ? (
        <>
          <Route path="/" element={<MainPage />} />
          <Route path="/agendar" element={<Agendar />} />
          <Route path="/empresa/:id" element={<EmpresaDetalhe />} />
        </>
      ) : (
      
        <Route path="*" element={<Navigate to="/login" replace />} />
      )}
    </Routes>
  );
}

export default App;
