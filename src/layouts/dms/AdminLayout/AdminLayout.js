import React, { useState } from "react";
import { Sidebar } from "../../../components/dms/Sidebar/Sidebar";
import { DMSHeader} from "../../../components/dms/Header/Header";
import { Footer } from "../../../components/dms/Footer/Footer";

export const AdminLayout = ({ children }) => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);  // Default to open sidebar

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);  // Toggle sidebar state
  };

  return (
    <div className="dms-app-container">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`dms-main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <DMSHeader toggleSidebar={toggleSidebar} />

        {/* Dynamic Page Content */}
        <div className="dms-page-content">{children}</div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};
