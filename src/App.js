import '../src/styles/dms/dmsglobal.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AdminLayout } from './layouts/dms/AdminLayout/AdminLayout'
/* My Profile */
import { Profile } from './pages/dms/Profile/Profile';
/* User Management */
import { UserAdd } from './pages/dms/Users/UserAdd';
import { UserEdit } from './pages/dms/Users/UserEdit';
import { UserList } from './pages/dms/Users/UserList';
/* Developers */
import { EnterMobile } from './pages/dms/Developers/Authentication/EnterMobile/EnterMobile';
import { EnterOTP } from './pages/dms/Developers/Authentication/EnterOTP/EnterOTP';
import { ForgetPasswordForm } from './pages/dms/Developers/Authentication/ForgetPasswordForm/ForgetPasswordForm';
import { ResetPasswordForm } from './pages/dms/Developers/Authentication/ResetPasswordForm/ResetPasswordForm';
import { ProjectRegistration } from './pages/dms/Developers/ProjectRegistration/ProjectRegistration';
import { DeveloperDashboard } from './pages/dms/Developers/Dashboard/DeveloperDashboard';
/* Admin */
import { AdminDashboard } from './pages/dms/Admin/Dashboard/AdminDashboard';
import { AdminLogin } from './pages/dms/Admin/Authentication/AdminLogin';
import { ProjectRegistrationList } from './pages/dms/Developers/ProjectRegistration/ProjectRegistrationList';
import { ProjectRegistrationView } from './pages/dms/Developers/ProjectRegistration/ProjectRegistrationView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Dashboard */}
        <Route path='/' element={ <DeveloperDashboard />} />

        {/* Profile Page */}
        <Route path='/profile' element={<Profile />} />

        {/* Developers */}
        {/* Developers Dashboard */}
        <Route path='/developer-dashboard' element={<DeveloperDashboard />} />
        {/* Developers Project Registration */}
        <Route path='/project-registration' element={<ProjectRegistrationList/>}/>
        <Route path='/project-registration/add' element={<ProjectRegistration />} />
        {/* Developers Authentication Pages */}
        <Route path='/developer-authentication' element={<EnterMobile />} />
        <Route path='enter-otp' element={<EnterOTP />} />
        <Route path='/developer-authentication/forget-password' element={<ForgetPasswordForm />} />
        <Route path='/developer-authentication/reset-password' element={<ResetPasswordForm />} />
       <Route path='/registration/view' element={<ProjectRegistrationView/>}/>
        {/* Admin */}
        <Route path='/admin-dashboard' element={<AdminDashboard />} />
        {/* Admin Authentication */}
        <Route path='/admin-authentication' element={<AdminLogin />} />

        {/* User */}
        <Route path='/user' element={<UserList />} />
        <Route path='/user/add' element={<UserAdd />} />
        <Route path='/user/edit' element={<UserEdit />} />

       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
