import HeaderLogo from "../../assets/headerlogo.svg";
import { FaSearch } from "react-icons/fa";
import {
  NavDropdown,
  Nav,
  Navbar,
  Form,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import navigationData from "./navData.json";

function Navigation() {
  return (
    <Navbar
      bg="quaternary"
      data-bs-theme="light"
      className="shadow-sm p-4 d-flex align-items-center justify-content-between "
      expand="md"
    >
      <Navbar.Brand href="#home">
        <img src={HeaderLogo} alt="tehcpro logo" className="w-75 h-75" />
      </Navbar.Brand>
      <Nav className="d-flex align-items-center justify-content-between w-100 text-center flex-wrap">
        {Object.entries(navigationData).map(([title, items]) => {
          if (items.length === 0) {
            return (
              <Nav.Link key={title} href="#">
                {title}
              </Nav.Link>
            );
          }
          return (
            <NavDropdown key={title} title={title}>
              {items.map((item, index) => (
                <NavDropdown.Item key={index} href={item.href}>
                  {item.title}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          );
        })}

        <Form>
          <Row>
            <Col className="position-relative">
              <Form.Control type="text" placeholder="Search" className="pe-5" />
              <Button
                type="submit"
                className="position-absolute top-50 end-0 translate-middle-y bg-transparent border-0 me-2"
              >
                <FaSearch className="text-tertiary" />
              </Button>
            </Col>
          </Row>
        </Form>
      </Nav>
    </Navbar>
  );
}

export default Navigation;
