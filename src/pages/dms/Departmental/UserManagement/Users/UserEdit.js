import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { AdminLayout } from '../../../../../layouts/dms/AdminLayout/AdminLayout';

export const UserEdit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Extract user data passed from UserList page
  const { user } = location.state || {};
  
  // Initialize state with the current user data
  const [username, setUsername] = useState(user?.username || '');
  const [email, setEmail] = useState(user?.email || '');
  const [mobile, setMobile] = useState(user?.mobile || '');
  const [designation, setDesignation] = useState(user?.designation || '');
  const [userRole, setUserRole] = useState(user?.user_role || '');
  const [lastModifiedBy, setLastModifiedBy] = useState(user?.last_modified_by || '');
  const [isActive, setIsActive] = useState(user?.is_active || false);

  // Handle form submission (Update user)
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can make an API call here to update the user on the backend

    // Navigate back to the user list page after updating
    navigate('/user');
  };

  return (
    <AdminLayout>
      <div className="dms-container">
        <h3 className="mb-4">Edit User Details</h3>
        
        <div className="dms-form-container">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username" className="dms-form-group">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="email" className="dms-form-group">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="mobile" className="dms-form-group">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="designation" className="dms-form-group">
              <Form.Label>Designation</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter designation"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="userRole" className="dms-form-group">
              <Form.Label>User Role</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter user role"
                value={userRole}
                onChange={(e) => setUserRole(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="lastModifiedBy" className="dms-form-group">
              <Form.Label>Last Modified By</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last modified by"
                value={lastModifiedBy}
                onChange={(e) => setLastModifiedBy(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="dms-form-group" controlId="formDriverStatus">
              <Form.Label>Status</Form.Label>
              <Form.Select
                name="status"
                value={isActive}
                onChange={(e) => setIsActive(e.target.value)}
                required
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </Form.Select>
            </Form.Group>

            <Button type="submit">Save Changes</Button>
            <Button type="cancel" className="ms-2" onClick={() => navigate('/user')}>
              Cancel
            </Button>
          </Form>
        </div>
      </div>
    </AdminLayout>
  );
};
