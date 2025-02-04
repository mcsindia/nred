import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const handleLogin = (userType, path) => {
    localStorage.setItem("userType", userType);
    console.log("Stored userType:", userType); 
    navigate(path);
  };

  return (
    <div className="home-container">
      <div className="home-overlay">
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Row className="justify-content-center">
          <Col md={4} className="d-flex justify-content-center">
            <Card className="text-center shadow-lg home-card">
              <Card.Body>
                <Card.Title>Developer Login</Card.Title>
                <Card.Text>
                  Access the developer dashboard to manage and deploy projects.
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleLogin("developer", "/developer-login")}
                >
                  Login
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="d-flex justify-content-center">
            <Card className="text-center shadow-lg home-card">
              <Card.Body>
                <Card.Title>Admin Login</Card.Title>
                <Card.Text>
                  Manage users, settings, and website functionalities from the admin panel.
                </Card.Text>
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
    </div>
  );
};
