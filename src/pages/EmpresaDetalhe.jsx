import React, { useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./EmpresaDetalhe.css";
import empresas from "../context/data/empresas";

// Lista base de horários
const horariosDisponiveis = [
  "11:30", "12:00", "12:30", "13:00", "13:30",
  "14:00", "14:30", "15:00", "15:30", "16:00"
];

// Mapa dos dias (0..6) -> suas keys no objeto horarios
const DIAS_KEYS = ["domingo", "segunda", "terca", "quarta", "quinta", "sexta", "sabado"];

function getDiaKey(date) {
  return DIAS_KEYS[date.getDay()];
}

function timeToMinutes(hhmm) {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + (m || 0);
}

function parseHorarioFaixa(str) {
  if (!str || /fechado/i.test(str)) return null;
  const [ini, fim] = str.split("-").map(s => s.trim());
  return { ini: timeToMinutes(ini), fim: timeToMinutes(fim) };
}

function isSameDay(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function isPastTimeOnDate(date, hhmm) {
  const now = new Date();
  if (!isSameDay(date, now)) return false;
  const [h, m] = hhmm.split(":").map(Number);
  const candidate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, m);
  return candidate <= now;
}

const EmpresaDetalhe = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [dataSelecionada, setDataSelecionada] = useState(new Date());
  const [horarioSelecionado, setHorarioSelecionado] = useState("");
  const [servicoSelecionado, setServicoSelecionado] = useState("");

  const empresa = empresas.find((e) => e.id === Number(id)) || {
    nome: "Empresa Desconhecida",
    cor: "#ccc",
    servicos: [],
    horarios: {},
    avatar: "", // 🔹 Garantindo que sempre exista
  };

  // Verifica se o dia está ativo (empresa aberta)
  const isDiaAtivo = (date) => {
    const key = getDiaKey(date);
    const val = empresa.horarios?.[key];
    return val && val.toLowerCase() !== "fechado";
  };

  // Gera horários válidos para o dia selecionado
  const horariosDoDia = useMemo(() => {
    if (!dataSelecionada || !isDiaAtivo(dataSelecionada)) return [];
    const key = getDiaKey(dataSelecionada);
    const faixa = parseHorarioFaixa(empresa.horarios?.[key]);
    if (!faixa) return [];
    return horariosDisponiveis.filter((hhmm) => {
      const t = timeToMinutes(hhmm);
      return t >= faixa.ini && t <= faixa.fim;
    });
  }, [dataSelecionada, empresa]);

  const onConfirmar = () => {
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
  };

  return (
    <div className="empresa-detalhe-container">
      <div className="agendamento-box">
        {/* Informações da Empresa */}
        <div className="empresa-info">
          {empresa.avatar ? (
            <img
              src={empresa.avatar}
              alt={empresa.nome}
              className="empresa-avatar"
            />
          ) : (
            <div
              className="empresa-icon-grande"
              style={{ backgroundColor: empresa.cor }}
            />
          )}
          <div className="empresa-nome">{empresa.nome}</div>
        </div>

        {/* Serviço */}
        <div className="servico-section">
          <h3>Escolha um serviço disponível</h3>
          <select
            className="select-enhanced"
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

        {/* Horários e Calendário */}
        <div className="horarios-calendario-wrapper">
          <div className="horarios-section">
            <h3>Horários disponíveis</h3>
            <div className="horarios-grid">
              {isDiaAtivo(dataSelecionada) ? (
                horariosDoDia.length ? (
                  horariosDoDia.map((hora) => {
                    const disabled = isPastTimeOnDate(dataSelecionada, hora);
                    const active = horarioSelecionado === hora;
                    return (
                      <button
                        key={hora}
                        disabled={disabled}
                        className={`horario-btn ${active ? "ativo" : ""} ${disabled ? "is-disabled" : ""}`}
                        onClick={() => !disabled && setHorarioSelecionado(hora)}
                      >
                        {hora}
                      </button>
                    );
                  })
                ) : (
                  <div className="horarios-empty">Sem horários para este dia.</div>
                )
              ) : (
                <div className="horarios-empty">Dia indisponível.</div>
              )}
            </div>
          </div>

          <div className="calendario-section">
            <h3>Selecione a data</h3>
            <div className="datepicker-wrap">
              <DatePicker
                selected={dataSelecionada}
                onChange={(date) => setDataSelecionada(date)}
                inline
                minDate={new Date()} // 🔹 Impede datas no passado
                filterDate={isDiaAtivo} // 🔹 Só mostra dias que a empresa abre
              />
            </div>
          </div>
        </div>

        {/* Botão Confirmar */}
        <button className="btn-agendar" onClick={onConfirmar}>
          Agendar
        </button>
      </div>
    </div>
  );
};

export default EmpresaDetalhe;
