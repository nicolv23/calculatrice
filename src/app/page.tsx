"use client";

import React, { useState } from 'react';
import AffichageCalculatrice from '../components/AffichageCalculatrice';
import HistoriqueCalculs from '../components/HistoriqueCalculatrice';
import '../styles/calculatrice.css';

const Calculatrice: React.FC = () => {
  const [valeurAffichee, setValeurAffichee] = useState<string>('');
  const [historique, setHistorique] = useState<string[]>([]); 
  const [modeSombre, setModeSombre] = useState<boolean>(false);

  const toggleModeSombre = () => {
    setModeSombre(!modeSombre);
  };

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
      const operation = `${valeurAffichee} = ${resultat}`;
      const nouvelHistorique = [...historique, operation];
      setValeurAffichee(resultat.toString());
      setHistorique(nouvelHistorique);
    } catch (error) {
      console.error('Erreur lors de l\'évaluation de l\'expression :', error);
      setValeurAffichee('Erreur');
    }
  };

  return (
    <div className={`page-container ${modeSombre ? 'mode-sombre' : ''}`}>
      <div className="header">
        <h1>Calculatrice Next JS</h1>
        <div className="button-container">
          <button onClick={toggleModeSombre}>
            {modeSombre ? 'Activer le mode clair' : 'Activer le mode sombre'}
          </button>
        </div>
      </div>
      <div className="content-wrapper">
        <div className={`calculatrice-container ${modeSombre ? 'mode-sombre' : ''}`}>
          <AffichageCalculatrice
            valeurAffichee={valeurAffichee}
            mettreAJourValeur={mettreAJourValeur}
            effacerValeur={effacerValeur}
            evaluerExpression={evaluerExpression}
          />
        </div>
        <div className={`historique-container ${modeSombre ? 'mode-sombre' : ''}`}>
          <HistoriqueCalculs historique={historique} />
        </div>
      </div>
    </div>
  );
};

export default Calculatrice;