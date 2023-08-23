
import logo from './logo.svg';
import './App.css';
import LoginComponent from './components/Login';
import HomeComponent from './components/Home';
import { Route, Routes } from 'react-router-dom';
import RegistrationComponent from './components/Registration';
import ServiceComponent from './components/Services';
import BookingComponent from './components/Booking';
import ProfileComponent from './components/Profile';

import AboutUsComponent from './components/About';

function App() {

  return <Routes>
    <Route path="/" element={<HomeComponent></HomeComponent>}></Route>
    <Route path="/login" element={<LoginComponent></LoginComponent>}></Route>
    <Route path="/register" element={<RegistrationComponent></RegistrationComponent>}></Route>
    <Route path="/service" element={<ServiceComponent></ServiceComponent>}></Route>
    <Route path='/booking' element={<BookingComponent></BookingComponent>}></Route>
    <Route path='/profile' element={<ProfileComponent></ProfileComponent>}></Route>
    <Route path='/aboutus' element={<AboutUsComponent></AboutUsComponent>}></Route>
  </Routes>
}

export default App;
