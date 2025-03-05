/* Css */
import '../src/styles/dms/dmsglobal.css'
import '../src/styles/web/webglobal.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
/* Header My Profile */
import { Profile } from './pages/dms/Profile/Profile';
/* Departmental Panel */
/* Authentication*/
import { AdminLogin } from './pages/dms/Departmental/Authentication/AdminLogin';
/* Dashboard */
import { AdminDashboard } from './pages/dms/Departmental/Dashboard/AdminDashboard';
/* User  */
import { UserAdd } from './pages/dms/Departmental/UserManagement/Users/UserAdd';
import { UserEdit } from './pages/dms/Departmental/UserManagement/Users/UserEdit';
import { UserList } from './pages/dms/Departmental/UserManagement/Users/UserList';
/* Department */
import { DepartmentList } from './pages/dms/Departmental/UserManagement/Department/DepartmentList';
import { DepartmentAdd } from './pages/dms/Departmental/UserManagement/Department/DepartmentAdd';
import { DepartmentEdit } from './pages/dms/Departmental/UserManagement/Department/DepartmentEdit';
/* Designation */
import { DesignationList } from './pages/dms/Departmental/UserManagement/Designation/DesignationList';
import { DesignationEdit } from './pages/dms/Departmental/UserManagement/Designation/DesignationEdit';
import { DesignationAdd } from './pages/dms/Departmental/UserManagement/Designation/DesignationAdd';
/* Section */
import { SectionList } from './pages/dms/Departmental/UserManagement/Section/SectionList';
import { SectionAdd } from './pages/dms/Departmental/UserManagement/Section/SectionAdd';
import { SectionEdit } from './pages/dms/Departmental/UserManagement/Section/SectionEdit';
/* Depatmental Project Registration */
import { ProjectRegistration } from './pages/dms/Departmental/ProjectRegistration/ProjectRegistration';

/* Deveoper Panel */
/* Authentication */
import { EnterMobile } from './pages/dms/Developers/Authentication/EnterMobile/EnterMobile';
import { EnterOTP } from './pages/dms/Developers/Authentication/EnterOTP/EnterOTP';
import { ForgetPasswordForm } from './pages/dms/Developers/Authentication/ForgetPasswordForm/ForgetPasswordForm';
import { ResetPasswordForm } from './pages/dms/Developers/Authentication/ResetPasswordForm/ResetPasswordForm';
/* Dashboard */
import { DeveloperDashboard } from './pages/dms/Developers/Dashboard/DeveloperDashboard';
/* Project Registration */
import { ProjectRegistrationAdd } from './pages/dms/Developers/ProjectRegistration/ProjectRegistrationAdd';
import { ProjectRegistrationList } from './pages/dms/Developers/ProjectRegistration/ProjectRegistrationList';
import { ProjectRegistrationView } from './pages/dms/Developers/ProjectRegistration/ProjectRegistrationView';
/* Developer Profile */
import { DeveloperProfile } from './pages/dms/Developers/DeveloperProfile/DeveloperProfile';
/* LOA Form */
import { LoaForm } from './pages/dms/Developers/LoaForm/LoaForm';
/* Web */
import { Home } from './pages/web/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Dashboard */}
        <Route path='/' element={<Home />} />
        {/* Header Profile Page */}
        <Route path='/profile' element={<Profile />} />
        {/* Developers */}
        {/* Developers Authentication Pages */}
        <Route path='/developer-login' element={<EnterMobile />} />
        <Route path='enter-otp' element={<EnterOTP />} />
        <Route path='/developer-login/forget-password' element={<ForgetPasswordForm />} />
        <Route path='/developer-login/reset-password' element={<ResetPasswordForm />} />
        {/* Developers Dashboard */}
        <Route path='/developer-dashboard' element={<DeveloperDashboard />} />
        {/* Developers Project Registration */}
        <Route path='/project-registration' element={<ProjectRegistrationList />} />
        <Route path='/project-registration/add' element={<ProjectRegistrationAdd />} />
        <Route path='/registration/view' element={<ProjectRegistrationView />} />
        {/* LOA */}
        <Route path='/loa-form' element={<LoaForm />} />
        {/* Developer Profile */}
        <Route path='/developer-profile' element={<DeveloperProfile/>} />

        {/* Departmental */}
        {/* Departmental Authentication */}
        <Route path='/admin-login' element={<AdminLogin/>} />
        {/* Dashboard */}
        <Route path='/admin-dashboard' element={<AdminDashboard />} />
        {/* Department */}
        <Route path='/department' element={<DepartmentList />} />
        <Route path='/department/add' element={<DepartmentAdd />} />
        <Route path='/department/edit' element={<DepartmentEdit />} />
        {/* Section */}
        <Route path='/section' element={<SectionList/>} />
        <Route path='/section/add' element={<SectionAdd/>} />
        <Route path='/section/edit' element={<SectionEdit/>} />
        {/* Designation */}
        <Route path='/designation' element={<DesignationList />} />
        <Route path='/designation/add' element={<DesignationAdd />} />
        <Route path='/designation/edit' element={<DesignationEdit />} />
        {/* User */}
        <Route path='/user' element={<UserList />} />
        <Route path='/user/add' element={<UserAdd />} />
        <Route path='/user/edit' element={<UserEdit />} />
        {/* Departmental Project Registration */}
        <Route path='/departmental/project-registration' element={<ProjectRegistration/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
