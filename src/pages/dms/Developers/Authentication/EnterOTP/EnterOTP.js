import React, { useState, useEffect } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useNavigate and useLocation for navigation
import logo from '../../../../../assets/images/logo.png'; 

export const EnterOTP = () => {
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();
  const location = useLocation(); // Use useLocation to get the passed state

  // Set the mobile number from the previous page (Enter Mobile)
  useEffect(() => {
    if (location.state && location.state.mobileNumber) {
      setMobile(location.state.mobileNumber);
    }
  }, [location.state]);

  const handleSubmit = () => {
    if (otp) {
      // Navigate to the Create Password page
      navigate('/developer-dashboard', { state: { mobile } });
    } else {
      alert('Please enter the OTP');
    }
  };

  const handleReset = () => {
    setOtp(''); // Reset OTP field
    navigate('/'); // Navigate back to the Enter Mobile page
  };

  return (
      <div className="login-screen">
        {/* Background Overlay */}
        <div className="login-overlay"> </div>
          <Card className="login-card">
        <div className="text-center">
          <img
            src={logo} // Image path
            alt="Logo"
            className="img-fluid auth-logo-img"
          />
        </div>
        <h4 className="text-center mb-4">Enter OTP</h4>
        <div className="admin-login-form">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Mobile Number"
              value={mobile}
              readOnly // Mobile number is read-only here since it was passed from the previous page
              className="rounded-pill"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>OTP</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="rounded-pill"
            />
          </Form.Group>
          <div className="d-flex justify-content-between">
            <Button
              variant="primary"
              className="rounded-pill px-4"
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <Button
              variant="danger"
              className="rounded-pill px-4"
              onClick={handleReset}
            >
              Reset
            </Button>
          </div>
        </Form>
        </div>
      </Card>
    </div>    
  );
};
