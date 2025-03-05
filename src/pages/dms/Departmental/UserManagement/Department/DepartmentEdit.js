import React, { useState } from 'react';
import { AdminLayout } from '../../../../../layouts/dms/AdminLayout/AdminLayout';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill CSS

export const DepartmentEdit = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve department data from state
  const { department } = location.state || {};

  const [formData, setFormData] = useState({
    id: department?.id || '',
    name: department?.name || '',
    description: department?.description || '',
    createdAt: department?.createdAt || '',
  });

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle Quill Change
  const handleQuillChange = (value) => {
    setFormData({ ...formData, description: value });
  };

  // Handle Save
  const handleSave = (e) => {
    e.preventDefault();

    if (!formData.name) {
      alert('Department Name is required!');
      return;
    }

    console.log('Updated Department:', formData);
    alert(`Department "${formData.name}" updated successfully!`);

    // Handle save logic (e.g., API call or update state)
    navigate('/department'); // Navigate back to department list
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
        <h4>Edit Department Details</h4>
        <div className='dms-form-container'>
          <Form onSubmit={handleSave}>
            {/* Department Name */}
            <Form.Group className="dms-form-group">
              <Form.Label>Department Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter department name"
                required
              />
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
              <Button type="submit" variant="primary">
                Save Changes
              </Button>
              <Button type="button" variant="secondary" onClick={() => navigate('/department')}>
                Cancel
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </AdminLayout>
  );
};
