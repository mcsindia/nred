import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';

export const DeveloperDashboard = () => {
  const stats = [
    { title: 'Projects Applied', count: 10, bg: 'primary' },
    { title: 'Projects Approved', count: 5, bg: 'success' },
    { title: 'Projects Rejected', count: 2, bg: 'danger' },
    { title: 'Projects Pending', count: 3, bg: 'warning' },
  ];

  return (
    <AdminLayout>
      <div className="dashboard-container">
        <h2 className="mb-4">Dashboard</h2>
        <Row>
          {stats.map((stat, index) => (
            <Col key={index} md={6} lg={3} className="mb-4">
              <Card className={`text-white bg-${stat.bg} shadow`}>
                <Card.Body>
                  <Card.Title className="text-center">{stat.title}</Card.Title>
                  <h3 className="text-center">{stat.count}</h3>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </AdminLayout>
  );
};