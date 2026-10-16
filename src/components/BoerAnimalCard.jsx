import React from 'react';
import { Eye } from 'lucide-react';

export default function BoerAnimalCard({ animal, onSelect }) {
  return (
    <div
      onClick={() => onSelect(animal)}
      className="boer-card p-5 group cursor-pointer flex flex-col justify-between hover:border-boer-copper/50 transition-all duration-200"
    >
      <div>
        {/* Imagem + Badges */}
        <div className="relative mb-4 overflow-hidden rounded-2xl bg-stone-100">
          <img
            src={animal.photo}
            alt={animal.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-black shadow-sm ${
              animal.bloodGrade === 'PO' ? 'bg-amber-400 text-stone-950' : 'bg-white text-stone-800'
            }`}>
              {animal.bloodGrade}
            </span>
            <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-stone-900/80 backdrop-blur-sm text-white">
              {animal.category}
            </span>
          </div>

          {/* Badge FAMACHA */}
          <div className="absolute top-3 right-3">
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black text-white shadow-md ${
              animal.famachaScore === 1 ? 'bg-red-700' :
              animal.famachaScore === 2 ? 'bg-red-500' :
              animal.famachaScore === 3 ? 'bg-pink-400 text-stone-950' :
              'bg-pink-200 text-stone-900'
            }`} title={`FAMACHA Grau ${animal.famachaScore}`}>
              F{animal.famachaScore}
            </span>
          </div>

          {/* Pelagem Badge Overlay */}
          <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1 rounded-xl bg-boer-bark/80 backdrop-blur-sm text-[11px] text-white flex items-center justify-between">
            <span className="truncate">{animal.coatPattern}</span>
            <span className="font-semibold text-boer-gold shrink-0 ml-1">ECC {animal.bodyConditionScore}</span>
          </div>
        </div>

        {/* Dados Principais */}
        <h3 className="text-lg font-extrabold text-boer-bark group-hover:text-boer-copper transition-colors">
          {animal.name}
        </h3>

        <div className="flex items-center space-x-2 text-xs text-boer-muted font-mono mt-1">
          <span>RGN: {animal.rgn}</span>
          <span>•</span>
          <span>Brinco: #{animal.tagNumber}</span>
        </div>

        {/* Linhagem */}
        <p className="text-xs text-stone-600 mt-2 truncate">
          Pai: <strong className="text-stone-800">{animal.pedigree?.father?.name || 'Não informado'}</strong>
        </p>
      </div>

      {/* Métricas Inferiores */}
      <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
        <div>
          <span className="text-[10px] uppercase font-bold text-stone-400 block">Peso Atual</span>
          <span className="text-lg font-black text-boer-bark">{animal.currentWeight} kg</span>
        </div>

        <div className="text-right">
          <span className="text-[10px] uppercase font-bold text-stone-400 block">GPD</span>
          <span className="text-sm font-bold text-boer-green">+{animal.dailyWeightGain} g/d</span>
        </div>

        <div className="p-2 rounded-xl bg-boer-cream text-boer-copper group-hover:bg-boer-copper group-hover:text-white transition-colors">
          <Eye className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
