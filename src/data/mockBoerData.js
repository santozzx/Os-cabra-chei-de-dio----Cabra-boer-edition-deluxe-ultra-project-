// Banco de Dados Mockado - gestão de cabras Boer
// Raça Boer: Corte de Alto Rendimento, Adaptação Semiárido, Sul e Sudeste

export const MOCK_ANIMALS = [
  {
    id: "BOER-001",
    name: "Bastião do Cobre PO",
    rgn: "BR-BOER-2022-8812",
    tattoo: "BST-01",
    tagNumber: "001",
    category: "Reprodutor",
    gender: "Macho",
    bloodGrade: "PO", // Puro de Origem
    coatPattern: "Cabeça Cobre / Corpo Branco (Padrão Oficial)",
    birthDate: "2022-04-15",
    currentWeight: 128.5,
    dailyWeightGain: 345, // g/dia
    bodyConditionScore: 4.5, // ECC (1 a 5)
    scrotalCircumference: 39.5, // cm
    famachaScore: 1, // 1 (Vermelho ótimo)
    reproductiveStatus: "Em Cobertura Ativa",
    photo: "https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&w=800&q=80",
    awards: ["Grande Campeão Nacional Fenagro 2024", "Melhor Conformação de Carcaça ABCC"],
    lot: "Piquete 01 - Reprodutores de Elite",
    temperament: "Dócil e Ativo",
    carcassScore: "Duplo Lombo Evidente / Convexidade de Pernil Superior",
    pedigree: {
      father: {
        name: "Thor da Caatinga PO",
        rgn: "BR-BOER-2019-4321",
        bloodline: "Sul-Africana (Linhagem Kaptein)"
      },
      mother: {
        name: "Sinhazinha do Moxotó PO",
        rgn: "BR-BOER-2020-5510",
        bloodline: "Nacional Consagrada"
      },
      paternalGrandfather: "Kaptein Grand Slam (Importado África do Sul)",
      paternalGrandmother: "Estrela do Pajeú PO",
      maternalGrandfather: "Brutus da Chapada PO",
      maternalGrandmother: "Moxotó Imperial PO"
    },
    weightHistory: [
      { ageMonths: 0, weight: 4.2, benchmark: 3.8 },
      { ageMonths: 3, weight: 32.5, benchmark: 28.0 },
      { ageMonths: 6, weight: 58.0, benchmark: 48.0 },
      { ageMonths: 9, weight: 79.5, benchmark: 66.0 },
      { ageMonths: 12, weight: 96.0, benchmark: 82.0 },
      { ageMonths: 18, weight: 114.0, benchmark: 98.0 },
      { ageMonths: 24, weight: 128.5, benchmark: 110.0 }
    ],
    vaccines: [
      { name: "Poli-Clostridiose 10 Cepas", date: "2024-08-10", nextDate: "2025-02-10", status: "Em dia" },
      { name: "Raiva dos Herbívoros", date: "2024-05-12", nextDate: "2025-05-12", status: "Em dia" },
      { name: "Linfadenite Caseosa (Mal do Caroço)", date: "2024-06-01", nextDate: "2025-06-01", status: "Em dia" }
    ],
    famachaHistory: [
      { date: "2024-09-15", score: 1, eyeColor: "Vermelho Vivo", treated: false },
      { date: "2024-07-20", score: 2, eyeColor: "Vermelho Rosa", treated: false },
      { date: "2024-05-10", score: 1, eyeColor: "Vermelho Vivo", treated: false }
    ]
  },
  {
    id: "BOER-002",
    name: "Pérola da Serra PC",
    rgn: "BR-BOER-2021-7740",
    tattoo: "PRS-14",
    tagNumber: "014",
    category: "Matriz",
    gender: "Fêmea",
    bloodGrade: "PC", // Puro por Cruza
    coatPattern: "Cabeça Cobre / Corpo Branco com Mancha Cobre na Espádua",
    birthDate: "2021-08-20",
    currentWeight: 84.0,
    dailyWeightGain: 210,
    bodyConditionScore: 4.0,
    scrotalCircumference: null,
    famachaScore: 2,
    reproductiveStatus: "Gestante (122 dias)",
    expectedBirthDate: "2026-11-14",
    photo: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80",
    awards: ["Matriz Destaque Parto Gemelar 2023"],
    lot: "Maternidade Piquete A",
    temperament: "Excelente Habilidade Materna",
    carcassScore: "Ótima Amplitude de Costelas e Úbere Espaçoso",
    pedigree: {
      father: {
        name: "Bastião do Cobre PO",
        rgn: "BR-BOER-2022-8812",
        bloodline: "Sul-Africana"
      },
      mother: {
        name: "Serena Crioula PC",
        rgn: "BR-BOER-2019-3320",
        bloodline: "Sertão Semiárido"
      },
      paternalGrandfather: "Thor da Caatinga PO",
      paternalGrandmother: "Sinhazinha do Moxotó PO",
      maternalGrandfather: "Trovão do Pajeú PC",
      maternalGrandmother: "Nuvem Branca"
    },
    weightHistory: [
      { ageMonths: 0, weight: 3.5, benchmark: 3.4 },
      { ageMonths: 3, weight: 24.0, benchmark: 22.0 },
      { ageMonths: 6, weight: 42.0, benchmark: 38.0 },
      { ageMonths: 12, weight: 64.0, benchmark: 58.0 },
      { ageMonths: 24, weight: 78.0, benchmark: 70.0 },
      { ageMonths: 36, weight: 84.0, benchmark: 75.0 }
    ],
    vaccines: [
      { name: "Poli-Clostridiose 10 Cepas", date: "2024-07-01", nextDate: "2025-01-01", status: "Em dia" },
      { name: "Raiva dos Herbívoros", date: "2024-05-12", nextDate: "2025-05-12", status: "Em dia" }
    ],
    famachaHistory: [
      { date: "2024-09-18", score: 2, eyeColor: "Vermelho Rosa", treated: false },
      { date: "2024-06-15", score: 2, eyeColor: "Vermelho Rosa", treated: false }
    ]
  },
  {
    id: "BOER-003",
    name: "Rei da Caatinga Boer",
    rgn: "BR-BOER-2020-3119",
    tattoo: "RDC-09",
    tagNumber: "009",
    category: "Reprodutor",
    gender: "Macho",
    bloodGrade: "PO",
    coatPattern: "Cabeça Cobre Escuro com Estrela Branca na Testa",
    birthDate: "2020-03-10",
    currentWeight: 134.2,
    dailyWeightGain: 310,
    bodyConditionScore: 5.0,
    scrotalCircumference: 41.0,
    famachaScore: 1,
    reproductiveStatus: "Doador de Sêmen Congelado",
    photo: "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?auto=format&fit=crop&w=800&q=80",
    awards: ["Tetra-Campeão Nacional", "Troféu Ouro Boer Brasil"],
    lot: "Central de Inseminação Santa Luzia",
    temperament: "Imponente e Rústico",
    carcassScore: "Carcaça Super Pesada / Rendimento Frigorífico 56%",
    pedigree: {
      father: {
        name: "Rugged African Supreme (Imp. RSA)",
        rgn: "SA-STUD-9901",
        bloodline: "Sul-Africana Legítima"
      },
      mother: {
        name: "Dama de Ouro PO",
        rgn: "BR-BOER-2018-1200",
        bloodline: "Padrão Sul-Africano"
      },
      paternalGrandfather: "Rugged Prince RSA",
      paternalGrandmother: "Kalahari Queen RSA",
      maternalGrandfather: "Imperador do São Francisco PO",
      maternalGrandmother: "Princesa Boer 12"
    },
    weightHistory: [
      { ageMonths: 0, weight: 4.5, benchmark: 3.8 },
      { ageMonths: 3, weight: 34.0, benchmark: 28.0 },
      { ageMonths: 6, weight: 62.0, benchmark: 48.0 },
      { ageMonths: 12, weight: 102.0, benchmark: 82.0 },
      { ageMonths: 24, weight: 124.0, benchmark: 110.0 },
      { ageMonths: 48, weight: 134.2, benchmark: 118.0 }
    ],
    vaccines: [
      { name: "Poli-Clostridiose 10 Cepas", date: "2024-08-15", nextDate: "2025-02-15", status: "Em dia" },
      { name: "Raiva dos Herbívoros", date: "2024-05-12", nextDate: "2025-05-12", status: "Em dia" }
    ],
    famachaHistory: [
      { date: "2024-09-10", score: 1, eyeColor: "Vermelho Vivo", treated: false }
    ]
  },
  {
    id: "BOER-004",
    name: "Soberano do Sertão PO",
    rgn: "BR-BOER-2023-9941",
    tattoo: "SOB-04",
    tagNumber: "022",
    category: "Reprodutor",
    gender: "Macho",
    bloodGrade: "PO",
    coatPattern: "Cabeça Cobre / Corpo Branco Limpo",
    birthDate: "2023-02-18",
    currentWeight: 98.4,
    dailyWeightGain: 360,
    bodyConditionScore: 4.2,
    scrotalCircumference: 37.0,
    famachaScore: 1,
    reproductiveStatus: "Em Cobertura Ativa",
    photo: "https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=800&q=80",
    awards: ["Campeão Macho Jovem Expointer 2024"],
    lot: "Piquete 02 - Jovens Reprodutores",
    temperament: "Vivaz e Excelente Libido",
    carcassScore: "Musculatura Glútea Excepcional, Duplo Lombo Pronunciado",
    pedigree: {
      father: {
        name: "Rei da Caatinga Boer",
        rgn: "BR-BOER-2020-3119",
        bloodline: "Sul-Africana"
      },
      mother: {
        name: "Morena Linda Boer",
        rgn: "BR-BOER-2021-6540",
        bloodline: "Nacional PO"
      },
      paternalGrandfather: "Rugged African Supreme",
      paternalGrandmother: "Dama de Ouro PO",
      maternalGrandfather: "Thor da Caatinga PO",
      maternalGrandmother: "Estrela do Sul PO"
    },
    weightHistory: [
      { ageMonths: 0, weight: 4.0, benchmark: 3.8 },
      { ageMonths: 3, weight: 33.0, benchmark: 28.0 },
      { ageMonths: 6, weight: 60.5, benchmark: 48.0 },
      { ageMonths: 12, weight: 88.0, benchmark: 82.0 },
      { ageMonths: 18, weight: 98.4, benchmark: 92.0 }
    ],
    vaccines: [
      { name: "Poli-Clostridiose 10 Cepas", date: "2024-09-01", nextDate: "2025-03-01", status: "Em dia" },
      { name: "Raiva dos Herbívoros", date: "2024-04-10", nextDate: "2025-04-10", status: "Em dia" }
    ],
    famachaHistory: [
      { date: "2024-09-12", score: 1, eyeColor: "Vermelho Vivo", treated: false }
    ]
  },
  {
    id: "BOER-005",
    name: "Morena Linda Boer",
    rgn: "BR-BOER-2021-6540",
    tattoo: "MLB-08",
    tagNumber: "008",
    category: "Matriz",
    gender: "Fêmea",
    bloodGrade: "PO",
    coatPattern: "Cabeça Cobre / Corpo Branco Simétrico",
    birthDate: "2021-05-11",
    currentWeight: 82.5,
    dailyWeightGain: 195,
    bodyConditionScore: 3.8,
    scrotalCircumference: null,
    famachaScore: 3, // ALERTA FAMACHA
    reproductiveStatus: "Doadora de Embriões (Descanso)",
    expectedBirthDate: null,
    photo: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80",
    awards: ["Melhor Úbere e Harmonia Fenotípica Feicorte"],
    lot: "Piquete 04 - Matrizes Doadoras",
    temperament: "Calma e Manuseio Fácil",
    carcassScore: "Excelente Aprumo e Linha de Dorso Reta",
    pedigree: {
      father: {
        name: "Thor da Caatinga PO",
        rgn: "BR-BOER-2019-4321",
        bloodline: "Sul-Africana"
      },
      mother: {
        name: "Estrela do Sul PO",
        rgn: "BR-BOER-2018-9102",
        bloodline: "Linhagem Tarzan"
      },
      paternalGrandfather: "Kaptein Grand Slam",
      paternalGrandmother: "Estrela do Pajeú PO",
      maternalGrandfather: "Tarzan African Boer",
      maternalGrandmother: "Sulista Linda PO"
    },
    weightHistory: [
      { ageMonths: 0, weight: 3.6, benchmark: 3.4 },
      { ageMonths: 3, weight: 26.0, benchmark: 22.0 },
      { ageMonths: 6, weight: 46.0, benchmark: 38.0 },
      { ageMonths: 12, weight: 68.0, benchmark: 58.0 },
      { ageMonths: 24, weight: 79.0, benchmark: 72.0 },
      { ageMonths: 36, weight: 82.5, benchmark: 75.0 }
    ],
    vaccines: [
      { name: "Poli-Clostridiose 10 Cepas", date: "2024-03-10", nextDate: "2024-09-10", status: "Atrasada" },
      { name: "Raiva dos Herbívoros", date: "2024-05-12", nextDate: "2025-05-12", status: "Em dia" }
    ],
    famachaHistory: [
      { date: "2024-09-22", score: 3, eyeColor: "Rosa Claro (Atenção)", treated: true, vermifuge: "Moxidectina 1%" },
      { date: "2024-07-15", score: 2, eyeColor: "Vermelho Rosa", treated: false }
    ]
  },
  {
    id: "BOER-006",
    name: "Xerife do Moxotó PO",
    rgn: "BR-BOER-2022-5401",
    tattoo: "XRF-11",
    tagNumber: "031",
    category: "Reprodutor",
    gender: "Macho",
    bloodGrade: "PO",
    coatPattern: "Cabeça Cobre / Corpo Branco com Pinta no Pescoço",
    birthDate: "2022-09-03",
    currentWeight: 115.0,
    dailyWeightGain: 320,
    bodyConditionScore: 4.3,
    scrotalCircumference: 38.5,
    famachaScore: 1,
    reproductiveStatus: "Em Cobertura Ativa",
    photo: "https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&w=800&q=80",
    awards: ["Reservado Grande Campeão do Agreste 2024"],
    lot: "Piquete 01 - Reprodutores de Elite",
    temperament: "Extremamente Rústico",
    carcassScore: "Conformação Maciça com Garupa Larga",
    pedigree: {
      father: {
        name: "Brutus da Chapada PO",
        rgn: "BR-BOER-2018-7011",
        bloodline: "Rústica Caatinga"
      },
      mother: {
        name: "Sinhazinha do Moxotó PO",
        rgn: "BR-BOER-2020-5510",
        bloodline: "Moxotó de Elite"
      },
      paternalGrandfather: "Golias do Sertão",
      paternalGrandmother: "Muralha do São Francisco",
      maternalGrandfather: "Brutus da Chapada PO",
      maternalGrandmother: "Moxotó Imperial PO"
    },
    weightHistory: [
      { ageMonths: 0, weight: 3.9, benchmark: 3.8 },
      { ageMonths: 3, weight: 31.0, benchmark: 28.0 },
      { ageMonths: 6, weight: 55.0, benchmark: 48.0 },
      { ageMonths: 12, weight: 89.0, benchmark: 82.0 },
      { ageMonths: 24, weight: 115.0, benchmark: 105.0 }
    ],
    vaccines: [
      { name: "Poli-Clostridiose 10 Cepas", date: "2024-08-10", nextDate: "2025-02-10", status: "Em dia" },
      { name: "Raiva dos Herbívoros", date: "2024-05-12", nextDate: "2025-05-12", status: "Em dia" }
    ],
    famachaHistory: [
      { date: "2024-09-10", score: 1, eyeColor: "Vermelho Vivo", treated: false }
    ]
  },
  {
    id: "BOER-007",
    name: "Princesa do Agreste PC",
    rgn: "BR-BOER-2023-1122",
    tattoo: "PAG-07",
    tagNumber: "045",
    category: "Recria",
    gender: "Fêmea",
    bloodGrade: "PC",
    coatPattern: "Cabeça Cobre Claro / Corpo Branco",
    birthDate: "2023-09-14",
    currentWeight: 54.0,
    dailyWeightGain: 260,
    bodyConditionScore: 3.9,
    scrotalCircumference: null,
    famachaScore: 2,
    reproductiveStatus: "Em Idade de Cobertura (Borrega)",
    expectedBirthDate: null,
    photo: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80",
    awards: ["1º Prêmio Categoria Borrega Maior"],
    lot: "Piquete 03 - Fêmeas Recria",
    temperament: "Vivaz e Sociável",
    carcassScore: "Linha de Lombo Firme e Boa Angulação de Aprumos",
    pedigree: {
      father: {
        name: "Bastião do Cobre PO",
        rgn: "BR-BOER-2022-8812",
        bloodline: "Sul-Africana"
      },
      mother: {
        name: "Moça Bonita PC",
        rgn: "BR-BOER-2020-4040",
        bloodline: "Agreste Boer"
      },
      paternalGrandfather: "Thor da Caatinga PO",
      paternalGrandmother: "Sinhazinha do Moxotó PO",
      maternalGrandfather: "Cabra da Peste PC",
      maternalGrandmother: "Estrela do Agreste"
    },
    weightHistory: [
      { ageMonths: 0, weight: 3.4, benchmark: 3.4 },
      { ageMonths: 3, weight: 24.5, benchmark: 22.0 },
      { ageMonths: 6, weight: 41.0, benchmark: 36.0 },
      { ageMonths: 12, weight: 54.0, benchmark: 50.0 }
    ],
    vaccines: [
      { name: "Poli-Clostridiose 10 Cepas", date: "2024-09-01", nextDate: "2025-03-01", status: "Em dia" },
      { name: "Linfadenite Caseosa", date: "2024-06-15", nextDate: "2025-06-15", status: "Em dia" }
    ],
    famachaHistory: [
      { date: "2024-09-20", score: 2, eyeColor: "Vermelho Rosa", treated: false }
    ]
  },
  {
    id: "BOER-008",
    name: "Barão de Petrolina PO",
    rgn: "BR-BOER-2023-7809",
    tattoo: "BPT-03",
    tagNumber: "058",
    category: "Recria",
    gender: "Macho",
    bloodGrade: "PO",
    coatPattern: "Cabeça Cobre / Corpo Branco Clássico",
    birthDate: "2023-11-05",
    currentWeight: 78.2,
    dailyWeightGain: 375,
    bodyConditionScore: 4.4,
    scrotalCircumference: 35.0,
    famachaScore: 1,
    reproductiveStatus: "Em Treinamento de Monta",
    photo: "https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&w=800&q=80",
    awards: ["Campeão Macho Menor Petrolina Caprishow 2024"],
    lot: "Piquete 02 - Jovens Reprodutores",
    temperament: "Excelente Mansidão e Porte",
    carcassScore: "Paletas e Pernis Cheios, Peito Largo",
    pedigree: {
      father: {
        name: "Rei da Caatinga Boer",
        rgn: "BR-BOER-2020-3119",
        bloodline: "Sul-Africana"
      },
      mother: {
        name: "Dona Sinhá Boer PO",
        rgn: "BR-BOER-2019-1002",
        bloodline: "Matriarca Consagrada"
      },
      paternalGrandfather: "Rugged African Supreme",
      paternalGrandmother: "Dama de Ouro PO",
      maternalGrandfather: "Brutus da Chapada PO",
      maternalGrandmother: "Rainha do Vale PO"
    },
    weightHistory: [
      { ageMonths: 0, weight: 4.1, benchmark: 3.8 },
      { ageMonths: 3, weight: 35.0, benchmark: 28.0 },
      { ageMonths: 6, weight: 62.0, benchmark: 48.0 },
      { ageMonths: 10, weight: 78.2, benchmark: 68.0 }
    ],
    vaccines: [
      { name: "Poli-Clostridiose 10 Cepas", date: "2024-08-20", nextDate: "2025-02-20", status: "Em dia" },
      { name: "Raiva dos Herbívoros", date: "2024-05-12", nextDate: "2025-05-12", status: "Em dia" }
    ],
    famachaHistory: [
      { date: "2024-09-12", score: 1, eyeColor: "Vermelho Vivo", treated: false }
    ]
  },
  {
    id: "BOER-009",
    name: "Flor de Mandacaru PO",
    rgn: "BR-BOER-2024-0199",
    tattoo: "FMD-01",
    tagNumber: "077",
    category: "Cabrito",
    gender: "Fêmea",
    bloodGrade: "PO",
    coatPattern: "Cabeça Cobre / Corpo Branco com Pigmentação Total de Pele",
    birthDate: "2024-04-02",
    currentWeight: 38.0,
    dailyWeightGain: 290,
    bodyConditionScore: 4.1,
    scrotalCircumference: null,
    famachaScore: 1,
    reproductiveStatus: "Em Desmame / Desenvolvimento",
    expectedBirthDate: null,
    photo: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80",
    awards: ["Promessa Futura Exposição de Caruaru"],
    lot: "Creep Feeding Lote 01",
    temperament: "Curiosa e Rápida Adaptação ao Concentrado",
    carcassScore: "Conformação Longilínea com Duplo Lombo Promissor",
    pedigree: {
      father: {
        name: "Soberano do Sertão PO",
        rgn: "BR-BOER-2023-9941",
        bloodline: "Sul-Africana"
      },
      mother: {
        name: "Morena Linda Boer",
        rgn: "BR-BOER-2021-6540",
        bloodline: "Nacional PO"
      },
      paternalGrandfather: "Rei da Caatinga Boer",
      paternalGrandmother: "Morena Linda Boer",
      maternalGrandfather: "Thor da Caatinga PO",
      maternalGrandmother: "Estrela do Sul PO"
    },
    weightHistory: [
      { ageMonths: 0, weight: 3.7, benchmark: 3.4 },
      { ageMonths: 2, weight: 21.0, benchmark: 18.0 },
      { ageMonths: 4, weight: 32.0, benchmark: 26.0 },
      { ageMonths: 5.5, weight: 38.0, benchmark: 33.0 }
    ],
    vaccines: [
      { name: "Poli-Clostridiose 10 Cepas (1ª Dose)", date: "2024-06-15", nextDate: "2024-07-15", status: "Em dia" },
      { name: "Poli-Clostridiose 10 Cepas (Reforço)", date: "2024-07-15", nextDate: "2025-01-15", status: "Em dia" }
    ],
    famachaHistory: [
      { date: "2024-09-25", score: 1, eyeColor: "Vermelho Vivo", treated: false }
    ]
  },
  {
    id: "BOER-010",
    name: "Valente do Pajeú PC",
    rgn: "BR-BOER-2024-0341",
    tattoo: "VPJ-05",
    tagNumber: "084",
    category: "Cabrito",
    gender: "Macho",
    bloodGrade: "PC",
    coatPattern: "Cabeça Cobre com Pequena Mancha Branca na Bochecha",
    birthDate: "2024-03-22",
    currentWeight: 46.5,
    dailyWeightGain: 335,
    bodyConditionScore: 4.2,
    scrotalCircumference: 29.0,
    famachaScore: 2,
    reproductiveStatus: "Em Desenvolvimento",
    photo: "https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&w=800&q=80",
    awards: ["Destaque de Ganho em Confinamento Pré-Desmame"],
    lot: "Creep Feeding Lote 01",
    temperament: "Voraz e Ativo no Cocho",
    carcassScore: "Excelente Costela e Volume Abdominal Zootécnico",
    pedigree: {
      father: {
        name: "Xerife do Moxotó PO",
        rgn: "BR-BOER-2022-5401",
        bloodline: "Rústica Caatinga"
      },
      mother: {
        name: "Pérola da Serra PC",
        rgn: "BR-BOER-2021-7740",
        bloodline: "Sertão Semiárido"
      },
      paternalGrandfather: "Brutus da Chapada PO",
      paternalGrandmother: "Sinhazinha do Moxotó PO",
      maternalGrandfather: "Bastião do Cobre PO",
      maternalGrandmother: "Serena Crioula PC"
    },
    weightHistory: [
      { ageMonths: 0, weight: 4.1, benchmark: 3.8 },
      { ageMonths: 2, weight: 24.0, benchmark: 20.0 },
      { ageMonths: 4, weight: 36.5, benchmark: 30.0 },
      { ageMonths: 6, weight: 46.5, benchmark: 40.0 }
    ],
    vaccines: [
      { name: "Poli-Clostridiose 10 Cepas", date: "2024-06-20", nextDate: "2024-12-20", status: "Em dia" }
    ],
    famachaHistory: [
      { date: "2024-09-20", score: 2, eyeColor: "Vermelho Rosa", treated: false }
    ]
  },
  {
    id: "BOER-011",
    name: "Dona Sinhá Boer PO",
    rgn: "BR-BOER-2019-1002",
    tattoo: "DSB-02",
    tagNumber: "002",
    category: "Matriz",
    gender: "Fêmea",
    bloodGrade: "PO",
    coatPattern: "Cabeça Cobre Escuro / Corpo Branco Neve",
    birthDate: "2019-01-14",
    currentWeight: 92.0,
    dailyWeightGain: 180,
    bodyConditionScore: 4.3,
    scrotalCircumference: null,
    famachaScore: 1,
    reproductiveStatus: "Gestante (84 dias)",
    expectedBirthDate: "2026-12-22",
    photo: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80",
    awards: ["Matriarca de Ouro - Mais de 16 Progênies Registradas"],
    lot: "Piquete 04 - Matrizes Doadoras",
    temperament: "Matriarca Pacífica",
    carcassScore: "Conformação Perfeita, Padrão Racial Máximo",
    pedigree: {
      father: {
        name: "Brutus da Chapada PO",
        rgn: "BR-BOER-2018-7011",
        bloodline: "Rústica Caatinga"
      },
      mother: {
        name: "Rainha do Vale PO",
        rgn: "BR-BOER-2017-0091",
        bloodline: "Vale do São Francisco"
      },
      paternalGrandfather: "Golias do Sertão",
      paternalGrandmother: "Muralha do São Francisco",
      maternalGrandfather: "Imperador do Vale",
      maternalGrandmother: "Soberana 01"
    },
    weightHistory: [
      { ageMonths: 0, weight: 3.8, benchmark: 3.4 },
      { ageMonths: 6, weight: 48.0, benchmark: 38.0 },
      { ageMonths: 12, weight: 72.0, benchmark: 58.0 },
      { ageMonths: 24, weight: 86.0, benchmark: 75.0 },
      { ageMonths: 48, weight: 92.0, benchmark: 80.0 }
    ],
    vaccines: [
      { name: "Poli-Clostridiose 10 Cepas", date: "2024-08-10", nextDate: "2025-02-10", status: "Em dia" },
      { name: "Raiva dos Herbívoros", date: "2024-05-12", nextDate: "2025-05-12", status: "Em dia" }
    ],
    famachaHistory: [
      { date: "2024-09-15", score: 1, eyeColor: "Vermelho Vivo", treated: false }
    ]
  },
  {
    id: "BOER-012",
    name: "Centauro de Goiás PO",
    rgn: "BR-BOER-2021-9988",
    tattoo: "CTG-77",
    tagNumber: "099",
    category: "Reprodutor",
    gender: "Macho",
    bloodGrade: "PO",
    coatPattern: "Cabeça Cobre / Corpo Branco (Pelagem Pura)",
    birthDate: "2021-06-30",
    currentWeight: 122.0,
    dailyWeightGain: 330,
    bodyConditionScore: 4.6,
    scrotalCircumference: 40.0,
    famachaScore: 1,
    reproductiveStatus: "Banco de Sêmen Disponível",
    photo: "https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&w=800&q=80",
    awards: ["Campeão de Carcaça e Paleta Larga Centro-Oeste"],
    lot: "Central de Inseminação Santa Luzia",
    temperament: "Vigoroso e Dócil",
    carcassScore: "Volume Zootécnico Excepcional, Costelas Bem Arqueadas",
    pedigree: {
      father: {
        name: "Thor da Caatinga PO",
        rgn: "BR-BOER-2019-4321",
        bloodline: "Sul-Africana"
      },
      mother: {
        name: "Dona Sinhá Boer PO",
        rgn: "BR-BOER-2019-1002",
        bloodline: "Matriarca Consagrada"
      },
      paternalGrandfather: "Kaptein Grand Slam",
      paternalGrandmother: "Estrela do Pajeú PO",
      maternalGrandfather: "Brutus da Chapada PO",
      maternalGrandmother: "Rainha do Vale PO"
    },
    weightHistory: [
      { ageMonths: 0, weight: 4.3, benchmark: 3.8 },
      { ageMonths: 3, weight: 33.5, benchmark: 28.0 },
      { ageMonths: 6, weight: 59.0, benchmark: 48.0 },
      { ageMonths: 12, weight: 94.0, benchmark: 82.0 },
      { ageMonths: 24, weight: 116.0, benchmark: 105.0 },
      { ageMonths: 36, weight: 122.0, benchmark: 112.0 }
    ],
    vaccines: [
      { name: "Poli-Clostridiose 10 Cepas", date: "2024-08-10", nextDate: "2025-02-10", status: "Em dia" },
      { name: "Raiva dos Herbívoros", date: "2024-05-12", nextDate: "2025-05-12", status: "Em dia" }
    ],
    famachaHistory: [
      { date: "2024-09-10", score: 1, eyeColor: "Vermelho Vivo", treated: false }
    ]
  }
];

// Dados comparativos de Curva de Crescimento Padrão Raça Boer vs Rebanho Atual
export const GROWTH_BENCHMARK_DATA = [
  { stage: "Ao Nascer", ageMonths: 0, rebanhoMedio: 4.1, padraoBoer: 3.8, eliteBoer: 4.5 },
  { stage: "Desmame (90d)", ageMonths: 3, rebanhoMedio: 31.2, padraoBoer: 26.5, eliteBoer: 34.0 },
  { stage: "6 Meses", ageMonths: 6, rebanhoMedio: 55.4, padraoBoer: 45.0, eliteBoer: 60.0 },
  { stage: "9 Meses", ageMonths: 9, rebanhoMedio: 73.8, padraoBoer: 62.0, eliteBoer: 78.5 },
  { stage: "12 Meses", ageMonths: 12, rebanhoMedio: 88.5, padraoBoer: 78.0, eliteBoer: 96.0 },
  { stage: "18 Meses", ageMonths: 18, rebanhoMedio: 104.0, padraoBoer: 92.0, eliteBoer: 112.0 },
  { stage: "Adulto (24m+)", ageMonths: 24, rebanhoMedio: 118.0, padraoBoer: 102.0, eliteBoer: 130.0 }
];

// Distribuição do Rebanho por Categoria
export const HERD_DISTRIBUTION_DATA = [
  { name: "Matrizes (Cabras)", value: 42, color: "#8B321D" },
  { name: "Reprodutores (Bodes)", value: 8, color: "#D49A37" },
  { name: "Recria (Jovens)", value: 28, color: "#2E5A27" },
  { name: "Cabritos (< 90 dias)", value: 18, color: "#B94A2F" }
];

// Banco de Sêmen & Embriões
export const SEMEN_BANK = [
  {
    id: "SMN-01",
    sireName: "Rei da Caatinga Boer",
    rgn: "BR-BOER-2020-3119",
    bloodline: "Sul-Africana Legítima (Kaptein x Rugged)",
    strawsAvailable: 145,
    motilityRate: 85,
    pricePerStraw: 350.00,
    breeder: "Capril Chei de Dio & Fazenda Santa Luzia",
    status: "Disponível para Envio em Botijão N2",
    dnaVerified: true,
    photo: "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "SMN-02",
    sireName: "Bastião do Cobre PO",
    rgn: "BR-BOER-2022-8812",
    bloodline: "Thor da Caatinga x Sinhazinha do Moxotó",
    strawsAvailable: 90,
    motilityRate: 88,
    pricePerStraw: 420.00,
    breeder: "Capril Chei de Dio",
    status: "Disponível para Envio em Botijão N2",
    dnaVerified: true,
    photo: "https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "SMN-03",
    sireName: "Centauro de Goiás PO",
    rgn: "BR-BOER-2021-9988",
    bloodline: "Linhagem Tarzan x Dona Sinhá Boer",
    strawsAvailable: 65,
    motilityRate: 82,
    pricePerStraw: 280.00,
    breeder: "Capril Chei de Dio & Parceiros",
    status: "Últimas Doses",
    dnaVerified: true,
    photo: "https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&w=600&q=80"
  }
];

// Escala FAMACHA Oficial
export const FAMACHA_SCALE = [
  {
    grade: 1,
    title: "Grau 1 - Ótimo",
    color: "#B71C1C",
    colorHex: "bg-red-700 text-white",
    description: "Mucosa Vermelho Vivo",
    hematocrit: "> 28%",
    recommendation: "Não tratar. Animal com excelente resistência e sem anemia.",
    actionColor: "text-emerald-700 bg-emerald-50 border-emerald-200"
  },
  {
    grade: 2,
    title: "Grau 2 - Bom",
    color: "#E53935",
    colorHex: "bg-red-500 text-white",
    description: "Mucosa Vermelho Rosa",
    hematocrit: "23% a 27%",
    recommendation: "Não tratar. Animal saudável com boa imunidade natural.",
    actionColor: "text-emerald-700 bg-emerald-50 border-emerald-200"
  },
  {
    grade: 3,
    title: "Grau 3 - Alerta",
    color: "#F48FB1",
    colorHex: "bg-pink-300 text-pink-950",
    description: "Mucosa Rosa Claro",
    hematocrit: "18% a 22%",
    recommendation: "Monitorar de perto. Tratar apenas se fêmea em lactação, cabrito jovem ou perda de escore corporal.",
    actionColor: "text-amber-800 bg-amber-50 border-amber-300"
  },
  {
    grade: 4,
    title: "Grau 4 - Perigo",
    color: "#F8BBD0",
    colorHex: "bg-pink-100 text-pink-900 border border-pink-300",
    description: "Mucosa Rosa Pálido",
    hematocrit: "13% a 17%",
    recommendation: "TRATAR IMEDIATAMENTE. Risco de queda severa no ganho de peso e imunodepressão.",
    actionColor: "text-orange-900 bg-orange-100 border-orange-400"
  },
  {
    grade: 5,
    title: "Grau 5 - Crítico",
    color: "#FFFFFF",
    colorHex: "bg-white text-stone-900 border-2 border-red-600",
    description: "Mucosa Quase Branca",
    hematocrit: "< 12%",
    recommendation: "EMERGÊNCIA VETERINÁRIA. Tratar com vermífugo de choque, suplementação de ferro e suporte urgente.",
    actionColor: "text-red-950 bg-red-100 border-red-500 font-bold"
  }
];

// Protocolos Sanitários & Calendário
export const SANITARY_PROTOCOLS = [
  {
    name: "Vacina Polivalente de Clostridiose (10 Cepas)",
    diseases: "Enterotoxemia, Sintomático, Tétano, Gangrena Gasosa, Doença do Rim Polposo",
    frequency: "Semestral para rebanho geral; Fêmeas no último terço de gestação (imunidade colostral).",
    boerImportance: "Cabras Boer possuem altíssimo ganho de peso e consumo de concentrado, tornando-as mais suscetíveis à enterotoxemia se não imunizadas.",
    badge: "Obrigatória"
  },
  {
    name: "Vacina contra Raiva dos Herbívoros",
    diseases: "Vírus rábico transmitido por morcegos hematófagos (Desmodus rotundus)",
    frequency: "Anual para todos os animais acima de 3 meses.",
    boerImportance: "Essencial em regiões de serra, caatinga e proximidades de cavernas ou matas.",
    badge: "Obrigatória em Endemias"
  },
  {
    name: "Controle da Linfadenite Caseosa (Mal do Caroço)",
    diseases: "Corynebacterium pseudotuberculosis",
    frequency: "Isolamento imediato de animais com abscessos e vacinação preventiva do plantel.",
    boerImportance: "Crítico na preservação do valor comercial de reprodutores PO e matrizes de elite.",
    badge: "Controle Genético"
  },
  {
    name: "Casqueamento Periódico e Higiene de Pedilúvio",
    diseases: "Pododermatite infecciosa (Footrot) e deformidades anatômicas",
    frequency: "A cada 45 a 60 dias (dependendo do piso do aprisco / pastagem).",
    boerImportance: "A carcaça pesada do Boer (100 a 130kg) exige aprumos perfeitos para sustentar a musculatura sem dor ou claudicação.",
    badge: "Manejo Semanal"
  }
];
