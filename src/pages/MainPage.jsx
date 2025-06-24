// src/pages/MainPage.jsx

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { FaStar, FaBuilding } from 'react-icons/fa';
import { MdCalendarMonth, MdEventAvailable } from 'react-icons/md';

import Header from '../components/Header';
import MenuLateral from '../components/MenuLateral';

import '../App.css';

const Card = ({ icon: Icon, label, onClick }) => (
  <div className="card" onClick={onClick}>
    <Icon className="card-icon" />
    <span className="card-label">{label}</span>
  </div>
);

function MainPage() {
  const navigate = useNavigate();
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <div className="container">
      <Header setMenuAberto={() => setMenuAberto(!menuAberto)} />
      <MenuLateral aberto={menuAberto} fechar={() => setMenuAberto(false)} />

      <main className="grid">
        <div className="grid-inner">
          <Card icon={FaStar} label="Favoritos" onClick={() => alert("Favoritos")} />
          <Card icon={MdCalendarMonth} label="Agendar" onClick={() => navigate('/agendar')} />
          <Card icon={FaBuilding} label="Empresas" onClick={() => alert("Empresas")} />
          <Card icon={MdEventAvailable} label="Minha Agenda" onClick={() => alert("Minha Agenda")} />
        </div>
      </main>
    </div>
  );
}

export default MainPage;
