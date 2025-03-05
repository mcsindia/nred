import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';

export const AdminDashboard = () => {
  const stats = [
    { title: 'Projects Applied', count: 10, color: '#007bff' },
    { title: 'Projects Approved', count: 5, color: '#117554' }, 
    { title: 'Projects Rejected', count: 2, color: '#D84040' },  
    { title: 'Projects Pending', count: 3, color: '#ffcc00' },  
    { title: 'Payment Received', count: '₹85632', color: '#FC5C9C' },  
    { title: 'Payment Pending', count: '₹23458', color: '#AD49E1' },  
  ];

  return (
    <AdminLayout>
      <div className="dashboard-container">
        <h2 className="mb-4">Dashboard</h2>
        <Row>
          {stats.map((stat, index) => (
            <Col key={index} md={6} lg={3} className="mb-4">
              <Card 
                style={{
                  backgroundColor: stat.color, 
                  color: 'white', 
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                  borderRadius: '10px',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <Card.Body>
                  <Card.Title className="text-center">
                    <Card.Link 
                      href="/project-registration" 
                      className="project-registration-link" 
                      style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}
                    >
                      {stat.title}
                    </Card.Link>
                  </Card.Title>
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
