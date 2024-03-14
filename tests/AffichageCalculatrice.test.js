import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AffichageCalculatrice from '../src/components/AffichageCalculatrice';

// Test de l'affichage initial
test('affiche la valeur initiale', () => {
  const { getByDisplayValue } = render(<AffichageCalculatrice valeurAffichee="123" />);
  const inputElement = getByDisplayValue(/123/i);
  expect(inputElement).toBeInTheDocument();
});

// Test de la mise à jour de la valeur
test('met à jour la valeur affichée lorsqu\'un bouton chiffre est cliqué', () => {
  const mettreAJourValeur = jest.fn();
  const { getByText } = render(<AffichageCalculatrice mettreAJourValeur={mettreAJourValeur} />);

  fireEvent.click(getByText('1'));
  expect(mettreAJourValeur).toHaveBeenCalledWith('1');
});

// Test de l'effacement de la valeur
test('efface la valeur affichée lorsqu\'on clique sur le bouton Effacer', () => {
  const effacerValeur = jest.fn();
  const { getByText } = render(<AffichageCalculatrice effacerValeur={effacerValeur} />);

  fireEvent.click(getByText('Effacer'));
  expect(effacerValeur).toHaveBeenCalled();
});

// Test du basculement de la valeur négative
test('bascule la valeur de positif à négatif et vice versa lorsqu\'on clique sur +/-', () => {
  const mettreAJourValeur = jest.fn();
  const { getByText } = render(<AffichageCalculatrice valeurAffichee="123" mettreAJourValeur={mettreAJourValeur} />);
  
  fireEvent.click(getByText('+/-'));
  expect(mettreAJourValeur).toHaveBeenCalledWith('-123');
  
  fireEvent.click(getByText('+/-'));
  expect(mettreAJourValeur).toHaveBeenCalledWith('123');
});

// Test de la conversion en pourcentage
test('convertit la valeur en pourcentage lorsqu\'on clique sur %', () => {
  const mettreAJourValeur = jest.fn();
  const { getByText } = render(<AffichageCalculatrice valeurAffichee="100" mettreAJourValeur={mettreAJourValeur} />);
  
  fireEvent.click(getByText('%'));
  expect(mettreAJourValeur).toHaveBeenCalledWith('1');
});