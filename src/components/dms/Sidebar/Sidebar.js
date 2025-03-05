import React, { useState, useEffect } from "react";
import { FaMotorcycle, FaCaretRight, FaCaretDown, FaTachometerAlt, FaUsers, FaProjectDiagram, FaUser } from "react-icons/fa";

export const Sidebar = ({ isOpen }) => {
  const [userType, setUserType] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);

  const handleMenuToggle = (menuName) => {
    setOpenMenu((prev) => (prev === menuName ? null : menuName));
  };

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
              <div
                className={`dms-nav-link text-white ${openMenu === "project" ? "active" : ""}`}
                onClick={() => handleMenuToggle("project")}
              >
                <div className="d-flex align-items-center">
                  <FaProjectDiagram className="me-2" />
                  <span className={isOpen ? "" : "d-none d-md-none d-sm-block"}>Project Registration</span>
                </div>
                <FaCaretDown
                  className={`ms-auto ${openMenu === "project" ? "rotate" : ""} ${isOpen ? "hide-caret" : ""
                    }`}
                  style={{ transition: "transform 0.3s", display: isOpen ? "inline-block" : "none" }}
                />
              </div>
              {openMenu === "project" && (
                <ul className="submenu show">
                  <li className="dms-nav-item">
                    <div className="d-flex align-items-center">
                      <FaCaretRight />
                      <a href="/project-registration/add" className="dms-nav-link text-white">Apply For Project</a>
                    </div>
                  </li>
                  <li className="dms-nav-item">
                    <div className="d-flex align-items-center">
                      <FaCaretRight />
                      <a href="/project-registration" className="dms-nav-link text-white">View Project Registration</a>
                    </div>
                  </li>
                </ul>
              )}
            </li>
            <li className="dms-nav-item">
                    <a href="/developer-profile" className="dms-nav-link text-white d-flex align-items-center">
                      <FaUser className="me-2" />
                      <span>Profile</span>
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
              <div
                className={`dms-nav-link text-white ${openMenu === "user" ? "active" : ""}`}
                onClick={() => handleMenuToggle("user")}
              >
                <div className="d-flex align-items-center">
                  <FaUsers className="me-2" />
                  <span className={isOpen ? "" : "d-none d-md-none d-sm-block"}>User</span>
                </div>
                <FaCaretDown
                  className={`ms-auto ${openMenu === "user" ? "rotate" : ""} ${isOpen ? "hide-caret" : ""
                    }`}
                  style={{ transition: "transform 0.3s", display: isOpen ? "inline-block" : "none" }}
                />
              </div>
              {openMenu === "user" && (
                <ul className="submenu show">
                  <li className="dms-nav-item">
                    <div className="d-flex align-items-center">
                      <FaCaretRight />
                      <a href="/department" className="dms-nav-link text-white">Department</a>
                    </div>
                  </li>
                  <li className="dms-nav-item">
                    <div className="d-flex align-items-center">
                      <FaCaretRight />
                      <a href="/section" className="dms-nav-link text-white">Section</a>
                    </div>
                  </li>
                  <li className="dms-nav-item">
                    <div className="d-flex align-items-center">
                      <FaCaretRight />
                      <a href="/designation" className="dms-nav-link text-white">Designation</a>
                    </div>
                  </li>
                  <li className="dms-nav-item">
                    <div className="d-flex align-items-center">
                      <FaCaretRight />
                      <a href="/user" className="dms-nav-link text-white">User</a>
                    </div>
                  </li>
                </ul>
              )}
            </li>
            <li className="dms-nav-item">
              <a href="/registration-view" className="dms-nav-link text-white d-flex align-items-center">
                <FaTachometerAlt className="me-2" />
                <span> Registration View</span>
              </a>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};
