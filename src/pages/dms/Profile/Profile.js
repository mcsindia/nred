import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { AdminLayout } from '../../../layouts/dms/AdminLayout/AdminLayout';
import profile_img from '../../../assets/images/profile-img.jpg';

export const Profile = () => {
  return (
    <AdminLayout>
      <div className="profile-container  vh-100">
        <Card className="profile-card p-4 shadow-sm">
          <Row className="align-items-center mb-5 ">
            <Col xs="auto">
              <img
                src={profile_img}
                alt="Profile"
                className="rounded-circle"
              />
            </Col>
            <Col>
              <h5>Your Name</h5>
              <p className="text-muted">yourname@gmail.com</p>
            </Col>
            <Col xs="auto">
              <Button variant="secondary">Edit</Button>
            </Col>
          </Row>
          <div>
            <Row className="mb-3 border-bottom pb-2">
              <Col><strong>First Name</strong></Col>
              <Col>Your Name</Col>
            </Row>
            <Row className="mb-3 border-bottom pb-2">
              <Col><strong>Last Name</strong></Col>
              <Col>Your Name</Col>
            </Row>
            <Row className="mb-3 border-bottom pb-2">
              <Col><strong>Email Account</strong></Col>
              <Col>yourname@gmail.com</Col>
            </Row>
            <Row className="mb-3 border-bottom pb-2">
              <Col><strong>Mobile Number</strong></Col>
              <Col>+91 1234567890</Col>
            </Row>
            <Row className="mb-3 ">
              <Col><strong>Location</strong></Col>
              <Col>India</Col>
            </Row>
            <Button variant='danger' className='mt-4' >Logout</Button>
          </div>
        </Card>
      </div>
    </AdminLayout>
  );
};
