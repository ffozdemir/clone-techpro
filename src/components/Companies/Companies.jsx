import React from "react";
import { Container } from "react-bootstrap";
import companiesData from "./companiesData.json";

export const Companies = () => {
  return (
    <Container className="companies-container d-flex flex-column align-items-center justify-content-center text-center">
      <h2 className="mb-4 text-primary fw-bold">
        Companies our alumni are employed at
      </h2>
      <p className="mb-5">
        {" "}
        The alumni of Techpro Education have the opportunity to take their seats
        in leading companies in the IT industry. Prominent tech corporates hire
        our candidates for their challenging software tasks.{" "}
      </p>
      <div className="companies-logos d-flex flex-wrap align-items-center justify-content-center gap-4">
        {companiesData.map((company, index) => (
          <div
            key={index}
            className="company-logo d-flex align-items-center justify-content-center m-2"
            style={{ width: "200px", height: "200px" }}
          >
            <img
              src={company.src}
              alt={company.alt}
              className="img-fluid object-fit-cover rounded"
              loading="lazy"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>
        ))}
      </div>
    </Container>
  );
};
