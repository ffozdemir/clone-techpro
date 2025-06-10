import React from "react";
import { Card, Col } from "react-bootstrap";
import "./ProgramCard.scss";

export const ProgramCard = ({ image, subtitle, title }) => {
  return (
    <Col className="program-card-col ">
      <Card className="program-card shadow-sm border-light ">
        <Card.Img variant="top" src={image} alt={title} />
        <Card.Subtitle className=" bg-primary text-light p-2 rounded cursor-pointer">
          {subtitle}
        </Card.Subtitle>

        <div className="d-flex p-3 justify-content-between align-items-center">
          <Card.Title>
            <a href="#" className="text-decoration-none text-dark">
              {title}
            </a>
          </Card.Title>
          <Card.Link
            href="#"
            className="bg-primary text-light text-decoration-none p-2 text-center rounded "
          >
            See More
          </Card.Link>
        </div>
      </Card>
    </Col>
  );
};
