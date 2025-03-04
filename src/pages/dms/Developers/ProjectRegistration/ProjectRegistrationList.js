import React, { useState } from 'react';
import { Button, Table, InputGroup, Form, Pagination, Dropdown, DropdownButton } from 'react-bootstrap';
import { FaEdit, FaEye, FaFileExport, FaPlus, FaFileExcel, FaFilePdf, FaDownload } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AdminLayout } from '../../../../layouts/dms/AdminLayout/AdminLayout';

export const ProjectRegistrationList = () => {
  const navigate = useNavigate();

  // Initial Project Registration Data
  const initialProjects = [
    { id: 1, name: 'Omkareshwar Floating Solar Plant 250MW', dateApplied: '2025-01-10', paymentStatus: 'Pending', registrationStatus: 'Pending' },
    { id: 2, name: 'Morena Solar Plant 750MW', dateApplied: '2025-01-12', paymentStatus: 'under review', registrationStatus: 'Under Review' },
    { id: 3, name: 'Rewa Solar Plant', dateApplied: '2025-01-14', paymentStatus: 'Paid', registrationStatus: 'Completed' },
  ];

  const [projects] = useState(initialProjects);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Search Functionality
  const handleSearch = (e) => setSearch(e.target.value);

  // Filter Projects
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(search.toLowerCase()) ||
      project.dateApplied.toLowerCase().includes(search.toLowerCase()) ||
      project.paymentStatus.toLowerCase().includes(search.toLowerCase()) ||
      project.registrationStatus.toLowerCase().includes(search.toLowerCase());
    const matchesFilterStatus = filterStatus ? project.registrationStatus === filterStatus : true;
    return matchesSearch && matchesFilterStatus;
  });

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  // View Action
  const handleView = (project) => {
    navigate('/registration/view', { state: { project } });
  };

  // Edit Action
  const handleEdit = (project) => {
    navigate('/project/edit', { state: { project } });
  };

  return (
    <AdminLayout>
      <div className="project-registration-list-container p-3">
        {/* Header Options */}
        <div className="dms-pages-header sticky-header">
          <h3>Project Registration List</h3>
          <div className="d-flex">
            <DropdownButton variant="primary" title={<><FaFileExport /> Export</>} className="me-2">
              <Dropdown.Item> <FaFileExcel className="icon-green" /> Export to Excel</Dropdown.Item>
              <Dropdown.Item> <FaFilePdf className="icon-red" /> Export to PDF</Dropdown.Item>
            </DropdownButton>
            <DropdownButton variant="primary" title={<><FaFileExport /> Import</>} className="me-2">
              <Dropdown.Item> <FaFileExcel className="icon-green" /> Import from Excel</Dropdown.Item>
              <Dropdown.Item> <FaFilePdf className="icon-red" /> Import from PDF</Dropdown.Item>
            </DropdownButton>
            <Button variant="primary" onClick={() => navigate('/project-registration/add')}>
              <FaPlus /> Add Project
            </Button>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="d-flex justify-content-between mb-3">
          {/* Registration Status Filter */}
          <DropdownButton variant="primary" title="Filter " id="filter-status-dropdown">
            <Dropdown.Item onClick={() => setFilterStatus('')}>All</Dropdown.Item>
            <Dropdown.Item onClick={() => setFilterStatus('Completed')}>Completed</Dropdown.Item>
            <Dropdown.Item onClick={() => setFilterStatus('In Progress')}>In Progress</Dropdown.Item>
            <Dropdown.Item onClick={() => setFilterStatus('Pending')}>Pending</Dropdown.Item>
            <Dropdown.Item className='text-custom-danger' onClick={() => setFilterStatus('')}>Cancel</Dropdown.Item>
          </DropdownButton>

          {/* Search Input */}
          <InputGroup className="dms-custom-width">
            <Form.Control
              placeholder="Search projects..."
              value={search}
              onChange={handleSearch}
            />
          </InputGroup>
        </div>

        {/* Table */}
        <div className="dms-table-container">
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>S.no</th>
                <th>Project Name</th>
                <th>Date Applied</th>
                <th>Payment Status</th>
                <th>LOA</th>
                <th>Registration Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentProjects.length > 0 ? (
                currentProjects.map((project) => (
                  <tr key={project.id}>
                    <td>{project.id}</td>
                    <td>{project.name}</td>
                    <td>{project.dateApplied}</td>
                    <td>
                      {project.paymentStatus === 'Pending' ? (
                        <Button variant="primary" size="sm">Pay</Button>
                      ) : project.paymentStatus === 'under review' ? (
                        <span>Under Review</span>
                      ) : project.paymentStatus === 'Paid' ? (
                        <span>Paid</span>
                      ) : null}
                    </td>
                    <td>
                      {project.paymentStatus === 'Paid' ? (
                        <>
                          Generated
                          <FaDownload
                            className="icon-black ms-2"
                            onClick={() => navigate('/loa-form', { state: { project } })}
                            title="Download LOA Form"
                          />
                        </>
                      ) : (
                        'Not Generated'
                      )}
                    </td>
                    <td>{project.registrationStatus}</td>
                    <td>
                      <FaEye className="icon-blue me-2" onClick={() => handleView(project)} />
                      <FaEdit className="icon-green" onClick={() => handleEdit(project)} />
                    </td>
                  </tr>
                ))
              ) : (
                <tr><td colSpan="7" className="text-center">No projects found.</td></tr>
              )}
            </tbody>
          </Table>
        </div>
           {/* Pagination */}
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
  );
};
