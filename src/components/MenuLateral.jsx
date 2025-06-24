// src/components/MenuLateral.jsx

import './MenuLateral.css';

function MenuLateral({ aberto, fechar }) {
  return (
    <div className={`menu-lateral ${aberto ? 'aberto' : ''}`}>
      <ul>
        <li onClick={fechar}>🏠 Início</li>
        <li onClick={fechar}>⭐ Favoritos</li>
        <li onClick={fechar}>📅 Agendar</li>
        <li onClick={fechar}>🏢 Empresas</li>
        <li onClick={fechar}>🗓️ Minha Agenda</li>
      </ul>
    </div>
  );
}

export default MenuLateral;
