import React from "react";
import { PlusCircle, CalendarCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-root">
      <div className="home-inner">
        <h1 className="home-title">Agenda de Serviços</h1>

        <p className="home-subtitle">
          Organize seus compromissos de forma simples, rápida e visualmente agradável.
          Sua produtividade começa aqui.
        </p>

        <div className="home-cards">
          <button
            className="home-card agendar"
            onClick={() => navigate("/agendar")}
            type="button"
          >
            <div className="home-icon">
              <PlusCircle />
            </div>
            <div>
              <div className="card-title">Agendar Novo</div>
              <div className="card-desc">Marque uma nova reunião ou compromisso rapidamente.</div>
            </div>
          </button>

          <button
            className="home-card listar"
            onClick={() => navigate("/meus-agendamentos")}
            type="button"
          >
            <div className="home-icon">
              <CalendarCheck />
            </div>
            <div>
              <div className="card-title">Ver Agendamentos</div>
              <div className="card-desc">Consulte todos os eventos que você já agendou.</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
