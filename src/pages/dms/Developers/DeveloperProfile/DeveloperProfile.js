import React, { useState } from "react";
import { AdminLayout } from "../../../../layouts/dms/AdminLayout/AdminLayout";
import { Form, Row, Col, Button } from "react-bootstrap";

export const DeveloperProfile = () => {
    const [formType, setFormType] = useState("individual");

    return (
        <AdminLayout>
            <div className="container mt-4">
                <h3 className="mb-4">Developer Profile</h3>
                <Form>
                    {/* Personal Information */}
                    <h5 className="mb-3">Personal Information</h5>
                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Group controlId="name">
                                <Form.Label>Name*</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" required />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="designation">
                                <Form.Label>Designation</Form.Label>
                                <Form.Control type="text" placeholder="Enter Designation" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Group controlId="department">
                                <Form.Label>Department</Form.Label>
                                <Form.Control type="text" placeholder="Enter Department" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="dob">
                                <Form.Label>Date of Birth*</Form.Label>
                                <Form.Control type="date" required />
                            </Form.Group>
                        </Col>
                        <Col md={6} className="mt-3">
                            <Form.Group controlId="panNumber">
                                <Form.Label>PAN No.*</Form.Label>
                                <Form.Control type="text" name="panNumber" placeholder="Enter PAN Number" required />
                            </Form.Group>
                        </Col>
                    </Row>

                    {/* Contact Information */}
                    <h5 className="mb-3">Contact Information</h5>
                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Group controlId="email">
                                <Form.Label>Email*</Form.Label>
                                <Form.Control type="email" placeholder="Enter Email" required />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="phone">
                                <Form.Label>Phone Number*</Form.Label>
                                <Form.Control type="text" placeholder="Enter Phone Number" required />
                            </Form.Group>
                        </Col>
                    </Row>

                    {/* Address Information */}
                    <h5 className="mb-3">Address Information</h5>
                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Group controlId="state">
                                <Form.Label>State*</Form.Label>
                                <Form.Control type="text" placeholder="Enter State" required />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="district">
                                <Form.Label>District*</Form.Label>
                                <Form.Control type="text" placeholder="Enter District" required />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col md={12}>
                            <Form.Group controlId="address">
                                <Form.Label>Full Address*</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Enter Full Address" required />
                            </Form.Group>
                        </Col>
                    </Row>

                    {/* Experience Details */}
                    <h5 className="mb-3">Experience Details</h5>
                    <Form.Group controlId="experience">
                        <Form.Label>Do you have experience in Renewable Energy or Energy Storage Projects?*</Form.Label>
                        <div className="d-flex gap-3">
                            <Form.Check type="radio" label="Yes" name="experience" />
                            <Form.Check type="radio" label="No" name="experience" />
                        </div>
                    </Form.Group>
                    <Form.Group controlId="sectorType" className="mt-3">
                        <Form.Label>If yes, select sector*</Form.Label>
                        <Form.Control as="select">
                            <option>Select sector</option>
                            <option>Renewable Energy</option>
                        </Form.Control>
                    </Form.Group>

                    {/* Company / Firm Details */}
                    <h5 className="mb-3 mt-3">Company / Firm Details</h5>
                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Group controlId="companyName">
                                <Form.Label>Company / Firm Name*</Form.Label>
                                <Form.Control type="text" placeholder="Enter Company Name" required />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="gstin">
                                <Form.Label>GSTIN No.*</Form.Label>
                                <Form.Control type="text" placeholder="Enter GSTIN Number" required />
                            </Form.Group>
                        </Col>
                    </Row>

                </Form>
            </div>
        </AdminLayout>
    );
};
