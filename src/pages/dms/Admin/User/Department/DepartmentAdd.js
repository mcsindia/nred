import React, { useState } from 'react';
import { Button, Container, Form, Alert } from 'react-bootstrap';
import { FaSave, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AdminLayout } from '../../../../../layouts/dms/AdminLayout/AdminLayout';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill CSS

export const DepartmentAdd = () => {
  const navigate = useNavigate(); // Hook to navigate back

  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });

  const [error, setError] = useState('');

  const departmentOptions = [
    'HR', 'Finance', 'Engineering', 'Marketing', 'Sales', 'Operations'
  ];

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle Quill Change
  const handleQuillChange = (value) => {
    setFormData({
      ...formData,
      description: value,
    });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name) {
      setError('Department Name is required.');
      return;
    }

    console.log('New Department Added:', formData);
    alert(`Department "${formData.name}" added successfully!`);

    // Redirect to department list
    navigate('/department');
  };

  // ✅ Custom Quill Toolbar Configuration
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }], // Headings
      [{ font: [] }], // Font Selection
      [{ size: [] }], // Font Size
      ["bold", "italic", "underline", "strike"], // Text Formatting
      [{ list: "ordered" }, { list: "bullet" }], // Ordered & Unordered Lists
      [{ script: "sub" }, { script: "super" }], // Subscript & Superscript
      [{ indent: "-1" }, { indent: "+1" }], // Indentation
      [{ align: [] }], // Text Alignment
      [{ color: [] }, { background: [] }], // Text Color & Background Color
      ["blockquote", "code-block"], // Blockquote & Code Block
      ["link", "image", "video"], // Insert Link, Image, Video
      ["clean"], // Remove Formatting
    ],
  };

  return (
    <AdminLayout>
      <Container className='dms-container'>
        <h4>Add New Department</h4>
        <div className='dms-form-container'>
          {/* Error Message */}
          {error && <Alert variant="danger" onClose={() => setError('')} dismissible>{error}</Alert>}

          <Form onSubmit={handleSubmit}>
            {/* Department Name */}
            <Form.Group className="dms-form-group">
              <Form.Label>Department Name</Form.Label>
              <Form.Select name="name" value={formData.name} onChange={handleChange} required>
                <option value="">Select a department</option>
                {departmentOptions.map((dept, index) => (
                  <option key={index} value={dept}>{dept}</option>
                ))}
              </Form.Select>
            </Form.Group>

            {/* Description with React Quill */}
            <Form.Group className="dms-form-group">
              <Form.Label>Description</Form.Label>
              <div className="quill-container">
              <ReactQuill 
                value={formData.description} 
                onChange={handleQuillChange} 
                modules={modules} 
              />
              </div>
            </Form.Group>

            {/* Buttons */}
            <div className="d-flex justify-content-between mt-4">
              <Button type="cancel" onClick={() => navigate('/department')}>
                <FaArrowLeft /> Back
              </Button>
              <Button type="submit">
                <FaSave /> Save Department
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </AdminLayout>
  );
};
