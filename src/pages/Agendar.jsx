// src/pages/Agendar.jsx
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, MapPin, ArrowRight, Star } from "lucide-react";
import empresasData from "../context/data/empresas";
import "./Agendar.css";

const DIAS_KEYS = ["domingo", "segunda", "terca", "quarta", "quinta", "sexta", "sabado"];
const LABELS = {
  domingo: "Domingo",
  segunda: "Segunda-Feira",
  terca: "Terça-Feira",
  quarta: "Quarta-Feira",
  quinta: "Quinta-Feira",
  sexta: "Sexta-Feira",
  sabado: "Sábado",
};

export default function Agendar() {
  const navigate = useNavigate();
  const [empresas] = useState(empresasData);
  const [activeIndex, setActiveIndex] = useState(0);
  const empresa = empresas[activeIndex];

  const hojeIndex = new Date().getDay(); // 0..6 (domingo..sábado)
  const diaHojeKey = DIAS_KEYS[hojeIndex];

  const enderecoLinha = useMemo(() => {
    const e = empresa.endereco;
    return `${e.logradouro}, ${e.numero} - ${e.bairro} - ${e.cep} ${e.cidade}/${e.estado}`;
  }, [empresa]);

  const irProximaEmpresa = () => setActiveIndex((i) => (i + 1) % empresas.length);

  return (
    <div className="ag-layout">
      <section className="ag-content">
        {/* CABEÇALHO */}
        <header className="ag-header">
          <div className="ag-head-left">
            <img className="ag-logo" src={empresa.avatar} alt={empresa.nome} />
            <div>
              <h1 className="ag-title">{empresa.nome}</h1>
              <div className="ag-rating">
                <Star size={16} />
                <span>{empresa.rating.toFixed(1)}</span>
              </div>
            </div>
          </div>
        </header>

        {/* GRID PRINCIPAL */}
        <div className="ag-main">
          {/* Banner */}
          <div className="ag-banner">
            <img src={empresa.banner} alt={`Banner de ${empresa.nome}`} />
          </div>

          {/* Painel lateral */}
          <aside className="ag-panel">
            
            {/* 🔹 Nova div separada com botões */}
            <div className="ag-hours-wrap">
              <div className="ag-hours-actions">
                <button className="ag-heart" type="button" aria-label="Favoritar">
                  <Heart size={18} />
                </button>
                <button
                  className="ag-cta"
                  type="button"
                  onClick={() => navigate(`/empresa/${empresa.id}`)}
                >
                  Agendar agora
                </button>
              </div>
            </div>

            {/* Localização */}
            <div className="ag-panel-block">
              <div className="ag-block-title-row">
                <h3>Localização</h3>
                <button
                  className="ag-round-icon"
                  title="Próxima empresa"
                  onClick={irProximaEmpresa}
                >
                  <ArrowRight size={18} />
                </button>
              </div>
              <p className="ag-address">
                <MapPin size={16} /> {enderecoLinha}
              </p>
            </div>

            {/* Horários */}
            <div className="ag-panel-block">
              <h3>Horário de atendimento</h3>
              <div className="ag-hours-list">
                {DIAS_KEYS.map((k) => {
                  const hora = empresa.horarios[k] ?? "Fechado";
                  const isHoje = k === diaHojeKey;
                  const fechado = String(hora).toLowerCase() === "fechado";
                  return (
                    <div key={k} className="ag-hour-item">
                      <div className={`ag-hour-left ${isHoje ? "is-today" : ""}`}>
                        <span>{LABELS[k]}</span>
                        {isHoje && <span className="ag-badge">Hoje</span>}
                      </div>
                      <div className={`ag-hour-right ${fechado ? "is-closed" : ""}`}>
                        {hora}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
