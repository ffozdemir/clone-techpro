import React from "react";
import { Badge, Card } from "react-bootstrap";

export const BlogCard = ({ image, date, title, subtitle }) => {
  return (
    <Card className="blog-card shadow-sm border-0">
      <Card.Img variant="top" src={image} />
      <Badge>{subtitle}</Badge>
      <Card.Body>
        <Card.Text className="text-start text-tertiary fw-bold">
          {date}
        </Card.Text>
        <Card.Title className="text-dark text-start">{title}</Card.Title>
      </Card.Body>
    </Card>
  );
};
