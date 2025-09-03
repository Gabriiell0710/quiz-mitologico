const data = [
  {
    category: "Grega",
    questions: [
      {
        question: "Quem foi condenado a segurar o céu sobre os ombros?",
        options: ["Prometeu", "Atlas", "Hércules", "Cronos"],
        answer: "Atlas",
        tip: "É um titã",
      },
      {
        question: "Qual era o nome da esposa de Hades?",
        options: ["Afrodite", "Perséfone", "Hera", "Ártemis"],
        answer: "Perséfone",
      },
      {
        question: "Quem matou a Medusa?",
        options: ["Odisseu", "Teseu", "Aquiles", "Perseu"],
        answer: "Perseu",
      },
      {
        question: "O cavalo de Tróia foi uma ideia atribuída a:",
        options: ["Odisseu", "Heitor", "Agamenon", "Páris"],
        answer: "Odisseu",
      },
      {
        question: "Quem é considerado o deus dos viajantes e ladrões?",
        options: ["Dionísio", "Apolo", "Hermes", "Ares"],
        answer: "Hermes",
        tip: "É conhecido por sua rapidez",
      },
      {
        question: "Qual titã devora os próprios filhos?",
        options: ["Urano", "Cronos", "Oceano", "Hiperion"],
        answer: "Cronos",
        tip: "Pai de Zeus",
      },
      {
        question: "Quem transformou Aracne em aranha?",
        options: ["Héstia", "Deméter", "Hera", "Atena"],
        answer: "Atena",
      },
      {
        question: "Quem foi o herói que realizou os 12 trabalhos?",
        options: ["Hércules", "Perseu", "Aquiles", "Jasão"],
        answer: "Hércules",
      },
      {
        question: "O oráculo de Delfon era dedicado a qual deus?",
        options: ["Hermes", "Zeus", "Apolo", "Dionísio"],
        answer: "Apolo",
        tip: "Relacionado ao sol",
      },
      {
        question:
          "Qual era o monstro que devorava jovens em Creta até ser morto por Teseu?",
        options: ["Cérbero", "Minotauro", "Hidra", "Quimera"],
        answer: "Minotauro",
      },
    ],
  },
  {
    category: "Nórdica",
    questions: [
      {
        question:
          "Qual era o nome da árvore cósmica que sustentava os nove mundos?",
        options: ["Bifröst", "Yggdrasil", "Mímir", "Gjallarhorn"],
        answer: "Yggdrasil",
      },
      {
        question: "Quem era o deus da trapaça?",
        options: ["Thor", "Balder", "Loki", "Try"],
        answer: "Loki",
        tip: "Irmão de Thor",
      },
      {
        question: "Qual o nome do martelo de Thor?",
        options: ["Draupnir", "Gungnir", "Mjölnir", "Skofnung"],
        answer: "Mjölnir",
      },
      {
        question: "Quem matou Balder, o deus da luz?",
        options: ["Fenrir", "Loki", "Stur", "Try"],
        answer: "Loki",
      },
      {
        question: "Qual o nome do lobo destinado a devorar Odin no Ragnarök?",
        options: ["Hati", "Jörmungandr", "Garm", "Fenrir"],
        answer: "Fenrir",
      },
      {
        question: "Quem é o pai de Thor?",
        options: ["Odin", "Loki", "Heimdall", "Njord"],
        answer: "Odin",
        tip: "Pai de todos",
      },
      {
        question: "Qual era o reino dos mortos governado por Hel?",
        options: ["Alfheim", "Vanaheim", "Muspelheim", "Niflheim"],
        answer: "Niflheim",
      },
      {
        question: "O que é o Ragnarök?",
        options: [
          "A criação do mundo",
          "O fim dos deuses",
          "Uma guerra entre Vanes e Aesir",
          "A árvore sagrada",
        ],
        answer: "O fim dos deuses",
        tip: "O crepúsculo dos deuses",
      },
      {
        question: "Quem era conhecido como o guardião da ponte Bifröst?",
        options: ["Try", "Heimdall", "Bragi", "Vidar"],
        answer: "Heimdall",
      },
      {
        question: "Quem derrotará a serpente Jömungandr no Ragnarök?",
        options: ["Thor", "Odin", "Freyr", "Balder"],
        answer: "Thor",
        tip: "O deus do trovão",
      },
    ],
  },
  {
    category: "Egípcia",
    questions: [
      {
        question: "Quem era o deus dos mortos e da mumificação?",
        options: ["Hórus", "Anúbis", "Seth", "Rá"],
        answer: "Anúbis",
        tip: "Deus cabeça de chacal",
      },
      {
        question:
          "Qual deusa represenvava a justiça e a verdade, simbolizada por uma pena?",
        options: ["Ísis", "Hathor", "Bastet", "Maat"],
        answer: "Maat",
        tip: "Deusa que pesa o coração",
      },
      {
        question: "Quem assassinou Osíris?",
        options: ["Anúbis", "Seth", "Hórus", "Sobek"],
        answer: "Seth",
      },
      {
        question: "Qual animal era associado ao deus Sobek?",
        options: ["Falcão", "Gato", "Crocodilo", "Escaravelho"],
        answer: "Crocodilo",
        tip: "Rio Nilo",
      },
      {
        question:
          "Quem era a deusa da fertilidade, da maternidade e esposa de Osíris?",
        options: ["Ísis", "Hathor", "Sekhmet", "Nephthys"],
        answer: "Ísis",
      },
      {
        question:
          "Qual era o deus do sol, muitas vezes representado com um disco solar?",
        options: ["Khnum", "Ptah", "Thot", "Rá"],
        answer: "Rá",
      },
      {
        question: "Hórus era frequentemente representado com cabeça de:",
        options: ["Gato", "Falcão", "Chacal", "Serpente"],
        answer: "Falcão",
      },
      {
        question: "Quem era o deus da sabedoria e da escrita?",
        options: ["Hórus", "Anúbis", "Thot", "Khepri"],
        answer: "Thot",
        tip: "Relacionado com Hermes Trismegisto",
      },
      {
        question: "O livro dos mortos descreve o julgamento no:",
        options: [
          "Salão das duas verdades",
          "Salão da criação",
          "Salão de Rá",
          "Trono de Ísis",
        ],
        answer: "Salão das duas verdades",
      },
      {
        question:
          "Qual monstro devorava as almas impuras na pesagem do coração?",
        options: ["Apep", "Ammit", "Sobek", "Sekhmet"],
        answer: "Ammit",
      },
    ],
  },
];

export default data;
