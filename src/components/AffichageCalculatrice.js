import React from 'react';

const AffichageCalculatrice = ({ valeurAffichee, mettreAJourValeur, effacerValeur, evaluerExpression }) => {
  const chiffres = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];
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

  return (
    <div className="calculatrice-container">
      <input type="text" value={valeurAffichee} readOnly className="input-valeur" />
      <div className="boutons-chiffres">{boutonsChiffres}</div>
      <div className="boutons-operateurs">{boutonsOperateurs}</div>
      <button onClick={effacerValeur} className="btn-effacer">Effacer</button>
      <button onClick={evaluerExpression} className="btn-evaluer">=</button>
    </div>
  );
};

export default AffichageCalculatrice;
