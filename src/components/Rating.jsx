import React from "react";

function Rating({ rating }) {
  const activeStars = Number(rating);
  const inactiveStars = 5 - rating;
  const activeArray = [...Array(activeStars).keys()];
  const inactiveArray = [...Array(inactiveStars).keys()];

  return (
    <div>
      {activeArray.map((number) => (
        <img
          src="../assets/star-active.svg"
          alt={`Etoile active${number}`}
          key={"ratingActive" + number}
        />
      ))}
      {inactiveArray.map((number) => (
        <img
          src="../assets/star-inactive.svg"
          alt={`Etoile inactive${number}`}
          key={"ratingInactive" + number}
        />
      ))}
    </div>
  );
}

export default Rating;
