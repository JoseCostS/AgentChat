import { useState } from 'react';
import { FaBars, FaUserCircle, FaStar, FaBuilding } from 'react-icons/fa';
import { MdCalendarMonth, MdEventAvailable } from 'react-icons/md';
import MenuLateral from '../components/MenuLateral';

const Card = ({ icon: Icon, label }) => (
  <div className="card">
    <Icon className="card-icon" />
    <span className="card-label">{label}</span>
  </div>
);

function MainPage() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <div className="container">
      <header className="header">
        <FaBars className="menu-icon" onClick={() => setMenuAberto(!menuAberto)} />
        <div className="user-box">
          <FaUserCircle className="user-icon" />
          <span className="user-name">USER</span>
        </div>
      </header>

      <MenuLateral aberto={menuAberto} fechar={() => setMenuAberto(false)} />

      <main className="grid">
        <div className="grid-inner">
          <Card icon={FaStar} label="Favoritos" />
          <Card icon={MdCalendarMonth} label="Agendar" />
          <Card icon={FaBuilding} label="Empresas" />
          <Card icon={MdEventAvailable} label="Minha Agenda" />
        </div>
      </main>
    </div>
  );
}

export default MainPage;
