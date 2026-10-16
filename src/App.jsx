'use client';

import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import PlantelView from './components/PlantelView';
import ReproductionModule from './components/ReproductionModule';
import SanitaryModule from './components/SanitaryModule';
import TechnicalGuide from './components/TechnicalGuide';
import AnimalDetailModal from './components/AnimalDetailModal';
import AnimalFormModal from './components/AnimalFormModal';
import AlertsModal from './components/AlertsModal';
import { MOCK_ANIMALS } from './data/mockBoerData';

export default function App() {
  const [animals, setAnimals] = useState(() => MOCK_ANIMALS.filter(animal => animal.species === 'Caprino' && animal.breed === 'Boer'));
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [isNewAnimalModalOpen, setIsNewAnimalModalOpen] = useState(false);
  const [isAlertsModalOpen, setIsAlertsModalOpen] = useState(false);

  // Contagem de alertas pendentes
  const pendingAlertsCount = animals.filter(
    a => a.famachaScore >= 3 || (a.vaccines && a.vaccines.some(v => v.status === 'Atrasada'))
  ).length;

  // Adicionar novo caprino Boer ao rebanho
  const handleSaveAnimal = (newAnimal) => {
    setAnimals(prev => [newAnimal, ...prev]);
    setSelectedAnimal(newAnimal); // abre a ficha do caprino recém cadastrado
  };

  return (
    <div className="min-h-screen flex flex-col bg-boer-cream text-boer-bark font-sans selection:bg-boer-copper selection:text-white">
      
      {/* Top Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenNewAnimalModal={() => setIsNewAnimalModalOpen(true)}
        animalsCount={animals.length}
        pendingAlertsCount={pendingAlertsCount}
        onOpenAlerts={() => setIsAlertsModalOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {activeTab === 'dashboard' && (
          <Dashboard
            animals={animals}
            onSelectAnimal={(animal) => setSelectedAnimal(animal)}
            onNavigateToTab={(tab) => setActiveTab(tab)}
            onOpenNewAnimalModal={() => setIsNewAnimalModalOpen(true)}
          />
        )}

        {activeTab === 'plantel' && (
          <PlantelView
            animals={animals}
            onSelectAnimal={(animal) => setSelectedAnimal(animal)}
            onOpenNewAnimalModal={() => setIsNewAnimalModalOpen(true)}
          />
        )}

        {activeTab === 'reproducao' && (
          <ReproductionModule
            animals={animals}
            onSelectAnimal={(animal) => setSelectedAnimal(animal)}
          />
        )}

        {activeTab === 'sanitario' && (
          <SanitaryModule
            animals={animals}
          />
        )}

        {activeTab === 'guia' && (
          <TechnicalGuide />
        )}
      </main>

      {/* Modal de Detalhes / Ficha Zootécnica */}
      <AnimalDetailModal
        animal={selectedAnimal}
        onClose={() => setSelectedAnimal(null)}
      />

      {/* Modal de Cadastro de Novo Caprino Boer */}
      <AnimalFormModal
        isOpen={isNewAnimalModalOpen}
        onClose={() => setIsNewAnimalModalOpen(false)}
        onSaveAnimal={handleSaveAnimal}
      />

      {/* Modal de Alertas Sanitários e Partos */}
      <AlertsModal
        isOpen={isAlertsModalOpen}
        onClose={() => setIsAlertsModalOpen(false)}
        animals={animals}
        onSelectAnimal={(animal) => setSelectedAnimal(animal)}
        onNavigateToTab={(tab) => setActiveTab(tab)}
      />

      {/* Footer dedicado ao manejo de cabras Boer */}
      <footer className="bg-white border-t border-boer-border/80 py-6 text-xs text-boer-muted mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 rounded-md bg-boer-copper text-white flex items-center justify-center font-bold text-[10px]">
              BM
            </div>
            <span className="font-bold text-boer-bark">Casa da Cabra</span>
            <span>• Caderno de manejo caprino</span>
          </div>

          <div className="text-center sm:text-right">
            <span>Foco: manejo, genética, reprodução e saúde de cabras Boer</span>
            <span className="hidden sm:inline"> • </span>
            <span className="text-boer-green font-semibold">Cuidado, saúde e alimentação</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
