import React, { useState } from "react";
import "./carousel.css";
import "./styles.css";
const Carousel = () => {
  const slides = [
    {
      id: 1,
      image: "https://i.pinimg.com/control2/736x/e7/8b/dc/e78bdca5b7e947712fa6e93a06400a43.jpg",
   
    },
    {
      id: 2,
      image: "https://i.pinimg.com/736x/65/da/0c/65da0ce6fd1df455605afa2c30aa1ad7.jpg",
     
    },
    {
      id: 3,
      image: "https://i.pinimg.com/736x/68/4b/0c/684b0c9dbd4256e94065f7fedeb239c9.jpg",
      
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-btn prev" onClick={handlePrev}>
        &#8249;
      </button>

      <div className="carousel-slide">
        <img
          src={slides[currentIndex].image}
          alt={`Slide ${currentIndex + 1}`}
        />
        <p className="carousel-caption">{slides[currentIndex].caption}</p>
      </div>

      <button className="carousel-btn next" onClick={handleNext}>
        &#8250;
      </button>
    </div>
  );
};

export default Carousel;

