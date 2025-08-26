import { Link, NavLink } from "react-router-dom";
import { FiBell, FiSettings, FiUser } from "react-icons/fi";
import { useAuth } from "../context/AuthContext";
import "./TopHeader.css";

export default function TopHeader() {
  const { usuario } = useAuth();

  return (
    <header className="topbar">
      <div className="topbar__brand">
        <Link to="/" className="topbar__logo">AgentChat</Link>

        <nav className="topbar__nav">
          <NavLink end to="/" className="topbar__link">
            Início
          </NavLink>
          <span className="topbar__sep">-</span>
          <NavLink to="/meus-agendamentos" className="topbar__link">
            Meus Agendamentos
          </NavLink>
            <NavLink to="/meus-agendamentos" className="topbar__link">
            Favoritos
          </NavLink>
        </nav>
      </div>

      <div className="topbar__actions">
        <button className="icon-btn" aria-label="Notificações"><FiBell /></button>
        <button className="icon-btn" aria-label="Configurações"><FiSettings /></button>
        <div className="topbar__user">
          <FiUser className="user-icon" />
          <span>{usuario?.nome ?? "USER"}</span>
        </div>
      </div>
    </header>
  );
}
