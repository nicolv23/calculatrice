import React from 'react';

const HistoriqueCalculatrice = ({ historique }) => {
  return (
    <div className="historique-container">
      <h2>Historique des Calculs</h2>
      <ul>
        {historique.map((calcul, index) => (
          <li key={index}>{calcul}</li>
        ))}
      </ul>
    </div>
  );
};

export default HistoriqueCalculatrice;
