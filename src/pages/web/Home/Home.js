import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

const handleLogin = (userType, path) => {
    localStorage.setItem("userType", userType);
    console.log("Stored userType:", userType); // Debugging log
    navigate(path);
  };
   

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={4}>
          <Card className="text-center shadow-lg">
            <Card.Body>
              <Card.Title>Developer Login</Card.Title>
              <Card.Text>
                Access the developer dashboard to manage and deploy projects.
              </Card.Text>
              <Button variant="primary" onClick={() => handleLogin("developer", "/developer-login")}>
                Login
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center shadow-lg">
            <Card.Body>
              <Card.Title>Admin Login</Card.Title>
              <Card.Text>
                Manage users, settings, and website functionalities from the admin panel.
              </Card.Text>
              <Button variant="danger" onClick={() => handleLogin("admin", "/admin-login")}>
                Login
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
