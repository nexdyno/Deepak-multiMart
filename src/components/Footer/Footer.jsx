import React from "react";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="footer-row">
          <Col md={3} sm={5} className="box">
            <div className="logo">
              <ion-icon name="bag"></ion-icon>
              <h1>Multimart</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
              et lectus vel ut sollicitudin elit at amet.
            </p>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>About Us</h2>
            <ul>
              <Link to="/RefundAndCancellation" className="text-white">
                <li>Returns & Refunds</li>
              </Link>
              <Link to="/TermsAndConditions" className="text-white">
                <li>Terms & Conditions</li>
              </Link>
              <Link to="/privacy&policy" className="text-white">
                <li>Privacy Policy</li>
              </Link>
            </ul>
          </Col>

          <Col md={3} sm={5} className="box">
            <h2>Contact Us</h2>
            <ul>
              <li>
                Bhitarwar aadiwasi mohalla, Gwalior, Madhya Pradesh, PIN: 475220
              </li>
              <li>Email: deepakkumarsen9630@gmail.com</li>
              <li>Phone: 7697714259</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
