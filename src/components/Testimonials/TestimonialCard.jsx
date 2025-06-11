import React from "react";
import { Card } from "react-bootstrap";
import { PiStarBold, PiStarFill } from "react-icons/pi";

export const TestimonialCard = ({ name, comment, stars }) => {
  return (
    <Card
      className="shadow-sm mx-2 mb-4 p-4 bg-info"
      style={{ width: "20rem", height: "60vh" }}
    >
      <div>
        {Array(stars)
          .fill()
          .map((_, index) => (
            <PiStarFill key={index} className="text-primary" />
          ))}
        {Array(5 - stars)
          .fill()
          .map((_, index) => (
            <PiStarBold key={index} className="text-primary" />
          ))}
      </div>
      <h6 className="mt-2 mb-4 text-dark ">{name}</h6>

      <Card.Body className="d-flex flex-column">
        <Card.Text className="text-dark">{comment}</Card.Text>
      </Card.Body>
    </Card>
  );
};
