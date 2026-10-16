import React, { useState } from 'react';
import { 
  X, 
  Award, 
  Dna, 
  Scale, 
  Calendar, 
  ShieldCheck, 
  HeartHandshake, 
  AlertCircle, 
  CheckCircle2, 
  Printer, 
  Sparkles,
  GitFork,
  Activity,
  Tag
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid,
  Legend
} from 'recharts';

export default function AnimalDetailModal({ animal, onClose, onSelectPedigreeAnimal }) {
  if (!animal) return null;

  const [activeTab, setActiveTab] = useState('genealogia'); // 'genealogia', 'pesagens', 'sanitario'

  // Formatar idade
  const calculateAge = (birthDate) => {
    const diff = new Date() - new Date(birthDate);
    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.4375));
    if (months < 1) return 'Menos de 1 mês';
    if (months < 12) return `${months} meses`;
    const years = Math.floor(months / 12);
    const remMonths = months % 12;
    return `${years}a ${remMonths > 0 ? `${remMonths}m` : ''}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-boer-bark/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-fadeIn">
      <div className="relative bg-white rounded-3xl max-w-4xl w-full shadow-2xl border border-boer-border overflow-hidden my-6">
        
        {/* Header do Modal com Imagem de Fundo / Estilo Zootécnico */}
        <div className="relative bg-gradient-to-r from-boer-bark via-stone-900 to-boer-copper text-white p-6 sm:p-8">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all focus:outline-none"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="relative">
              <img 
                src={animal.photo} 
                alt={animal.name} 
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-boer-gold shadow-md"
              />
              <span className={`absolute -bottom-2 -right-2 px-2.5 py-0.5 rounded-full text-xs font-black shadow-md ${
                animal.bloodGrade === 'PO' ? 'bg-amber-400 text-stone-950 ring-2 ring-white' : 'bg-stone-200 text-stone-900'
              }`}>
                {animal.bloodGrade}
              </span>
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white/15 text-boer-gold border border-white/20">
                  {animal.category} • {animal.gender}
                </span>
                <span className="text-xs text-stone-300">
                  Idade: {calculateAge(animal.birthDate)}
                </span>
                <span className="text-xs text-stone-300">• Tatuagem: {animal.tattoo}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                {animal.name}
              </h2>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-stone-300 mt-2 font-mono">
                <span>RGN: <strong className="text-white">{animal.rgn}</strong></span>
                <span>Brinco Oficial: <strong className="text-white">#{animal.tagNumber}</strong></span>
                <span>Lote: <strong className="text-boer-gold">{animal.lot}</strong></span>
              </div>
            </div>
          </div>

          {/* Badge Padrão de Pelagem Oficial Boer */}
          <div className="mt-4 pt-3 border-t border-white/15 flex flex-wrap items-center justify-between text-xs">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-boer-copper border border-white inline-block"></span>
              <span className="text-stone-300">Padrão de Pelagem:</span>
              <span className="font-semibold text-white">{animal.coatPattern}</span>
            </div>
            {animal.awards && animal.awards.length > 0 && (
              <div className="flex items-center space-x-1.5 text-amber-300 font-semibold mt-1 sm:mt-0">
                <Award className="w-4 h-4 text-boer-gold" />
                <span>{animal.awards[0]}</span>
              </div>
            )}
          </div>
        </div>

        {/* Resumo Rápido Zootécnico */}
        <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-boer-border bg-boer-cream/60 divide-x divide-boer-border text-center">
          <div className="p-3 sm:p-4">
            <span className="text-[11px] uppercase tracking-wider text-boer-muted font-bold block">Peso Atual</span>
            <span className="text-xl sm:text-2xl font-black text-boer-bark">{animal.currentWeight} kg</span>
          </div>
          <div className="p-3 sm:p-4">
            <span className="text-[11px] uppercase tracking-wider text-boer-muted font-bold block">GPD Médio</span>
            <span className="text-xl sm:text-2xl font-black text-boer-green">+{animal.dailyWeightGain} g/d</span>
          </div>
          <div className="p-3 sm:p-4">
            <span className="text-[11px] uppercase tracking-wider text-boer-muted font-bold block">Escore Corporal (ECC)</span>
            <div className="flex items-center justify-center space-x-1 mt-0.5">
              <span className="text-xl sm:text-2xl font-black text-boer-copper">{animal.bodyConditionScore}</span>
              <span className="text-xs text-stone-500 font-semibold">/ 5.0</span>
            </div>
          </div>
          <div className="p-3 sm:p-4">
            <span className="text-[11px] uppercase tracking-wider text-boer-muted font-bold block">
              {animal.gender === 'Macho' ? 'Perímetro Escrotal' : 'Status Reprodutivo'}
            </span>
            <span className="text-sm sm:text-base font-bold text-stone-800 truncate block mt-1">
              {animal.gender === 'Macho' 
                ? (animal.scrotalCircumference ? `${animal.scrotalCircumference} cm` : 'N/A')
                : (animal.reproductiveStatus || 'Normal')}
            </span>
          </div>
        </div>

        {/* Abas Internas do Modal */}
        <div className="px-6 pt-4 border-b border-boer-border flex space-x-6 text-sm font-bold">
          <button
            onClick={() => setActiveTab('genealogia')}
            className={`pb-3 flex items-center space-x-2 border-b-2 transition-all ${
              activeTab === 'genealogia'
                ? 'border-boer-copper text-boer-copper'
                : 'border-transparent text-stone-500 hover:text-boer-bark'
            }`}
          >
            <GitFork className="w-4 h-4" />
            <span>Árvore Genealógica (Pedigree 3G)</span>
          </button>

          <button
            onClick={() => setActiveTab('pesagens')}
            className={`pb-3 flex items-center space-x-2 border-b-2 transition-all ${
              activeTab === 'pesagens'
                ? 'border-boer-copper text-boer-copper'
                : 'border-transparent text-stone-500 hover:text-boer-bark'
            }`}
          >
            <Scale className="w-4 h-4" />
            <span>Curva Individual de Pesagens</span>
          </button>

          <button
            onClick={() => setActiveTab('sanitario')}
            className={`pb-3 flex items-center space-x-2 border-b-2 transition-all ${
              activeTab === 'sanitario'
                ? 'border-boer-copper text-boer-copper'
                : 'border-transparent text-stone-500 hover:text-boer-bark'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Sanidade & FAMACHA</span>
          </button>
        </div>

        {/* Conteúdo das Abas */}
        <div className="p-6 max-h-[55vh] overflow-y-auto">
          
          {/* ABA 1: Árvore Genealógica (Pedigree 3 Gerações) */}
          {activeTab === 'genealogia' && (
            <div className="space-y-6">
              <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-boer-gold" />
                  <span>Certificação Genealógica Oficial para Seleção e Acasalamentos Direcionados</span>
                </div>
                <span className="font-bold text-boer-copper">Linhagem Chei de Dio</span>
              </div>

              {/* Diagrama de Pedigree */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                
                {/* Animal Selecionado */}
                <div className="p-4 rounded-2xl bg-boer-copperSoft border-2 border-boer-copper text-center flex flex-col justify-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-boer-copper">Indivíduo</span>
                  <h4 className="text-base font-extrabold text-boer-bark mt-1">{animal.name}</h4>
                  <p className="text-xs text-boer-muted font-mono">{animal.rgn}</p>
                  <span className="mt-2 inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-boer-copper text-white mx-auto">
                    {animal.bloodGrade} • {animal.category}
                  </span>
                </div>

                {/* Pais (2ª Geração) */}
                <div className="space-y-3 flex flex-col justify-between">
                  {/* Pai */}
                  <div className="p-3.5 rounded-xl bg-white border border-boer-border shadow-sm hover:border-boer-copper transition-all">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700">Pai (Sire)</span>
                    <h5 className="text-sm font-bold text-boer-bark">{animal.pedigree?.father?.name || 'Não Registrado'}</h5>
                    <p className="text-xs text-stone-500 font-mono">{animal.pedigree?.father?.rgn}</p>
                    <span className="text-[10px] text-amber-800 font-semibold block mt-1">
                      {animal.pedigree?.father?.bloodline}
                    </span>
                  </div>

                  {/* Mãe */}
                  <div className="p-3.5 rounded-xl bg-white border border-boer-border shadow-sm hover:border-boer-copper transition-all">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700">Mãe (Dam)</span>
                    <h5 className="text-sm font-bold text-boer-bark">{animal.pedigree?.mother?.name || 'Não Registrada'}</h5>
                    <p className="text-xs text-stone-500 font-mono">{animal.pedigree?.mother?.rgn}</p>
                    <span className="text-[10px] text-amber-800 font-semibold block mt-1">
                      {animal.pedigree?.mother?.bloodline}
                    </span>
                  </div>
                </div>

                {/* Avós (3ª Geração) */}
                <div className="space-y-2 flex flex-col justify-between text-xs">
                  {/* Avô Paterno */}
                  <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                    <span className="text-[9px] font-bold uppercase text-stone-400">Avô Paterno</span>
                    <p className="font-bold text-stone-800 truncate">{animal.pedigree?.paternalGrandfather || 'Desconhecido'}</p>
                  </div>
                  {/* Avó Paterna */}
                  <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                    <span className="text-[9px] font-bold uppercase text-stone-400">Avó Paterna</span>
                    <p className="font-bold text-stone-800 truncate">{animal.pedigree?.paternalGrandmother || 'Desconhecida'}</p>
                  </div>
                  {/* Avô Materno */}
                  <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                    <span className="text-[9px] font-bold uppercase text-stone-400">Avô Materno</span>
                    <p className="font-bold text-stone-800 truncate">{animal.pedigree?.maternalGrandfather || 'Desconhecido'}</p>
                  </div>
                  {/* Avó Materna */}
                  <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                    <span className="text-[9px] font-bold uppercase text-stone-400">Avó Materna</span>
                    <p className="font-bold text-stone-800 truncate">{animal.pedigree?.maternalGrandmother || 'Desconhecida'}</p>
                  </div>
                </div>

              </div>

              {/* Avaliação Zootécnica & Conformação de Carcaça */}
              <div className="p-4 rounded-2xl bg-boer-cream border border-boer-border">
                <h4 className="text-xs font-bold uppercase tracking-wider text-boer-bark mb-2 flex items-center">
                  <Award className="w-4 h-4 mr-1.5 text-boer-copper" />
                  Conformação Muscular & Avaliação de Carcaça
                </h4>
                <p className="text-xs text-stone-700 leading-relaxed font-medium">
                  {animal.carcassScore}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {animal.awards && animal.awards.map((award, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white border border-amber-200 text-amber-900 flex items-center">
                      <Sparkles className="w-3 h-3 mr-1 text-boer-gold" />
                      {award}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ABA 2: Histórico de Pesagens */}
          {activeTab === 'pesagens' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-boer-bark">
                    Evolução Ponderal (Peso em kg vs Idade em Meses)
                  </h4>
                  <p className="text-xs text-stone-500">
                    Comparado com a curva referencial da Associação de Criadores de Caprinos Boer
                  </p>
                </div>
                <div className="text-xs font-bold text-boer-green bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  GPD: +{animal.dailyWeightGain} g/dia
                </div>
              </div>

              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={animal.weightHistory} margin={{ top: 10, right: 15, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EFEBE6" />
                    <XAxis 
                      dataKey="ageMonths" 
                      tick={{ fontSize: 11, fill: '#736B66' }}
                      label={{ value: 'Meses de Idade', position: 'insideBottomRight', offset: -5, fontSize: 10 }}
                    />
                    <YAxis tick={{ fontSize: 11, fill: '#736B66' }} unit=" kg" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1F1917', borderRadius: '10px', color: '#fff', border: 'none' }}
                      formatter={(val) => [`${val} kg`, '']}
                    />
                    <Legend wrapperStyle={{ fontSize: '12px' }} />
                    <Line 
                      type="monotone" 
                      dataKey="weight" 
                      name={`${animal.name}`} 
                      stroke="#8B321D" 
                      strokeWidth={3} 
                      dot={{ r: 5, fill: '#8B321D' }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="benchmark" 
                      name="Média de Referência Boer" 
                      stroke="#9CA3AF" 
                      strokeDasharray="4 4" 
                      strokeWidth={2} 
                      dot={{ r: 3 }} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Tabela de Pesagens do Animal */}
              <div className="border border-boer-border rounded-xl overflow-hidden mt-4">
                <table className="w-full text-xs text-left">
                  <thead className="bg-boer-cream text-stone-700 font-bold border-b border-boer-border">
                    <tr>
                      <th className="py-2.5 px-4">Idade</th>
                      <th className="py-2.5 px-4">Peso Real</th>
                      <th className="py-2.5 px-4">Padrão da Raça</th>
                      <th className="py-2.5 px-4">Diferencial</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-boer-border">
                    {animal.weightHistory && animal.weightHistory.map((w, idx) => {
                      const diff = (w.weight - w.benchmark).toFixed(1);
                      const isPositive = diff >= 0;
                      return (
                        <tr key={idx} className="hover:bg-stone-50">
                          <td className="py-2.5 px-4 font-medium">{w.ageMonths === 0 ? 'Ao Nascer' : `${w.ageMonths} meses`}</td>
                          <td className="py-2.5 px-4 font-bold text-boer-bark">{w.weight} kg</td>
                          <td className="py-2.5 px-4 text-stone-500">{w.benchmark} kg</td>
                          <td className={`py-2.5 px-4 font-bold ${isPositive ? 'text-boer-green' : 'text-red-600'}`}>
                            {isPositive ? `+${diff} kg` : `${diff} kg`}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ABA 3: Sanidade & FAMACHA */}
          {activeTab === 'sanitario' && (
            <div className="space-y-6">
              
              {/* Cartão FAMACHA Atual do Animal */}
              <div className="p-4 rounded-2xl bg-boer-cream border border-boer-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-boer-muted">
                    Diagnóstico FAMACHA© Atual
                  </span>
                  <div className="flex items-center space-x-3 mt-1">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-white text-base ${
                      animal.famachaScore === 1 ? 'bg-red-700 ring-2 ring-red-400' :
                      animal.famachaScore === 2 ? 'bg-red-500' :
                      animal.famachaScore === 3 ? 'bg-pink-300 text-stone-900' :
                      animal.famachaScore === 4 ? 'bg-pink-100 text-stone-900 border border-red-300' :
                      'bg-white text-red-600 border-2 border-red-600'
                    }`}>
                      {animal.famachaScore}
                    </span>
                    <div>
                      <h5 className="font-extrabold text-sm text-boer-bark">
                        {animal.famachaScore <= 2 ? 'Mucosa Saudável (Não Tratar)' : 'Alerta de Anemia Parasitária'}
                      </h5>
                      <p className="text-xs text-stone-500">
                        {animal.famachaScore === 1 && 'Mucosa vermelho vivo. Animal com excelente resistência a Haemonchus.'}
                        {animal.famachaScore === 2 && 'Mucosa vermelho-rosa. Condição corporal e hematócrito normais.'}
                        {animal.famachaScore >= 3 && 'Mucosa descorada. Monitorar peso e aplicar protocolo vermífugo direcionado.'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs text-stone-500 block">Última avaliação:</span>
                  <span className="text-xs font-bold text-boer-bark">
                    {animal.famachaHistory?.[0]?.date || 'Recentemente'}
                  </span>
                </div>
              </div>

              {/* Registro de Vacinações do Animal */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-boer-bark mb-3 flex items-center">
                  <ShieldCheck className="w-4 h-4 mr-1.5 text-boer-green" />
                  Histórico de Imunizações & Vacinas
                </h4>
                <div className="space-y-2">
                  {animal.vaccines && animal.vaccines.map((vac, i) => (
                    <div key={i} className="p-3 rounded-xl border border-boer-border flex items-center justify-between text-xs">
                      <div>
                        <span className="font-bold text-boer-bark block">{vac.name}</span>
                        <span className="text-stone-500">Aplicado em: {vac.date}</span>
                      </div>
                      <div className="text-right">
                        <span className={`px-2.5 py-0.5 rounded-full font-bold text-[10px] ${
                          vac.status === 'Em dia' 
                            ? 'bg-emerald-100 text-emerald-800' 
                            : 'bg-red-100 text-red-800 animate-pulse'
                        }`}>
                          {vac.status}
                        </span>
                        <span className="text-[11px] text-stone-500 block mt-0.5">
                          Próximo: {vac.nextDate}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Rodapé do Modal */}
        <div className="px-6 py-4 bg-stone-50 border-t border-boer-border flex items-center justify-between">
          <div className="text-xs text-stone-500">
            Registro zootécnico de cabra Boer • Casa da Cabra
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => window.print()}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-white border border-stone-300 hover:bg-stone-100 text-stone-700 flex items-center"
            >
              <Printer className="w-3.5 h-3.5 mr-1.5" />
              Imprimir Certificado
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-boer-copper hover:bg-boer-copperHover text-white shadow-sm"
            >
              Fechar Ficha
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
