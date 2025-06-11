import { Col, Container, Row } from "react-bootstrap";
import { SocialIcons } from "../Utils/SocialIcons";
import FooterLogo from "../../assets/footerlogo.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import footerLinkData from "./footerLinkData.json";
import { FooterLink } from "./FooterLink";

export const Footer = () => {
  return (
    <Container
      fluid
      className="bg-primary text-white pt-5 px-5 pb-3 footer-container"
    >
      <Row xs={1} md={2} lg={5} className="g-4">
        <Col lg={4}>
          <img
            src={FooterLogo}
            alt="techpro logo"
            style={{ width: "300px" }}
            className="mb-3"
          />
          <address className="mb-2">
            <FaLocationDot className="me-2" />9 E Loockerman St Suite 311 Dover,
            DE 19901
          </address>
          <p className="mb-2">
            <FaPhoneAlt className="me-2" />
            <a
              className="text-decoration-none text-light"
              href="tel:+15873307959"
            >
              +1 587 330 79 59
            </a>
          </p>
          <p className="mb-3">
            <HiOutlineMail className="me-2" />
            <a
              href="mailto:info@techproeducation.com"
              className="text-decoration-none text-light"
            >
              info@techproeducation.com
            </a>
          </p>
          <p className="small">
            Techproed is a registered trade mark of Rainpark Technologies LLC
          </p>
        </Col>

        {footerLinkData.map((section) => (
          <Col key={section.id} lg={2}>
            <h5 className="text-secondary mb-3">{section.title}</h5>
            <ul className="list-unstyled">
              {section.links?.map((link) => (
                <li key={link.id} className="mb-2">
                  <FooterLink title={link.title} href={link.href} />
                </li>
              ))}
            </ul>
          </Col>
        ))}
      </Row>

      <hr className="my-4" />

      <Row>
        <Col md={6}>
          <p className="mb-0 small">
            &copy; 2025 TechPro Education All Rights Reserved
          </p>
          <a href="#" className="text-decoration-none text-light fs-6 fw-light">
            Privacy Policy{" "}
          </a>
          <a href="#" className="text-decoration-none text-light fs-6 fw-light">
            ISO Management System Policies{" "}
          </a>
          <a href="#" className="text-decoration-none text-light fs-6 fw-light">
            Cookie Policy
          </a>
        </Col>
        <Col className="d-flex justify-content-evenly align-items-center">
          <SocialIcons fontSize="20px" />
        </Col>
      </Row>
    </Container>
  );
};
