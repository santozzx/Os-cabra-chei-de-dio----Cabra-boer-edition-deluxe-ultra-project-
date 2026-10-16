import React, { useState } from 'react';
import { 
  HeartHandshake, 
  Calendar, 
  Sparkles, 
  Dna, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Calculator, 
  ShieldCheck,
  Award
} from 'lucide-react';
import { SEMEN_BANK } from '../data/mockBoerData';

export default function ReproductionModule({ animals, onSelectAnimal }) {
  // Estado da Calculadora de Parto (150 dias de gestação caprina)
  const [coverageDate, setCoverageDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() - 30);
    return d.toISOString().split('T')[0];
  });
  const [selectedMatriz, setSelectedMatriz] = useState(animals.find(a => a.gender === 'Fêmea')?.id || '');
  const [selectedBode, setSelectedBode] = useState(animals.find(a => a.gender === 'Macho')?.id || '');

  // Cálculos zootécnicos da gestação caprina
  const calculatePregnancySchedule = (dateStr) => {
    if (!dateStr) return null;
    const baseDate = new Date(dateStr + 'T00:00:00');
    
    // Diagnóstico de Gestação (DG) por Ultrassom aos 35 dias
    const dgDate = new Date(baseDate);
    dgDate.setDate(baseDate.getDate() + 35);

    // Vacinação de Reforço Clostridiose (imunidade colostral) aos 120 dias
    const vaccineDate = new Date(baseDate);
    vaccineDate.setDate(baseDate.getDate() + 120);

    // Entrada no Piquete Maternidade aos 135 dias
    const maternityDate = new Date(baseDate);
    maternityDate.setDate(baseDate.getDate() + 135);

    // Previsão de Parto (150 dias) - Faixa de 147 a 153 dias
    const birthDate = new Date(baseDate);
    birthDate.setDate(baseDate.getDate() + 150);

    const minBirthDate = new Date(baseDate);
    minBirthDate.setDate(baseDate.getDate() + 147);

    const maxBirthDate = new Date(baseDate);
    maxBirthDate.setDate(baseDate.getDate() + 153);

    // Dias decorridos
    const today = new Date();
    const daysElapsed = Math.floor((today - baseDate) / (1000 * 60 * 60 * 24));
    const daysRemaining = 150 - daysElapsed;

    return {
      dgDate: dgDate.toLocaleDateString('pt-BR'),
      vaccineDate: vaccineDate.toLocaleDateString('pt-BR'),
      maternityDate: maternityDate.toLocaleDateString('pt-BR'),
      birthDate: birthDate.toLocaleDateString('pt-BR'),
      range: `${minBirthDate.toLocaleDateString('pt-BR')} a ${maxBirthDate.toLocaleDateString('pt-BR')}`,
      daysElapsed: Math.max(0, daysElapsed),
      daysRemaining: Math.max(0, daysRemaining),
      progress: Math.min(100, Math.max(0, Math.round((daysElapsed / 150) * 100)))
    };
  };

  const schedule = calculatePregnancySchedule(coverageDate);

  // Registro de coberturas e serviços recentes
  const recentCoverages = [
    {
      id: 'COV-101',
      matriz: 'Pérola da Serra PC',
      sire: 'Bastião do Cobre PO',
      date: '2024-06-17',
      expectedDate: '2026-11-14',
      status: 'Confirmada (DG Positivo)',
      type: 'Monta Natural Controlada'
    },
    {
      id: 'COV-102',
      matriz: 'Dona Sinhá Boer PO',
      sire: 'Rei da Caatinga Boer',
      date: '2024-07-25',
      expectedDate: '2026-12-22',
      status: 'Confirmada (DG Positivo)',
      type: 'Inseminação Artificial (IA)'
    },
    {
      id: 'COV-103',
      matriz: 'Morena Linda Boer',
      sire: 'Centauro de Goiás PO',
      date: '2024-09-02',
      expectedDate: '2027-01-30',
      status: 'Aguardando Ultrassom (DG)',
      type: 'Transferência de Embrião (TE)'
    }
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Cabeçalho */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-boer-border">
        <div>
          <div className="flex items-center space-x-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-boer-bark tracking-tight">
              Controle Reprodutivo & Genética
            </h2>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
              Gestação 150 Dias
            </span>
          </div>
          <p className="text-xs sm:text-sm text-boer-muted mt-1">
            Planejamento de coberturas, inseminações, banco criogênico e previsão de parições
          </p>
        </div>
      </div>

      {/* CALCULADORA DE PREVISÃO DE PARTO (Zootecnia Boer - 150 Dias) */}
      <div className="boer-card p-6 sm:p-8 bg-gradient-to-br from-white via-boer-cream/40 to-amber-50/50 border border-boer-border relative overflow-hidden">
        <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-stone-200">
          <div className="p-3 rounded-2xl bg-boer-copper text-white shadow-md shadow-boer-copper/30">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-extrabold text-boer-bark">
              Calculadora Zootécnica de Previsão de Parto
            </h3>
            <p className="text-xs text-stone-500">
              Base oficial: 150 dias médios de gestação caprina Boer com protocolo preventivo
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Entradas */}
          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-boer-bark block mb-1.5">
                Data da Cobertura / Inseminação *
              </label>
              <input
                type="date"
                value={coverageDate}
                onChange={(e) => setCoverageDate(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-boer-border bg-white text-sm font-semibold text-boer-bark focus:ring-2 focus:ring-boer-copper outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-boer-bark block mb-1.5">
                Matriz Coberta (Cabra)
              </label>
              <select
                value={selectedMatriz}
                onChange={(e) => setSelectedMatriz(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-boer-border bg-white text-sm font-medium text-boer-bark outline-none"
              >
                {animals.filter(a => a.gender === 'Fêmea').map(m => (
                  <option key={m.id} value={m.id}>{m.name} ({m.bloodGrade} - {m.rgn})</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-boer-bark block mb-1.5">
                Reprodutor Utilizado (Bode)
              </label>
              <select
                value={selectedBode}
                onChange={(e) => setSelectedBode(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-boer-border bg-white text-sm font-medium text-boer-bark outline-none"
              >
                {animals.filter(a => a.gender === 'Macho').map(b => (
                  <option key={b.id} value={b.id}>{b.name} ({b.bloodGrade})</option>
                ))}
              </select>
            </div>

            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 leading-relaxed">
              💡 <strong>Dica de Manejo:</strong> No terço final da gestação (após 100 dias), suplemente com volumoso nobre e concentrado (16% PB) para suporte ao ganho de peso dos fetos e carcaça duplo lombo.
            </div>
          </div>

          {/* Resultado & Timeline de Marcos Críticos */}
          {schedule && (
            <div className="lg:col-span-2 space-y-5">
              
              {/* Card Destaque de Parto Estimado */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-boer-copper to-boer-copperDark text-white shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
                    Data Estimada de Parto (150 Dias)
                  </span>
                  <div className="text-3xl sm:text-4xl font-black mt-1">
                    {schedule.birthDate}
                  </div>
                  <span className="text-xs text-stone-200 mt-1 block">
                    Janela Fisiológica Provável: <strong>{schedule.range}</strong>
                  </span>
                </div>

                <div className="text-right sm:border-l sm:border-white/20 sm:pl-6">
                  <span className="text-xs text-stone-200 block">Tempo de Gestação:</span>
                  <div className="text-2xl font-black text-amber-300">
                    {schedule.daysElapsed} <span className="text-sm font-normal text-white">/ 150 dias</span>
                  </div>
                  <span className="text-[11px] text-stone-200 block mt-0.5">
                    Faltam aprox. {schedule.daysRemaining} dias
                  </span>
                </div>
              </div>

              {/* Barra de Progresso Fisiológico */}
              <div>
                <div className="flex justify-between text-xs font-bold text-stone-600 mb-1.5">
                  <span>Início da Gestação</span>
                  <span className="text-boer-copper font-black">{schedule.progress}% Concluído</span>
                  <span>Maternidade / Parto</span>
                </div>
                <div className="w-full h-3 bg-stone-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-boer-green to-boer-copper transition-all duration-500 rounded-full"
                    style={{ width: `${schedule.progress}%` }}
                  />
                </div>
              </div>

              {/* Protocolo em Etapas */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white border border-stone-200 shadow-sm">
                  <span className="text-[10px] font-bold uppercase text-stone-400 block">35º Dia (Ultrassom)</span>
                  <span className="text-sm font-bold text-boer-bark block mt-0.5">{schedule.dgDate}</span>
                  <span className="text-[11px] text-stone-500 block mt-1">Diagnóstico precoce de prenhez e contagem de embriões</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-stone-200 shadow-sm">
                  <span className="text-[10px] font-bold uppercase text-stone-400 block">120º Dia (Vacina Clostridiose)</span>
                  <span className="text-sm font-bold text-boer-bark block mt-0.5">{schedule.vaccineDate}</span>
                  <span className="text-[11px] text-stone-500 block mt-1">Reforço vacinal materno para imunizar o colostro</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-stone-200 shadow-sm">
                  <span className="text-[10px] font-bold uppercase text-stone-400 block">135º Dia (Piquete Maternidade)</span>
                  <span className="text-sm font-bold text-boer-bark block mt-0.5">{schedule.maternityDate}</span>
                  <span className="text-[11px] text-stone-500 block mt-1">Transferência para baia de parição com cama limpa</span>
                </div>
              </div>

            </div>
          )}

        </div>
      </div>

      {/* QUADRO DE COBERTURAS RECENTES */}
      <div className="boer-card p-5 sm:p-6">
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-100">
          <div className="flex items-center space-x-2">
            <HeartHandshake className="w-5 h-5 text-boer-copper" />
            <h3 className="text-lg font-bold text-boer-bark">
              Registro de Coberturas & Serviços do Capril
            </h3>
          </div>
          <span className="text-xs font-semibold text-boer-muted">
            3 Coberturas Ativas
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-boer-cream text-stone-700 font-bold border-b border-boer-border uppercase text-[11px]">
              <tr>
                <th className="py-3 px-4">Matriz (Fêmea)</th>
                <th className="py-3 px-4">Reprodutor (Bode)</th>
                <th className="py-3 px-4">Tipo de Serviço</th>
                <th className="py-3 px-4">Data Cobertura</th>
                <th className="py-3 px-4">Previsão Parto</th>
                <th className="py-3 px-4">Status Gestacional</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-boer-border">
              {recentCoverages.map(cov => (
                <tr key={cov.id} className="hover:bg-stone-50">
                  <td className="py-3 px-4 font-bold text-boer-bark">{cov.matriz}</td>
                  <td className="py-3 px-4 font-medium text-stone-700">{cov.sire}</td>
                  <td className="py-3 px-4 text-stone-600">{cov.type}</td>
                  <td className="py-3 px-4 text-stone-500">{new Date(cov.date).toLocaleDateString('pt-BR')}</td>
                  <td className="py-3 px-4 font-bold text-boer-copper">{new Date(cov.expectedDate).toLocaleDateString('pt-BR')}</td>
                  <td className="py-3 px-4">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                      {cov.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* BANCO DE SÊMEN E EMBRIÕES (Linhagens Sul-Africanas "Chei de Dio") */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-boer-gold" />
              <h3 className="text-xl font-black text-boer-bark">
                Banco Criogênico de Sêmen & Embriões
              </h3>
            </div>
            <p className="text-xs text-boer-muted">
              Catálogo de doses congeladas de reprodutores consagrados com linhagem Sul-Africana pura (Kaptein, Rugged, Tarzan)
            </p>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-900 border border-amber-300 self-start sm:self-auto">
            Armazenamento em N2 Líquido (-196°C)
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SEMEN_BANK.map((sire) => (
            <div key={sire.id} className="boer-card p-5 flex flex-col justify-between hover:border-boer-gold transition-all">
              <div>
                <div className="relative mb-3 rounded-xl overflow-hidden">
                  <img src={sire.photo} alt={sire.sireName} className="w-full h-36 object-cover" />
                  <span className="absolute top-2 right-2 px-2 py-0.5 rounded-md text-[10px] font-black bg-boer-gold text-stone-950 shadow">
                    DNA VERIFICADO
                  </span>
                </div>

                <h4 className="text-base font-extrabold text-boer-bark">{sire.sireName}</h4>
                <p className="text-xs text-stone-500 font-mono">RGN: {sire.rgn}</p>
                <p className="text-xs text-amber-800 font-semibold mt-1">{sire.bloodline}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-stone-500">Palhetas no Botijão:</span>
                  <span className="font-bold text-boer-bark">{sire.strawsAvailable} doses</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-stone-500">Motilidade Pós-Descongelamento:</span>
                  <span className="font-bold text-boer-green">{sire.motilityRate}%</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-stone-500">Valor da Dose:</span>
                  <span className="font-extrabold text-boer-copper text-sm">
                    R$ {sire.pricePerStraw.toFixed(2)}
                  </span>
                </div>

                <button 
                  onClick={() => alert(`Reserva de ${sire.sireName} solicitada com sucesso! O botijão de N2 será preparado.`)}
                  className="w-full mt-2 py-2 rounded-xl text-xs font-bold bg-boer-bark hover:bg-black text-white transition-all shadow"
                >
                  Reservar Doses de Sêmen
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
