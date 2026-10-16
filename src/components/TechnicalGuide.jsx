import React, { useState } from 'react';
import { 
  BookOpen, 
  Award, 
  CheckCircle2, 
  XCircle, 
  AlertOctagon, 
  Sparkles, 
  Layers, 
  Compass, 
  Eye, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

export default function TechnicalGuide() {
  // Checklist de Autoavaliação Morfológica Interativo
  const [checklist, setChecklist] = useState({
    cabecaSubconvexa: false,
    orelhasLongas: false,
    pelagemOficial: false,
    pelePigmentada: false,
    duploLombo: false,
    aprumosCorretos: false,
    semPrognatismo: false,
    semTetosBifidos: false,
    testiculosSimetricos: false
  });

  const toggleChecklist = (key) => {
    setChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const totalChecks = Object.keys(checklist).length;
  const completedChecks = Object.values(checklist).filter(Boolean).length;
  const complianceScore = Math.round((completedChecks / totalChecks) * 100);

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Header com Origem do Repositório */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-boer-border">
        <div>
          <div className="flex items-center space-x-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-boer-bark tracking-tight">
              Guia Técnico da Raça Boer
            </h2>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-boer-copperSoft text-boer-copper border border-boer-copper/30">
              Padrão Racial ABCC
            </span>
          </div>
          <p className="text-xs sm:text-sm text-boer-muted mt-1">
            Base conceitual oficial: Seleção genética de corte para o Nordeste, Sul e Sudeste brasileiro
          </p>
        </div>
      </div>

      {/* 3 Pilares Fenotípicos da Raça Boer */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Pilar 1: Cabeça & Orelhas */}
        <div className="boer-card p-6 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-boer-copperSoft text-boer-copper flex items-center justify-center mb-4">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-boer-bark mb-2">
              1. Cabeça, Chifres & Orelhas
            </h3>
            <ul className="text-xs text-stone-600 space-y-2 leading-relaxed">
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-boer-copper mr-2 shrink-0 mt-0.5" />
                <span><strong>Perfil Subconvexo:</strong> Chanfro romano proeminente com fronte ampla e narinas bem abertas.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-boer-copper mr-2 shrink-0 mt-0.5" />
                <span><strong>Orelhas Longas & Pendentes:</strong> Planas, sem dobras para frente, acompanhando as laterais da mandíbula.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-boer-copper mr-2 shrink-0 mt-0.5" />
                <span><strong>Chifres Escuros:</strong> Curvados para trás e para fora, conferindo imponência e rusticidade de defesa.</span>
              </li>
            </ul>
          </div>

          <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] text-boer-copper font-bold">
            Característica inconfundível de pureza racial.
          </div>
        </div>

        {/* Pilar 2: Pelagem & Pigmentação Solar */}
        <div className="boer-card p-6 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-boer-bark mb-2">
              2. Pelagem & Pigmentação de Pele
            </h3>
            <ul className="text-xs text-stone-600 space-y-2 leading-relaxed">
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-amber-600 mr-2 shrink-0 mt-0.5" />
                <span><strong>Cabeça Cobre / Corpo Branco:</strong> O contraste clássico Boer. Cabeça e pescoço em tom cobre avermelhado.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-amber-600 mr-2 shrink-0 mt-0.5" />
                <span><strong>Pele Pigmentada Escura:</strong> Sob a pelagem branca, a derme deve ser escura para proteger contra queimaduras e câncer solar no Nordeste.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-amber-600 mr-2 shrink-0 mt-0.5" />
                <span><strong>Mucosas & Auréolas:</strong> Pele ao redor dos olhos e ânus 100% pigmentada.</span>
              </li>
            </ul>
          </div>

          <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] text-amber-800 font-bold">
            Proteção solar indispensável no Semiárido.
          </div>
        </div>

        {/* Pilar 3: Conformação & Duplo Lombo */}
        <div className="boer-card p-6 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-boer-greenSoft text-boer-green flex items-center justify-center mb-4">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-boer-bark mb-2">
              3. Carcaça & Duplo Lombo
            </h3>
            <ul className="text-xs text-stone-600 space-y-2 leading-relaxed">
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-boer-green mr-2 shrink-0 mt-0.5" />
                <span><strong>Duplo Lombo (Hipertrofia):</strong> Sulco muscular bem visível ao longo da espinha dorsal, conferindo rendimento frigorífico &gt; 54%.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-boer-green mr-2 shrink-0 mt-0.5" />
                <span><strong>Pernis Descarnados até o Jarrete:</strong> Pernil espesso, arredondado e convexo com grande deposição de carne nobre.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-boer-green mr-2 shrink-0 mt-0.5" />
                <span><strong>Peito Profundo & Paletas Fortes:</strong> Ampla caixa torácica para sustentação respiratória e aprumos aprumados.</span>
              </li>
            </ul>
          </div>

          <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] text-boer-green font-bold">
            Foco máximo: Alta eficiência de corte cárneo.
          </div>
        </div>

      </div>

      {/* GUIA DE DEFEITOS DESCLASSIFICATÓRIOS (DESCARTE OBRIGATÓRIO) */}
      <div className="boer-card p-6 sm:p-8 bg-red-50/40 border border-red-200">
        <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-red-200/80">
          <div className="p-2.5 rounded-xl bg-red-600 text-white shadow-md">
            <AlertOctagon className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-black text-red-950">
              Defeitos Desclassificatórios & Critérios de Descarte
            </h3>
            <p className="text-xs text-red-800">
              Caprinos Boer portadores destas anomalias não devem receber RGN definitivo e devem ser descartados da reprodução pura
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          
          <div className="p-4 rounded-xl bg-white border border-red-200 shadow-sm space-y-1.5">
            <div className="flex items-center text-red-700 font-bold">
              <XCircle className="w-4 h-4 mr-1.5 shrink-0" />
              Prognatismo ou Braquignatismo (Mordedura Incorreta)
            </div>
            <p className="text-stone-600">
              Quando a mandíbula inferior avança ou recua em relação à arcada superior, impedindo o caprino de pastar eficientemente na caatinga ou capim seco.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-red-200 shadow-sm space-y-1.5">
            <div className="flex items-center text-red-700 font-bold">
              <XCircle className="w-4 h-4 mr-1.5 shrink-0" />
              Tetas Duplas, Bífidas ou Cegas (Nas Matrizes)
            </div>
            <p className="text-stone-600">
              Qualquer anomalia no úbere que dificulte a amamentação de cabritos recém-nascidos. O padrão Boer exige 2 ou no máximo 4 tetos simétricos e funcionais.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-red-200 shadow-sm space-y-1.5">
            <div className="flex items-center text-red-700 font-bold">
              <XCircle className="w-4 h-4 mr-1.5 shrink-0" />
              Monorquidismo ou Criptorquidismo (Nos Reprodutores)
            </div>
            <p className="text-stone-600">
              Presença de apenas um testículo na bolsa escrotal ou testículos assimétricos com rotação excessiva (&gt; 45°).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-red-200 shadow-sm space-y-1.5">
            <div className="flex items-center text-red-700 font-bold">
              <XCircle className="w-4 h-4 mr-1.5 shrink-0" />
              Cascos Claros e Aprumos Deformados
            </div>
            <p className="text-stone-600">
              Cascos despigmentados são mais frágeis e suscetíveis a footrot e desgaste irregular. O Boer exige cascos escuros e resistentes ao solo pedregoso.
            </p>
          </div>

        </div>
      </div>

      {/* FERRAMENTA INTERATIVA: CHECKLIST DE AUTOAVALIAÇÃO MORFOLÓGICA */}
      <div className="boer-card p-6 sm:p-8 bg-gradient-to-br from-white via-boer-cream/50 to-amber-50/50">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-stone-200">
          <div>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-boer-gold" />
              <h3 className="text-lg sm:text-xl font-extrabold text-boer-bark">
                Checklist Interativo de Registro ABCC (Autoavaliação)
              </h3>
            </div>
            <p className="text-xs text-stone-500 mt-0.5">
              Marque os itens observados no caprino durante a vistoria no tronco de contenção
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-xs font-bold text-stone-600">Conformidade Racial:</span>
            <div className="flex items-center space-x-2">
              <span className={`text-xl font-black ${complianceScore >= 85 ? 'text-boer-green' : 'text-amber-700'}`}>
                {complianceScore}%
              </span>
              <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                complianceScore === 100 ? 'bg-emerald-100 text-emerald-800' :
                complianceScore >= 80 ? 'bg-amber-100 text-amber-800' :
                'bg-red-100 text-red-800'
              }`}>
                {complianceScore === 100 ? 'APTO PO ELITE' : complianceScore >= 80 ? 'APTO COM RESSALVA' : 'PENDENTE'}
              </span>
            </div>
          </div>
        </div>

        {/* Itens do Checklist */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          
          <button
            type="button"
            onClick={() => toggleChecklist('cabecaSubconvexa')}
            className={`p-3.5 rounded-xl border text-left transition-all flex items-start space-x-3 ${
              checklist.cabecaSubconvexa ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950 font-semibold' : 'bg-white border-stone-200 text-stone-700'
            }`}
          >
            <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${
              checklist.cabecaSubconvexa ? 'bg-boer-green text-white' : 'border border-stone-300'
            }`}>
              {checklist.cabecaSubconvexa && <CheckCircle2 className="w-4 h-4" />}
            </div>
            <div>
              <span className="text-xs block font-bold">Perfil Subconvexo Romano</span>
              <span className="text-[11px] text-stone-500">Cabeça forte e chanfro arqueado</span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => toggleChecklist('orelhasLongas')}
            className={`p-3.5 rounded-xl border text-left transition-all flex items-start space-x-3 ${
              checklist.orelhasLongas ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950 font-semibold' : 'bg-white border-stone-200 text-stone-700'
            }`}
          >
            <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${
              checklist.orelhasLongas ? 'bg-boer-green text-white' : 'border border-stone-300'
            }`}>
              {checklist.orelhasLongas && <CheckCircle2 className="w-4 h-4" />}
            </div>
            <div>
              <span className="text-xs block font-bold">Orelhas Longas e Pendentes</span>
              <span className="text-[11px] text-stone-500">Sem dobras anteriores</span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => toggleChecklist('pelagemOficial')}
            className={`p-3.5 rounded-xl border text-left transition-all flex items-start space-x-3 ${
              checklist.pelagemOficial ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950 font-semibold' : 'bg-white border-stone-200 text-stone-700'
            }`}
          >
            <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${
              checklist.pelagemOficial ? 'bg-boer-green text-white' : 'border border-stone-300'
            }`}>
              {checklist.pelagemOficial && <CheckCircle2 className="w-4 h-4" />}
            </div>
            <div>
              <span className="text-xs block font-bold">Cabeça Cobre / Corpo Branco</span>
              <span className="text-[11px] text-stone-500">Padrão clássico oficial</span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => toggleChecklist('pelePigmentada')}
            className={`p-3.5 rounded-xl border text-left transition-all flex items-start space-x-3 ${
              checklist.pelePigmentada ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950 font-semibold' : 'bg-white border-stone-200 text-stone-700'
            }`}
          >
            <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${
              checklist.pelePigmentada ? 'bg-boer-green text-white' : 'border border-stone-300'
            }`}>
              {checklist.pelePigmentada && <CheckCircle2 className="w-4 h-4" />}
            </div>
            <div>
              <span className="text-xs block font-bold">Pele 100% Pigmentada</span>
              <span className="text-[11px] text-stone-500">Proteção solar sob a lã branca</span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => toggleChecklist('duploLombo')}
            className={`p-3.5 rounded-xl border text-left transition-all flex items-start space-x-3 ${
              checklist.duploLombo ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950 font-semibold' : 'bg-white border-stone-200 text-stone-700'
            }`}
          >
            <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${
              checklist.duploLombo ? 'bg-boer-green text-white' : 'border border-stone-300'
            }`}>
              {checklist.duploLombo && <CheckCircle2 className="w-4 h-4" />}
            </div>
            <div>
              <span className="text-xs block font-bold">Duplo Lombo Evidente</span>
              <span className="text-[11px] text-stone-500">Musculatura lombar saliente</span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => toggleChecklist('aprumosCorretos')}
            className={`p-3.5 rounded-xl border text-left transition-all flex items-start space-x-3 ${
              checklist.aprumosCorretos ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950 font-semibold' : 'bg-white border-stone-200 text-stone-700'
            }`}
          >
            <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${
              checklist.aprumosCorretos ? 'bg-boer-green text-white' : 'border border-stone-300'
            }`}>
              {checklist.aprumosCorretos && <CheckCircle2 className="w-4 h-4" />}
            </div>
            <div>
              <span className="text-xs block font-bold">Aprumos Firmes & Cascos Escuros</span>
              <span className="text-[11px] text-stone-500">Sustentação ideal de peso</span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => toggleChecklist('semPrognatismo')}
            className={`p-3.5 rounded-xl border text-left transition-all flex items-start space-x-3 ${
              checklist.semPrognatismo ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950 font-semibold' : 'bg-white border-stone-200 text-stone-700'
            }`}
          >
            <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${
              checklist.semPrognatismo ? 'bg-boer-green text-white' : 'border border-stone-300'
            }`}>
              {checklist.semPrognatismo && <CheckCircle2 className="w-4 h-4" />}
            </div>
            <div>
              <span className="text-xs block font-bold">Sem Prognatismo (Oclusão Perfeita)</span>
              <span className="text-[11px] text-stone-500">Mandíbula alinhada com chanfro</span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => toggleChecklist('semTetosBifidos')}
            className={`p-3.5 rounded-xl border text-left transition-all flex items-start space-x-3 ${
              checklist.semTetosBifidos ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950 font-semibold' : 'bg-white border-stone-200 text-stone-700'
            }`}
          >
            <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${
              checklist.semTetosBifidos ? 'bg-boer-green text-white' : 'border border-stone-300'
            }`}>
              {checklist.semTetosBifidos && <CheckCircle2 className="w-4 h-4" />}
            </div>
            <div>
              <span className="text-xs block font-bold">Úbere Normal (Sem Tetas Bífidas)</span>
              <span className="text-[11px] text-stone-500">Para fêmeas de reprodução</span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => toggleChecklist('testiculosSimetricos')}
            className={`p-3.5 rounded-xl border text-left transition-all flex items-start space-x-3 ${
              checklist.testiculosSimetricos ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950 font-semibold' : 'bg-white border-stone-200 text-stone-700'
            }`}
          >
            <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${
              checklist.testiculosSimetricos ? 'bg-boer-green text-white' : 'border border-stone-300'
            }`}>
              {checklist.testiculosSimetricos && <CheckCircle2 className="w-4 h-4" />}
            </div>
            <div>
              <span className="text-xs block font-bold">Testículos Simétricos (&gt; 32cm)</span>
              <span className="text-[11px] text-stone-500">Para machos reprodutores</span>
            </div>
          </button>

        </div>

      </div>

    </div>
  );
}
