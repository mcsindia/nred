import '../src/styles/dms/dmsglobal.css'
import '../src/styles/web/webglobal.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
/* My Profile */
import { Profile } from './pages/dms/Profile/Profile';
/* User Management */
import { UserAdd } from './pages/dms/Admin/User/Users/UserAdd';
import { UserEdit } from './pages/dms/Admin/User/Users/UserEdit';
import { UserList } from './pages/dms/Admin/User/Users/UserList';
/* Department */
import { DepartmentList } from './pages/dms/Admin/User/Department/DepartmentList';
import { DepartmentAdd } from './pages/dms/Admin/User/Department/DepartmentAdd';
import { DepartmentEdit } from './pages/dms/Admin/User/Department/DepartmentEdit';
/* Designation */
import { DesignationList } from './pages/dms/Admin/User/Designation/DesignationList';
import { DesignationEdit } from './pages/dms/Admin/User/Designation/DesignationEdit';
import { DesignationAdd } from './pages/dms/Admin/User/Designation/DesignationAdd';
/* Dashboard */
import { DeveloperDashboard } from './pages/dms/Developers/Dashboard/DeveloperDashboard';
import { AdminDashboard } from './pages/dms/Admin/Dashboard/AdminDashboard';
/* Authentication */
/* Developers */
import { EnterMobile } from './pages/dms/Developers/Authentication/EnterMobile/EnterMobile';
import { EnterOTP } from './pages/dms/Developers/Authentication/EnterOTP/EnterOTP';
import { ForgetPasswordForm } from './pages/dms/Developers/Authentication/ForgetPasswordForm/ForgetPasswordForm';
import { ResetPasswordForm } from './pages/dms/Developers/Authentication/ResetPasswordForm/ResetPasswordForm';
/* Admin */
import { AdminLogin } from './pages/dms/Admin/Authentication/AdminLogin';
/* Project Registration */
import { ProjectRegistration } from './pages/dms/Developers/ProjectRegistration/ProjectRegistration';
import { ProjectRegistrationList } from './pages/dms/Developers/ProjectRegistration/ProjectRegistrationList';
import { ProjectRegistrationView } from './pages/dms/Developers/ProjectRegistration/ProjectRegistrationView';
import { LoaForm } from './pages/dms/Developers/LoaForm/LoaForm';
/* Web */
import { Home } from './pages/web/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Dashboard */}
        <Route path='/' element={<Home />} />
        {/* Profile Page */}
        <Route path='/profile' element={<Profile />} />
        {/* Developers */}
        {/* Developers Dashboard */}
        <Route path='/developer-dashboard' element={<DeveloperDashboard />} />
        {/* Developers Project Registration */}
        <Route path='/project-registration' element={<ProjectRegistrationList />} />
        <Route path='/project-registration/add' element={<ProjectRegistration />} />
        <Route path='/loa-form' element={<LoaForm />} />
        {/* Developers Authentication Pages */}
        <Route path='/developer-login' element={<EnterMobile />} />
        <Route path='enter-otp' element={<EnterOTP />} />
        <Route path='/developer-login/forget-password' element={<ForgetPasswordForm />} />
        <Route path='/developer-login/reset-password' element={<ResetPasswordForm />} />
        <Route path='/registration/view' element={<ProjectRegistrationView />} />
        {/* Admin */}
        <Route path='/admin-dashboard' element={<AdminDashboard />} />
        {/* Admin Authentication */}
        <Route path='/admin-login' element={<AdminLogin />} />
        {/* Department */}
        <Route path='/department' element={<DepartmentList />} />
        <Route path='/department/add' element={<DepartmentAdd />} />
        <Route path='/department/edit' element={<DepartmentEdit />} />
        {/* Designation */}
        <Route path='/designation' element={<DesignationList />} />
        <Route path='/designation/add' element={<DesignationAdd />} />
        <Route path='/designation/edit' element={<DesignationEdit />} />
        {/* User */}
        <Route path='/user' element={<UserList />} />
        <Route path='/user/add' element={<UserAdd />} />
        <Route path='/user/edit' element={<UserEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
