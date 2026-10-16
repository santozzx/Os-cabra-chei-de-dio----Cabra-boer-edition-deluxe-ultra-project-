import React from 'react';
import { Users, TrendingUp, HeartHandshake, AlertTriangle, Calendar, ArrowUpRight, Sprout, Activity, CheckCircle2, Scale, Baby } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, PieChart, Pie, Cell } from 'recharts';
import { GROWTH_BENCHMARK_DATA, HERD_DISTRIBUTION_DATA } from '../data/mockBoerData';
import DashboardMetricCard from './DashboardMetricCard';

export default function Dashboard({ animals, onSelectAnimal, onNavigateToTab, onOpenNewAnimalModal }) {
  const totalHead = animals.length;
  const matrices = animals.filter(a => a.category === 'Matriz').length;
  const sires = animals.filter(a => a.category === 'Reprodutor').length;
  const young = animals.filter(a => ['Recria', 'Cabrito'].includes(a.category)).length;
  const avgGPD = Math.round(animals.reduce((sum, a) => sum + (a.dailyWeightGain || 0), 0) / (totalHead || 1));
  const pregnant = animals.filter(a => a.reproductiveStatus?.includes('Gestante'));
  const alerts = animals.filter(a => a.famachaScore >= 3 || a.vaccines?.some(v => v.status === 'Atrasada'));
  const births = animals.filter(a => a.expectedBirthDate).sort((a, b) => new Date(a.expectedBirthDate) - new Date(b.expectedBirthDate)).slice(0, 3);
  const topBucks = [...animals].filter(a => a.gender === 'Macho').sort((a, b) => (b.dailyWeightGain || 0) - (a.dailyWeightGain || 0)).slice(0, 3);

  const cards = [
    { label: 'Caprinos Boer no rebanho', value: totalHead, note: `${matrices} matrizes Boer · ${sires} bodes Boer`, icon: Users, color: 'text-boer-soil', bg: 'bg-boer-soilSoft' },
    { label: 'Ganho médio diário', value: `+${avgGPD}`, unit: 'g/dia', note: 'peso acompanhado no curral', icon: TrendingUp, color: 'text-boer-green', bg: 'bg-boer-greenSoft' },
    { label: 'Cabras gestantes', value: pregnant.length, note: 'acompanhar até a parição', icon: HeartHandshake, color: 'text-boer-goldHover', bg: 'bg-boer-goldSoft' },
    { label: 'Cuidados pendentes', value: alerts.length, note: alerts.length ? 'verificar hoje' : 'rebanho em dia', icon: AlertTriangle, color: alerts.length ? 'text-red-700' : 'text-boer-green', bg: alerts.length ? 'bg-red-50' : 'bg-boer-greenSoft' }
  ];

  return <div className="farm-paper space-y-6 animate-fadeIn sm:space-y-8">
    <section className="relative overflow-hidden rounded-[2rem] border border-boer-soil/30 bg-gradient-to-br from-boer-soilDark via-boer-soil to-boer-green p-6 text-white shadow-lg sm:p-9">
      <div className="relative z-10 max-w-2xl">
        <span className="farm-kicker inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-white/80">Caderno da fazenda · hoje</span>
        <h2 className="mt-4 font-serif text-3xl font-bold leading-tight sm:text-5xl">Cuidar bem das cabras começa no detalhe.</h2>
        <p className="mt-3 max-w-xl text-sm leading-6 text-white/80 sm:text-base">Acompanhe o peso, a alimentação, a saúde e a reprodução do seu rebanho Boer num só lugar — do pasto ao curral.</p>
        <div className="mt-6 flex flex-wrap gap-3"><button onClick={() => onNavigateToTab('plantel')} className="rounded-xl bg-boer-cream px-4 py-3 text-xs font-extrabold text-boer-soil hover:bg-white">Ver minhas cabras <ArrowUpRight className="ml-1 inline h-4 w-4" /></button><button onClick={onOpenNewAnimalModal} className="rounded-xl border border-white/30 bg-white/10 px-4 py-3 text-xs font-bold text-white hover:bg-white/20">Cadastrar uma cabra</button></div>
      </div>
      <div className="absolute -bottom-16 -right-8 hidden h-72 w-72 rounded-full border-[28px] border-white/10 sm:block" /><div className="absolute right-16 top-10 hidden rotate-12 text-8xl opacity-15 sm:block">🐐</div>
    </section>

    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">{cards.map(card => <DashboardMetricCard key={card.label} {...card} />)}</section>

    <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="boer-card p-5 sm:p-6 lg:col-span-2"><div className="mb-5 flex items-start justify-between border-b border-boer-border pb-4"><div><span className="farm-kicker">Acompanhamento do rebanho</span><h3 className="mt-1 font-serif text-2xl font-bold text-boer-bark">Peso das cabras por idade</h3><p className="mt-1 text-xs text-boer-muted">Compare o desenvolvimento do seu rebanho com o padrão Boer.</p></div><Scale className="h-6 w-6 text-boer-soil" /></div><div className="h-72"><ResponsiveContainer width="100%" height="100%"><AreaChart data={GROWTH_BENCHMARK_DATA} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}><defs><linearGradient id="farmGrowth" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#68452f" stopOpacity={.35}/><stop offset="95%" stopColor="#68452f" stopOpacity={0}/></linearGradient></defs><CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eadfce" /><XAxis dataKey="stage" tick={{ fontSize: 10, fill: '#806f60' }} /><YAxis tick={{ fontSize: 10, fill: '#806f60' }} unit=" kg" /><Tooltip contentStyle={{ background: '#3c2a20', border: 0, borderRadius: 12, color: '#fff' }} formatter={(v) => [`${v} kg`, '']} /><Area type="monotone" dataKey="rebanhoMedio" name="Meu rebanho" stroke="#68452f" strokeWidth={3} fill="url(#farmGrowth)" /><Area type="monotone" dataKey="padraoBoer" name="Padrão Boer" stroke="#55733e" strokeWidth={2} fill="none" /></AreaChart></ResponsiveContainer></div><div className="mt-4 flex items-center gap-2 rounded-xl bg-boer-greenSoft p-3 text-xs text-boer-green"><CheckCircle2 className="h-4 w-4 shrink-0" /> Pesagens regulares ajudam a corrigir a alimentação antes que a cabra perca condição corporal.</div></div>
      <div className="boer-card p-5 sm:p-6"><div className="flex items-start justify-between"><div><span className="farm-kicker">Divisão do rebanho</span><h3 className="mt-1 font-serif text-2xl font-bold text-boer-bark">Quem está no pasto?</h3></div><Sprout className="h-6 w-6 text-boer-green" /></div><div className="h-52"><ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={HERD_DISTRIBUTION_DATA} innerRadius={52} outerRadius={78} paddingAngle={3} dataKey="value">{HERD_DISTRIBUTION_DATA.map((entry, i) => <Cell key={i} fill={entry.color} />)}</Pie><Tooltip contentStyle={{ background: '#3c2a20', border: 0, borderRadius: 10, color: '#fff' }} formatter={(v) => [`${v} cabras`, '']} /></PieChart></ResponsiveContainer></div><div className="space-y-2">{HERD_DISTRIBUTION_DATA.map(item => <div key={item.name} className="flex items-center justify-between text-xs"><span className="flex items-center gap-2 text-boer-muted"><span className="h-2.5 w-2.5 rounded-full" style={{ background: item.color }} />{item.name}</span><strong className="text-boer-bark">{item.value}</strong></div>)}</div></div>
    </section>

    <section className="grid grid-cols-1 gap-6 lg:grid-cols-2"><div className="boer-card p-5 sm:p-6"><div className="mb-4 flex items-center justify-between"><div><span className="farm-kicker">Próximos cuidados</span><h3 className="mt-1 font-serif text-2xl font-bold text-boer-bark">Partos chegando</h3></div><Baby className="h-6 w-6 text-boer-goldHover" /></div>{births.length ? <div className="space-y-3">{births.map(a => <button key={a.id} onClick={() => onSelectAnimal(a)} className="flex w-full items-center justify-between rounded-xl border border-boer-border bg-boer-cream/60 p-3 text-left hover:bg-boer-greenSoft"><span><strong className="block text-sm text-boer-bark">{a.name}</strong><small className="text-xs text-boer-muted">Maternidade · {new Date(a.expectedBirthDate).toLocaleDateString('pt-BR')}</small></span><Calendar className="h-4 w-4 text-boer-soil" /></button>)}</div> : <p className="text-sm text-boer-muted">Nenhuma parição de cabra Boer cadastrada no momento.</p>}</div><div className="boer-card p-5 sm:p-6"><div className="mb-4 flex items-center justify-between"><div><span className="farm-kicker">Seleção do rebanho</span><h3 className="mt-1 font-serif text-2xl font-bold text-boer-bark">Bodes em destaque</h3></div><Activity className="h-6 w-6 text-boer-green" /></div><div className="space-y-3">{topBucks.map((a, i) => <button key={a.id} onClick={() => onSelectAnimal(a)} className="flex w-full items-center gap-3 rounded-xl border border-boer-border p-3 text-left hover:bg-boer-cream"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-boer-soil text-xs font-extrabold text-white">{i + 1}</span><span className="min-w-0 flex-1"><strong className="block truncate text-sm text-boer-bark">{a.name}</strong><small className="text-xs text-boer-muted">{a.bloodGrade} · {a.currentWeight} kg</small></span><span className="text-xs font-extrabold text-boer-green">+{a.dailyWeightGain} g/d</span></button>)}</div></div></section>
  </div>;
}
