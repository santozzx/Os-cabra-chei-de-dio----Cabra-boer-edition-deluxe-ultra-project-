import React, { useState } from 'react';
import { 
  Stethoscope, 
  ShieldCheck, 
  AlertTriangle, 
  Scale, 
  Wheat, 
  HelpCircle, 
  CheckCircle2, 
  Calendar,
  Sparkles,
  Info
} from 'lucide-react';
import { FAMACHA_SCALE, SANITARY_PROTOCOLS } from '../data/mockBoerData';

export default function SanitaryModule({ animals }) {
  // Estado da Calculadora Nutricional (Matéria Seca por % do Peso Vivo)
  const [goatCategory, setGoatCategory] = useState('terminacao'); // 'manutencao', 'gestacao', 'lactacao', 'terminacao'
  const [herdSize, setHerdSize] = useState(25);
  const [avgWeight, setAvgWeight] = useState(65);

  // Parâmetros zootécnicos por categoria de cabra Boer
  const nutritionParams = {
    manutencao: {
      name: 'Manutenção (Adultos em descanso)',
      msPercent: 2.3, // 2.3% do PV em Matéria Seca
      volumosoRatio: 80, // 80% volumoso
      concentradoRatio: 20, // 20% concentrado
      proteinReq: '10 a 12% PB',
      desc: 'Dieta básica para manutenção de peso e microbiota ruminal saudável.'
    },
    gestacao: {
      name: 'Gestação Final (Últimos 50 dias)',
      msPercent: 3.2,
      volumosoRatio: 65,
      concentradoRatio: 35,
      proteinReq: '14 a 16% PB',
      desc: 'Crescimento exponencial dos fetos e formação do colostro de alta qualidade.'
    },
    lactacao: {
      name: 'Lactação Alta Produção (Parto Gemelar)',
      msPercent: 4.2,
      volumosoRatio: 55,
      concentradoRatio: 45,
      proteinReq: '16 a 18% PB',
      desc: 'Demanda energética elevada para garantir leite aos cabritos e evitar perda de escore.'
    },
    terminacao: {
      name: 'Terminação & Engorda (Duplo Lombo Boer)',
      msPercent: 4.0,
      volumosoRatio: 40,
      concentradoRatio: 60,
      proteinReq: '16 a 18% PB',
      desc: 'Confinamento focado em hipertrofia de carcaça, cobertura de gordura e conversão alimentar.'
    }
  };

  const currentParam = nutritionParams[goatCategory];

  // Cálculos nutricionais
  // Matéria Seca Diária por Animal (kg MS/dia) = (avgWeight * msPercent) / 100
  const msPerAnimal = (avgWeight * (currentParam.msPercent / 100));
  const totalMsHerd = msPerAnimal * herdSize;

  // Assumindo volumoso médio (silagem de milho / feno / capim com ~35% de MS média no natural)
  // e concentrado balanceado com ~88% de MS
  const msVolumoso = totalMsHerd * (currentParam.volumosoRatio / 100);
  const msConcentrado = totalMsHerd * (currentParam.concentradoRatio / 100);

  const kgNaturalVolumoso = (msVolumoso / 0.35).toFixed(1); // Consumo na matéria fresca
  const kgNaturalConcentrado = (msConcentrado / 0.88).toFixed(1);

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-boer-border">
        <div>
          <div className="flex items-center space-x-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-boer-bark tracking-tight">
              Módulo Sanitário & Nutricional
            </h2>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-boer-greenSoft text-boer-green border border-boer-green/30">
              Manejo Integrado
            </span>
          </div>
          <p className="text-xs sm:text-sm text-boer-muted mt-1">
            Avaliação FAMACHA© contra verminose, vacinação preventiva e balanço de Matéria Seca
          </p>
        </div>
      </div>

      {/* SEÇÃO 1: GUIA E CARTÃO FAMACHA© OFICIAL */}
      <div className="boer-card p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-stone-100">
          <div>
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-red-600 animate-pulse"></span>
              <h3 className="text-lg sm:text-xl font-extrabold text-boer-bark">
                Cartão FAMACHA© Oficial para Caprinos
              </h3>
            </div>
            <p className="text-xs text-stone-500 mt-0.5">
              Método clínico de avaliação da mucosa ocular para identificação de anemia causada por <em>Haemonchus contortus</em>
            </p>
          </div>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-stone-100 text-stone-700">
            Tratamento Seletivo / Evita Resistência Parasitária
          </span>
        </div>

        {/* Régua de Graus FAMACHA 1 a 5 */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3.5">
          {FAMACHA_SCALE.map((item) => (
            <div 
              key={item.grade}
              className={`p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                item.grade >= 4 ? 'bg-red-50/60 border-red-300 ring-1 ring-red-300' :
                item.grade === 3 ? 'bg-amber-50/60 border-amber-300' :
                'bg-white border-stone-200'
              }`}
            >
              <div>
                {/* Visual da Cor da Mucosa */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-extrabold uppercase text-stone-600">
                    {item.title}
                  </span>
                  <div 
                    className="w-6 h-6 rounded-full border border-stone-300 shadow-sm"
                    style={{ backgroundColor: item.color }}
                    title={item.description}
                  />
                </div>

                <div className="font-extrabold text-sm text-boer-bark mb-1">
                  {item.description}
                </div>
                <div className="text-[11px] text-stone-500 font-mono mb-2">
                  Hematócrito: <strong>{item.hematocrit}</strong>
                </div>
                <p className="text-xs text-stone-700 leading-snug">
                  {item.recommendation}
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-stone-200/60">
                <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full block text-center ${item.actionColor}`}>
                  {item.grade <= 2 ? 'LIVRE DE ANEMIA' : item.grade === 3 ? 'MONITORAR' : 'VERMIFUGAR JÁ'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Instrução de Coleta no Campo */}
        <div className="mt-5 p-4 rounded-xl bg-boer-cream border border-boer-border text-xs text-stone-700 flex items-start space-x-3">
          <Info className="w-5 h-5 text-boer-copper shrink-0 mt-0.5" />
          <div>
            <strong>Instrução Prática para o Curral:</strong> Avalie os animais sob luz natural direta (nunca na sombra escura do galpão ou com óculos escuros). Pressione a pálpebra superior suavemente e exponha a conjuntiva ocular. Trate apenas animais Grau 4 e 5, ou Grau 3 se forem borregos jovens, fêmeas paridas ou com ECC baixo.
          </div>
        </div>
      </div>

      {/* SEÇÃO 2: CALCULADORA DE RAÇÃO E VOLUMOSO (MATÉRIA SECA) */}
      <div className="boer-card p-6 sm:p-8 bg-gradient-to-br from-white via-boer-cream/30 to-emerald-50/30">
        <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-stone-200">
          <div className="p-3 rounded-2xl bg-boer-green text-white shadow-md shadow-boer-green/30">
            <Wheat className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-extrabold text-boer-bark">
              Calculadora Nutricional de Matéria Seca (% do Peso Vivo)
            </h3>
            <p className="text-xs text-stone-500">
              Dimensionamento de volumoso (feno/silagem) e concentrado balanceado para caprinos Boer
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Parâmetros do Lote */}
          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-boer-bark block mb-1.5">
                Categoria / Estágio Fisiológico
              </label>
              <select
                value={goatCategory}
                onChange={(e) => setGoatCategory(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-boer-border bg-white text-sm font-semibold text-boer-bark outline-none focus:ring-2 focus:ring-boer-green"
              >
                <option value="terminacao">Terminação & Engorda (Duplo Lombo)</option>
                <option value="lactacao">Lactação Alta Produção (Gemelar)</option>
                <option value="gestacao">Gestação Final (Últimos 50d)</option>
                <option value="manutencao">Manutenção Adultos</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-boer-bark block mb-1.5">
                Número de Animais no Lote: <strong className="text-boer-copper">{herdSize} cab</strong>
              </label>
              <input
                type="range"
                min="1"
                max="100"
                value={herdSize}
                onChange={(e) => setHerdSize(parseInt(e.target.value))}
                className="w-full accent-boer-green cursor-pointer"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-boer-bark block mb-1.5">
                Peso Médio por Cabeça: <strong className="text-boer-copper">{avgWeight} kg</strong>
              </label>
              <input
                type="range"
                min="20"
                max="140"
                value={avgWeight}
                onChange={(e) => setAvgWeight(parseInt(e.target.value))}
                className="w-full accent-boer-green cursor-pointer"
              />
            </div>

            <div className="p-3 bg-white rounded-xl border border-stone-200 text-xs text-stone-600 space-y-1">
              <span className="font-bold text-boer-bark block">{currentParam.name}</span>
              <p>{currentParam.desc}</p>
              <p className="text-boer-green font-bold">Proteína Bruta Alvo: {currentParam.proteinReq}</p>
            </div>
          </div>

          {/* Resultados do Consumo Calculado */}
          <div className="lg:col-span-2 space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Card Volumoso */}
              <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase text-stone-500">Volumoso Fresco Diário</span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800">
                      {currentParam.volumosoRatio}% da Dieta
                    </span>
                  </div>
                  <div className="text-3xl font-black text-boer-green">
                    {kgNaturalVolumoso} <span className="text-sm font-normal text-stone-600">kg/dia</span>
                  </div>
                  <p className="text-xs text-stone-500 mt-2">
                    Silagem de milho, sorgo, palma forrageira ou capim-elefante picado (~35% MS)
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 text-xs text-stone-600 font-semibold">
                  Média por animal: {(kgNaturalVolumoso / herdSize).toFixed(1)} kg / dia
                </div>
              </div>

              {/* Card Concentrado */}
              <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase text-stone-500">Concentrado / Ração</span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-100 text-amber-800">
                      {currentParam.concentradoRatio}% da Dieta
                    </span>
                  </div>
                  <div className="text-3xl font-black text-amber-800">
                    {kgNaturalConcentrado} <span className="text-sm font-normal text-stone-600">kg/dia</span>
                  </div>
                  <p className="text-xs text-stone-500 mt-2">
                    Mistura farelo de soja, milho moído, núcleo mineral caprino e uréia pecuária (~88% MS)
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 text-xs text-stone-600 font-semibold">
                  Média por animal: {(kgNaturalConcentrado / herdSize).toFixed(2)} kg / dia
                </div>
              </div>

            </div>

            {/* Total de Matéria Seca do Lote */}
            <div className="p-4 rounded-2xl bg-boer-bark text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs text-stone-400 font-medium">Consumo Total de Matéria Seca (MS):</span>
                <div className="text-xl font-black text-boer-gold">
                  {totalMsHerd.toFixed(1)} kg MS / dia para o lote de {herdSize} animais
                </div>
              </div>

              <div className="text-right sm:border-l sm:border-stone-700 sm:pl-4">
                <span className="text-xs text-stone-400">Consumo por Cabeça:</span>
                <div className="text-base font-bold text-white">
                  {msPerAnimal.toFixed(2)} kg MS/dia ({currentParam.msPercent}% PV)
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* SEÇÃO 3: CALENDÁRIO & PROTOCOLOS DE VACINAÇÃO E CASQUEAMENTO */}
      <div className="boer-card p-6 sm:p-8">
        <div className="flex items-center space-x-2 mb-6 pb-3 border-b border-stone-100">
          <ShieldCheck className="w-5 h-5 text-boer-copper" />
          <h3 className="text-lg font-bold text-boer-bark">
            Protocolos Sanitários Oficiais da Raça Boer
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SANITARY_PROTOCOLS.map((proto, idx) => (
            <div key={idx} className="p-4 rounded-2xl border border-boer-border bg-white hover:border-boer-copper/50 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-bold text-boer-bark">{proto.name}</h4>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-boer-copperSoft text-boer-copper">
                    {proto.badge}
                  </span>
                </div>
                <p className="text-xs text-stone-500 font-medium mb-2">
                  Agentes / Alvo: {proto.diseases}
                </p>
                <p className="text-xs text-stone-700 leading-relaxed">
                  <strong>Importância na Raça Boer:</strong> {proto.boerImportance}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-600">
                <span className="flex items-center">
                  <Calendar className="w-3.5 h-3.5 mr-1 text-boer-copper" />
                  {proto.frequency}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
