const empresas = [
  {
    id: 1,
    nome: "Academia StrongFit",
    avatar: "/images/academia.png",
    banner: "/images/academia.png",
    rating: 4.7,
    endereco: {
      logradouro: "Rua das Palmeiras",
      numero: 120,
      bairro: "Centro",
      cep: "12345-678",
      cidade: "Belo Horizonte",
      estado: "MG",
    },
    horarios: {
      domingo: "Fechado",
      segunda: "06:00 - 22:00",
      terca: "06:00 - 22:00",
      quarta: "06:00 - 22:00",
      quinta: "06:00 - 22:00",
      sexta: "06:00 - 22:00",
      sabado: "08:00 - 18:00",
    },
    servicos: [
      "Musculação",
      "Aulas de Spinning",
      "Treinamento Funcional",
      "Personal Trainer"
    ]
  },
  {
    id: 2,
    nome: "Barbearia Classic",
    avatar: "/images/barbearia.png",
    banner: "/images/barbearia.png",
    rating: 4.5,
    endereco: {
      logradouro: "Av. Brasil",
      numero: 455,
      bairro: "Jardim América",
      cep: "23456-789",
      cidade: "Belo Horizonte",
      estado: "MG",
    },
    horarios: {
      domingo: "Fechado",
      segunda: "09:00 - 20:00",
      terca: "09:00 - 20:00",
      quarta: "09:00 - 20:00",
      quinta: "09:00 - 20:00",
      sexta: "09:00 - 20:00",
      sabado: "09:00 - 14:00",
    },
    servicos: [
      "Corte Masculino",
      "Barba Completa",
      "Sobrancelha",
      "Corte + Barba"
    ]
  },
  {
    id: 3,
    nome: "Barbearia Hair Style",
    avatar: "/images/barbeariahair.png",
    banner: "/images/barbeariahair.png",
    rating: 4.9,
    endereco: {
      logradouro: "Rua dos Estilos",
      numero: 89,
      bairro: "Boa Vista",
      cep: "34567-890",
      cidade: "Belo Horizonte",
      estado: "MG",
    },
    horarios: {
      domingo: "Fechado",
      segunda: "10:00 - 19:00",
      terca: "10:00 - 19:00",
      quarta: "10:00 - 19:00",
      quinta: "10:00 - 19:00",
      sexta: "10:00 - 19:00",
      sabado: "09:00 - 14:00",
    },
    servicos: [
      "Corte Degradê",
      "Barba Modelada",
      "Platinado",
      "Hidratação Capilar"
    ]
  },
];

export default empresas;
