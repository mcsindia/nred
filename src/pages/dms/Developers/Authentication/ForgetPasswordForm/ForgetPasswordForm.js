import React, { useState } from 'react';
import { Button, Form, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import logo from '../../../../../assets/images/logo.png'; 

export const ForgetPasswordForm = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleReset = () => {
    // Navigate to the Reset Password page
    navigate('/developer-login/reset-password'); // Replace with the actual route
  };

  const handleBack = () => {
    // Navigate back to the Login page
    navigate('/developer-login'); // Replace with the actual route
  };

  return (
     <div className="login-screen">
        {/* Background Overlay */}
        <div className="login-overlay"> </div>
          <Card className="login-card">
        {/* Logo Image Section */}
        <div className="text-center">
          <img
            src={logo} // Image path
            alt="Logo"
            className="img-fluid auth-logo-img"
          />
        </div>
        
        <h4 className="text-center mb-4">Forget Password</h4>
        <div className="admin-login-form">
        <Form>
          {/* Mobile Number Field */}
          <Form.Group className="mb-3">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your mobile number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="rounded-pill"
            />
          </Form.Group>

          {/* Buttons */}
          <div className="d-flex justify-content-between">
            <Button
              variant="primary"
              className="rounded-pill px-4"
              onClick={handleReset}
            >
              Reset
            </Button>
            <Button
              variant="secondary"
              className="rounded-pill px-4"
              onClick={handleBack}
            >
              Back
            </Button>
          </div>
        </Form>
        </div>
      </Card>
    </div>
  );
};
