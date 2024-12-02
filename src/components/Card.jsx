import React from "react";

// Props:
// - title: il titolo da visualizzare nella card
// - description: la descrizione da visualizzare nella card
const Card = ({ title, description }) => {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {/* Mostra il titolo passato -Props- */}
        <p className="card-text">{description}</p>
        {/* Mostra la descrizione passata -Props- */}
      </div>
    </div>
  );
};

export default Card;
