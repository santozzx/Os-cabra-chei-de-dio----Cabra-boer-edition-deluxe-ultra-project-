import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Sparkles, 
  Tag, 
  MapPin, 
  Award, 
  Filter, 
  ArrowUpRight, 
  ShieldCheck, 
  Check, 
  X,
  PhoneCall,
  Scale
} from 'lucide-react';
import { MARKETPLACE_ITEMS } from '../data/mockBoerData';

export default function MarketplaceModule() {
  const [items, setItems] = useState(MARKETPLACE_ITEMS);
  const [selectedType, setSelectedType] = useState('ALL');
  const [maxPrice, setMaxPrice] = useState(30000);
  const [proposalModalItem, setProposalModalItem] = useState(null);
  const [proposalAmount, setProposalAmount] = useState('');
  const [proposalSuccess, setProposalSuccess] = useState(false);

  const filteredItems = items.filter(item => {
    const matchesType = selectedType === 'ALL' || item.type.includes(selectedType);
    const matchesPrice = item.price <= maxPrice;
    return matchesType && matchesPrice;
  });

  const handleOpenProposal = (item) => {
    setProposalModalItem(item);
    setProposalAmount(item.price.toString());
    setProposalSuccess(false);
  };

  const handleSendProposal = (e) => {
    e.preventDefault();
    setProposalSuccess(true);
    setTimeout(() => {
      setProposalSuccess(false);
      setProposalModalItem(null);
    }, 2200);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-boer-border">
        <div>
          <div className="flex items-center space-x-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-boer-bark tracking-tight">
              Boer Marketplace & Genética Deluxe
            </h2>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-boer-gold/20 text-boer-gold border border-boer-gold/40">
              Leilão & Venda Direta
            </span>
          </div>
          <p className="text-xs sm:text-sm text-boer-muted mt-1">
            Exposição e comercialização de Reprodutores PO, Matrizes Doadoras e Doses Criogênicas de Sêmen
          </p>
        </div>
      </div>

      {/* Barra de Filtros do Marketplace */}
      <div className="boer-card p-5 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Filtro por Categoria */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <button
            onClick={() => setSelectedType('ALL')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedType === 'ALL'
                ? 'bg-boer-copper text-white shadow-sm'
                : 'bg-boer-cream text-stone-700 hover:bg-stone-200'
            }`}
          >
            Todos os Lotes
          </button>
          <button
            onClick={() => setSelectedType('Reprodutor')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedType === 'Reprodutor'
                ? 'bg-boer-copper text-white shadow-sm'
                : 'bg-boer-cream text-stone-700 hover:bg-stone-200'
            }`}
          >
            Reprodutores PO
          </button>
          <button
            onClick={() => setSelectedType('Matriz')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedType === 'Matriz'
                ? 'bg-boer-copper text-white shadow-sm'
                : 'bg-boer-cream text-stone-700 hover:bg-stone-200'
            }`}
          >
            Matrizes & Lotes
          </button>
          <button
            onClick={() => setSelectedType('Sêmen')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedType === 'Sêmen'
                ? 'bg-boer-copper text-white shadow-sm'
                : 'bg-boer-cream text-stone-700 hover:bg-stone-200'
            }`}
          >
            Doses de Sêmen
          </button>
        </div>

        {/* Filtro por Faixa de Preço */}
        <div className="flex items-center space-x-3 w-full md:w-auto">
          <span className="text-xs font-bold text-boer-muted whitespace-nowrap">
            Até R$ {maxPrice.toLocaleString('pt-BR')}
          </span>
          <input
            type="range"
            min="2000"
            max="30000"
            step="1000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(parseInt(e.target.value))}
            className="w-36 sm:w-44 accent-boer-copper cursor-pointer"
          />
        </div>
      </div>

      {/* Grid de Itens em Destaque */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div 
            key={item.id}
            className="boer-card overflow-hidden flex flex-col justify-between hover:shadow-boer-lg transition-all duration-300 border border-boer-border/80 group"
          >
            <div>
              {/* Foto com Badges */}
              <div className="relative h-52 bg-stone-100 overflow-hidden">
                <img 
                  src={item.photo} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {item.featured && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-black bg-boer-gold text-stone-950 flex items-center shadow-md">
                    <Sparkles className="w-3 h-3 mr-1" />
                    GENÉTICA DELUXE
                  </span>
                )}

                <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[11px] font-bold bg-black/75 backdrop-blur-sm text-white">
                  {item.bloodGrade}
                </span>

                <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-sm text-[11px] text-white flex items-center justify-between">
                  <span>{item.type}</span>
                  {item.weight && <span className="font-bold text-boer-gold">{item.weight} kg</span>}
                </div>
              </div>

              {/* Informações */}
              <div className="p-4 space-y-2">
                <h3 className="font-extrabold text-base text-boer-bark line-clamp-1 group-hover:text-boer-copper transition-colors">
                  {item.title}
                </h3>

                <div className="flex items-center text-xs text-stone-500">
                  <MapPin className="w-3.5 h-3.5 mr-1 text-boer-copper" />
                  <span className="truncate">{item.location}</span>
                </div>

                <div className="text-xs text-amber-900 bg-amber-50 p-2 rounded-lg border border-amber-200/80 font-medium line-clamp-1">
                  ⭐ {item.awards}
                </div>

                <div className="text-xs text-stone-500">
                  Criador: <strong className="text-stone-800">{item.breeder}</strong>
                </div>
              </div>
            </div>

            {/* Rodapé com Preço e Ação */}
            <div className="p-4 pt-3 border-t border-stone-100 bg-boer-cream/40 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-stone-400 block">Investimento</span>
                <span className="text-lg font-black text-boer-copper">
                  R$ {item.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
              </div>

              <button
                onClick={() => handleOpenProposal(item)}
                className="px-3.5 py-2 rounded-xl text-xs font-bold bg-boer-bark hover:bg-black text-white transition-all shadow-sm flex items-center"
              >
                Proposta
                <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de Envio de Proposta / Lance */}
      {proposalModalItem && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-boer-bark/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-boer-border relative">
            <button 
              onClick={() => setProposalModalItem(null)} 
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-700"
            >
              <X className="w-5 h-5" />
            </button>

            {proposalSuccess ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-boer-bark">Proposta Enviada com Sucesso!</h3>
                <p className="text-xs text-stone-600">
                  O criador <strong>{proposalModalItem.breeder}</strong> recebeu sua oferta e entrará em contato via WhatsApp/Telefone para alinhar o frete rural e documentação ABCC.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSendProposal} className="space-y-4">
                <div className="flex items-center space-x-3 mb-2">
                  <img 
                    src={proposalModalItem.photo} 
                    alt={proposalModalItem.title} 
                    className="w-12 h-12 rounded-xl object-cover border"
                  />
                  <div>
                    <span className="text-[10px] font-bold uppercase text-boer-copper block">Negociação Direta</span>
                    <h4 className="font-extrabold text-sm text-boer-bark">{proposalModalItem.title}</h4>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-boer-bark block mb-1">
                    Valor da sua Proposta (R$)
                  </label>
                  <input
                    type="number"
                    required
                    value={proposalAmount}
                    onChange={(e) => setProposalAmount(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-boer-border text-lg font-black text-boer-copper focus:ring-2 focus:ring-boer-copper outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-boer-bark block mb-1">Seu Nome / Capril</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Capril do Sertão"
                      className="w-full px-3 py-2 rounded-xl border border-boer-border text-xs outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-boer-bark block mb-1">WhatsApp / Telefone</label>
                    <input
                      type="tel"
                      required
                      placeholder="(87) 99999-0000"
                      className="w-full px-3 py-2 rounded-xl border border-boer-border text-xs outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-boer-bark block mb-1">Cidade e Estado de Destino (Frete)</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Petrolina - PE"
                    className="w-full px-3 py-2 rounded-xl border border-boer-border text-xs outline-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end space-x-2">
                  <button
                    type="button"
                    onClick={() => setProposalModalItem(null)}
                    className="px-4 py-2 rounded-xl border text-xs font-semibold text-stone-600 hover:bg-stone-100"
                  >
                    Voltar
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-boer-copper hover:bg-boer-copperHover text-white text-xs font-bold shadow-md shadow-boer-copper/30"
                  >
                    Confirmar Envio da Proposta
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
