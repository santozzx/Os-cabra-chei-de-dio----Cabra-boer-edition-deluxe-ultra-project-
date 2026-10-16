import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Bell, 
  PlusCircle, 
  Sparkles, 
  MapPin, 
  Menu, 
  X,
  LayoutDashboard,
  Dna,
  HeartHandshake,
  Stethoscope,
  BookOpen,
  Sun,
  Scale
} from 'lucide-react';

export default function Header({ 
  activeTab, 
  setActiveTab, 
  onOpenNewAnimalModal, 
  animalsCount,
  pendingAlertsCount,
  onOpenAlerts
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [curralMode, setCurralMode] = useState(false);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'plantel', label: 'Plantel & Genealogia', icon: Dna, badge: `${animalsCount}` },
    { id: 'reproducao', label: 'Controle Reprodutivo', icon: HeartHandshake },
    { id: 'sanitario', label: 'Sanitário & Nutrição', icon: Stethoscope, alertBadge: pendingAlertsCount > 0 },
    { id: 'guia', label: 'Guia da Raça Boer', icon: BookOpen }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-boer-border/80 shadow-boer-sm">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Haras Identity */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <button 
              onClick={() => setActiveTab('dashboard')} 
              className="flex items-center space-x-3 text-left group focus:outline-none"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-boer-copper to-boer-copperDark flex items-center justify-center text-white shadow-md shadow-boer-copper/30 group-hover:scale-105 transition-transform">
                <span className="font-extrabold text-xl tracking-tighter">BM</span>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h1 className="text-lg sm:text-xl font-extrabold tracking-tight text-boer-bark font-sans">
                    Boer<span className="text-boer-copper">Manager</span>
                  </h1>
                  <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-boer-gold/20 text-boer-gold border border-boer-gold/40">
                    <Sparkles className="w-2.5 h-2.5 mr-1 text-boer-gold" />
                    CABRAS BOER
                  </span>
                </div>
                <div className="flex items-center text-xs text-boer-muted font-medium">
                  <MapPin className="w-3 h-3 mr-1 text-boer-copper" />
                  <span>Capril Boer • Santa Luzia, PE</span>
                </div>
              </div>
            </button>
          </div>

          {/* Quick Actions (Desktop & Mobile) */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            
            {/* Curral High-Contrast Mode Toggle */}
            <button 
              onClick={() => setCurralMode(!curralMode)}
              title="Modo Curral (Alto Contraste para sol a pino)"
              className={`p-2 rounded-xl text-xs font-semibold flex items-center transition-all ${
                curralMode 
                  ? 'bg-amber-400 text-stone-950 ring-2 ring-amber-500 font-bold' 
                  : 'bg-boer-cream text-boer-bark hover:bg-stone-200/80 border border-boer-border'
              }`}
            >
              <Sun className="w-4 h-4 sm:mr-1.5 text-amber-600" />
              <span className="hidden md:inline">Modo Curral</span>
            </button>

            {/* Notification Bell */}
            <button
              onClick={onOpenAlerts}
              className="relative p-2.5 rounded-xl bg-boer-cream hover:bg-stone-200/80 text-boer-bark border border-boer-border transition-colors focus:outline-none"
              title="Alertas Sanitários & Partos"
            >
              <Bell className="w-4 h-4 text-boer-bark" />
              {pendingAlertsCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-red-600 text-[9px] font-bold text-white items-center justify-center">
                    {pendingAlertsCount}
                  </span>
                </span>
              )}
            </button>

            {/* Add Animal CTA */}
            <button
              onClick={onOpenNewAnimalModal}
              className="inline-flex items-center px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-boer-copper hover:bg-boer-copperHover text-white shadow-sm shadow-boer-copper/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <PlusCircle className="w-4 h-4 mr-1.5" />
              <span className="hidden xs:inline">Cadastrar</span> Animal
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-boer-cream text-boer-bark border border-boer-border"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs (Desktop) */}
      <div className="hidden lg:block border-t border-boer-border/60 bg-boer-cream/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-1 py-1.5 overflow-x-auto no-scrollbar">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-150 ${
                    isActive
                      ? 'bg-boer-copper text-white shadow-sm shadow-boer-copper/30'
                      : 'text-boer-bark hover:text-boer-copper hover:bg-white/80'
                  }`}
                >
                  <Icon className={`w-4 h-4 mr-2 ${isActive ? 'text-white' : 'text-boer-copper'}`} />
                  {item.label}
                  {item.badge && (
                    <span className={`ml-2 px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                      isActive ? 'bg-white/20 text-white' : 'bg-boer-border text-boer-muted'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                  {item.alertBadge && (
                    <span className="ml-1.5 w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-boer-border bg-white px-4 pt-3 pb-5 space-y-1 shadow-lg">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-boer-copper text-white font-semibold'
                    : 'text-boer-bark hover:bg-boer-cream'
                }`}
              >
                <div className="flex items-center">
                  <Icon className={`w-5 h-5 mr-3 ${isActive ? 'text-white' : 'text-boer-copper'}`} />
                  {item.label}
                </div>
                {item.badge && (
                  <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-boer-border text-boer-muted'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
