import React, { useState } from "react";
import { Tabs, Tab, Form, Button, Row, Col, Card, Table, Modal} from "react-bootstrap";
import { FaEye, FaFilePdf } from "react-icons/fa";
import { AdminLayout } from "../../../../layouts/dms/AdminLayout/AdminLayout";
import { useNavigate } from "react-router-dom";

export const ProjectRegistrationAdd = () => {
    const [activeTab, setActiveTab] = useState("individualOrCompany");
    const tabKeys = ["individualOrCompany", "projectDetails", "powerEvacuation", "documents"];
    const [formType, setFormType] = useState("individual"); // 'individual' or 'company'
    const [entityType, setEntityType] = useState(""); // Tracks selected entity type
    const [businessNature, setBusinessNature] = useState(""); // Tracks selected business nature
    const [uploadedFiles, setUploadedFiles] = useState({});
    const [locations, setLocations] = useState([{ latitude: "", longitude: "" }]);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const handleAddLocation = () => {
        setLocations([...locations, { latitude: "", longitude: "" }]);
    };

    const handleGoBack = () => {
        const currentIndex = tabKeys.indexOf(activeTab);
        if (currentIndex > 0) {
            setActiveTab(tabKeys[currentIndex - 1]);
        }
    };

    const handleSaveAndNext = () => {
        const currentIndex = tabKeys.indexOf(activeTab);
        if (currentIndex < tabKeys.length - 1) {
            setActiveTab(tabKeys[currentIndex + 1]);
        }
    };

    const handleFileUpload = (index, file) => {
        setUploadedFiles((prev) => ({ ...prev, [index]: file }));
    };

    const documentList = [
        "Declaration of Applying for Project Registration as a Sole Proprietary (In case Type of Entity is Individual)",
        "Signed and Notarized Power of Attorney as per Format",
        "Scheme related documents (if any) and attach schematic",
        "Self Attested copy of Land Ownership",
        "Copy of Sale Deed duly notarized / Copy of Agreement C",
        "Copy of the Agreement with the owner duly registered",
        "Declaration of Harit Urja Vikas (On Letterhead duly signed)",
        "Certificate copy of MoA of association of company / Firm or Certified Copy (Bye-laws of registered society as applicable)",
        "Certificate of Incorporation",
        "PAN Card",
        "GST Certificate",
        "TIN/DIN",
        "Udhyam Registration (If Applicable)",
        "Gumasta License (If Applicable)",
        "Certificate copy of partnership deed (If Applicable)",
    ];

    return (
        <AdminLayout>
            <div className="container mt-4">
                <Card className="shadow">
                    <Card.Header className="project-registration-header">
                        <h3>New & Renewable Energy Project Registration</h3>
                    </Card.Header>
                    <Card.Body>
                        <Tabs
                            activeKey={activeTab}
                            onSelect={(k) => setActiveTab(k)}
                            className="mb-3"
                        >
                            {/* Tab 1: Individual or Company Details */}
                            <Tab eventKey="individualOrCompany" title="Individual / Company Details" tabClassName="bold-tab">
                                <Form>
                                    <div className="mb-3 d-flex" style={{ gap: "20px" }}>
                                        <Form.Check
                                            type="radio"
                                            id="individualRadio"
                                            label="Individual Details"
                                            name="formType"
                                            value="individual"
                                            checked={formType === "individual"}
                                            onChange={() => setFormType("individual")}
                                        />
                                        <Form.Check
                                            type="radio"
                                            id="companyRadio"
                                            label="Company / Firm Details"
                                            name="formType"
                                            value="company"
                                            checked={formType === "company"}
                                            onChange={() => setFormType("company")}
                                        />
                                    </div>

                                    {/* Individual Details Form */}
                                    {formType === "individual" && (
                                        <div>
                                            <h5 className="form-headings">Individual Details</h5>
                                            <Row className="mb-3">
                                                <Col md={6}>
                                                    <Form.Group controlId="panNumber">
                                                        <Form.Label className="field-title">PAN No.*</Form.Label>
                                                        <Form.Control type="text" placeholder="Enter PAN Number" required />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group controlId="name">
                                                        <Form.Label className="field-title">Name*</Form.Label>
                                                        <Form.Control type="text" placeholder="Enter Name" required />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row className="mb-3">
                                                <Col md={6}>
                                                    <Form.Group controlId="dob">
                                                        <Form.Label className="field-title">Date of Birth*</Form.Label>
                                                        <Form.Control type="date" required />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group controlId="fatherName">
                                                        <Form.Label className="field-title">Father's Name*</Form.Label>
                                                        <Form.Control type="text" placeholder="Enter Father's Name" required />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row className="mb-3">
                                                <Col md={6}>
                                                    <Form.Group controlId="state">
                                                        <Form.Label className="field-title">State*</Form.Label>
                                                        <Form.Control type="text" placeholder="Enter State" required />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group controlId="district">
                                                        <Form.Label className="field-title">District*</Form.Label>
                                                        <Form.Control type="text" placeholder="Enter District" required />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Form.Group controlId="experience">
                                                <h5 className="form-headings">Experience Details</h5>
                                                <Form.Label className="field-title">
                                                    Whether the Applicant has prior Experience in Renewable Energy or
                                                    Energy Storage Projects*
                                                </Form.Label>
                                                <div className=" yes-no-checkbox">
                                                    <Form.Check type="radio" label="Yes" name="experience" />
                                                    <Form.Check type="radio" label="No" name="experience" />
                                                </div>
                                            </Form.Group>
                                            <Form.Group controlId="sectorType" className="mt-3">
                                                <Form.Label className="field-title">if yes then choose sector*</Form.Label>
                                                <Form.Control as="select">
                                                    <option>Select sector</option>
                                                    <option>Renewable Energy</option>
                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Group controlId="blacklist" className="mt-3">
                                                <Form.Label className="field-title">
                                                    Whether the Applicant or any of its promoters / Directors / Associates
                                                    are blacklisted by any central Government or State Government /
                                                    Department / Agency in India*
                                                </Form.Label>
                                                <div className=" yes-no-checkbox">
                                                    <Form.Check type="radio" label="Yes" name="blacklist" />
                                                    <Form.Check type="radio" label="No" name="blacklist" />
                                                </div>
                                            </Form.Group>
                                        </div>
                                    )}

                                    {/* Company / Firm Details Form */}
                                    {formType === "company" && (
                                        <div>
                                            <h5 className="form-headings">Company / Firm Details</h5>
                                            <Row className="mb-3">
                                                <Col md={6}>
                                                    <Form.Group controlId="gstin">
                                                        <Form.Label className="field-title">GSTIN No.*</Form.Label>
                                                        <Form.Control type="text" placeholder="Enter GSTIN Number" required />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group controlId="companyName">
                                                        <Form.Label className="field-title">Company / Firm Name*</Form.Label>
                                                        <Form.Control type="text" placeholder="Enter Company Name" required />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row className="mb-3">
                                                <Col md={6}>
                                                    <Form.Group controlId="entityType">
                                                        <Form.Label className="field-title">Type of Entity*</Form.Label>
                                                        <Form.Control as="select" onChange={(e) => setEntityType(e.target.value)}>
                                                            <option>Select Type of Entity</option>
                                                            <option>Private Limited</option>
                                                            <option>Public Limited</option>
                                                            <option>Others</option>
                                                        </Form.Control>
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group controlId="customEntityType">
                                                        <Form.Label className="field-title">Enter Type of Entity (If Type of Entity Others)</Form.Label>
                                                        <Form.Control type="text" placeholder="Enter Type of Entity" required />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row className="mb-3">
                                                <Col md={6}>
                                                    <Form.Group controlId="businessNature">
                                                        <Form.Label className="field-title">Nature of Business*</Form.Label>
                                                        <Form.Control as="select" onChange={(e) => setBusinessNature(e.target.value)}>
                                                            <option>Select Nature of Business</option>
                                                            <option>Renewable Energy</option>
                                                            <option>Energy Storage</option>
                                                            <option>Others</option>
                                                        </Form.Control>
                                                    </Form.Group>
                                                </Col>

                                                <Col md={6}>
                                                    <Form.Group controlId="custombusinessType">
                                                        <Form.Label className="field-title">Enter Type of Business (If Type of Business Nature Others)</Form.Label>
                                                        <Form.Control type="text" placeholder="Enter Type of Entity" required />
                                                    </Form.Group>
                                                </Col>
                                            </Row>

                                            <Row className="mb-3">
                                                <Col md={6}>
                                                    <Form.Group controlId="ceoName">
                                                        <Form.Label className="field-title">Name of CEO / Managing Director</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Enter Name of CEO / Managing Director"
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group controlId="isGovernmentEntity">
                                                        <Form.Label className="field-title">
                                                            Whether Application Firm is a Government Entity*
                                                        </Form.Label>
                                                        <div className=" yes-no-checkbox">
                                                            <Form.Check type="radio" label="Yes" name="govEntity" />
                                                            <Form.Check type="radio" label="No" name="govEntity" />
                                                        </div>
                                                    </Form.Group>
                                                </Col>
                                            </Row>

                                            <h5 className="form-headings">Registered Address of Firm</h5>
                                            <Row className="mb-3">
                                                <Col md={6}>
                                                    <Form.Group controlId="registeredAddress">
                                                        <Form.Label className="field-title">Registered Address*</Form.Label>
                                                        <Form.Control type="text" placeholder="Enter Registered Address" required />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group controlId="companyWebsite">
                                                        <Form.Label className="field-title">Company Website</Form.Label>
                                                        <Form.Control type="text" placeholder="Enter Company Website" />
                                                    </Form.Group>
                                                </Col>
                                            </Row>

                                            <h5 className="form-headings">Authorised Signatory / Nodal Office Details</h5>
                                            <Row className="mb-3">
                                                <Col md={6}>
                                                    <Form.Group controlId="name">
                                                        <Form.Label className="field-title">Name*</Form.Label>
                                                        <Form.Control type="text" placeholder="Enter Name" required />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group controlId="designation">
                                                        <Form.Label className="field-title">Designation</Form.Label>
                                                        <Form.Control type="text" placeholder="Enter Designation" />
                                                    </Form.Group>
                                                </Col>
                                            </Row>

                                            <h5 className="form-headings">Corresponding Address</h5>
                                            <Row className="mb-3">
                                                <Col md={6}>
                                                    <Form.Group controlId="name">
                                                        <Form.Label className="field-title">State</Form.Label>
                                                        <Form.Control as="select">
                                                            <option>Select State</option>
                                                            <option>Madhya Pradesh</option>
                                                        </Form.Control>
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group controlId="designation">
                                                        <Form.Label className="field-title">District</Form.Label>
                                                        <Form.Control as="select">
                                                            <option>Select your district</option>
                                                            <option>Agar Malwa</option>
                                                            <option>Alirajpur</option>
                                                            <option>Anuppur</option>
                                                            <option>Ashoknagar</option>
                                                            <option>Balaghat</option>
                                                            <option>Barwan</option>
                                                            <option>Betul</option>
                                                            <option>Bhind</option>
                                                            <option>Bhopal</option>
                                                            <option>Burhanpur</option>
                                                            <option>Chhatarpur</option>
                                                            <option>Chhindwara</option>
                                                            <option>Damoh</option>
                                                            <option>Datia</option>
                                                            <option>Dewas</option>
                                                            <option>Dhar</option>
                                                            <option>Dindori</option>
                                                            <option>East Nimar</option>
                                                            <option>Guna</option>
                                                            <option>Gwalior</option>
                                                            <option>Harda</option>
                                                            <option>Hoshangabad</option>
                                                            <option>Indore</option>
                                                            <option>Jabalpur</option>
                                                            <option>Jhabua</option>
                                                            <option>Katni</option>
                                                            <option>Mandla</option>
                                                            <option>Mandsaur</option>
                                                            <option>Morena</option>
                                                            <option>Narsinghpur</option>
                                                            <option>Neemuch</option>
                                                            <option>Niwari</option>
                                                            <option>Panna</option>
                                                            <option>Raisen</option>
                                                            <option>Rajgarh</option>
                                                            <option>Ratlam</option>
                                                            <option>Rewa</option>
                                                            <option>Sagar</option>
                                                            <option>Satna</option>
                                                            <option>Sehore</option>
                                                            <option>Seoni</option>
                                                            <option>Shahdol</option>
                                                            <option>Shajapur</option>
                                                            <option>Sheopur</option>
                                                            <option>Shivpuri</option>
                                                            <option>Sidhi</option>
                                                            <option>Singrauli</option>
                                                            <option>Tikamgarh</option>
                                                            <option>Ujjain</option>
                                                            <option>Umaria</option>
                                                            <option>Vidisha</option>
                                                            <option>West Nimar</option>
                                                        </Form.Control>
                                                    </Form.Group>
                                                </Col>
                                            </Row>

                                            <Form.Group controlId="experience">
                                                <h5 className="form-headings">Experience Details</h5>
                                                <Form.Label className="field-title">
                                                    Whether the Applicant has prior Experience in Renewable Energy or
                                                    Energy Storage Projects*
                                                </Form.Label>
                                                <div className=" yes-no-checkbox">
                                                    <Form.Check type="radio" label="Yes" name="experience" />
                                                    <Form.Check type="radio" label="No" name="experience" />
                                                </div>
                                            </Form.Group>

                                            <Form.Group controlId="sectorType" className="mt-3">
                                                <Form.Label className="field-title">if yes then choose sector*</Form.Label>
                                                <Form.Control as="select">
                                                    <option>Select sector</option>
                                                    <option>Renewable Energy</option>
                                                </Form.Control>
                                            </Form.Group>

                                            <Form.Group controlId="blacklist" className="mt-3">
                                                <Form.Label className="field-title">
                                                    Whether the Applicant or any of its promoters / Directors / Associates
                                                    are blacklisted by any central Government or State Government /
                                                    Department / Agency in India*
                                                </Form.Label>
                                                <div className=" yes-no-checkbox">
                                                    <Form.Check type="radio" label="Yes" name="blacklist" />
                                                    <Form.Check type="radio" label="No" name="blacklist" />
                                                </div>
                                            </Form.Group>
                                        </div>
                                    )}

                                    {/* Save & Next Button */}
                                    <div className="text-center mt-4">
                                        <Button onClick={handleSaveAndNext}>Save & Next</Button>
                                    </div>
                                </Form>
                            </Tab>

                            {/* Tab 2: Project Details */}
                            <Tab eventKey="projectDetails" title="Project Details" tabClassName="bold-tab">
                                <Form>
                                    <h5 className="form-headings">Project Details</h5>

                                    {/* Project Name and Company */}
                                    <Row className="mb-3">
                                        <Col md={6}>
                                            <Form.Group controlId="projectName">
                                                <Form.Label className="field-title">Name of Project to be registered*</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Project Name" required />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group controlId="projectCompany">
                                                <Form.Label className="field-title">
                                                    Name of Project Company* <br />
                                                    <span className="project-form-span">
                                                        (Project Company / SPV / Entity that will undertake development and / or operations of the project)
                                                    </span>
                                                </Form.Label>
                                                <Form.Control type="text" placeholder="Enter Project Company Name" required />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    {/* Project Type */}
                                    <Row className="mb-3">
                                        <Col md={6}>
                                            <Form.Group controlId="projectType">
                                                <Form.Label className="field-title">Type of Project*</Form.Label>
                                                <Form.Control as="select" required>
                                                    <option>Wind</option>
                                                    <option>Solar</option>
                                                    <option>Energy Storage</option>
                                                    <option>Others</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group controlId="customProjectType">
                                                <Form.Label className="field-title">Enter Type of Project
                                                    <br />
                                                    <span className=" project-form-span">(If Type of Project selected in Others)</span>
                                                </Form.Label>
                                                <Form.Control type="text" placeholder="Enter Type of Project" />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    {/* Project Capacity */}
                                    <Row className="mb-3">
                                        <Col md={6}>
                                            <Form.Group controlId="projectCapacity">
                                                <Form.Label className="field-title">Project Capacity*
                                                    <br />
                                                    <span className="project-form-span">
                                                        (If Project is RE plus energy storage based. Enter energy Storage capacity in KWH or MWH as applicable)
                                                    </span>
                                                </Form.Label>

                                                <Form.Control type="number" placeholder="Enter Project Capacity" required />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group controlId="energyStorageCapacity">
                                                <Form.Label className="field-title">Energy Storage Capacity (KWH or MWH)*</Form.Label>
                                                <Form.Control type="number" placeholder="Enter Energy Storage Capacity" required />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    {/* Brief Description */}
                                    <Form.Group controlId="projectDescription" className="mb-3">
                                        <Form.Label className="field-title">Brief Description of the Scheme giving Schematic Layout* (Limit of 250 words)</Form.Label>
                                        <Form.Control as="textarea" rows={3} placeholder="Enter Project Description" maxLength={250} required />
                                    </Form.Group>

                                    {/* Expected Annual Generation */}
                                    <Row className="mb-3">
                                        <Col md={6}>
                                            <Form.Group controlId="annualGeneration">
                                                <Form.Label className="field-title">Expected Annual Generation from the Project*</Form.Label>
                                                <Form.Control type="number" placeholder="Enter Expected Generation" required />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group controlId="unit">
                                                <Form.Label className="field-title">Select Unit</Form.Label>
                                                <Form.Control as="select">
                                                    <option>MW</option>
                                                    <option>KWh</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    {/* Minimum Annual CUF */}
                                    <Row className="mb-3">
                                        <Col md={6}>
                                            <Form.Group controlId="minAnnualCUF">
                                                <Form.Label className="field-title">Minimum Annual CUF  ((In %) <br />
                                                    <span className="project-form-span">
                                                        (For Energy Storage Project, The generation should not be less than 35% CUF))
                                                    </span></Form.Label>
                                                <Form.Control type="number" placeholder="Enter Minimum CUF" required />
                                            </Form.Group>
                                        </Col>

                                        <Col md={6}>
                                            <Form.Group controlId="investment">
                                                <Form.Label className="field-title">Approximate Investment in Project*</Form.Label>
                                                <Form.Control type="number" placeholder="Enter Investment" required />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    {/* Location of the Project */}
                                    <h5 className="form-headings">Location of the Project</h5>
                                    <Row className="mb-3">
                                        <Col md={6}>
                                            <Form.Group controlId="projectLocation">
                                                <Form.Label className="field-title">Location of the Project*</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Location" required />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group controlId="typeOfArea">
                                                <Form.Label className="field-title">Type of Area*</Form.Label>
                                                <Form.Control as="select" required>
                                                    <option>Urban</option>
                                                    <option>Rural</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    {/* State and District */}
                                    <Row className="mb-3">
                                        <Col md={6}>
                                            <Form.Group controlId="state">
                                                <Form.Label className="field-title">State*</Form.Label>
                                                <Form.Control as="select" required>
                                                    <option>Select State</option>
                                                    <option>Madhya Pradesh</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group controlId="district">
                                                <Form.Label className="field-title">District*</Form.Label>
                                                <Form.Control as="select" required>
                                                    <option>Select District</option>
                                                    <option>Agar Malwa</option>
                                                    <option>Alirajpur</option>
                                                    <option>Anuppur</option>
                                                    <option>Ashoknagar</option>
                                                    <option>Balaghat</option>
                                                    <option>Barwan</option>
                                                    <option>Betul</option>
                                                    <option>Bhind</option>
                                                    <option>Bhopal</option>
                                                    <option>Burhanpur</option>
                                                    <option>Chhatarpur</option>
                                                    <option>Chhindwara</option>
                                                    <option>Damoh</option>
                                                    <option>Datia</option>
                                                    <option>Dewas</option>
                                                    <option>Dhar</option>
                                                    <option>Dindori</option>
                                                    <option>East Nimar</option>
                                                    <option>Guna</option>
                                                    <option>Gwalior</option>
                                                    <option>Harda</option>
                                                    <option>Hoshangabad</option>
                                                    <option>Indore</option>
                                                    <option>Jabalpur</option>
                                                    <option>Jhabua</option>
                                                    <option>Katni</option>
                                                    <option>Mandla</option>
                                                    <option>Mandsaur</option>
                                                    <option>Morena</option>
                                                    <option>Narsinghpur</option>
                                                    <option>Neemuch</option>
                                                    <option>Niwari</option>
                                                    <option>Panna</option>
                                                    <option>Raisen</option>
                                                    <option>Rajgarh</option>
                                                    <option>Ratlam</option>
                                                    <option>Rewa</option>
                                                    <option>Sagar</option>
                                                    <option>Satna</option>
                                                    <option>Sehore</option>
                                                    <option>Seoni</option>
                                                    <option>Shahdol</option>
                                                    <option>Shajapur</option>
                                                    <option>Sheopur</option>
                                                    <option>Shivpuri</option>
                                                    <option>Sidhi</option>
                                                    <option>Singrauli</option>
                                                    <option>Tikamgarh</option>
                                                    <option>Ujjain</option>
                                                    <option>Umaria</option>
                                                    <option>Vidisha</option>
                                                    <option>West Nimar</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    {/* Tehsil, Village, and Address */}
                                    <Row className="mb-3">
                                        <Col md={6}>
                                            <Form.Group controlId="tehsil">
                                                <Form.Label className="field-title">Tehsil*</Form.Label>
                                                <Form.Control as="select" required>
                                                    <option>Select Tehsil</option>
                                                    <option>Ajaygarh</option>
                                                    <option>Alirajpur</option>
                                                    <option>Amarwara</option>
                                                    <option>Araon</option>
                                                    <option>Badnagar</option>
                                                    <option>Bagli</option>
                                                    <option>Bajna</option>
                                                    <option>Banapura</option>
                                                    <option>Barwani</option>
                                                    <option>Basoda</option>
                                                    <option>Biaora</option>
                                                    <option>Bilaspur</option>
                                                    <option>Birsinghpur</option>
                                                    <option>Chhatarpur</option>
                                                    <option>Chhindwara</option>
                                                    <option>Datia</option>
                                                    <option>Dewas</option>
                                                    <option>Garoth</option>
                                                    <option>Gohad</option>
                                                    <option>Guna</option>
                                                    <option>Harda</option>
                                                    <option>Indore</option>
                                                    <option>Itarsi</option>
                                                    <option>Jabalpur</option>
                                                    <option>Jhabua</option>
                                                    <option>Katni</option>
                                                    <option>Khandwa</option>
                                                    <option>Khurai</option>
                                                    <option>Maheshwar</option>
                                                    <option>Malhargarh</option>
                                                    <option>Mandla</option>
                                                    <option>Manawar</option>
                                                    <option>Morena</option>
                                                    <option>Murwara</option>
                                                    <option>Neemuch</option>
                                                    <option>Pachore</option>
                                                    <option>Pali</option>
                                                    <option>Pansemal</option>
                                                    <option>Pathariya</option>
                                                    <option>Petlawad</option>
                                                    <option>Pipariya</option>
                                                    <option>Rahatgarh</option>
                                                    <option>Rajgarh</option>
                                                    <option>Raisen</option>
                                                    <option>Rajpur</option>
                                                    <option>Rudrasagar</option>
                                                    <option>Sanchi</option>
                                                    <option>Santuli</option>
                                                    <option>Sehore</option>
                                                    <option>Seoni</option>
                                                    <option>Sirmour</option>
                                                    <option>Ujjain</option>
                                                    <option>Vidisha</option>
                                                    <option>Zirapur</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group controlId="village">
                                                <Form.Label className="field-title">Village*</Form.Label>
                                                <Form.Control as="select" required>
                                                    <option>Select Village</option>
                                                    <option>Adampur</option>
                                                    <option>Alapur</option>
                                                    <option>Amjora</option>
                                                    <option>Angaon</option>
                                                    <option>Antari</option>
                                                    <option>Areech</option>
                                                    <option>Barai</option>
                                                    <option>Barwani</option>
                                                    <option>Bhorasa</option>
                                                    <option>Bargi</option>
                                                    <option>Bajrangpura</option>
                                                    <option>Bhivpur</option>
                                                    <option>Bhopal</option>
                                                    <option>Chhindwara</option>
                                                    <option>Chhoti Sarai</option>
                                                    <option>Dewas</option>
                                                    <option>Fatehpur</option>
                                                    <option>Garoth</option>
                                                    <option>Guna</option>
                                                    <option>Indore</option>
                                                    <option>Jabalpur</option>
                                                    <option>Jhirniya</option>
                                                    <option>Katni</option>
                                                    <option>Khargone</option>
                                                    <option>Khandwa</option>
                                                    <option>Madhya Pradesh Village 1</option>
                                                    <option>Madhya Pradesh Village 2</option>
                                                    <option>Morena</option>
                                                    <option>Pachore</option>
                                                    <option>Seoni</option>
                                                    <option>Shahdol</option>
                                                    <option>Ujjain</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>

                                    </Row>

                                    <Row className="mb-3">
                                        <Col md={12}>
                                            <Form.Group controlId="address">
                                                <Form.Label className="field-title">Address*</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Address" required />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    {/* Approach Road, Nearest Railway Station, and Coordinates */}
                                    <Row className="mb-3">
                                        <Col md={4}>
                                            <Form.Group controlId="approachRoad">
                                                <Form.Label className="field-title">Approach Road</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Approach Road" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group controlId="nearestRailwayStation">
                                                <Form.Label className="field-title">Nearest Railway Station</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Nearest Railway Station" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group controlId="coordinates">
                                                <Form.Label className="field-title">Coordinates of Project Site Location</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Coordinates" />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    {/* Land Related Information */}
                                    <h5 className="form-headings">Land Related Information</h5>
                                    <Row className="mb-3">
                                        <Col md={6}>
                                            <Form.Group controlId="landArea">
                                                <Form.Label className="field-title">Land Area for Proposed Capacity*</Form.Label>
                                                <Form.Control type="number" placeholder="Enter Land Area" required />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group controlId="landUnit">
                                                <Form.Label className="field-title">Select Unit</Form.Label>
                                                <Form.Control as="select">
                                                    <option>Acres</option>
                                                    <option>Hectares</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    {/* Land Ownership */}
                                    <Row className="mb-3">
                                        <Col md={6}>
                                            <Form.Group controlId="landOwnership">
                                                <Form.Label className="field-title">Whether Land is in name of the Applicant*</Form.Label>
                                                <div className=" yes-no-checkbox">
                                                    <Form.Check type="radio" label="Yes" name="landOwnership" />
                                                    <Form.Check type="radio" label="No" name="landOwnership" />
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group controlId="landPurchase">
                                                <Form.Label className="field-title">Whether Land is Proposed to be Purchased*</Form.Label>
                                                <div className=" yes-no-checkbox">
                                                    <Form.Check type="radio" label="Yes" name="landPurchase" />
                                                    <Form.Check type="radio" label="No" name="landPurchase" />
                                                </div>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    {/* Land Utilization Agreement */}
                                    <Row className="mb-3">
                                        <Col md={6}>
                                            <Form.Group controlId="landAgreement">
                                                <Form.Label className="field-title">Whether Land Proposed to be utilized in under Agreement*</Form.Label>
                                                <div className=" yes-no-checkbox">
                                                    <Form.Check type="radio" label="Yes" name="landAgreement" />
                                                    <Form.Check type="radio" label="No" name="landAgreement" />
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group controlId="khasraDistrict">
                                                <Form.Label className="field-title">District*</Form.Label>
                                                <Form.Control as="select" required>
                                                    <option>Select District</option>
                                                    <option>Agar Malwa</option>
                                                    <option>Alirajpur</option>
                                                    <option>Anuppur</option>
                                                    <option>Ashoknagar</option>
                                                    <option>Balaghat</option>
                                                    <option>Barwan</option>
                                                    <option>Betul</option>
                                                    <option>Bhind</option>
                                                    <option>Bhopal</option>
                                                    <option>Burhanpur</option>
                                                    <option>Chhatarpur</option>
                                                    <option>Chhindwara</option>
                                                    <option>Damoh</option>
                                                    <option>Datia</option>
                                                    <option>Dewas</option>
                                                    <option>Dhar</option>
                                                    <option>Dindori</option>
                                                    <option>East Nimar</option>
                                                    <option>Guna</option>
                                                    <option>Gwalior</option>
                                                    <option>Harda</option>
                                                    <option>Hoshangabad</option>
                                                    <option>Indore</option>
                                                    <option>Jabalpur</option>
                                                    <option>Jhabua</option>
                                                    <option>Katni</option>
                                                    <option>Mandla</option>
                                                    <option>Mandsaur</option>
                                                    <option>Morena</option>
                                                    <option>Narsinghpur</option>
                                                    <option>Neemuch</option>
                                                    <option>Niwari</option>
                                                    <option>Panna</option>
                                                    <option>Raisen</option>
                                                    <option>Rajgarh</option>
                                                    <option>Ratlam</option>
                                                    <option>Rewa</option>
                                                    <option>Sagar</option>
                                                    <option>Satna</option>
                                                    <option>Sehore</option>
                                                    <option>Seoni</option>
                                                    <option>Shahdol</option>
                                                    <option>Shajapur</option>
                                                    <option>Sheopur</option>
                                                    <option>Shivpuri</option>
                                                    <option>Sidhi</option>
                                                    <option>Singrauli</option>
                                                    <option>Tikamgarh</option>
                                                    <option>Ujjain</option>
                                                    <option>Umaria</option>
                                                    <option>Vidisha</option>
                                                    <option>West Nimar</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    {/* Khasra Details */}
                                    <Row className="mb-3">

                                        <Col md={4}>
                                            <Form.Group controlId="khasraTehsil">
                                                <Form.Label className="field-title">Tehsil*</Form.Label>
                                                <Form.Control as="select" required>
                                                    <option>Select Tehsil</option>
                                                    <option>Ajaygarh</option>
                                                    <option>Alirajpur</option>
                                                    <option>Amarwara</option>
                                                    <option>Araon</option>
                                                    <option>Badnagar</option>
                                                    <option>Bagli</option>
                                                    <option>Bajna</option>
                                                    <option>Banapura</option>
                                                    <option>Barwani</option>
                                                    <option>Basoda</option>
                                                    <option>Biaora</option>
                                                    <option>Bilaspur</option>
                                                    <option>Birsinghpur</option>
                                                    <option>Chhatarpur</option>
                                                    <option>Chhindwara</option>
                                                    <option>Datia</option>
                                                    <option>Dewas</option>
                                                    <option>Garoth</option>
                                                    <option>Gohad</option>
                                                    <option>Guna</option>
                                                    <option>Harda</option>
                                                    <option>Indore</option>
                                                    <option>Itarsi</option>
                                                    <option>Jabalpur</option>
                                                    <option>Jhabua</option>
                                                    <option>Katni</option>
                                                    <option>Khandwa</option>
                                                    <option>Khurai</option>
                                                    <option>Maheshwar</option>
                                                    <option>Malhargarh</option>
                                                    <option>Mandla</option>
                                                    <option>Manawar</option>
                                                    <option>Morena</option>
                                                    <option>Murwara</option>
                                                    <option>Neemuch</option>
                                                    <option>Pachore</option>
                                                    <option>Pali</option>
                                                    <option>Pansemal</option>
                                                    <option>Pathariya</option>
                                                    <option>Petlawad</option>
                                                    <option>Pipariya</option>
                                                    <option>Rahatgarh</option>
                                                    <option>Rajgarh</option>
                                                    <option>Raisen</option>
                                                    <option>Rajpur</option>
                                                    <option>Rudrasagar</option>
                                                    <option>Sanchi</option>
                                                    <option>Santuli</option>
                                                    <option>Sehore</option>
                                                    <option>Seoni</option>
                                                    <option>Sirmour</option>
                                                    <option>Ujjain</option>
                                                    <option>Vidisha</option>
                                                    <option>Zirapur</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group controlId="khasraVillage">
                                                <Form.Label className="field-title">Village*</Form.Label>
                                                <Form.Control as="select" required>
                                                    <option>Select Village</option>
                                                    <option>Adampur</option>
                                                    <option>Alapur</option>
                                                    <option>Amjora</option>
                                                    <option>Angaon</option>
                                                    <option>Antari</option>
                                                    <option>Areech</option>
                                                    <option>Barai</option>
                                                    <option>Barwani</option>
                                                    <option>Bhorasa</option>
                                                    <option>Bargi</option>
                                                    <option>Bajrangpura</option>
                                                    <option>Bhivpur</option>
                                                    <option>Bhopal</option>
                                                    <option>Chhindwara</option>
                                                    <option>Chhoti Sarai</option>
                                                    <option>Dewas</option>
                                                    <option>Fatehpur</option>
                                                    <option>Garoth</option>
                                                    <option>Guna</option>
                                                    <option>Indore</option>
                                                    <option>Jabalpur</option>
                                                    <option>Jhirniya</option>
                                                    <option>Katni</option>
                                                    <option>Khargone</option>
                                                    <option>Khandwa</option>
                                                    <option>Madhya Pradesh Village 1</option>
                                                    <option>Madhya Pradesh Village 2</option>
                                                    <option>Morena</option>
                                                    <option>Pachore</option>
                                                    <option>Seoni</option>
                                                    <option>Shahdol</option>
                                                    <option>Ujjain</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group controlId="khasraNumber">
                                                <Form.Label className="field-title">Select Khasra*</Form.Label>
                                                <Form.Control as="select" required>
                                                    <option>Select Khasra</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <div>
                                        {locations.map((loc, index) => (
                                            <Row className="mb-3" key={index}>
                                                <Col md={4}>
                                                    <Form.Group controlId={`latitude-${index}`}>
                                                        <Form.Label className="field-title">Latitude*</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Enter Latitude"
                                                            required
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={4}>
                                                    <Form.Group controlId={`longitude-${index}`}>
                                                        <Form.Label className="field-title">Longitude*</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Enter Longitude"
                                                            required
                                                        />
                                                    </Form.Group>
                                                </Col>

                                                {/* Show "Add" button only for the last latitude-longitude row */}
                                                {index === locations.length - 1 && (
                                                    <Col md={4}>
                                                        <Button variant="secondary" className="longitude-latitude-add" onClick={handleAddLocation}>
                                                            Add
                                                        </Button>
                                                    </Col>
                                                )}
                                            </Row>
                                        ))}
                                    </div>

                                    {/* Disclaimer */}
                                    <Form.Group className="mb-3">
                                        <p> <strong>Disclaimer:</strong> The individual or company/firm is solely responsible for the accuracy of the land-related information provided. If any discrepancy found in the application details may result in rejection of the application.</p>
                                    </Form.Group>

                                    {/* Navigation Buttons */}
                                    <div className="d-flex text-center justify-content-between">

                                        <Button variant="secondary" onClick={handleGoBack}>Go Back</Button>
                                        <Button variant="primary" onClick={handleSaveAndNext}>Save & Next</Button>
                                    </div>
                                </Form>
                            </Tab>

                            {/* Power Evacuation & Generation Form */}
                            <Tab eventKey="powerEvacuation" title="Power Evacuation & Generation" tabClassName="bold-tab">
                                <Form>
                                    {/* Is Electricity Connection Required */}
                                    <Row className="mb-3">
                                        <Col md={12}>
                                            <Form.Group controlId="electricityConnection">
                                                <Form.Label className="field-title">Is Electricity Connection Required*</Form.Label>
                                                <div className=" yes-no-checkbox">
                                                    <Form.Check type="radio" label="Yes" name="landPurchase" />
                                                    <Form.Check type="radio" label="No" name="landPurchase" />
                                                </div>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    {/* Voltage Level for Power Evacuation */}
                                    <h5 className="form-headings">Power Evacuation & Generation Details</h5>
                                    <Row className="mb-3">
                                        <Col md={6}>
                                            <Form.Group controlId="voltageLevel">
                                                <Form.Label className="field-title">Voltage Level for Power Evacuation*</Form.Label>
                                                <Form.Select>
                                                    <option>Select Unit</option>
                                                    <option>Unit 1</option>
                                                    <option>Unit 2</option>
                                                    {/* Add more units as needed */}
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>

                                        <Col md={6}>
                                            <Form.Group controlId="connectivityAt">
                                                <Form.Label className="field-title">Connectivity at*</Form.Label>
                                                <Form.Select>
                                                    <option>Select Connectivity</option>
                                                    <option>Connectivity 1</option>
                                                    <option>Connectivity 2</option>
                                                    {/* Add more options as needed */}
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    {/* Discom and Circle */}
                                    <Row className="mb-3">
                                        <Col md={6}>
                                            <Form.Group controlId="discom">
                                                <Form.Label className="field-title">Select Discom* <br />
                                                    <span className="project-form-span">
                                                        (If Project is RE plus Energy Storage Based, Enter Energy Storage Capacity in KWH or MWH as applicable)  </span>
                                                </Form.Label>
                                                <Form.Select>
                                                    <option>Select Discom</option>
                                                    <option>Discom 1</option>
                                                    <option>Discom 2</option>
                                                    {/* Add more discoms as needed */}
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>

                                        <Col md={6}>
                                            <Form.Group controlId="circle">
                                                <Form.Label className="field-title">Select Circle* <br />
                                                    <span className="project-form-span">
                                                        (Only If connected at Discom Level)</span>
                                                </Form.Label>
                                                <Form.Select>
                                                    <option>Select Discom Circle</option>
                                                    <option>Circle 1</option>
                                                    <option>Circle 2</option>
                                                    {/* Add more circles as needed */}
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    {/* Nearest Substation and Distance */}
                                    <Row className="mb-3">
                                        <Col md={6}>
                                            <Form.Group controlId="nearestSubstation">
                                                <Form.Label className="field-title">Select Nearest Substation*</Form.Label>
                                                <Form.Select>
                                                    <option>Select Nearest Substation</option>
                                                    <option>Substation 1</option>
                                                    <option>Substation 2</option>
                                                    {/* Add more substations as needed */}
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>

                                        <Col md={6}>
                                            <Form.Group controlId="distanceToSubstation">
                                                <Form.Label className="field-title">
                                                    Distance of Nearest Substation from Project Site* (in KM)
                                                </Form.Label>
                                                <Form.Control type="number" placeholder="Enter Distance" />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    {/* Utilization of Power Generated */}
                                    <Row className="mb-3">
                                        <Col md={12}>
                                            <Form.Group controlId="powerUtilization">
                                                <Form.Label className="field-title">Utilization of Power Generated</Form.Label>
                                                <Form.Select>
                                                    <option>Select</option>
                                                    <option>Utilization 1</option>
                                                    <option>Utilization 2</option>
                                                    {/* Add more options as needed */}
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    {/* Navigation Buttons */}
                                    <div className="d-flex justify-content-between">

                                        <Button variant="secondary" onClick={handleGoBack}>Go Back</Button>
                                        <Button variant="primary" onClick={handleSaveAndNext}>Save & Next</Button>
                                    </div>
                                </Form>
                            </Tab>

                            {/* Upload Relevant Documents Tab */}
                            <Tab eventKey="documents" title="Upload Relevant Documents" tabClassName="bold-tab">
                                <h5 className="form-headings">Upload Relevant Documents</h5>

                                <Table bordered hover>
                                    <thead>
                                        <tr>
                                            <th>S No.</th>
                                            <th>Documents</th>
                                            <th>View Sample</th>
                                            <th>Upload Documents (pdf, jpeg, jpg & png)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {documentList.map((doc, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{doc}</td>
                                                <td className="icon-container">
                                                    <FaFilePdf className="icon-black" />
                                                    <FaEye title="View"
                                                        className="icon-blue" />
                                                </td>
                                                <td>
                                                    <Form.Control
                                                        type="file"
                                                        accept=".pdf,.jpeg,.jpg,.png"
                                                        onChange={(e) => handleFileUpload(index, e.target.files[0])}
                                                    />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>

                                {/* Navigation Buttons */}
                                <div className="d-flex justify-content-between mt-4">
                                    <div className="d-flex gap-3">
                                        <Button variant="secondary" onClick={handleGoBack}>Go Back</Button>
                                        <Button
                                            variant="primary"
                                            onClick={() => {
                                                alert(
                                                    "Your Details has been Saved in Draft Successfully.\n\nApplication Number is NRED101/2024"
                                                );
                                            }}
                                        >
                                            Save as Draft
                                        </Button>
                                    </div>

                                    <Button
                                        variant="success"
                                        className="ml-auto"
                                        onClick={() => setShowModal(true)}
                                    >
                                        Submit
                                    </Button>

                                    {/* Success Modal */}
                                    <Modal
                                        show={showModal}
                                        onHide={() => setShowModal(false)}
                                        centered
                                    >
                                        <Modal.Header closeButton>
                                            <Modal.Title>Application Submitted</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            Your Application details have been submitted successfully.
                                            <br />
                                            <br />
                                            <strong>Application Number: NRED101/2024</strong>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="primary" onClick={() => navigate('/developer-dashboard')}>
                                                OK
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </div>
                            </Tab>
                        </Tabs>
                    </Card.Body>
                </Card>
            </div>
        </AdminLayout>
    );
};
