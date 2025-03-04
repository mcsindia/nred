import React from "react";
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.png"; 

export const Home = () => {
  const navigate = useNavigate();

  const handleLogin = (userType, path) => {
    localStorage.setItem("userType", userType);
    navigate(path);
  };

  return (
    <div className="home-container">
      <div className="home-overlay"></div>
      <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100">
        {/* Logo Section (Ensures visibility) */}
        <Image src={logo} alt="Logo" className="home-logo" />

        {/* Cards Section */}
        <Row className="justify-content-center g-4">
          <Col xs={12} sm={8} md={6} lg={4} className="d-flex justify-content-center">
            <Card className="text-center shadow-lg home-card">
              <Card.Body>
                <Card.Title>Developer Login</Card.Title>
                <Card.Text>Access the developer dashboard to manage and register projects.</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleLogin("developer", "/developer-login")}
                >
                  Login
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={8} md={6} lg={4} className="d-flex justify-content-center">
            <Card className="text-center shadow-lg home-card">
              <Card.Body>
                <Card.Title>Departmental Login</Card.Title>
                <Card.Text>Manage departmental users, developers, and project registration.</Card.Text>
                <Button
                  variant="danger"
                  onClick={() => handleLogin("admin", "/admin-login")}
                >
                  Login
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
