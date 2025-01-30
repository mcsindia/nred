import React, { useState, useEffect } from "react";
import { FaMotorcycle, FaTools, FaTachometerAlt, FaClipboardList, FaUsers, FaProjectDiagram } from "react-icons/fa";

export const Sidebar = ({ isOpen }) => {
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    const storedUserType = localStorage.getItem("userType");
    console.log("Retrieved userType in Sidebar:", storedUserType); // Debugging log
    setUserType(storedUserType);
  }, []);

  return (
    <div className={`dms-sidebar bg-color text-white ${isOpen ? "open" : "closed"}`}>
      {/* Sidebar Header */}
      <div className="p-3 d-flex align-items-center sidebar-title">
        <a href="/" className="d-flex align-items-center text-white text-decoration-none">
          <FaMotorcycle size={30} className="text-white" />
          {isOpen && <h4 className="mb-0 ms-2">DMS</h4>}
        </a>
      </div>
      <hr />

      {/* Sidebar Menu Items */}
      <ul className="nav flex-column">
        {userType === "developer" && (
          <>
            <li className="dms-nav-item">
              <a href="/developer-dashboard" className="dms-nav-link text-white d-flex align-items-center">
                <FaTachometerAlt className="me-2" />
                <span>Dashboard</span>
              </a>
            </li>
            <li className="dms-nav-item">
              <a href="/project-registration" className="dms-nav-link text-white d-flex align-items-center">
                <FaClipboardList className="me-2" />
                <span>Project Registration</span>
              </a>
            </li>
          </>
        )}

        {userType === "admin" && (
          <>
            <li className="dms-nav-item">
              <a href="/admin-dashboard" className="dms-nav-link text-white d-flex align-items-center">
                <FaTachometerAlt className="me-2" />
                <span> Dashboard</span>
              </a>
            </li>
            <li className="dms-nav-item">
              <a href="/user" className="dms-nav-link text-white d-flex align-items-center">
                <FaUsers className="me-2" />
                <span>User</span>
              </a>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};
