import React, { useState, useEffect } from "react";
import {
    FaChartLine, 
    FaUsers,
    FaMotorcycle, 
    FaCaretDown, FaCaretRight, 
    FaTools
} from "react-icons/fa";

export const Sidebar = ({ isOpen }) => {
    const [activeMenu, setActiveMenu] = useState("");
    const [openMenu, setOpenMenu] = useState(null);
    const [openSubMenu, setOpenSubMenu] = useState(null);

    const handleMenuToggle = (menuName) => {
        setOpenMenu((prev) => (prev === menuName ? null : menuName));
        setOpenSubMenu(null);
    };

    const handleSubMenuToggle = (subMenuName) => {
        setOpenSubMenu((prev) => (prev === subMenuName ? null : subMenuName));
    };

    // Close menus when clicking outside
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (!e.target.closest(".dms-sidebar")) {
                setOpenMenu(null);
                setOpenSubMenu(null);
            }
        };

        document.addEventListener("click", handleOutsideClick);
        return () => document.removeEventListener("click", handleOutsideClick);
    }, []);

    return (
        <div className={`dms-sidebar bg-color text-white ${isOpen ? "open" : "closed"}`}>
            {/* Sidebar Header */}
            <div className="p-3 d-flex align-items-center sidebar-title">
                <a href="/" className="d-flex align-items-center text-white text-decoration-none">
                    {!isOpen ? (
                        < FaMotorcycle size={30} className="text-white d-none d-md-block" />
                    ) : (
                        < FaMotorcycle size={30} className="text-white d-block d-md-none" />
                    )}
                    {isOpen && <h4 className="mb-0 ms-2">DMS</h4>}
                </a>
            </div>
            <hr />

            {/* Sidebar Links */}
            <ul className="nav flex-column">
                {/* Developers */}
                <li className="dms-nav-item">
                    <div
                        className={`dms-nav-link text-white  ${openMenu === "developers" ? "active" : ""}`}
                        onClick={() => handleMenuToggle("developers")}
                    >
                        <div className="d-flex align-items-center">
                            <FaTools className="me-2" />
                            <span className={isOpen ? "" : "d-none d-md-none d-sm-block"}>Developers </span>
                        </div>
                        <FaCaretDown
                            className={`ms-auto ${openMenu === "developers" ? "rotate" : ""} ${isOpen ? "hide-caret" : ""
                                }`}
                            style={{ transition: "transform 0.3s", display: isOpen ? "inline-block" : "none" }}
                        />

                    </div>
                    {openMenu === "developers" && (
                        <ul className="submenu show">
                            <li className="dms-nav-item">
                                <div className="d-flex align-items-center">
                                    <FaCaretRight />
                                    <a href="/developer-dashboard" className="dms-nav-link text-white">Dashboard</a>
                                </div>
                            </li>
                            <li className="dms-nav-item">
                                <div className="d-flex align-items-center">
                                    <FaCaretRight />
                                    <a href="/project-registration" className="dms-nav-link text-white">Project Registration</a>
                                </div>
                            </li>
                            <li className="dms-nav-item">
                                <div className="d-flex align-items-center">
                                    <FaCaretRight />
                                    <a href="/developer-login" className="dms-nav-link text-white">Authentication</a>
                                </div>
                            </li>
                        </ul>
                    )}
                </li>

                {/* Admin */}
                <li className="dms-nav-item">
                    <div
                        className={`dms-nav-link text-white  ${openMenu === "admin" ? "active" : ""}`}
                        onClick={() => handleMenuToggle("admin")}
                    >
                        <div className="d-flex align-items-center">
                            <FaTools className="me-2" />
                            <span className={isOpen ? "" : "d-none d-md-none d-sm-block"}>Admin </span>
                        </div>
                        <FaCaretDown
                            className={`ms-auto ${openMenu === "admin" ? "rotate" : ""} ${isOpen ? "hide-caret" : ""
                                }`}
                            style={{ transition: "transform 0.3s", display: isOpen ? "inline-block" : "none" }}
                        />

                    </div>
                    {openMenu === "admin" && (
                        <ul className="submenu show">
                            <li className="dms-nav-item">
                                <div className="d-flex align-items-center">
                                    <FaCaretRight />
                                    <a href="/admin-dashboard" className="dms-nav-link text-white">Dashboard</a>
                                </div>
                            </li>

                            <li className="dms-nav-item">
                                <div className="d-flex align-items-center">
                                    <FaCaretRight />
                                    <a href="/admin-login" className="dms-nav-link text-white">Authentication</a>
                                </div>
                            </li>
                        </ul>
                    )}
                </li>

                {/* User Management */}
                <li className="dms-nav-item">
                    <div
                        className={`dms-nav-link text-white  ${openMenu === "user" ? "active" : ""}`}
                        onClick={() => handleMenuToggle("user")}
                    >
                        <div className="d-flex align-items-center">
                            <FaUsers className="me-2" />
                            <span className={isOpen ? "" : "d-none d-md-none d-sm-block"}>User </span>
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
                                    <a href="/user" className="dms-nav-link text-white">User List</a>
                                </div>
                            </li>
                        </ul>
                    )}
                </li>
            </ul>
        </div>
    );
};
