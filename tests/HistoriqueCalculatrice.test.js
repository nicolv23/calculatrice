import React from 'react';
import { render } from '@testing-library/react';
import HistoriqueCalculatrice from '../src/components/HistoriqueCalculatrice';

// Test de l'affichage initial
test('affiche correctement l\'historique des calculs', () => {
  const historique = ['2+2=4', '3*5=15', '10/2=5'];
  const { getByText } = render(<HistoriqueCalculatrice historique={historique} />);
  
  expect(getByText('Historique des Calculs')).toBeInTheDocument();
  expect(getByText('2+2=4')).toBeInTheDocument();
  expect(getByText('3*5=15')).toBeInTheDocument();
  expect(getByText('10/2=5')).toBeInTheDocument();
});

// Test lorsque l'historique est vide
test('affiche un message approprié lorsque l\'historique est vide', () => {
  const historique = [];
  const { getByText } = render(<HistoriqueCalculatrice historique={historique} />);
  
  expect(getByText('Historique des Calculs')).toBeInTheDocument();
  expect(getByText('Aucun calcul effectué.')).toBeInTheDocument();
});


