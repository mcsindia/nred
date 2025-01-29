import React, { useState } from 'react';
import { Button, Form, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AdminLayout } from '../../../layouts/dms/AdminLayout/AdminLayout';

export const UserAdd = () => {
  const navigate = useNavigate();

  // State for form fields
  const [formData, setFormData] = useState({
    id: '',
    username: '',
    designation: '',
    email: '',
    mobile: '',
    role_id: '',
    password: '',
    status: 'active',
  });

  const [error, setError] = useState('');

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Generate a random password
  const generatePassword = () => {
    const length = 8;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    let password = '';
    for (let i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setFormData({ ...formData, password });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Form Validation
    if (!formData.username || !formData.email || !formData.mobile || !formData.role_id) {
      setError('Name, Email, Mobile, and User Role are required fields.');
      return;
    }

    console.log('Form Submitted', formData);

    // Simulate saving the data and navigating back
    navigate('/user'); // Redirect back to User List
  };

  return (
    <AdminLayout>
      <div className='dms-container'>
        <Row>
          <Col>
            <h3 className="mb-4">Add New User</h3>
          </Col>
        </Row>
        <div className='dms-form-container'>

          {error && <Alert variant="danger" onClose={() => setError('')} dismissible>{error}</Alert>}

          <Form onSubmit={handleSubmit}>
            {/* Name */}
            <Form.Group className="dms-form-group">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Enter name"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Section */}
            <Form.Group className="dms-form-group">
              <Form.Label>Section</Form.Label>
              <Form.Select
                name="role_id"
                value={formData.role_id}
                onChange={handleChange}
                required
              >
                <option value="">Select Section</option>
                <option value="Employee">Bio Mass</option>
                <option value="Vendor">Solar</option>
              </Form.Select>
            </Form.Group>

            {/* Designation */}
            <Form.Group className="dms-form-group">
              <Form.Label>Designation</Form.Label>
              <Form.Control
                type="text"
                name="designation"
                placeholder="Enter designation"
                value={formData.designation}
                onChange={handleChange}
              />
            </Form.Group>

            {/* Email */}
            <Form.Group className="dms-form-group">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Mobile */}
            <Form.Group className="dms-form-group">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="tel"
                name="mobile"
                placeholder="Enter mobile number"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* User Role */}
            <Form.Group className="dms-form-group">
              <Form.Label>User Role</Form.Label>
              <Form.Select
                name="role_id"
                value={formData.role_id}
                onChange={handleChange}
                required
              >
                <option value="">Select Role</option>
                <option value="Employee">Employee</option>
                <option value="Vendor">Vendor</option>
                <option value="Client">Client</option>
              </Form.Select>
            </Form.Group>

            {/* Password */}
            <Form.Group className="dms-form-group">
              <Form.Label>Password</Form.Label>
              <div className="d-flex align-items-center">
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className='me-3'
                />
                <Button
                  variant="success"
                  onClick={generatePassword}
                  className="flex-shrink-0"
                >
                  Generate
                </Button>
              </div>
            </Form.Group>

            {/* Status */}
            <Form.Group className="dms-form-group">
              <Form.Label>Status</Form.Label>
              <Form.Select
                name="status"
                value={formData.status}
                onChange={handleChange}
                required
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </Form.Select>
            </Form.Group>

            {/* Buttons */}
            <div className="d-flex">
              <Button type="submit" variant="primary" className="me-2">
                Save Changes
              </Button>
              <Button variant="secondary" onClick={() => navigate('/user')}>
                Cancel
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </AdminLayout>
  );
};
