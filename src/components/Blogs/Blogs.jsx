import React from "react";
import blogCardData from "./blogCardData.json";
import { Col, Container, Row } from "react-bootstrap";
import { BlogCard } from "./BlogCard";

export const Blogs = () => {
  return (
    <Container className="blogs-container d-flex flex-column align-items-center justify-content-center text-center mb-5 mt-2">
      <h2 className="text-center text-primary fw-bold display-6 ">Blog</h2>
      <Row xs={1} sm={2} md={3} className="mt-4">
        {blogCardData.map((blog, index) => (
          <Col key={index} className="d-flex justify-content-center ">
            <BlogCard
              image={blog.image}
              date={blog.date}
              title={blog.title}
              subtitle={blog.subtitle}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
