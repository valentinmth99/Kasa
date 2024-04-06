import React, { useState } from "react";

function Carousel({ photos }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeAnimation, setfadeAnimation] = useState(false);
  const totalPhotos = photos.length;

  const animateFade = () => {
    setfadeAnimation(true);
    setTimeout(() => setfadeAnimation(false), 10);
  };

  const next = () => {
    animateFade();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPhotos);
  };

  const prev = () => {
    animateFade();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPhotos) % totalPhotos);
  };

  return (
    <div className="carousel">
      <img src={photos[currentIndex]} alt={`Slide ${currentIndex}`} />
      {totalPhotos > 1 && (
        <>
          <div
            className={`carousel-fade ${fadeAnimation ? "active" : ""}`}
          ></div>
          <img
            className="arrow left"
            src="../assets/arrow-left-carousel.svg"
            alt="précédent"
            onClick={prev}
          />
          <img
            className="arrow right"
            src="../assets/arrow-right-carousel.svg"
            alt="suivant"
            onClick={next}
          />
          <span className="carousel pagination">
            {currentIndex + 1}/{totalPhotos}
          </span>
        </>
      )}
    </div>
  );
}

export default Carousel;
