import React from 'react';

const AffichageCalculatrice = ({ valeurAffichee, mettreAJourValeur, effacerValeur, evaluerExpression }) => {
  const chiffres = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const operateurs = ['/', '*', '-', '+'];

  const boutonsChiffres = chiffres.map((chiffre) => (
    <button key={chiffre} onClick={() => mettreAJourValeur(chiffre)} className="btn-chiffre">
      {chiffre}
    </button>
  ));

  const boutonsOperateurs = operateurs.map((operateur) => (
    <button key={operateur} onClick={() => mettreAJourValeur(operateur)} className="btn-operateur">
      {operateur}
    </button>
  ));

  const toggleNegatif = () => {
    // Vérifie si la valeur actuelle est négative
    if (valeurAffichee[0] === '-') {
      // Si oui, retire le signe négatif
      mettreAJourValeur(valeurAffichee.slice(1));
    } else {
      // Sinon, ajoute un signe négatif
      mettreAJourValeur('-' + valeurAffichee);
    }
  };

  return (
    <div className="calculatrice-container">
      <input type="text" value={valeurAffichee} readOnly className="input-valeur" />
      <div className="boutons-chiffres">{boutonsChiffres}</div>
      <div className="boutons-operateurs">{boutonsOperateurs}</div>
      <button onClick={effacerValeur} className="btn-effacer">Effacer</button>
      <button onClick={evaluerExpression} className="btn-evaluer">=</button>
      <button onClick={toggleNegatif} className="btn-negatif">+/-</button> {/* Bouton pour convertir en négatif */}
    </div>
  );
};

export default AffichageCalculatrice;
