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
    // Efface la valeur affichée
    effacerValeur();
  
    // Vérifie si la valeur affichée est vide
    if (valeurAffichee === '') return;
    
    // Vérifie si la valeur affichée est déjà négative
    if (valeurAffichee[0] === '-') {
      // Si oui, retire le signe négatif
      mettreAJourValeur(valeurAffichee.slice(1));
    } else {
      // Sinon, ajoute le signe négatif devant la valeur
      mettreAJourValeur('-' + valeurAffichee);
    }
  };
  
  
  
  
  const convertirPourcentage = () => {
    effacerValeur();
    if (!valeurAffichee || valeurAffichee[0] === '-') return;
  
    // Convertit la valeur affichée en nombre
    let nombre = parseFloat(valeurAffichee);
  
    // Si le dernier caractère de la valeur affichée est un chiffre, retire le dernier chiffre
    const dernierCaractereEstChiffre = /\d/.test(valeurAffichee[valeurAffichee.length - 1]);
    if (dernierCaractereEstChiffre) {
      nombre = nombre / 10;
    }
  
    // Convertit en pourcentage
    const pourcentage = nombre * 0.01;
    mettreAJourValeur(pourcentage.toString());
  };

  const handleKeyPress = (e) => {
    const { key } = e;
    if (/[0-9]/.test(key)) {
      mettreAJourValeur(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
      mettreAJourValeur(key);
    } else if (key === 'Enter') {
      evaluerExpression();
    } else if (key === 'Backspace') {
      effacerValeur();
    }
  };
  

  return (
    <div className="calculatrice-container" onKeyDown={handleKeyPress} tabIndex={0}>
      <input type="text" value={valeurAffichee} readOnly className="input-valeur" />
      <div className="boutons-chiffres">{boutonsChiffres}</div>
      <div className="boutons-operateurs">{boutonsOperateurs}</div>
      <button onClick={effacerValeur} className="btn-effacer">Effacer</button>
      <button onClick={evaluerExpression} className="btn-evaluer">=</button>
      <button onClick={toggleNegatif} className="btn-negatif">+/-</button> 
      <button onClick={convertirPourcentage} className="btn-pourcentage">%</button> 
    </div>
  );
};

export default AffichageCalculatrice;
