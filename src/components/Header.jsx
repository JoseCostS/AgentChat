import { FaBars, FaUserCircle } from 'react-icons/fa';
import './Header.css';

function Header({ setMenuAberto, usuario }) {
  return (
    <div className="header">
      <FaBars className="menu-icon" onClick={setMenuAberto} />
      <div className="user-info">
        <FaUserCircle className="user-icon" />
        <span className="user-name">{usuario?.nome || 'USER'}</span>
      </div>
    </div>
  );
}

export default Header;
