import React, { useState } from 'react';
import { Button, Table, Form, InputGroup, Pagination, Dropdown, DropdownButton } from 'react-bootstrap';
import { FaEdit, FaTrash, FaFileExport, FaPlus, FaFileExcel, FaFilePdf } from 'react-icons/fa';
import { AdminLayout } from '../../../../../layouts/dms/AdminLayout/AdminLayout';
import { useNavigate } from 'react-router-dom';

export const SectionList = () => {
    const initialData = [
        { id: 1, name: 'Solar', department: 'Engineering', designation: 'Executive Engineer', description: 'Focuses on solar energy projects and sustainability', date: '2024-01-10', time: '4:15 PM' },
        { id: 2, name: 'Biomass', department: 'Research & Development', designation: 'Deputy Commissioner', description: 'Deals with biomass energy and organic waste processing', date: '2024-02-15', time: '10:00 AM' },
        { id: 3, name: 'Wind', department: 'Environmental Science', designation: ' Commissioner', description: 'Handles wind energy projects and turbine technology', date: '2024-03-05', time: '3:30 PM' },
    ];

    const [sections, setSections] = useState(initialData);
    const [search, setSearch] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    const navigate = useNavigate();

    const handleEdit = (section) => {
        navigate('/section/edit', { state: { section } });
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleFilter = (filter) => {
        setSelectedFilter(filter);
    };

    const filteredData = sections.filter(
        (section) =>
            (section.name.toLowerCase().includes(search.toLowerCase()) ||
                section.description.toLowerCase().includes(search.toLowerCase())) &&
            (selectedFilter ? section.name.toLowerCase().includes(selectedFilter.toLowerCase()) : true)
    );

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <AdminLayout>
            <div className="dms-pages-header sticky-header">
                <h3>Section List</h3>
                <div className="d-flex">
                    <DropdownButton variant="primary" title={<><FaFileExport /> Export</>} className="me-2">
                        <Dropdown.Item>
                            <FaFileExcel className='icon-green' /> Export to Excel
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <FaFilePdf className='icon-red' /> Export to PDF
                        </Dropdown.Item>
                    </DropdownButton>

                    <DropdownButton variant="primary" title={<><FaFileExport /> Import</>} className="me-2">
                        <Dropdown.Item>
                            <FaFileExcel className='icon-green' /> Import from Excel
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <FaFilePdf className='icon-red' /> Import from PDF
                        </Dropdown.Item>
                    </DropdownButton>

                    <Button variant="primary" onClick={() => navigate('/section/add')}>
                        <FaPlus /> Add Section
                    </Button>
                </div>
            </div>

            <div className="d-flex justify-content-between mb-3">
                <DropdownButton variant="primary" title="Filter" id="filter-dropdown">
                    <Dropdown.Item onClick={() => handleFilter('')}>All</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleFilter('Solar')}>Solar</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleFilter('Biomass')}>Biomass</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleFilter('Wind')}>Wind</Dropdown.Item>
                    <Dropdown.Item className='text-custom-danger' onClick={() => handleFilter("")}>Cancel</Dropdown.Item>
                </DropdownButton>

                <InputGroup className="dms-custom-width">
                    <Form.Control
                        placeholder="Search section..."
                        value={search}
                        onChange={handleSearch}
                    />
                </InputGroup>
            </div>

            <div className="table-responsive">
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Section ID</th>
                            <th>Section Name</th>
                            <th>Department</th>
                            <th>Designation</th>
                            <th>Description</th>
                            <th>Created At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((section) => (
                            <tr key={section.id}>
                                <td>{section.id}</td>
                                <td>{section.name}</td>
                                <td>{section.department}</td>
                                <td>{section.designation}</td>
                                <td>{section.description}</td>
                                <td>{`${section.date}`} <br /> {` ${section.time}`}</td>
                                <td className="actions">
                                    <FaEdit className="icon icon-green" title="Edit" onClick={() => handleEdit(section)} />
                                    <FaTrash className="icon icon-red" title="Delete" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

            <Pagination className="justify-content-center">
                <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
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
        </AdminLayout>
    );
};
