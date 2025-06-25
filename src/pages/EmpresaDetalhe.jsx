import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Header from '../components/Header';
import MenuLateral from '../components/MenuLateral';
import './EmpresaDetalhe.css';
import { useAuth } from '../context/AuthContext';

const dadosEmpresas = {
  Academia: {
    cor: '#4CAF50',
    servicos: ['Musculação', 'Personal Trainer', 'Pilates']
  },
  Barbearia: {
    cor: '#2196F3',
    servicos: ['Corte', 'Barba', 'Sobrancelha']
  },
  'Lava Rápido': {
    cor: '#FF9800',
    servicos: ['Lavagem Simples', 'Lavagem Completa', 'Polimento']
  },
  'Pet Shop': {
    cor: '#9C27B0',
    servicos: ['Banho', 'Tosa', 'Consulta Veterinária']
  },
  Estética: {
    cor: '#E91E63',
    servicos: ['Limpeza de pele', 'Massagem', 'Depilação']
  },
  Clínica: {
    cor: '#00BCD4',
    servicos: ['Consulta Geral', 'Exame de Sangue', 'Check-up']
  }
};

const horariosDisponiveis = [
  '11:30', '12:00', '12:30', '13:00', '13:30',
  '14:00', '14:30', '15:00', '15:30', '16:00'
];


const normalizar = (str) =>
  str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '')
    .toLowerCase();

const EmpresaDetalhe = () => {
  const { id } = useParams();
  const [menuAberto, setMenuAberto] = useState(false);
  const [dataSelecionada, setDataSelecionada] = useState(new Date());
  const [horarioSelecionado, setHorarioSelecionado] = useState('');
  const [servicoSelecionado, setServicoSelecionado] = useState('');
  const { usuario } = useAuth();


const listaEmpresas = [
  "Academia",
  "Barbearia",
  "Lava Rápido",
  "Pet Shop",
  "Estética",
  "Clínica"
];


const nomeFormatado = listaEmpresas[parseInt(id)];


  const empresa = nomeFormatado
    ? dadosEmpresas[nomeFormatado]
    : { cor: '#ccc', servicos: [] };

  console.log('ID da URL:', id);
  console.log('Empresa encontrada:', nomeFormatado);
  console.log('Serviços disponíveis:', empresa.servicos);

  return (
    <div className="empresa-detalhe-container">
      <Header setMenuAberto={() => setMenuAberto(!menuAberto)} usuario={usuario} />
      <MenuLateral aberto={menuAberto} fechar={() => setMenuAberto(false)} />

      <div className="agendamento-box">
        {/* Informações da Empresa */}
        <div className="empresa-info">
          <div
            className="empresa-icon-grande"
            style={{ backgroundColor: empresa.cor }}
          />
          <div className="empresa-nome">{nomeFormatado || 'Empresa Desconhecida'}</div>
        </div>

        {/* Seção de Serviço */}
        <div className="servico-section">
          <h3>Escolha um serviço disponível</h3>
          <select
            value={servicoSelecionado}
            onChange={(e) => setServicoSelecionado(e.target.value)}
          >
            <option value="">Selecione</option>
            {empresa.servicos.length > 0 ? (
              empresa.servicos.map((servico, i) => (
                <option key={i} value={servico}>{servico}</option>
              ))
            ) : (
              <option disabled>Nenhum serviço disponível</option>
            )}
          </select>
        </div>

        {/* Seção de Horários e Calendário */}
        <div className="horarios-calendario-wrapper">
          {/* Horários disponíveis */}
          <div className="horarios-section">
            <h3>Horário Disponível</h3>
            <div className="horarios-grid">
              {horariosDisponiveis.map((hora) => (
                <button
                  key={hora}
                  className={`horario-btn ${horarioSelecionado === hora ? 'ativo' : ''}`}
                  onClick={() => setHorarioSelecionado(hora)}
                >
                  {hora}
                </button>
              ))}
            </div>
          </div>

          {/* Calendário */}
          <div className="calendario-section">
            <h3>Selecione a data</h3>
            <DatePicker
              selected={dataSelecionada}
              onChange={(date) => setDataSelecionada(date)}
              inline
            />
          </div>
        </div>

        {/* Botão de Agendamento */}
        <button className="btn-agendar">
          Agendar
        </button>
      </div>
    </div>
  );
};

export default EmpresaDetalhe;
