import React from 'react';
import { 
  Users, 
  TrendingUp, 
  HeartHandshake, 
  AlertTriangle, 
  Award, 
  Calendar, 
  ArrowUpRight, 
  ShieldCheck, 
  Sparkles,
  Scale,
  Activity,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend, 
  CartesianGrid,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { GROWTH_BENCHMARK_DATA, HERD_DISTRIBUTION_DATA } from '../data/mockBoerData';

export default function Dashboard({ 
  animals, 
  onSelectAnimal, 
  onNavigateToTab, 
  onOpenNewAnimalModal 
}) {
  // Calculando estatísticas dinâmicas a partir do rebanho
  const totalHead = animals.length;
  const matrices = animals.filter(a => a.category === 'Matriz').length;
  const sires = animals.filter(a => a.category === 'Reprodutor').length;
  const growing = animals.filter(a => a.category === 'Recria').length;
  const kids = animals.filter(a => a.category === 'Cabrito').length;
  
  const avgGPD = Math.round(
    animals.reduce((acc, curr) => acc + (curr.dailyWeightGain || 0), 0) / (totalHead || 1)
  );

  const pregnantAnimals = animals.filter(a => a.reproductiveStatus && a.reproductiveStatus.includes('Gestante'));
  const pregnancyRate = '91.8%';

  const sanitaryAlerts = animals.filter(a => a.famachaScore >= 3 || a.vaccines.some(v => v.status === 'Atrasada'));

  const upcomingBirths = animals
    .filter(a => a.expectedBirthDate)
    .sort((a, b) => new Date(a.expectedBirthDate) - new Date(b.expectedBirthDate));

  const topSires = animals
    .filter(a => a.gender === 'Macho')
    .sort((a, b) => (b.dailyWeightGain || 0) - (a.dailyWeightGain || 0))
    .slice(0, 3);

  return (
    <div className="space-y-6 sm:space-y-8 animate-fadeIn">
      
      {/* Banner de Boas-Vindas & Status AgroTech */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-boer-bark via-stone-900 to-boer-copper text-white p-6 sm:p-8 shadow-boer-lg border border-stone-800">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-boer-gold/20 text-boer-gold border border-boer-gold/40 mb-3">
            <Sparkles className="w-3.5 h-3.5 mr-1.5" />
            SISTEMA INTEGRADO AGROTECH BOER DELUXE
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-2">
            Capril Chei de Dio <span className="text-boer-gold font-serif italic">— Edição Boer 2026</span>
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6">
            Gestão de alta precisão para caprinos Boer de corte. Foco em ganho de peso acelerado, conformação de carcaça duplo lombo, rusticidade e seleção de linhagens sul-africanas PO e PC.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigateToTab('plantel')}
              className="px-4 py-2.5 rounded-xl bg-boer-copper hover:bg-boer-copperLight text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-boer-copper/30 flex items-center"
            >
              Explorar Plantel Completo
              <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </button>
            <button
              onClick={() => onNavigateToTab('reproducao')}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm backdrop-blur-sm transition-all border border-white/15 flex items-center"
            >
              <HeartHandshake className="w-4 h-4 mr-1.5 text-boer-gold" />
              Calculadora de Partos (150d)
            </button>
          </div>
        </div>

        {/* Decorative Watermark */}
        <div className="absolute right-4 -bottom-10 opacity-10 pointer-events-none hidden sm:block">
          <Scale className="w-72 h-72 text-white" />
        </div>
      </div>

      {/* 4 KPIs Principais */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        
        {/* KPI 1: Cabeças */}
        <div className="boer-card p-5 relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-boer-muted">Rebanho Total</span>
            <div className="p-2 rounded-xl bg-boer-copperSoft text-boer-copper">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-extrabold text-boer-bark">{totalHead}</span>
            <span className="text-xs font-semibold text-boer-copper">cabeças ativas</span>
          </div>
          <div className="mt-3 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-boer-muted">
            <span>{matrices} Matrizes • {sires} Reprod.</span>
            <span>{growing + kids} Jovens</span>
          </div>
        </div>

        {/* KPI 2: Ganho de Peso Diário */}
        <div className="boer-card p-5 relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-boer-muted">GPD Médio Plantel</span>
            <div className="p-2 rounded-xl bg-boer-greenSoft text-boer-green">
              <TrendingUp className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-extrabold text-boer-green">+{avgGPD}</span>
            <span className="text-xs font-semibold text-boer-green">g / animal / dia</span>
          </div>
          <div className="mt-3 pt-3 border-t border-stone-100 flex items-center text-xs text-boer-green font-medium">
            <ArrowUpRight className="w-3.5 h-3.5 mr-1" />
            <span>+18.4% acima da média da Caatinga</span>
          </div>
        </div>

        {/* KPI 3: Taxa de Prenhez & Partos */}
        <div className="boer-card p-5 relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-boer-muted">Taxa de Prenhez</span>
            <div className="p-2 rounded-xl bg-amber-50 text-amber-700">
              <HeartHandshake className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-extrabold text-amber-700">{pregnancyRate}</span>
            <span className="text-xs font-semibold text-stone-500">({pregnantAnimals.length} gestantes)</span>
          </div>
          <div className="mt-3 pt-3 border-t border-stone-100 flex items-center text-xs text-stone-600">
            <Calendar className="w-3.5 h-3.5 mr-1 text-boer-copper" />
            <span>{upcomingBirths.length} partos previstos próximos 60d</span>
          </div>
        </div>

        {/* KPI 4: Alertas Sanitários */}
        <div className="boer-card p-5 relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-boer-muted">Vigilância Sanitária</span>
            <div className={`p-2 rounded-xl ${sanitaryAlerts.length > 0 ? 'bg-red-50 text-red-600' : 'bg-emerald-50 text-emerald-600'}`}>
              <AlertTriangle className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-extrabold text-boer-bark">{sanitaryAlerts.length}</span>
            <span className="text-xs font-semibold text-stone-500">ocorrências ativas</span>
          </div>
          <div className="mt-3 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
            <span className="text-amber-700 font-medium">1 FAMACHA grau 3</span>
            <span className="text-stone-400">•</span>
            <span className="text-red-600 font-medium">1 Vacina atrasada</span>
          </div>
        </div>

      </div>

      {/* Gráficos Principais: Curva de Ganho de Peso vs Padrão da Raça Boer */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Curva de Ganho de Peso (2 Colunas) */}
        <div className="lg:col-span-2 boer-card p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-4 border-b border-stone-100">
            <div>
              <div className="flex items-center space-x-2">
                <Scale className="w-5 h-5 text-boer-copper" />
                <h3 className="text-lg font-bold text-boer-bark">
                  Curva de Crescimento e Peso Vivo (kg)
                </h3>
              </div>
              <p className="text-xs text-boer-muted mt-0.5">
                Comparativo: Rebanho Atual vs Padrão Oficial Boer vs Linhagens de Elite
              </p>
            </div>
            <div className="mt-2 sm:mt-0 flex items-center space-x-3 text-xs">
              <span className="inline-flex items-center">
                <span className="w-3 h-3 rounded-full bg-boer-copper mr-1.5"></span>
                Rebanho Atual
              </span>
              <span className="inline-flex items-center">
                <span className="w-3 h-3 rounded-full bg-stone-400 mr-1.5"></span>
                Padrão ABCC
              </span>
              <span className="inline-flex items-center">
                <span className="w-3 h-3 rounded-full bg-boer-gold mr-1.5"></span>
                Top Elite RSA
              </span>
            </div>
          </div>

          <div className="h-72 sm:h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={GROWTH_BENCHMARK_DATA} margin={{ top: 10, right: 10, left: -15, bottom: 0 }}>
                <defs>
                  <linearGradient id="rebanhoGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8B321D" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#8B321D" stopOpacity={0.0}/>
                  </linearGradient>
                  <linearGradient id="eliteGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#D49A37" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#D49A37" stopOpacity={0.0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EFEBE6" />
                <XAxis dataKey="stage" tick={{ fontSize: 11, fill: '#736B66' }} />
                <YAxis tick={{ fontSize: 11, fill: '#736B66' }} unit=" kg" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F1917', 
                    borderRadius: '12px', 
                    color: '#fff',
                    border: 'none',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                  }}
                  itemStyle={{ fontSize: '12px' }}
                  formatter={(value) => [`${value} kg`, '']}
                />
                <Area 
                  type="monotone" 
                  dataKey="eliteBoer" 
                  name="Top Elite Boer" 
                  stroke="#D49A37" 
                  strokeWidth={2}
                  strokeDasharray="4 4"
                  fillOpacity={1} 
                  fill="url(#eliteGradient)" 
                />
                <Area 
                  type="monotone" 
                  dataKey="rebanhoMedio" 
                  name="Rebanho Capril Chei de Dio" 
                  stroke="#8B321D" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#rebanhoGradient)" 
                />
                <Area 
                  type="monotone" 
                  dataKey="padraoBoer" 
                  name="Média Nacional da Raça" 
                  stroke="#9CA3AF" 
                  strokeWidth={2}
                  fill="none" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-4 p-3 bg-boer-cream rounded-xl text-xs text-boer-bark flex items-start space-x-2">
            <CheckCircle2 className="w-4 h-4 text-boer-green flex-shrink-0 mt-0.5" />
            <p>
              <strong>Diagnóstico Zootécnico:</strong> O lote de desmame e recria do Capril Chei de Dio está apresentando peso médio 17.7% superior ao padrão nacional da raça, evidenciando a eficácia do creep-feeding e da seleção de duplo lombo.
            </p>
          </div>
        </div>

        {/* Distribuição do Rebanho & Composição Racial */}
        <div className="boer-card p-5 sm:p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-100">
              <h3 className="text-lg font-bold text-boer-bark">
                Estrutura do Rebanho
              </h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-boer-copperSoft text-boer-copper">
                96 Animais
              </span>
            </div>

            <div className="h-52 w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={HERD_DISTRIBUTION_DATA}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {HERD_DISTRIBUTION_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F1917', 
                      borderRadius: '8px', 
                      color: '#fff',
                      border: 'none'
                    }}
                    formatter={(val) => [`${val} animais`, '']}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Legenda Customizada */}
            <div className="space-y-2 mt-2">
              {HERD_DISTRIBUTION_DATA.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></span>
                    <span className="text-stone-700 font-medium">{item.name}</span>
                  </div>
                  <span className="font-bold text-boer-bark">{item.value} cab</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
            <span className="text-boer-muted">Grau Genético Predominante:</span>
            <span className="font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
              78% Puro de Origem (PO)
            </span>
          </div>
        </div>

      </div>

      {/* Seção Inferior: Próximos Partos e Top Reprodutores Chei de Dio */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Próximos Partos Estimados */}
        <div className="boer-card p-5 sm:p-6">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-100">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-boer-copper" />
              <h3 className="text-base sm:text-lg font-bold text-boer-bark">
                Próximos Partos & Maternidade
              </h3>
            </div>
            <button 
              onClick={() => onNavigateToTab('reproducao')}
              className="text-xs font-semibold text-boer-copper hover:underline flex items-center"
            >
              Ver Cronograma
              <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
            </button>
          </div>

          {upcomingBirths.length === 0 ? (
            <p className="text-xs text-stone-500 py-6 text-center">Nenhum parto previsto no período.</p>
          ) : (
            <div className="space-y-3">
              {upcomingBirths.map((matriz) => (
                <div 
                  key={matriz.id}
                  onClick={() => onSelectAnimal(matriz)}
                  className="p-3.5 rounded-xl bg-boer-cream/70 hover:bg-boer-cream border border-boer-border/80 flex items-center justify-between cursor-pointer transition-all hover:border-boer-copper/50"
                >
                  <div className="flex items-center space-x-3">
                    <img 
                      src={matriz.photo} 
                      alt={matriz.name} 
                      className="w-11 h-11 rounded-lg object-cover border border-stone-200"
                    />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-boer-bark hover:text-boer-copper transition-colors">
                        {matriz.name}
                      </h4>
                      <div className="text-[11px] text-boer-muted flex items-center space-x-2">
                        <span>RGN: {matriz.rgn}</span>
                        <span>•</span>
                        <span className="text-amber-800 font-semibold">{matriz.lot}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-xs font-bold text-boer-copper flex items-center justify-end">
                      <Clock className="w-3 h-3 mr-1" />
                      {new Date(matriz.expectedBirthDate).toLocaleDateString('pt-BR')}
                    </div>
                    <span className="text-[10px] text-stone-500">
                      Gestação: ~122 dias
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Top Reprodutores Chei de Dio */}
        <div className="boer-card p-5 sm:p-6">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-100">
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-boer-gold" />
              <h3 className="text-base sm:text-lg font-bold text-boer-bark">
                Reprodutores Destaque de Pista & Peso
              </h3>
            </div>
            <button 
              onClick={() => onNavigateToTab('plantel')}
              className="text-xs font-semibold text-boer-copper hover:underline flex items-center"
            >
              Ver Todos
              <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
            </button>
          </div>

          <div className="space-y-3">
            {topSires.map((sire) => (
              <div 
                key={sire.id}
                onClick={() => onSelectAnimal(sire)}
                className="p-3.5 rounded-xl bg-boer-cream/70 hover:bg-boer-cream border border-boer-border/80 flex items-center justify-between cursor-pointer transition-all hover:border-boer-copper/50"
              >
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <img 
                      src={sire.photo} 
                      alt={sire.name} 
                      className="w-11 h-11 rounded-lg object-cover border border-stone-200"
                    />
                    <span className="absolute -top-1 -right-1 p-0.5 rounded-full bg-boer-gold text-white shadow-sm">
                      <Sparkles className="w-2.5 h-2.5" />
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center space-x-1.5">
                      <h4 className="text-xs sm:text-sm font-bold text-boer-bark">
                        {sire.name}
                      </h4>
                      <span className="boer-badge-po">{sire.bloodGrade}</span>
                    </div>
                    <p className="text-[11px] text-stone-500 truncate max-w-[180px] sm:max-w-xs">
                      {sire.awards[0] || 'Linhagem Sul-Africana'}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs font-extrabold text-boer-bark">
                    {sire.currentWeight} kg
                  </div>
                  <div className="text-[11px] font-semibold text-boer-green">
                    +{sire.dailyWeightGain} g/dia
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
