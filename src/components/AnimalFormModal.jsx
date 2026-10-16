import React, { useState } from 'react';
import { X, PlusCircle, Sparkles, Scale, Dna, Tag } from 'lucide-react';

export default function AnimalFormModal({ isOpen, onClose, onSaveAnimal }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    rgn: '',
    tattoo: '',
    tagNumber: '',
    category: 'Reprodutor',
    gender: 'Macho',
    bloodGrade: 'PO',
    coatPattern: 'Cabeça Cobre / Corpo Branco (Padrão Oficial)',
    birthDate: new Date().toISOString().split('T')[0],
    currentWeight: 45.0,
    dailyWeightGain: 300,
    bodyConditionScore: 4.0,
    scrotalCircumference: 34.0,
    famachaScore: 1,
    reproductiveStatus: 'Ativo',
    lot: 'Piquete 01 - Reprodutores de Elite',
    carcassScore: 'Conformação Padrão Oficial Boer com Duplo Lombo',
    fatherName: 'Thor da Caatinga PO',
    motherName: 'Morena Linda Boer',
    awards: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    const newAnimal = {
      id: `BOER-${Date.now().toString().slice(-4)}`,
      name: formData.name,
      rgn: formData.rgn || `BR-BOER-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
      tattoo: formData.tattoo || `TAT-${Math.floor(10 + Math.random() * 89)}`,
      tagNumber: formData.tagNumber || `${Math.floor(100 + Math.random() * 899)}`,
      category: formData.category,
      gender: formData.gender,
      bloodGrade: formData.bloodGrade,
      coatPattern: formData.coatPattern,
      birthDate: formData.birthDate,
      currentWeight: parseFloat(formData.currentWeight) || 50,
      dailyWeightGain: parseInt(formData.dailyWeightGain) || 280,
      bodyConditionScore: parseFloat(formData.bodyConditionScore) || 4.0,
      scrotalCircumference: formData.gender === 'Macho' ? (parseFloat(formData.scrotalCircumference) || 35.0) : null,
      famachaScore: parseInt(formData.famachaScore) || 1,
      reproductiveStatus: formData.reproductiveStatus,
      lot: formData.lot,
      photo: formData.gender === 'Macho' 
        ? "https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&w=800&q=80"
        : "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80",
      awards: formData.awards ? [formData.awards] : ['Cadastro Recente Plantel'],
      temperament: 'Dócil e Rústico',
      carcassScore: formData.carcassScore,
      pedigree: {
        father: {
          name: formData.fatherName,
          rgn: 'BR-REG-FATHER',
          bloodline: 'Sul-Africana'
        },
        mother: {
          name: formData.motherName,
          rgn: 'BR-REG-MOTHER',
          bloodline: 'Nacional PO'
        },
        paternalGrandfather: 'Kaptein Supreme RSA',
        paternalGrandmother: 'Estrela da Caatinga',
        maternalGrandfather: 'Brutus do Moxotó',
        maternalGrandmother: 'Princesa do Sertão'
      },
      weightHistory: [
        { ageMonths: 0, weight: 3.8, benchmark: 3.8 },
        { ageMonths: 6, weight: parseFloat(formData.currentWeight) || 50, benchmark: 48.0 }
      ],
      vaccines: [
        { name: "Poli-Clostridiose 10 Cepas", date: new Date().toISOString().split('T')[0], nextDate: "2025-04-10", status: "Em dia" }
      ],
      famachaHistory: [
        { date: new Date().toISOString().split('T')[0], score: parseInt(formData.famachaScore) || 1, eyeColor: "Vermelho Vivo", treated: false }
      ]
    };

    onSaveAnimal(newAnimal);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-boer-bark/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-fadeIn">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-boer-border overflow-hidden my-6">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-boer-copper to-boer-bark text-white p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-white/10 text-boer-gold">
              <PlusCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-black">Cadastrar Novo Caprino Boer</h3>
              <p className="text-xs text-stone-200">Adicione um novo animal ao banco de dados zootécnico</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-white/15 text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-boer-bark block mb-1">Nome do Animal *</label>
              <input
                type="text"
                required
                placeholder="Ex: Mandacaru do Cobre PO"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-boer-border focus:ring-2 focus:ring-boer-copper text-sm outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-boer-bark block mb-1">RGN (Registro Oficial ABCC)</label>
              <input
                type="text"
                placeholder="Ex: BR-BOER-2024-9021"
                value={formData.rgn}
                onChange={e => setFormData({ ...formData, rgn: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-boer-border focus:ring-2 focus:ring-boer-copper text-sm outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div>
              <label className="text-xs font-bold text-boer-bark block mb-1">Tatuagem</label>
              <input
                type="text"
                placeholder="Ex: MDC-01"
                value={formData.tattoo}
                onChange={e => setFormData({ ...formData, tattoo: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-boer-border text-sm outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-boer-bark block mb-1">Brinco Nº</label>
              <input
                type="text"
                placeholder="Ex: 095"
                value={formData.tagNumber}
                onChange={e => setFormData({ ...formData, tagNumber: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-boer-border text-sm outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-boer-bark block mb-1">Categoria</label>
              <select
                value={formData.category}
                onChange={e => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-boer-border text-sm outline-none"
              >
                <option value="Reprodutor">Reprodutor</option>
                <option value="Matriz">Matriz</option>
                <option value="Recria">Recria</option>
                <option value="Cabrito">Cabrito</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-boer-bark block mb-1">Sexo</label>
              <select
                value={formData.gender}
                onChange={e => setFormData({ ...formData, gender: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-boer-border text-sm outline-none"
              >
                <option value="Macho">Macho</option>
                <option value="Fêmea">Fêmea</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="text-xs font-bold text-boer-bark block mb-1">Grau de Sangue</label>
              <select
                value={formData.bloodGrade}
                onChange={e => setFormData({ ...formData, bloodGrade: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-boer-border text-sm outline-none"
              >
                <option value="PO">PO - Puro de Origem</option>
                <option value="PC">PC - Puro por Cruza</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-boer-bark block mb-1">Data de Nascimento</label>
              <input
                type="date"
                value={formData.birthDate}
                onChange={e => setFormData({ ...formData, birthDate: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-boer-border text-sm outline-none"
              >
              </input>
            </div>

            <div>
              <label className="text-xs font-bold text-boer-bark block mb-1">Padrão de Pelagem</label>
              <select
                value={formData.coatPattern}
                onChange={e => setFormData({ ...formData, coatPattern: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-boer-border text-sm outline-none"
              >
                <option value="Cabeça Cobre / Corpo Branco (Padrão Oficial)">Cabeça Cobre / Corpo Branco</option>
                <option value="Cabeça Cobre com Estrela na Frente">Cabeça Cobre com Estrela</option>
                <option value="Solid Red (Vermelho Fechado)">Solid Red</option>
                <option value="Paint Boer (Pintado)">Paint Boer</option>
              </select>
            </div>
          </div>

          {/* Dados Zootécnicos & Pesagem */}
          <div className="p-4 bg-boer-cream/70 rounded-2xl border border-boer-border space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-boer-copper flex items-center">
              <Scale className="w-4 h-4 mr-1.5" />
              Parâmetros Zootécnicos Iniciais
            </h4>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div>
                <label className="text-[11px] font-semibold text-stone-600 block mb-0.5">Peso Atual (kg)</label>
                <input
                  type="number"
                  step="0.5"
                  value={formData.currentWeight}
                  onChange={e => setFormData({ ...formData, currentWeight: e.target.value })}
                  className="w-full px-3 py-1.5 rounded-lg border border-stone-300 text-sm"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-stone-600 block mb-0.5">GPD Estimado (g/d)</label>
                <input
                  type="number"
                  value={formData.dailyWeightGain}
                  onChange={e => setFormData({ ...formData, dailyWeightGain: e.target.value })}
                  className="w-full px-3 py-1.5 rounded-lg border border-stone-300 text-sm"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-stone-600 block mb-0.5">Escore Corporal (ECC)</label>
                <select
                  value={formData.bodyConditionScore}
                  onChange={e => setFormData({ ...formData, bodyConditionScore: e.target.value })}
                  className="w-full px-3 py-1.5 rounded-lg border border-stone-300 text-sm"
                >
                  <option value="3.0">3.0 - Regular</option>
                  <option value="3.5">3.5 - Bom</option>
                  <option value="4.0">4.0 - Muito Bom</option>
                  <option value="4.5">4.5 - Excelente (Carcaça Dupla)</option>
                  <option value="5.0">5.0 - Gordo / Elite</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-stone-600 block mb-0.5">Grau FAMACHA</label>
                <select
                  value={formData.famachaScore}
                  onChange={e => setFormData({ ...formData, famachaScore: e.target.value })}
                  className="w-full px-3 py-1.5 rounded-lg border border-stone-300 text-sm"
                >
                  <option value="1">Grau 1 - Ótimo (Vermelho Vivo)</option>
                  <option value="2">Grau 2 - Bom (Rosa Vermelho)</option>
                  <option value="3">Grau 3 - Alerta (Rosa Claro)</option>
                  <option value="4">Grau 4 - Perigo (Pálido)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Genealogia Básica */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-boer-bark block mb-1">Nome do Pai (Reprodutor)</label>
              <input
                type="text"
                placeholder="Ex: Bastião do Cobre PO"
                value={formData.fatherName}
                onChange={e => setFormData({ ...formData, fatherName: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-boer-border text-sm outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-boer-bark block mb-1">Nome da Mãe (Matriz)</label>
              <input
                type="text"
                placeholder="Ex: Pérola da Serra PC"
                value={formData.motherName}
                onChange={e => setFormData({ ...formData, motherName: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-boer-border text-sm outline-none"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-boer-border flex items-center justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-stone-300 text-stone-700 font-semibold text-sm hover:bg-stone-100"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-boer-copper hover:bg-boer-copperHover text-white font-bold text-sm shadow-md shadow-boer-copper/30 transition-all"
            >
              Salvar Animal no Plantel
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
