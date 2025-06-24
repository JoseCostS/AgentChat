// src/pages/Agendar.jsx

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './Agendar.css';

import Header from '../components/Header'; // ⬅️ Adiciona header
import { useState } from 'react';
import MenuLateral from '../components/MenuLateral'; // ⬅️ Adiciona menu lateral

const empresas = [
  { nome: 'Academia', cor: '#4CAF50' },
  { nome: 'Barbearia', cor: '#2196F3' },
  { nome: 'Lava Rápido', cor: '#FF9800' },
  { nome: 'Pet Shop', cor: '#9C27B0' },
  { nome: 'Estética', cor: '#E91E63' },
  { nome: 'Clínica', cor: '#00BCD4' },
];

const Agendar = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <div className="agendar-wrapper">
      <Header setMenuAberto={() => setMenuAberto(!menuAberto)} />
      <MenuLateral aberto={menuAberto} fechar={() => setMenuAberto(false)} />

      <div className="conteudo-agendar">
        <h2 className="titulo-agendar">Escolha uma empresa para agendar</h2>

        <div className="empresa-box">
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            grabCursor={true}
            centeredSlides={true}
          >
            {empresas.map((empresa, i) => (
              <SwiperSlide key={i}>
                <div className="empresa-card" style={{ borderColor: empresa.cor }}>
                  <div
                    className="empresa-icon"
                    style={{ backgroundColor: empresa.cor }}
                  ></div>
                  <span>{empresa.nome}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Agendar;
