import React from "react";

const ButtonList = ({ languages, onSelect }) => {
  return (
    <div className="mb-3">
      {languages.map((language) => (
        <button
          key={language.id}
          onClick={() => onSelect(language)}
          className="btn btn-outline-primary me-2"
        >
          {language.title}
        </button>
      ))}
    </div>
  );
};

export default ButtonList;
