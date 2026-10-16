# 🐐 Casa da Cabra — Manejo de Cabras Boer

> **Caderno digital para ajudar donos e criadores a cuidar melhor das suas cabras Boer.**

---

## 🌾 Sobre o Projeto

O **Casa da Cabra** é uma aplicação web feita exclusivamente para donos, criadores e tratadores de cabras **Boer**.

Tomando como base conceitual o projeto original:
- **Espécie / Raça**: Caprino Boer (*Capra hircus*)
- **Foco Produtivo**: Corte de Alta Performance e Hipertrofia de Carcaça (Duplo Lombo)
- **Adaptação Geográfica**: Semiárido / Caatinga (Nordeste), Campos e Serras (Sul e Sudeste)
- **Genética**: Linhagens Sul-Africanas consagradas (Puro de Origem - PO e Puro por Cruza - PC)

---

## 🎨 Tema de Fazenda Caprina

- **Estilo Visual**: rústico, acolhedor e prático para a rotina do produtor no pasto e no curral.
- **Paleta de Cores**:
- `Marrom da terra`: `#68452F` (solo, madeira e cercas da fazenda)
  - `Verde do pasto`: `#55733E` (forragem, saúde e natureza)
  - `Creme do leite`: `#F7F1E5` (fundo leve e acolhedor)
  - `Branco leite`: `#FFFDF8` (áreas de leitura e fichas das cabras)
- **Tipografia**: *Playfair Display* nos títulos e *Plus Jakarta Sans* nos dados.
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

*Casa da Cabra • Santa Luzia, PE • Cuidado diário de cabras Boer*
