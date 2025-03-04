import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';

export const AdminDashboard = () => {
  const stats = [
    { title: 'Projects Applied', count: 10, color: '#007bff' },
    { title: 'Projects Approved', count: 5, color: '#117554' }, 
    { title: 'Projects Rejected', count: 2, color: '#D84040' },  
    { title: 'Projects Pending', count: 3, color: '#ffcc00' },  
    { title: 'Payment Received', count: '₹8', color: '#FC5C9C' },  
    { title: 'Payment Pending', count: '₹2', color: '#AD49E1' },  
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

/* import React, { useState } from 'react'
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout'
import { Table, InputGroup, Form, Pagination, Dropdown, DropdownButton } from 'react-bootstrap';
import { FaEye, FaFileExport, FaFileExcel, FaFilePdf} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export const AdminDashboard = () => {
  const navigate = useNavigate();

  // Initial Registration Data
  const initialRegistrations = [
    { id: 1, applicationNumber: 'APP001', name: 'John Doe', email: 'johndoe@example.com', mobile: '1234567890' },
    { id: 2, applicationNumber: 'APP002', name: 'Jane Smith', email: 'janesmith@example.com', mobile: '0987654321' },
    { id: 3, applicationNumber: 'APP003', name: 'Michael Brown', email: 'michaelbrown@example.com', mobile: '1122334455' },
    { id: 4, applicationNumber: 'APP004', name: 'Emily Clark', email: 'emilyclark@example.com', mobile: '9988776655' },
  ];

  const [registrations, setRegistrations] = useState(initialRegistrations);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Search Functionality
  const handleSearch = (e) => setSearch(e.target.value);

  // Filter Registrations based on search input
  const filteredRegistrations = registrations.filter((registration) => {
    return (
      registration.name.toLowerCase().includes(search.toLowerCase()) ||
      registration.applicationNumber.toLowerCase().includes(search.toLowerCase()) ||
      registration.email.toLowerCase().includes(search.toLowerCase()) ||
      registration.mobile.includes(search)
    );
  });

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentRegistrations = filteredRegistrations.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredRegistrations.length / itemsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  // View Action
  const handleView = (registration) => {
    navigate('/registration/view', { state: { registration } });
  };

  return (
    <AdminLayout>
      <div className="registration-list-container p-3">
        <div className="dms-pages-header sticky-header">
          <h3>Registration List</h3>
          <div className="d-flex">
            <DropdownButton variant="primary" title={<><FaFileExport /> Export</>} className="me-2">
              <Dropdown.Item> <FaFileExcel className="icon-green" /> Export to Excel</Dropdown.Item>
              <Dropdown.Item> <FaFilePdf className="icon-red" /> Export to PDF</Dropdown.Item>
            </DropdownButton>
            <DropdownButton variant="primary" title={<><FaFileExport /> Import</>} className="me-2">
              <Dropdown.Item> <FaFileExcel className="icon-green" /> Import from Excel</Dropdown.Item>
              <Dropdown.Item> <FaFilePdf className="icon-red" /> Import from PDF</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
        <div className="d-flex justify-content-between mb-3">
          <InputGroup className="dms-custom-width">
            <Form.Control
              placeholder="Search registrations..."
              value={search}
              onChange={handleSearch}
            />
          </InputGroup>
        </div>
        <div className="dms-table-container">
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>S.no</th>
                <th>Application Number</th>
                <th>Name</th>
                <th>Email ID</th>
                <th>Mobile</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentRegistrations.length > 0 ? (
                currentRegistrations.map((registration) => (
                  <tr key={registration.id}>
                    <td>{registration.id}</td>
                    <td>{registration.applicationNumber}</td>
                    <td>{registration.name}</td>
                    <td>{registration.email}</td>
                    <td>{registration.mobile}</td>
                    <td>
                      <FaEye
                        title="View"
                        className="icon-blue"
                        onClick={() => handleView(registration)}
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center">No registrations found.</td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
        <Pagination className="justify-content-center">
          <Pagination.Prev
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          />
          {[...Array(totalPages)].map((_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          />
        </Pagination>
      </div>
    </AdminLayout>
  )
}
 */