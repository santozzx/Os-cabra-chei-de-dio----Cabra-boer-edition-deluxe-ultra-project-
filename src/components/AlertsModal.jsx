import React from 'react';
import { X, AlertTriangle, Calendar, CheckCircle2, ShieldAlert, ArrowRight } from 'lucide-react';

export default function AlertsModal({ isOpen, onClose, animals, onSelectAnimal, onNavigateToTab }) {
  if (!isOpen) return null;

  // Filtrando alertas
  const famachaAlerts = animals.filter(a => a.famachaScore >= 3);
  const vaccineAlerts = animals.filter(a => a.vaccines && a.vaccines.some(v => v.status === 'Atrasada'));
  const upcomingBirths = animals.filter(a => a.expectedBirthDate);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-boer-bark/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-boer-border relative">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-boer-border">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-xl bg-amber-50 text-amber-700">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-boer-bark">Alertas Ativos do Capril</h3>
              <p className="text-xs text-stone-500">Notificações sanitárias e partos próximos</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-full hover:bg-stone-100 text-stone-400 hover:text-stone-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Lista de Alertas */}
        <div className="py-4 space-y-4 max-h-[60vh] overflow-y-auto">
          
          {/* Alertas FAMACHA */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 block mb-2">
              Grau FAMACHA de Atenção (Anemia Parasitária)
            </span>
            {famachaAlerts.length === 0 ? (
              <p className="text-xs text-stone-500 italic">Nenhum animal em alerta parasitário.</p>
            ) : (
              <div className="space-y-2">
                {famachaAlerts.map(a => (
                  <div 
                    key={a.id} 
                    onClick={() => {
                      onSelectAnimal(a);
                      onClose();
                    }}
                    className="p-3 rounded-xl bg-red-50 border border-red-200 flex items-center justify-between cursor-pointer hover:bg-red-100 transition-colors"
                  >
                    <div>
                      <span className="font-bold text-xs text-red-950 block">{a.name}</span>
                      <span className="text-[11px] text-red-700">FAMACHA Grau {a.famachaScore} • Lote: {a.lot}</span>
                    </div>
                    <span className="text-[11px] font-bold text-red-800 flex items-center">
                      Examinar <ArrowRight className="w-3 h-3 ml-1" />
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Alertas de Vacinas */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 block mb-2">
              Vacinações Pendentes
            </span>
            {vaccineAlerts.length === 0 ? (
              <p className="text-xs text-stone-500 italic">Todas as vacinas em dia.</p>
            ) : (
              <div className="space-y-2">
                {vaccineAlerts.map(a => (
                  <div 
                    key={a.id}
                    onClick={() => {
                      onSelectAnimal(a);
                      onClose();
                    }}
                    className="p-3 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-between cursor-pointer hover:bg-amber-100 transition-colors"
                  >
                    <div>
                      <span className="font-bold text-xs text-amber-950 block">{a.name}</span>
                      <span className="text-[11px] text-amber-800">Poli-Clostridiose atrasada</span>
                    </div>
                    <span className="text-[11px] font-bold text-amber-900 flex items-center">
                      Regularizar <ArrowRight className="w-3 h-3 ml-1" />
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Próximos Partos */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block mb-2">
              Partos Agendados
            </span>
            <div className="space-y-2">
              {upcomingBirths.map(a => (
                <div 
                  key={a.id}
                  onClick={() => {
                    onSelectAnimal(a);
                    onClose();
                  }}
                  className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-between cursor-pointer hover:bg-stone-100"
                >
                  <div>
                    <span className="font-bold text-xs text-stone-900 block">{a.name}</span>
                    <span className="text-[11px] text-stone-500">
                      Previsão: {new Date(a.expectedBirthDate).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-boer-copper flex items-center">
                    Ver Maternidade <ArrowRight className="w-3 h-3 ml-1" />
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-boer-border text-center">
          <button
            onClick={() => {
              onNavigateToTab('sanitario');
              onClose();
            }}
            className="w-full py-2.5 rounded-xl text-xs font-bold bg-boer-copper text-white hover:bg-boer-copperHover shadow-sm"
          >
            Abrir Módulo Sanitário Completo
          </button>
        </div>

      </div>
    </div>
  );
}
