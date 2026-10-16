import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  Dna, 
  Award, 
  Scale, 
  ChevronRight, 
  Sparkles, 
  SlidersHorizontal,
  PlusCircle,
  CheckCircle2
} from 'lucide-react';
import BoerAnimalCard from './BoerAnimalCard';

export default function PlantelView({ 
  animals, 
  onSelectAnimal, 
  onOpenNewAnimalModal 
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('ALL'); // 'ALL', 'PO', 'PC'
  const [selectedCategory, setSelectedCategory] = useState('ALL'); // 'ALL', 'Reprodutor', 'Matriz', 'Recria', 'Cabrito'
  const [selectedGender, setSelectedGender] = useState('ALL'); // 'ALL', 'Macho', 'Fêmea'
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'table'

  // Filtragem dos animais
  const filteredAnimals = animals.filter(animal => animal.species === 'Caprino' && animal.breed === 'Boer').filter(animal => {
    const matchesSearch = 
      animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      animal.rgn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      animal.tattoo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      animal.tagNumber.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesGrade = selectedGrade === 'ALL' || animal.bloodGrade === selectedGrade;
    const matchesCategory = selectedCategory === 'ALL' || animal.category === selectedCategory;
    const matchesGender = selectedGender === 'ALL' || animal.gender === selectedGender;

    return matchesSearch && matchesGrade && matchesCategory && matchesGender;
  });

  return (
    <div className="space-y-6 animate-fadeIn">
      
      {/* Top Header com Título e Estatísticas Rápidas */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-boer-border">
        <div>
          <div className="flex items-center space-x-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-boer-bark tracking-tight">
              Plantel & Genealogia
            </h2>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-boer-copperSoft text-boer-copper border border-boer-copper/30">
              Rebanho Boer
            </span>
          </div>
          <p className="text-xs sm:text-sm text-boer-muted mt-1">
            Cadastro genealógico, controle de pedigrees e monitoramento ponderal contínuo
          </p>
        </div>

        <div className="flex items-center space-x-3">
          {/* Alternar Grid / Tabela */}
          <div className="bg-boer-cream p-1 rounded-xl border border-boer-border flex items-center space-x-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-lg text-xs font-semibold flex items-center transition-all ${
                viewMode === 'grid' 
                  ? 'bg-white text-boer-copper shadow-sm' 
                  : 'text-stone-500 hover:text-stone-900'
              }`}
              title="Visualização em Cards"
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`p-1.5 rounded-lg text-xs font-semibold flex items-center transition-all ${
                viewMode === 'table' 
                  ? 'bg-white text-boer-copper shadow-sm' 
                  : 'text-stone-500 hover:text-stone-900'
              }`}
              title="Visualização em Tabela"
            >
              <List className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={onOpenNewAnimalModal}
            className="px-4 py-2.5 rounded-xl bg-boer-copper hover:bg-boer-copperHover text-white text-xs sm:text-sm font-bold shadow-md shadow-boer-copper/30 flex items-center transition-all hover:scale-[1.02]"
          >
            <PlusCircle className="w-4 h-4 mr-1.5" />
            Cadastrar Caprino
          </button>
        </div>
      </div>

      {/* Barra de Filtros & Pesquisa */}
      <div className="boer-card p-4 sm:p-5 space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          
          {/* Busca Textual */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por nome, RGN, tatuagem ou número do brinco..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-boer-border bg-stone-50/50 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-boer-copper"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
              >
                Limpar
              </button>
            )}
          </div>

          {/* Filtros em Linha */}
          <div className="flex flex-wrap items-center gap-2">
            
            {/* Grau de Sangue PO/PC */}
            <select
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value)}
              className="px-3 py-2.5 rounded-xl border border-boer-border text-xs sm:text-sm font-semibold bg-white text-boer-bark outline-none focus:ring-2 focus:ring-boer-copper cursor-pointer"
            >
              <option value="ALL">Grau: Todos (PO e PC)</option>
              <option value="PO">Apenas PO (Puro de Origem)</option>
              <option value="PC">Apenas PC (Puro por Cruza)</option>
            </select>

            {/* Categoria */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2.5 rounded-xl border border-boer-border text-xs sm:text-sm font-semibold bg-white text-boer-bark outline-none focus:ring-2 focus:ring-boer-copper cursor-pointer"
            >
              <option value="ALL">Categoria: Todas</option>
              <option value="Reprodutor">Reprodutores (Bodes)</option>
              <option value="Matriz">Matrizes (Cabras)</option>
              <option value="Recria">Recria (Jovens)</option>
              <option value="Cabrito">Cabritinhos / Chivos</option>
            </select>

            {/* Sexo */}
            <select
              value={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value)}
              className="px-3 py-2.5 rounded-xl border border-boer-border text-xs sm:text-sm font-semibold bg-white text-boer-bark outline-none focus:ring-2 focus:ring-boer-copper cursor-pointer"
            >
              <option value="ALL">Sexo: Ambos</option>
              <option value="Macho">Machos</option>
              <option value="Fêmea">Fêmeas</option>
            </select>

          </div>
        </div>

        {/* Status da Filtragem */}
        <div className="flex items-center justify-between text-xs text-boer-muted pt-2 border-t border-stone-100">
          <span>Mostrando <strong>{filteredAnimals.length}</strong> caprinos Boer de <strong>{animals.length}</strong> caprinos registrados</span>
          {(selectedGrade !== 'ALL' || selectedCategory !== 'ALL' || selectedGender !== 'ALL' || searchTerm) && (
            <button
              onClick={() => {
                setSelectedGrade('ALL');
                setSelectedCategory('ALL');
                setSelectedGender('ALL');
                setSearchTerm('');
              }}
              className="text-boer-copper font-bold hover:underline"
            >
              Resetar Filtros
            </button>
          )}
        </div>
      </div>

      {/* Visualização em GRID (Cards Ricos Zootécnicos) */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredAnimals.map((animal) => (
            <BoerAnimalCard
              key={animal.id}
              animal={animal}
              onSelect={onSelectAnimal}
            />
          ))}
        </div>
      )}

      {/* Visualização em TABELA (Manejo de Lote & Escritório) */}
      {viewMode === 'table' && (
        <div className="boer-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-boer-cream text-stone-700 font-bold border-b border-boer-border uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="py-3.5 px-4">Caprino Boer / Identificação</th>
                  <th className="py-3.5 px-4">Grau / Cat</th>
                  <th className="py-3.5 px-4">Peso Vivo</th>
                  <th className="py-3.5 px-4">GPD (g/dia)</th>
                  <th className="py-3.5 px-4">ECC (1-5)</th>
                  <th className="py-3.5 px-4">FAMACHA</th>
                  <th className="py-3.5 px-4">Lote / Piquete</th>
                  <th className="py-3.5 px-4 text-right">Ação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-boer-border">
                {filteredAnimals.map((animal) => (
                  <tr 
                    key={animal.id}
                    onClick={() => onSelectAnimal(animal)}
                    className="hover:bg-stone-50 cursor-pointer transition-colors"
                  >
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-3">
                        <img 
                          src={animal.photo} 
                          alt={animal.name} 
                          className="w-10 h-10 rounded-lg object-cover border border-stone-200"
                        />
                        <div>
                          <span className="font-extrabold text-sm text-boer-bark block hover:text-boer-copper">
                            {animal.name}
                          </span>
                          <span className="text-[11px] text-stone-500 font-mono">
                            {animal.rgn} • Tat: {animal.tattoo}
                          </span>
                        </div>
                      </div>
                    </td>

                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-1.5">
                        <span className={animal.bloodGrade === 'PO' ? 'boer-badge-po' : 'boer-badge-pc'}>
                          {animal.bloodGrade}
                        </span>
                        <span className="text-stone-600 font-medium">{animal.category}</span>
                      </div>
                    </td>

                    <td className="py-3 px-4">
                      <span className="font-extrabold text-sm text-boer-bark">{animal.currentWeight} kg</span>
                    </td>

                    <td className="py-3 px-4">
                      <span className="font-bold text-boer-green">+{animal.dailyWeightGain} g/d</span>
                    </td>

                    <td className="py-3 px-4 font-bold text-stone-800">
                      {animal.bodyConditionScore} / 5.0
                    </td>

                    <td className="py-3 px-4">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-black text-white ${
                        animal.famachaScore === 1 ? 'bg-red-700' :
                        animal.famachaScore === 2 ? 'bg-red-500' :
                        animal.famachaScore === 3 ? 'bg-pink-400 text-stone-950' :
                        'bg-pink-200 text-stone-900'
                      }`}>
                        Grau {animal.famachaScore}
                      </span>
                    </td>

                    <td className="py-3 px-4 text-stone-600 font-medium">
                      {animal.lot}
                    </td>

                    <td className="py-3 px-4 text-right">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectAnimal(animal);
                        }}
                        className="px-3 py-1.5 rounded-lg text-xs font-bold bg-boer-cream text-boer-copper hover:bg-boer-copper hover:text-white transition-colors"
                      >
                        Ver Ficha
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
}
