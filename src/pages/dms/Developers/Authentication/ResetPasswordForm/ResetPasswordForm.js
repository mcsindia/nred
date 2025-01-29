import React, { useState } from 'react';
import { Button, Form, Card } from 'react-bootstrap';
import { FaRedo } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import logo from '../../../../../assets/images/logo.png';

// Function to generate a new random captcha
const generateCaptcha = () => {
  return Math.floor(Math.random() * 9000) + 1000; // Random 4-digit number
};

export const ResetPasswordForm = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [captcha, setCaptcha] = useState(generateCaptcha()); // Set captcha using the function
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaError, setCaptchaError] = useState('');
  
  const navigate = useNavigate(); // Hook for navigation

  const handleResetPassword = () => {
    if (password === confirmPassword) {
      if (captcha === parseInt(captchaInput)) {
        alert('Password reset successfully!');
        
        // Navigate to Login page after successful password reset
        navigate('/login');
      } else {
        setCaptchaError('Invalid captcha! Please try again.');
      }
    } else {
      alert('Passwords do not match!');
    }
  };

  const handleRefreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setCaptchaInput(''); // Clear the previous captcha input
    setCaptchaError(''); // Clear any previous error
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
        
        <h3 className="text-center mb-4">Reset Password</h3>
        
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

          {/* New Password Field */}
          <Form.Group className="mb-3">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-pill"
            />
          </Form.Group>

          {/* Confirm Password Field */}
          <Form.Group className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="rounded-pill"
            />
          </Form.Group>

          {/* Captcha Field */}
          <Form.Group className="mb-3">
            <Form.Label>Captcha</Form.Label>
            <div className="captcha-display">
              <span className="captcha-text">{captcha}</span>
              <FaRedo
                className="refresh-icon"
                onClick={handleRefreshCaptcha}
                title="Refresh CAPTCHA"
              />
            </div>
            <Form.Control
              type="text"
              placeholder="Enter the captcha"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              className="rounded-pill mt-2 captcha-input"
            />
            {captchaError && <p className="captcha-error">{captchaError}</p>}
          </Form.Group>

          {/* Reset Password Button */}
          <div className="d-flex justify-content-center">
            <Button
              variant="primary"
              className="rounded-pill px-4"
              onClick={handleResetPassword}
            >
              Reset Password
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};
