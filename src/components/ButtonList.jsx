import React from "react";

// Componente ButtonList
// Props:
// - onSelect: una funzione callback per gestire il linguaggio selezionato
const ButtonList = ({ languages, onSelect }) => {
  return (
    <div className="mb-3">
      {/* Mappa l'array `languages` per creare un pulsante per ogni linguaggio */}
      {languages.map((language) => (
        <button
          key={language.id} // Chiave per ogni pulsante
          onClick={() => onSelect(language)} // Chiama la funzione `onSelect` passando il linguaggio selezionato
          className="btn btn-outline-primary me-2"
        >
          {language.title}{" "}
          {/* Mostra il titolo del linguaggio come testo del pulsante */}
        </button>
      ))}
    </div>
  );
};

export default ButtonList;
