# 🐐 BoerManager — Gestão de Cabras Boer

> **Sistema AgroTech Web Moderno e Responsivo Especializado na Gestão de Rebanhos e Seleção Genética de Caprinos da Raça Boer.**

---

## 🌾 Sobre o Projeto

O **BoerManager** é uma aplicação Single Page Application (SPA) desenvolvida exclusivamente para zootecnistas, criadores e tratadores de caprinos da **Raça Boer**.

Tomando como base conceitual o projeto original:
- **Espécie / Raça**: Caprino Boer (*Capra hircus*)
- **Foco Produtivo**: Corte de Alta Performance e Hipertrofia de Carcaça (Duplo Lombo)
- **Adaptação Geográfica**: Semiárido / Caatinga (Nordeste), Campos e Serras (Sul e Sudeste)
- **Genética**: Linhagens Sul-Africanas consagradas (Puro de Origem - PO e Puro por Cruza - PC)

---

## 🎨 Guia de Estilo & Design System (Boer Theme)

- **Estilo Visual**: AgroTech Rústico-Premium (clean, corporativo e com "Modo Curral" de alto contraste para campo aberto).
- **Paleta de Cores**:
  - `Primary / Boer Copper`: `#8B321D` (Tom clássico do pelo de cobre da cabeça da cabra Boer)
  - `Secondary / Pasture Green`: `#2E5A27` (Indicadores de pastagem, saúde e ganho de peso)
  - `Accent / Gold Trophy`: `#D49A37` (Destaque para reprodutores de pista e genética de elite)
  - `Background / Leather Off-White`: `#FAF7F2` (Fundo descansado para leitura contínua)
  - `Surface / Clean White`: `#FFFFFF` (Cards, tabelas e modais)
  - `Dark Neutral / Deep Bark`: `#1F1917` (Textos e contrastes tipográficos)
- **Tipografia**: *Plus Jakarta Sans* e *Inter*.
- **Ícones**: *Lucide React*.

---

## 🚀 Módulos do Sistema

### 1. 📊 Dashboard Geral (Visão da Fazenda)
- **KPIs em Tempo Real**: Total de cabeças discriminado (Matrizes, Reprodutores, Recria e Cabritos), GPD Médio do Plantel (+345 g/dia), Taxa de Prenhez (91.8%) e Alertas Sanitários ativos.
- **Gráficos Interativos (Recharts)**: Curva de Ganho de Peso Médio por Idade comparando o *Rebanho Atual* vs *Padrão Nacional ABCC* vs *Top Elite Sul-Africana*.
- **Distribuição do Rebanho**: Estrutura etária e reprodutiva com 78% de animais PO.
- **Próximos Partos & Top Reprodutores**: Acesso rápido às fêmeas no terço final de gestação e machos recordistas de ganho de peso.

### 2. 🧬 Plantel Boer & Genealogia
- Tabela e Visualização em Cards com busca em tempo real por Nome, RGN, Tatuagem e Brinco.
- Filtros combináveis por **Grau de Sangue (PO/PC)**, **Categoria** e **Sexo**.
- **Modal de Detalhes do Animal**:
  - Foto e padrão de pelagem (Cabeça Cobre / Corpo Branco, Pintado ou Solid Red).
  - **Árvore Genealógica (Pedigree 3 Gerações)**: Pai, Mãe, Avós Paternos e Maternos.
  - **Gráfico Individual de Pesagens**: Evolução ponderal com diferencial em relação à média da raça.
  - **Ficha Zootécnica**: Escore de Condição Corporal (ECC 1 a 5), Perímetro Escrotal e Conformação Muscular.

### 3. 🐐 Controle Reprodutivo & Genética
- **Calculadora Zootécnica de Parto (150 Dias)**:
  - Insere a data da cobertura e gera os marcos:
    - 35º dia: Diagnóstico de Gestação (DG por Ultrassom)
    - 120º dia: Reforço vacinal materno (imunidade colostral)
    - 135º dia: Transferência para Piquete Maternidade
    - 150º dia: Data prevista do parto (faixa fisiológica de 147 a 153 dias)
- **Quadro de Coberturas**: Controle de monta natural, inseminação artificial (IA) e transferência de embriões (TE).
- **Banco Criogênico de Sêmen & Embriões**: Reprodutores de linhagens Sul-Africanas puras (*Kaptein*, *Rugged*, *Tarzan*) armazenadas em botijões de $N_2$ a -196°C.

### 4. 🩺 Módulo Sanitário & Nutricional
- **Cartão FAMACHA© Oficial**:
  - Escala colorimétrica da mucosa ocular (Graus 1 a 5) com faixas de hematócrito e indicação precisa de vermifugação seletiva contra *Haemonchus contortus*.
- **Protocolos Sanitários Oficiais**: Calendário de vacinação contra Clostridiose (10 cepas), Raiva dos Herbívoros, Linfadenite Caseosa (Mal do Caroço) e manejo de Casqueamento.
- **Calculadora Nutricional de Matéria Seca (% PV)**:
  - Dimensiona a quantidade diária de volumoso fresco (silagem/capim) e ração concentrada para manutenção, gestação final, lactação gemelar e terminação duplo lombo.

### 5. 📖 Guia Técnico da Raça Boer
- Padrão oficial ABCC:
  - Cabeça, perfil subconvexo com chanfro romano, chifres escuros e orelhas longas pendentes sem dobras.
  - Pelagem clássica e importância vital da derme pigmentada escura contra radiação ultravioleta.
  - Hipertrofia muscular e duplo lombo com rendimento frigorífico superior a 54%.
  - Defeitos desclassificatórios eliminatórios (prognatismo, tetos bífidos, monorquidismo).
  - **Checklist Interativo de Autoavaliação**: Ferramenta zootécnica com cálculo percentual de conformidade racial antes do registro oficial.

---

## 💻 Como Executar o Projeto

### Pré-requisitos
- Node.js (v18+)
- npm ou yarn

### Instalação e Execução
```bash
# 1. Instalar as dependências
npm install

# 2. Rodar o servidor de desenvolvimento
npm run dev

# 3. Compilar para produção
npm run build
```

O aplicativo estará disponível em `http://localhost:5173`.

---

## 🛠️ Tecnologias Utilizadas
- **React 18**
- **Vite 6**
- **Tailwind CSS 3**
- **Recharts**
- **Lucide React**
- **Plus Jakarta Sans / Inter Google Fonts**

---

*Capril Boer • Santa Luzia, PE • Foco em Seleção Genética de Elite Boer*
