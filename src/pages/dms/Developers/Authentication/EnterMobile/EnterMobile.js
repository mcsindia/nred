import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import logo from '../../../../../assets/images/logo.png'; 

export const EnterMobile = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const navigate = useNavigate(); // Hook to navigate to other pages

  const handleGetOTP = () => {
    // Check if the mobile number has at least 10 digits
    if (mobileNumber && mobileNumber.length === 10) {
      alert('OTP sent to: ' + mobileNumber);
      
      // Navigate to the Enter OTP page and pass the mobile number in the state
      navigate('/enter-otp', { state: { mobileNumber } });
    } else {
      alert('Please enter a valid mobile number with at least 10 digits');
    }
  };

  return (
    <div className="authentication-container">
      <Card className="authentication-card">
        {/* Logo Image Section */}
        <div className="text-center mb-4">
          <img
            src={logo} // Image path
            alt="Logo"
            className="img-fluid auth-logo-img"
          />
        </div>

        <h3 className="text-center mb-4">Enter Mobile Number</h3>
        <Form>
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
          <div className="d-flex justify-content-between">
            <Button
              variant="primary"
              className="rounded-pill px-4"
              onClick={handleGetOTP}
            >
              Get OTP
            </Button>
            <Button
              variant="danger"
              className="rounded-pill px-4"
              onClick={() => setMobileNumber('')}
            >
              Reset
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};
