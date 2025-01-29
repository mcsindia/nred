import React, { useState } from 'react';
import { Button, Form, Card } from 'react-bootstrap';
import { FaRedo } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom'; 
import logo from '../../../../../assets/images/logo.png'; 

// Function to generate a new random captcha
const generateCaptcha = () => {
  return Math.floor(Math.random() * 9000) + 1000; // Random 4-digit number
};

export const LoginForm = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState(generateCaptcha()); // Set captcha using the function
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaError, setCaptchaError] = useState('');

  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = () => {
    if (captcha === parseInt(captchaInput)) {
      // Perform login logic here, such as API call for authentication
      alert('Login successful!');
      
      // Navigate to the DMS Dashboard
      navigate('/developer-dashboard'); // Replace '/dashboard' with the actual route
    } else {
      setCaptchaError('Invalid captcha! Please try again.');
    }
  };

  const handleForgetPassword = () => {
    // Navigate to the Forget Password section
    navigate('/developer-authentication/forget-password');
  };

  const handleReset = () => {
    setMobileNumber('');
    setPassword('');
    setCaptchaInput('');
    setCaptchaError('');
  };

  const handleRefreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setCaptchaInput(''); // Clear the previous captcha input
    setCaptchaError(''); // Clear any previous error
  };

  return (
    <div className="authentication-container login-container">
      <Card className="authentication-card">
        {/* Logo Image Section */}
        <div className="text-center mb-4">
          <img
            src={logo} // Image path
            alt="Logo"
            className="img-fluid auth-logo-img"
          />
        </div>
        
        <h3 className="text-center mb-4">Login</h3>
        
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

          {/* Password Field */}
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            <div className="d-flex justify-content-between align-items-center">
              <Form.Control
                type="text"
                placeholder="Enter the captcha"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                className="rounded-pill mt-2 captcha-input"
              />
            </div>
            {captchaError && <p className="captcha-error">{captchaError}</p>}
          </Form.Group>

          {/* Buttons */}
          <div className="d-flex justify-content-between">
            <Button
              variant="primary"
              className="rounded-pill px-4"
              onClick={handleLogin}
            >
              Login
            </Button>
            <Button
              variant="danger"
              className="rounded-pill px-4"
              onClick={handleForgetPassword}
            >
              Forget Password
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};   