

import './App.css';
import LoginComponent from './components/Login';
import HomeComponent from './components/Home';
import { Route, Routes } from 'react-router-dom';
import RegistrationComponent from './components/Registration';
import ServiceComponent from './components/Services';
import BookingComponent from './components/Booking';
import ProfileComponent from './components/Profile';
import AboutUsComponent from './components/About';
import PaymentComponent from './components/Payment';
import AdminProfileComponent from './components/AdminProfile'
import ForgotPasswordComponent from './components/ForgetPassword';
import StatusComponent from './components/Status';
import VenuesAvailable from './components/Venue';
import CateringServices from './components/Catering';


function App() {

  const emailId = sessionStorage.getItem('email_id');


  return <Routes>
    <Route path="/" element={<HomeComponent></HomeComponent>}></Route>
    <Route path="/Logins" element={<LoginComponent></LoginComponent>}></Route>
    <Route path="/Accounts" element={<RegistrationComponent></RegistrationComponent>}></Route>
    <Route path="/service" element={<ServiceComponent></ServiceComponent>}></Route>
    <Route path='/Bookings' element={<BookingComponent></BookingComponent>}></Route>
    <Route path='/profile' element={<ProfileComponent></ProfileComponent>} isLoggedIn></Route>
    <Route path='/aboutus' element={<AboutUsComponent></AboutUsComponent>}></Route>
    <Route path='/Payments' element={<PaymentComponent></PaymentComponent>}></Route>
    <Route path='/adminprofile' element={<AdminProfileComponent></AdminProfileComponent>} isLoggedIn></Route>
    <Route path='/forgetpassword' element={<ForgotPasswordComponent></ForgotPasswordComponent>}></Route>
    <Route path='/paymentstatus' element={<StatusComponent></StatusComponent>}></Route>
    <Route path='/venue' element={<VenuesAvailable></VenuesAvailable>}></Route>
    <Route path='/catering' element={<CateringServices></CateringServices>}></Route>


  </Routes>
}

export default App;
