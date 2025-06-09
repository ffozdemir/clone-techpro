import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import carouselData from "./carouselData.json";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./CarouselHero.scss";

export const CarouselHero = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const customPrevIcon = <FaArrowLeft className="arrow" />;
  const customNextIcon = <FaArrowRight className="arrow" />;

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      touch={true}
      interval={3000}
      fade
      indicators={false}
      prevIcon={customPrevIcon}
      nextIcon={customNextIcon}
    >
      {carouselData.map((item, index) => (
        <Carousel.Item key={index} className="carousel-item">
          <img src={item.image} alt={item.alt} />
          <Carousel.Caption className="carousel-caption">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
