import React, { useState } from 'react'
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout'
import { Table, InputGroup, Form, Pagination, Dropdown, DropdownButton } from 'react-bootstrap';
import { FaEye, FaUser, FaFileExport, FaFileExcel, FaFilePdf } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export const ProjectRegistration = () => {
  const navigate = useNavigate();

  // Initial Registration Data
  const initialRegistrations = [
    { id: 1, applicationNumber: 'APP001', name: 'Manu Shrivastava', email: 'manu@example.com', mobile: '1234567890' },
    { id: 2, applicationNumber: 'APP002', name: 'Aman Singh', email: 'aman@example.com', mobile: '0987654321' },
    { id: 3, applicationNumber: 'APP003', name: 'Avaneesh Shukla', email: 'avsneesh@example.com', mobile: '1122334455' },
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

  // Profile Action
  const handleProfile = (registration) => {
    navigate('/developer-profile', { state: { registration } });
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
                <th>Profile</th>
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
                      <FaUser
                        title="Profile"
                        className="icon-green"
                        onClick={() => handleProfile(registration)}
                      />
                    </td>
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
                  <td colSpan="7" className="text-center">No registrations found.</td>
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
