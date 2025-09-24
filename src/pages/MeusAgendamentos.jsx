import React, { useEffect, useState } from "react";
import { CalendarDays, Trash2 } from "lucide-react";
import "./MeusAgendamentos.css";

export default function MeusAgendamentos() {
  const [agendamentos, setAgendamentos] = useState([]);

  // Carrega do localStorage
  useEffect(() => {
    const data = localStorage.getItem("meusAgendamentos");
    if (data) {
      setAgendamentos(JSON.parse(data));
    }
  }, []);

  // Remove um agendamento
  const removerAgendamento = (index) => {
    const novos = agendamentos.filter((_, i) => i !== index);
    setAgendamentos(novos);
    localStorage.setItem("meusAgendamentos", JSON.stringify(novos));
  };

  return (
    <div className="meusag-root">
      <div className="meusag-inner">
        <h1 className="meusag-title">Meus Agendamentos</h1>
        <p className="meusag-subtitle">Aqui estão os compromissos que você marcou.</p>

        {agendamentos.length === 0 ? (
          <div className="meusag-empty">
            <CalendarDays size={40} />
            <p>Você ainda não possui agendamentos.</p>
          </div>
        ) : (
          <div className="meusag-list">
            {agendamentos.map((item, i) => (
              <div className="meusag-card" key={i}>
                <div className="meusag-info">
                  <h3>{item.empresa}</h3>
                  <p><b>Serviço:</b> {item.servico}</p>
                  <p><b>Data:</b> {item.data}</p>
                  <p><b>Horário:</b> {item.horario}</p>
                </div>
                <button
                  className="meusag-delete"
                  onClick={() => removerAgendamento(i)}
                  title="Cancelar agendamento"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
