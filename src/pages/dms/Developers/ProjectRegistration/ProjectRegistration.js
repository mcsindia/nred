import React, { useState } from "react";
import { Tabs, Tab, Form, Button, Row, Col, Card, Table } from "react-bootstrap";
import { AdminLayout } from "../../../../layouts/dms/AdminLayout/AdminLayout";

export const ProjectRegistration = () => {
    const [activeTab, setActiveTab] = useState("individualOrCompany");
    const tabKeys = ["individualOrCompany", "projectDetails", "powerEvacuation", "documents"];
    const [formType, setFormType] = useState("individual"); // 'individual' or 'company'
    const [entityType, setEntityType] = useState(""); // Tracks selected entity type
    const [businessNature, setBusinessNature] = useState(""); // Tracks selected business nature
    const [uploadedFiles, setUploadedFiles] = useState({});

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
                            <Tab eventKey="individualOrCompany" title="Individual / Company Details">
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
                                            <h5 className="mb-3">Individual Details</h5>
                                            <Row className="mb-3">
                                                <Col md={6}>
                                                    <Form.Group controlId="panNumber">
                                                        <Form.Label>PAN No.*</Form.Label>
                                                        <Form.Control type="text" placeholder="Enter PAN Number" required />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group controlId="name">
                                                        <Form.Label>Name*</Form.Label>
                                                        <Form.Control type="text" placeholder="Enter Name" required />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row className="mb-3">
                                                <Col md={6}>
                                                    <Form.Group controlId="dob">
                                                        <Form.Label>Date of Birth*</Form.Label>
                                                        <Form.Control type="date" required />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group controlId="fatherName">
                                                        <Form.Label>Father's Name*</Form.Label>
                                                        <Form.Control type="text" placeholder="Enter Father's Name" required />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
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
                                            <Form.Group controlId="experience">
                                                <h5 className="mb-3">Experience Details</h5>
                                                <Form.Label>
                                                    Whether the Applicant has prior Experience in Renewable Energy or
                                                    Energy Storage Projects*
                                                </Form.Label>
                                                <div className=" yes-no-checkbox">
                                                    <Form.Check type="radio" label="Yes" name="experience" />
                                                    <Form.Check type="radio" label="No" name="experience" />
                                                </div>
                                            </Form.Group>
                                            <Form.Group controlId="sectorType" className="mt-3">
                                                <Form.Label>if yes then choose sector*</Form.Label>
                                                <Form.Control as="select">
                                                    <option>Select sector</option>
                                                    <option>Renewable Energy</option>
                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Group controlId="blacklist" className="mt-3">
                                                <Form.Label>
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
                                            <h5 className="mb-3">Company / Firm Details</h5>
                                            <Row className="mb-3">
                                                <Col md={6}>
                                                    <Form.Group controlId="gstin">
                                                        <Form.Label>GSTIN No.*</Form.Label>
                                                        <Form.Control type="text" placeholder="Enter GSTIN Number" required />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group controlId="companyName">
                                                        <Form.Label>Company / Firm Name*</Form.Label>
                                                        <Form.Control type="text" placeholder="Enter Company Name" required />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row className="mb-3">
                                                <Col md={6}>
                                                    <Form.Group controlId="entityType">
                                                        <Form.Label>Type of Entity*</Form.Label>
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
                                                        <Form.Label>Enter Type of Entity (If Type of Entity Others)</Form.Label>
                                                        <Form.Control type="text" placeholder="Enter Type of Entity" required />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row className="mb-3">
                                                <Col md={6}>
                                                    <Form.Group controlId="businessNature">
                                                        <Form.Label>Nature of Business*</Form.Label>
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
                                                        <Form.Label>Enter Type of Business (If Type of Business Nature Others)</Form.Label>
                                                        <Form.Control type="text" placeholder="Enter Type of Entity" required />
                                                    </Form.Group>
                                                </Col>
                                            </Row>

                                            <Row className="mb-3">
                                                <Col md={6}>
                                                    <Form.Group controlId="ceoName">
                                                        <Form.Label>Name of CEO / Managing Director</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Enter Name of CEO / Managing Director"
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group controlId="isGovernmentEntity">
                                                        <Form.Label>
                                                            Whether Application Firm is a Government Entity*
                                                        </Form.Label>
                                                        <div className=" yes-no-checkbox">
                                                            <Form.Check type="radio" label="Yes" name="govEntity" />
                                                            <Form.Check type="radio" label="No" name="govEntity" />
                                                        </div>
                                                    </Form.Group>
                                                </Col>
                                            </Row>

                                            <h5 className="mb-3">Registered Address of Firm</h5>
                                            <Row className="mb-3">
                                                <Col md={6}>
                                                    <Form.Group controlId="registeredAddress">
                                                        <Form.Label>Registered Address*</Form.Label>
                                                        <Form.Control type="text" placeholder="Enter Registered Address" required />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group controlId="companyWebsite">
                                                        <Form.Label>Company Website</Form.Label>
                                                        <Form.Control type="text" placeholder="Enter Company Website" />
                                                    </Form.Group>
                                                </Col>
                                            </Row>

                                            <h5 className="mb-3">Authorised Signatory / Nodal Office Details</h5>
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

                                            <h5 className="mb-3">Corresponding Address</h5>
                                            <Row className="mb-3">
                                                <Col md={6}>
                                                    <Form.Group controlId="name">
                                                        <Form.Label>State</Form.Label>
                                                        <Form.Control as="select">
                                                            <option>Select State</option>
                                                            <option>Madhya Pradesh</option>
                                                            <option>Uttar Pradesh</option>
                                                            <option>Maharashtra</option>
                                                        </Form.Control>
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group controlId="designation">
                                                        <Form.Label>District</Form.Label>
                                                        <Form.Control as="select">
                                                            <option>Select District</option>
                                                            <option>Bhopal</option>
                                                            <option>Prayagraj</option>
                                                            <option>Mumbai</option>
                                                        </Form.Control>
                                                    </Form.Group>
                                                </Col>
                                            </Row>

                                            <Form.Group controlId="experience">
                                                <h5 className="mb-3">Experience Details</h5>
                                                <Form.Label>
                                                    Whether the Applicant has prior Experience in Renewable Energy or
                                                    Energy Storage Projects*
                                                </Form.Label>
                                                <div className=" yes-no-checkbox">
                                                    <Form.Check type="radio" label="Yes" name="experience" />
                                                    <Form.Check type="radio" label="No" name="experience" />
                                                </div>
                                            </Form.Group>

                                            <Form.Group controlId="sectorType" className="mt-3">
                                                <Form.Label>if yes then choose sector*</Form.Label>
                                                <Form.Control as="select">
                                                    <option>Select sector</option>
                                                    <option>Renewable Energy</option>
                                                </Form.Control>
                                            </Form.Group>

                                            <Form.Group controlId="blacklist" className="mt-3">
                                                <Form.Label>
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
                            <Tab eventKey="projectDetails" title="Project Details">
                                <Form>
                                    <h5 className="mb-3">Project Details</h5>

                                    {/* Project Name and Company */}
                                    <Row className="mb-3">
                                        <Col md={6}>
                                            <Form.Group controlId="projectName">
                                                <Form.Label>Name of Project to be registered*</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Project Name" required />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group controlId="projectCompany">
                                                <Form.Label>
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
                                                <Form.Label>Type of Project*</Form.Label>
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
                                                <Form.Label>Enter Type of Project
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
                                                <Form.Label>Project Capacity*
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
                                                <Form.Label>Energy Storage Capacity (KWH or MWH)*</Form.Label>
                                                <Form.Control type="number" placeholder="Enter Energy Storage Capacity" required />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    {/* Brief Description */}
                                    <Form.Group controlId="projectDescription" className="mb-3">
                                        <Form.Label>Brief Description of the Scheme giving Schematic Layout* (Limit of 250 words)</Form.Label>
                                        <Form.Control as="textarea" rows={3} placeholder="Enter Project Description" maxLength={250} required />
                                    </Form.Group>

                                    {/* Expected Annual Generation */}
                                    <Row className="mb-3">
                                        <Col md={6}>
                                            <Form.Group controlId="annualGeneration">
                                                <Form.Label>Expected Annual Generation from the Project*</Form.Label>
                                                <Form.Control type="number" placeholder="Enter Expected Generation" required />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group controlId="unit">
                                                <Form.Label>Select Unit</Form.Label>
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
                                                <Form.Label>Minimum Annual CUF  ((In %) <br />
                                                    <span className="project-form-span">
                                                        (For Energy Storage Project, The generation should not be less than 35% CUF))
                                                    </span></Form.Label>
                                                <Form.Control type="number" placeholder="Enter Minimum CUF" required />
                                            </Form.Group>
                                        </Col>

                                        <Col md={6}>
                                            <Form.Group controlId="investment">
                                                <Form.Label>Approximate Investment in Project*</Form.Label>
                                                <Form.Control type="number" placeholder="Enter Investment" required />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    {/* Location of the Project */}
                                    <h5 className="mt-3">Location of the Project</h5>
                                    <Row className="mb-3">
                                        <Col md={6}>
                                            <Form.Group controlId="projectLocation">
                                                <Form.Label>Location of the Project*</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Location" required />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group controlId="typeOfArea">
                                                <Form.Label>Type of Area*</Form.Label>
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
                                                <Form.Label>State*</Form.Label>
                                                <Form.Control as="select" required>
                                                    <option>Madhya Pradesh</option>
                                                    <option>Uttar Pradesh</option>
                                                    <option>Maharashtra</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group controlId="district">
                                                <Form.Label>District*</Form.Label>
                                                <Form.Control as="select" required>
                                                    <option>Bhopal</option>
                                                    <option>Prayagraj</option>
                                                    <option>Mumbai</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    {/* Tehsil, Village, and Address */}
                                    <Row className="mb-3">
                                        <Col md={6}>
                                            <Form.Group controlId="tehsil">
                                                <Form.Label>Tehsil*</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Tehsil" required />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group controlId="village">
                                                <Form.Label>Village*</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Village" required />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row className="mb-3">
                                        <Col md={12}>
                                            <Form.Group controlId="address">
                                                <Form.Label>Address*</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Address" required />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    {/* Approach Road, Nearest Railway Station, and Coordinates */}
                                    <Row className="mb-3">
                                        <Col md={4}>
                                            <Form.Group controlId="approachRoad">
                                                <Form.Label>Approach Road</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Approach Road" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group controlId="nearestRailwayStation">
                                                <Form.Label>Nearest Railway Station</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Nearest Railway Station" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group controlId="coordinates">
                                                <Form.Label>Coordinates of Project Site Location</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Coordinates" />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    {/* Land Related Information */}
                                    <h5 className="mt-3">Land Related Information</h5>
                                    <Row className="mb-3">
                                        <Col md={6}>
                                            <Form.Group controlId="landArea">
                                                <Form.Label>Land Area for Proposed Capacity*</Form.Label>
                                                <Form.Control type="number" placeholder="Enter Land Area" required />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group controlId="landUnit">
                                                <Form.Label>Select Unit</Form.Label>
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
                                                <Form.Label>Whether Land is in name of the Applicant*</Form.Label>
                                                <div className=" yes-no-checkbox">
                                                    <Form.Check type="radio" label="Yes" name="landOwnership" />
                                                    <Form.Check type="radio" label="No" name="landOwnership" />
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group controlId="landPurchase">
                                                <Form.Label>Whether Land is Proposed to be Purchased*</Form.Label>
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
                                                <Form.Label>Whether Land Proposed to be utilized in under Agreement*</Form.Label>
                                                <div className=" yes-no-checkbox">
                                                    <Form.Check type="radio" label="Yes" name="landAgreement" />
                                                    <Form.Check type="radio" label="No" name="landAgreement" />
                                                </div>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    {/* Khasra Details */}
                                    <Row className="mb-3">
                                        <Col md={4}>
                                            <Form.Group controlId="khasraDistrict">
                                                <Form.Label>District*</Form.Label>
                                                <Form.Control as="select" required>
                                                    <option>Select District</option>
                                                    <option>Bhopal</option>
                                                    <option>Prayagraj</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group controlId="khasraTehsil">
                                                <Form.Label>Tehsil*</Form.Label>
                                                <Form.Control as="select" required>
                                                    <option>Select Tehsil</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group controlId="khasraVillage">
                                                <Form.Label>Village*</Form.Label>
                                                <Form.Control as="select" required>
                                                    <option>Select Village</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row className="mb-3">
                                        <Col md={6}>
                                            <Form.Group controlId="khasraNumber">
                                                <Form.Label>Select Khasra*</Form.Label>
                                                <Form.Control as="select" required>
                                                    <option>Select Khasra</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group controlId="latitude">
                                                <Form.Label>Latitude*</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Latitude" required />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className="mb-3">
                                        <Col md={6}>
                                            <Form.Group controlId="longitude">
                                                <Form.Label>Longitude*</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Longitude" required />
                                            </Form.Group>
                                        </Col>
                                    </Row>

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
                            <Tab eventKey="powerEvacuation" title="Power Evacuation & Generation">
                                <Form>
                                    {/* Is Electricity Connection Required */}
                                    <Row className="mb-3">
                                        <Col md={12}>
                                            <Form.Group controlId="electricityConnection">
                                                <Form.Label>Is Electricity Connection Required*</Form.Label>
                                                <div className=" yes-no-checkbox">
                                                    <Form.Check type="radio" label="Yes" name="landPurchase" />
                                                    <Form.Check type="radio" label="No" name="landPurchase" />
                                                </div>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    {/* Voltage Level for Power Evacuation */}
                                    <h5 className="mb-3">Power Evacuation & Generation Details</h5>
                                    <Row className="mb-3">
                                        <Col md={6}>
                                            <Form.Group controlId="voltageLevel">
                                                <Form.Label>Voltage Level for Power Evacuation*</Form.Label>
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
                                                <Form.Label>Connectivity at*</Form.Label>
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
                                                <Form.Label>Select Discom* <br />
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
                                                <Form.Label>Select Circle* <br />
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
                                                <Form.Label>Select Nearest Substation*</Form.Label>
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
                                                <Form.Label>
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
                                                <Form.Label>Utilization of Power Generated</Form.Label>
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
                        {/* Upload Relevant Documents Tab */}
<Tab eventKey="documents" title="Upload Relevant Documents">
  <h5 className="mb-3">Upload Relevant Documents</h5>

  <Table bordered hover>
    <thead>
      <tr>
        <th>S No.</th>
        <th>Documents</th>
        <th>Sample Formats</th>
        <th>Upload Documents (pdf, jpeg, jpg & png)</th>
      </tr>
    </thead>
    <tbody>
      {documentList.map((doc, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{doc}</td>
          <td>
            <Button variant="link" className="text-primary">
              View Sample
            </Button>
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
      onClick={() => {
        alert(
          "Your Application details have been submitted successfully.\n\nApplication Number is NRED101/2024"
        );
      }}
    >
      Submit
    </Button>
  </div>
</Tab>


                        </Tabs>
                    </Card.Body>
                </Card>
            </div>
        </AdminLayout>
    );
};
