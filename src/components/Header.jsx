import React, { useState } from 'react';
import {
  Bell, PlusCircle, MapPin, Menu, X, LayoutDashboard, Dna,
  HeartHandshake, Stethoscope, BookOpen, Sun, Sprout
} from 'lucide-react';

export default function Header({ activeTab, setActiveTab, onOpenNewAnimalModal, animalsCount, pendingAlertsCount, onOpenAlerts }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [curralMode, setCurralMode] = useState(false);

  const navItems = [
    { id: 'dashboard', label: 'Resumo da fazenda', icon: LayoutDashboard },
    { id: 'plantel', label: 'Minhas cabras', icon: Dna, badge: `${animalsCount}` },
    { id: 'reproducao', label: 'Cria e reprodução', icon: HeartHandshake },
    { id: 'sanitario', label: 'Saúde e alimentação', icon: Stethoscope, alertBadge: pendingAlertsCount > 0 },
    { id: 'guia', label: 'Cuidados Boer', icon: BookOpen }
  ];

  const go = (id) => { setActiveTab(id); setMobileMenuOpen(false); };

  return (
    <header className="sticky top-0 z-40 border-b border-boer-border/80 bg-boer-surface/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[4.5rem] items-center justify-between gap-4">
          <button onClick={() => go('dashboard')} className="group flex items-center gap-3 text-left">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-boer-gold bg-boer-soil text-white shadow-md transition-transform group-hover:-rotate-3">
              <Sprout className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-serif text-xl font-bold tracking-tight text-boer-bark sm:text-2xl">Casa da Cabra</h1>
                <span className="hidden rounded-full bg-boer-greenSoft px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-boer-green sm:inline-flex">Fazenda Boer</span>
              </div>
              <div className="flex items-center text-[11px] font-medium text-boer-muted"><MapPin className="mr-1 h-3 w-3 text-boer-soil" /> Santa Luzia, PE · manejo caprino</div>
            </div>
          </button>

          <div className="flex items-center gap-2">
            <button onClick={() => setCurralMode(!curralMode)} title="Aumentar contraste para usar no curral" className={`hidden items-center rounded-xl border px-3 py-2 text-xs font-bold transition-all sm:flex ${curralMode ? 'border-boer-gold bg-boer-gold text-boer-bark' : 'border-boer-border bg-boer-cream text-boer-bark hover:bg-boer-greenSoft'}`}>
              <Sun className="mr-1.5 h-4 w-4" /> Modo curral
            </button>
            <button onClick={onOpenAlerts} title="Alertas de saúde e partos" className="relative rounded-xl border border-boer-border bg-boer-cream p-2.5 text-boer-bark hover:bg-boer-greenSoft">
              <Bell className="h-4 w-4" />
              {pendingAlertsCount > 0 && <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-600 px-1 text-[9px] font-bold text-white">{pendingAlertsCount}</span>}
            </button>
            <button onClick={onOpenNewAnimalModal} className="inline-flex items-center rounded-xl bg-boer-soil px-3 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-boer-soilHover sm:px-4 sm:text-sm"><PlusCircle className="mr-1.5 h-4 w-4" /> Nova cabra</button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="rounded-xl border border-boer-border bg-boer-cream p-2.5 lg:hidden" aria-label="Abrir menu">{mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
          </div>
        </div>
      </div>

      <nav className="hidden border-t border-boer-border/70 bg-boer-cream/80 lg:block">
        <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 py-1.5 sm:px-6 lg:px-8">
          {navItems.map(({ id, label, icon: Icon, badge, alertBadge }) => <button key={id} onClick={() => go(id)} className={`flex items-center whitespace-nowrap rounded-xl px-4 py-2.5 text-xs font-bold transition ${activeTab === id ? 'bg-boer-green text-white shadow-sm' : 'text-boer-bark hover:bg-white hover:text-boer-green'}`}><Icon className="mr-2 h-4 w-4" />{label}{badge && <span className={`ml-2 rounded-full px-1.5 py-0.5 text-[10px] ${activeTab === id ? 'bg-white/20' : 'bg-boer-border text-boer-muted'}`}>{badge}</span>}{alertBadge && <span className="ml-2 h-2 w-2 rounded-full bg-red-500" />}</button>)}
        </div>
      </nav>

      {mobileMenuOpen && <div className="border-t border-boer-border bg-boer-surface px-4 py-3 shadow-lg lg:hidden">{navItems.map(({ id, label, icon: Icon, badge }) => <button key={id} onClick={() => go(id)} className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-bold ${activeTab === id ? 'bg-boer-green text-white' : 'text-boer-bark hover:bg-boer-cream'}`}><span className="flex items-center"><Icon className="mr-3 h-5 w-5" />{label}</span>{badge && <span className="rounded-full bg-black/10 px-2 py-0.5 text-xs">{badge}</span>}</button>)}</div>}
    </header>
  );
}
