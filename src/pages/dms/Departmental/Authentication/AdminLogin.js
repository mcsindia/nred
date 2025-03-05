import React, { useState } from 'react';
import { Button, Form, Card } from 'react-bootstrap';
import { FaRedo } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import logo from '../../../../assets/images/logo.png';

const generateCaptcha = () => {
  return Math.random().toString(36).substring(2, 8).toUpperCase(); // Alphanumeric captcha
};

export const AdminLogin = () => {
  const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [captcha, setCaptcha] = useState(generateCaptcha());
   const [captchaInput, setCaptchaInput] = useState('');
   const [captchaError, setCaptchaError] = useState('');
 
   const navigate = useNavigate();
 
   const handleLogin = () => {
     if (captcha === captchaInput.toUpperCase()) {
       alert('Login successful!');
       navigate('/admin-dashboard');
     } else {
       setCaptchaError('Invalid captcha! Please try again.');
     }
   };
 
   const handleForgetPassword = () => {
     // Navigate to the Forget Password section
     navigate('/admin--authentication/forget-password');
   };
   const handleRefreshCaptcha = () => {
     setCaptcha(generateCaptcha());
     setCaptchaInput('');
     setCaptchaError('');
   };
 
   return (
     <div className="login-screen">
       {/* Background Overlay */}
       <div className="login-overlay"></div>
 
       {/* Header Section with Logo and Department Name */}
       <div className="admin-header">
         <img src={logo} alt="Government Logo" className="auth-logo-img" />
         <h4 className="text-white">New And Renewable Energy Department</h4>
         <p className="text-white">Government of Madhya Pradesh</p>
       </div>
 
       {/* Login Box */}
       <Card className="login-card">
         <h4 className="text-center mb-3">Login</h4>
         <div className="admin-login-form">
           <Form>
             <Form.Group className="mb-3">
               <Form.Label>Email</Form.Label>
               <Form.Control
                 type="text"
                 placeholder="Enter your username"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 className="rounded-pill"
               />
             </Form.Group>
 
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
 
             <Form.Group className="mb-3">
               <Form.Label>Captcha</Form.Label>
               <div className="captcha-container">
                 <span className="captcha-text">{captcha}</span>
                 <FaRedo className="refresh-icon" onClick={handleRefreshCaptcha} title="Refresh CAPTCHA" />
               </div>
               <Form.Control
                 type="text"
                 placeholder="Enter the captcha"
                 value={captchaInput}
                 onChange={(e) => setCaptchaInput(e.target.value)}
                 className="rounded-pill mt-2"
               />
               {captchaError && <p className="captcha-error">{captchaError}</p>}
             </Form.Group>
 
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
         </div>
       </Card>
     </div>
  )
}
