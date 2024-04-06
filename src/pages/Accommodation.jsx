import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import logements from "../data/logements.json";
import Carousel from "../components/Carousel";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";

function Accommodation() {
  const [logement, setLogement] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const foundLogement = logements.find((logement) => logement.id === id);
    if (!foundLogement) {
      navigate("/404");
    } else {
      setLogement(foundLogement);
    }
  }, [id, navigate]);

  if (logement) {
    const data = [
      { title: "Description", text: logement.description },
      { title: "Équipements", text: logement.equipments },
    ];
    return (
      <main className="main-accomodation">
        <Carousel photos={logement.pictures} />
        <div className="host-container">
          <div className="logement-infos row1">
            <div className="logement-infos row1 col">
              <h1>{logement.title}</h1>
              <h3>{logement.location}</h3>
            </div>
          </div>
          <div className="logement-infos row2">
            <ul>
              {logement.tags.map((tag) => {
                return <li>{tag}</li>;
              })}
            </ul>
            <Rating rating={logement.rating} />
          </div>
          <div className="logement-infos host">
            <h3>{logement.host.name}</h3>
            <img src={logement.host.picture} alt="loueur"></img>
          </div>
        </div>
        <Collapse data={data} className="accomodation-container" />
      </main>
    );
  }
}

export default Accommodation;
