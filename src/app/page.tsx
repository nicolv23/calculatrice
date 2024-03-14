"use client";

import React, { useState } from 'react';
import AffichageCalculatrice from '../components/AffichageCalculatrice';
import '../styles/calculatrice.css';

const Calculatrice: React.FC = () => {
  const [valeurAffichee, setValeurAffichee] = useState<string>('');

  // Fonction pour mettre à jour la valeur affichée
  const mettreAJourValeur = (nouvelleValeur: string) => {
    setValeurAffichee((prevValeur) => prevValeur + nouvelleValeur);
  };

  // Fonction pour effacer la valeur affichée
  const effacerValeur = () => {
    setValeurAffichee('');
  };

  // Fonction pour évaluer l'expression mathématique
  const evaluerExpression = () => {
    try {
      const resultat = eval(valeurAffichee);
      setValeurAffichee(resultat.toString());
    } catch (error) {
      console.error('Erreur lors de l\'évaluation de l\'expression :', error);
      setValeurAffichee('Erreur');
    }
  };

  return (
    <div className="page-container">
      <h1>Calculatrice Next JS</h1>
      <div className="calculatrice-container">
        <AffichageCalculatrice
          valeurAffichee={valeurAffichee}
          mettreAJourValeur={mettreAJourValeur}
          effacerValeur={effacerValeur}
          evaluerExpression={evaluerExpression}
        />
      </div>
    </div>
  );
};

export default Calculatrice;
