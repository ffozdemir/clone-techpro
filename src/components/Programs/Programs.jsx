import React from "react";
import { Container, Row } from "react-bootstrap";
import programsData from "./programsData.json";
import { ProgramCard } from "./ProgramCard";

export const Programs = () => {
  return (
    <Container className="bg-quaternary p-4" fluid>
      <Container className="programs-container">
        <h2 className="text-center text-primary h1 my-5 fw-bold ">Programs</h2>
        <Row xs={1} sm={2} md={3} className="g-4">
          {programsData.map((program, index) => (
            <ProgramCard
              key={index}
              image={program.image}
              subtitle={program.subtitle}
              title={program.title}
            />
          ))}
        </Row>
        <div className="text-center mt-5">
          <a
            href="#"
            className="btn btn-secondary text-light px-4 py-2 fw-bold rounded"
            style={{ marginTop: "50px" }}
          >
            All Programs
          </a>
        </div>
      </Container>
    </Container>
  );
};
