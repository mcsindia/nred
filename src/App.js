import '../src/styles/dms/dmsglobal.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AdminLayout } from './layouts/dms/AdminLayout/AdminLayout'
import { Dashboard } from './pages/dms/Dashboard/Dashboard';
/* My Profile */
import { Profile } from './pages/dms/Profile/Profile';
/* User Management */
import { UserAdd } from './pages/dms/Users/UserAdd';
import { UserEdit } from './pages/dms/Users/UserEdit';
import { UserList } from './pages/dms/Users/UserList';
/* Master */
import { CountryList } from './pages/dms/Master/Country/CountryList';
import { CountryAdd } from './pages/dms/Master/Country/CountryAdd';
import { CountryEdit } from './pages/dms/Master/Country/CountryEdit';
import { CityList } from './pages/dms/Master/City/CityList';
import { CityAdd } from './pages/dms/Master/City/CityAdd';
import { CityEdit } from './pages/dms/Master/City/CityEdit';
import { StateList } from './pages/dms/Master/State/StateList';
import { StateAdd } from './pages/dms/Master/State/StateAdd';
import { StateEdit } from './pages/dms/Master/State/StateEdit';
/* Audit Logs */
import { AuditLogs } from './pages/dms/AuditLogs/AuditLogs';
/* Media */
import { NewsList } from './pages/dms/Media/News/NewsList';
import { NewsAdd } from './pages/dms/Media/News/NewsAdd';
import { NewsEdit } from './pages/dms/Media/News/NewsEdit';
import { EventsList } from './pages/dms/Media/Events/EventsList';
import { EventAdd } from './pages/dms/Media/Events/EventAdd';
import { EventEdit } from './pages/dms/Media/Events/EventEdit';
import { PressReleases } from './pages/dms/Media/PressRelease/PressReleases';
import { PressRealeaseAdd } from './pages/dms/Media/PressRelease/PressRealeaseAdd';
import { PressReleaseEdit } from './pages/dms/Media/PressRelease/PressReleaseEdit';
/* Developers */
import { EnterMobile } from './pages/dms/Developers/Authentication/EnterMobile/EnterMobile';
import { EnterOTP } from './pages/dms/Developers/Authentication/EnterOTP/EnterOTP';
import { CreateNewPassword } from './pages/dms/Developers/Authentication/CreateNewPassword/CreateNewPassword'
import { LoginForm } from './pages/dms/Developers/Authentication/LoginForm/LoginForm';
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
        <Route path='/' element={<AdminLayout> <Dashboard /> </AdminLayout>} />

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
        <Route path='/create-password' element={<CreateNewPassword />} />
        <Route path='/login' element={<LoginForm />} />
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

        {/* Master Management */}
        {/* Country */}
        <Route path='/master/country' element={<CountryList />} />
        <Route path='//master/country/add' element={<CountryAdd />} />
        <Route path='/master/country/edit' element={<CountryEdit />} />
        {/* City */}
        <Route path='/master/city' element={<CityList />} />
        <Route path='/master/city/add' element={<CityAdd />} />
        <Route path='/master/city/edit' element={<CityEdit />} />
        {/* State */}
        <Route path='/master/state' element={<StateList />} />
        <Route path='/master/state/add' element={<StateAdd />} />
        <Route path='/master/state/edit' element={<StateEdit />} />
        {/* Media Management */}
        {/* News */}
        <Route path='/media/news' element={<NewsList />} />
        <Route path='/media/news/add' element={<NewsAdd />} />
        <Route path='/media/news/edit' element={<NewsEdit />} />
        {/* Event */}
        <Route path='/media/events' element={<EventsList />} />
        <Route path='/media/events/add' element={<EventAdd />} />
        <Route path='/media/events/edit' element={<EventEdit />} />
        {/* Press Release */}
        <Route path='/media/press-releases' element={<PressReleases />} />
        <Route path='/media/press-releases/add' element={<PressRealeaseAdd />} />
        <Route path='/media/press-releases/edit' element={<PressReleaseEdit />} />

        {/* Audit Logs */}
        <Route path='/audit-logs' element={<AuditLogs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
