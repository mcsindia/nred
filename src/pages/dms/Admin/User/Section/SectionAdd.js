import React, { useState } from 'react';
import { Button, Form, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AdminLayout } from '../../../../../layouts/dms/AdminLayout/AdminLayout';

export const SectionAdd = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        department: '',
        designation: '',
        description: '',
        created_date: '',
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.department || !formData.designation || !formData.description || !formData.created_date) {
            setError('All fields are required.');
            return;
        }
        console.log('Form Submitted', formData);
        navigate('/section');
    };

    return (
        <AdminLayout>
            <div className='dms-container'>
                <Row>
                    <Col>
                        <h3 className="mb-4">Add New Section</h3>
                    </Col>
                </Row>
                <div className='dms-form-container'>
                    {error && <Alert variant="danger" onClose={() => setError('')} dismissible>{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="dms-form-group">
                            <Form.Label>Section Name</Form.Label>
                            <Form.Control type="text" name="name" placeholder="Enter section name" value={formData.name} onChange={handleChange} required />
                        </Form.Group>

                        <Form.Group className="dms-form-group">
                            <Form.Label>Department</Form.Label>
                            <Form.Control type="text" name="department" placeholder="Enter department" value={formData.department} onChange={handleChange} required />
                        </Form.Group>

                        <Form.Group className="dms-form-group">
                            <Form.Label>Designation</Form.Label>
                            <Form.Control type="text" name="designation" placeholder="Enter designation" value={formData.designation} onChange={handleChange} required />
                        </Form.Group>

                        <Form.Group className="dms-form-group">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} name="description" placeholder="Enter description" value={formData.description} onChange={handleChange} required />
                        </Form.Group>

                        <Form.Group className="dms-form-group">
                            <Form.Label>Created Date</Form.Label>
                            <Form.Control type="date" name="created_date" value={formData.created_date} onChange={handleChange} required />
                        </Form.Group>

                        <Button type="submit">Save Changes</Button>
                        <Button type="cancel" className="ms-2" onClick={() => navigate('/section')}>Cancel</Button>
                    </Form>
                </div>
            </div>
        </AdminLayout>
    );
};
