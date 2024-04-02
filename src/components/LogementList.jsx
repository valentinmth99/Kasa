import React, { useState } from "react";
import LogementCard from "./LogementCard";
import logements from "../data/logements.json";

function LogementList() {
  const [currentPage, setCurrentPage] = useState(1);
  const logementsPerPage = 6;
  const lastIndex = currentPage * logementsPerPage;
  const firstIndex = lastIndex - logementsPerPage;
  const currentLogements = logements.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(logements.length / logementsPerPage);

  const goToPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  
  return (
    <div className="logements-container">
      <div className="logements-grid">
        {currentLogements.map((logement) => (
          <LogementCard
            key={logement.id}
            cover={logement.cover}
            title={logement.title}
          />
        ))}
      </div>
      <div className="logements-nav">
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          <img src="../assets/arrow-left.svg" alt="précédent" width="50" />
        </button>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          <img src="../assets/arrow-right.svg" alt="suivant" width="50" />
        </button>
      </div>
    </div>
  );
}

export default LogementList;
