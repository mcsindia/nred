import React, { useState } from 'react';
import { Button, Table, InputGroup, Form, Pagination, Dropdown, DropdownButton } from 'react-bootstrap';
import { FaEdit, FaTrash, FaEye, FaFileExport, FaPlus, FaFileExcel, FaFilePdf } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AdminLayout } from '../../../../../layouts/dms/AdminLayout/AdminLayout';

export const UserList = () => {
  const navigate = useNavigate();

  // Updated User Data
  const initialUsers = [
    { id: 1, username: 'Manu Shrivastava', designation: 'Commissioner', email: 'manu@example.com', mobile: '9876543210', user_role: 'Commissioner', last_modified_by: 'Admin' },
    { id: 2, username: 'Aman Singh', designation: 'Deputy Commissioner', email: 'aman@example.com', mobile: '9123456789', user_role: 'Additional Commissioner', last_modified_by: 'HR' },
    { id: 3, username: 'Avaneesh Shukla', designation: 'Executive Engineer', email: 'avaneesh@example.com', mobile: '8765432109', user_role: 'Section Head', last_modified_by: 'Admin' },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Search Functionality
  const handleSearch = (e) => setSearch(e.target.value);

  // Filter Users
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.username.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.user_role.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter ? user.user_role === filter : true;
    return matchesSearch && matchesFilter;
  });

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  // Edit Action
  const handleEdit = (user) => {
    navigate('/user/edit', { state: { user } });
  };

  // Delete Action
  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <AdminLayout>
      <div className="userlist-container p-3">
        {/* Header Options */}
        <div className="dms-pages-header sticky-header">
          <h3>User List</h3>
          <div className="d-flex">
            <DropdownButton variant="primary" title={<><FaFileExport /> Export</>} className="me-2">
              <Dropdown.Item> <FaFileExcel className="icon-green" /> Export to Excel</Dropdown.Item>
              <Dropdown.Item> <FaFilePdf className="icon-red" /> Export to PDF</Dropdown.Item>
            </DropdownButton>
            <DropdownButton variant="primary" title={<><FaFileExport /> Import</>} className="me-2">
              <Dropdown.Item> <FaFileExcel className="icon-green" /> Import from Excel</Dropdown.Item>
              <Dropdown.Item> <FaFilePdf className="icon-red" /> Import from PDF</Dropdown.Item>
            </DropdownButton>
            <Button variant="primary" onClick={() => navigate('/user/add')}>
              <FaPlus /> Add User
            </Button>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="d-flex justify-content-between mb-3">
          <DropdownButton variant="primary" title="Filter" id="filter-dropdown">
            <Dropdown.Item onClick={() => setFilter('')}>All</Dropdown.Item>
            <Dropdown.Item onClick={() => setFilter('Commissioner')}>Commissioner</Dropdown.Item>
            <Dropdown.Item onClick={() => setFilter('Additional Commissioner')}>Additional Commissioner</Dropdown.Item>
            <Dropdown.Item onClick={() => setFilter('Section Head')}>Section Head</Dropdown.Item>
            <Dropdown.Item className='text-custom-danger' onClick={() => setFilter('')}>Cancel</Dropdown.Item>
          </DropdownButton>

          <InputGroup className="dms-custom-width">
            <Form.Control
              placeholder="Search users..."
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
                <th>Name</th>
                <th>Designation</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>User Role</th>
                <th>Last Modified By</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.length > 0 ? (
                currentUsers.map((user, index) => (
                  <tr key={user.id}>
                    <td>{indexOfFirstItem + index + 1}</td>
                    <td>{user.username}</td>
                    <td>{user.designation}</td>
                    <td>{user.email}</td>
                    <td>{user.mobile}</td>
                    <td>{user.user_role}</td>
                    <td>{user.last_modified_by}</td>
                    <td>
                      <FaEye
                        title="View"
                        className="icon-blue me-2"
                        onClick={() => navigate('/user/profile', { state: { user } })}
                      />
                      <FaEdit
                        title="Edit"
                        className="icon-green me-2"
                        onClick={() => handleEdit(user)}
                      />
                      <FaTrash
                        title="Delete"
                        className="icon-red"
                        onClick={() => handleDelete(user.id)}
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center">No users found.</td>
                </tr>
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
