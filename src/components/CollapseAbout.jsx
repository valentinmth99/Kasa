import React, { useState } from "react";

const CollapseAbout = () => {
  const [activeIndexes, setActiveIndexes] = useState([]);

  const handleClick = (index) => {
    const isOpen = activeIndexes.includes(index);
    setActiveIndexes(
      isOpen
        ? activeIndexes.filter((item) => item !== index)
        : [...activeIndexes, index]
    );
  };

  const content = [
    {
      title: "Fiabilité",
      text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
      title: "Respect",
      text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      title: "Service",
      text: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      title: "Sécurité",
      text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  return (
    <div className="collapse-container">
      {content.map((item, index) => (
        <div className={`collapse ${activeIndexes.includes(index) ? 'open' : ''}`} key={index}>
          <div className="collapse-title">
            <h3>{item.title}</h3>
            <img src="../assets/arrow-collapse.svg" alt="flèche" width="24" onClick={() => handleClick(index)} />
          </div>
          {activeIndexes.includes(index) && <p>{item.text}</p>}
        </div>
      ))}
    </div>
  );
};

export default CollapseAbout;
