import React, { useState } from "react";

function Collapse({ data, className }) {
  const [activeIndexes, setActiveIndexes] = useState([]);

  const handleClick = (index) => {
    const isOpen = activeIndexes.includes(index);
    setActiveIndexes(
      isOpen
        ? activeIndexes.filter((item) => item !== index)
        : [...activeIndexes, index]
    );
  };

  return (
    <div className={className}>
      {data.map((item, index) => (
        <div
          className={`collapse ${activeIndexes.includes(index) ? "open" : ""}`}
          key={index}
        >
          <div className="collapse-title">
            <h3>{item.title}</h3>
            <img
              src="../assets/arrow-collapse.svg"
              alt="flèche"
              width="24"
              onClick={() => handleClick(index)}
            />
          </div>
          {item.title === "Équipements" ? (
            <ul
              className={`collapse-text ${
                activeIndexes.includes(index) ? "visible" : "hidden"
              }`}
            >
              {item.text.map((equipement, index) => (
                <li key={"equipement" + (index + 1)}>{equipement}</li>
              ))}
            </ul>
          ) : (
            <p
              className={`collapse-text ${
                activeIndexes.includes(index) ? "visible" : "hidden"
              }`}
            >
              {item.text}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Collapse;
