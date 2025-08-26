import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./EmpresaDetalhe.css";
import empresas from "../context/data/empresas";

const horariosDisponiveis = [
  "11:30", "12:00", "12:30", "13:00", "13:30",
  "14:00", "14:30", "15:00", "15:30", "16:00"
];

const EmpresaDetalhe = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [dataSelecionada, setDataSelecionada] = useState(new Date());
  const [horarioSelecionado, setHorarioSelecionado] = useState("");
  const [servicoSelecionado, setServicoSelecionado] = useState("");

 const empresa = empresas.find(e => e.id === Number(id)) 
  || { nome: "Empresa Desconhecida", cor: "#ccc", servicos: [] };


  return (
    <div className="empresa-detalhe-container">
      <div className="agendamento-box">
        {/* Informações da Empresa */}
        <div className="empresa-info">
          <div
            className="empresa-icon-grande"
            style={{ backgroundColor: empresa.cor }}
          />
          <div className="empresa-nome">{empresa.nome}</div>
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
          <div className="horarios-section">
            <h3>Horário Disponível</h3>
            <div className="horarios-grid">
              {horariosDisponiveis.map((hora) => (
                <button
                  key={hora}
                  className={`horario-btn ${horarioSelecionado === hora ? "ativo" : ""}`}
                  onClick={() => setHorarioSelecionado(hora)}
                >
                  {hora}
                </button>
              ))}
            </div>
          </div>

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
        <button
          className="btn-agendar"
          onClick={() => {
            if (!servicoSelecionado || !horarioSelecionado || !dataSelecionada) {
              alert("Por favor, selecione o serviço, a data e o horário.");
              return;
            }

            const dataFormatada = dataSelecionada.toLocaleDateString("pt-BR");

            alert(`✅ Agendamento confirmado:

Empresa: ${empresa.nome}
Serviço: ${servicoSelecionado}
Data: ${dataFormatada}
Horário: ${horarioSelecionado}`);

            navigate("/"); 
          }}
        >
          Agendar
        </button>
      </div>
    </div>
  );
};

export default EmpresaDetalhe;
