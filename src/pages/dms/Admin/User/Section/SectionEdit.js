import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { AdminLayout } from '../../../../../layouts/dms/AdminLayout/AdminLayout';

export const SectionEdit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Extract section data passed from SectionList page
  const { section } = location.state || {};
  
  // Initialize state with the current section data
  const [sectionName, setSectionName] = useState(section?.name || '');
  const [description, setDescription] = useState(section?.description || '');
  const [createdDate, setCreatedDate] = useState(section?.created_date || '');
  const [designation, setDesignation] = useState(section?.designation || '');
  const [department, setDepartment] = useState(section?.department || '');

  // Handle form submission (Update section)
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can make an API call here to update the section on the backend

    // Navigate back to the section list page after updating
    navigate('/section');
  };

  return (
    <AdminLayout>
      <div className="dms-container">
        <h3 className="mb-4">Edit Section Details</h3>
        
        <div className="dms-form-container">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="sectionName" className="dms-form-group">
              <Form.Label>Section Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter section name"
                value={sectionName}
                onChange={(e) => setSectionName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="description" className="dms-form-group">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="createdDate" className="dms-form-group">
              <Form.Label>Created Date</Form.Label>
              <Form.Control
                type="date"
                value={createdDate}
                onChange={(e) => setCreatedDate(e.target.value)}
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

            <Form.Group controlId="department" className="dms-form-group">
              <Form.Label>Department</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                required
              />
            </Form.Group>

            <Button type="submit">Save Changes</Button>
            <Button type="cancel" className="ms-2" onClick={() => navigate('/section')}>
              Cancel
            </Button>
          </Form>
        </div>
      </div>
    </AdminLayout>
  );
};
