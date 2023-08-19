
import logo from './logo.svg';
import './App.css';
import LoginComponent from './components/Login';
import HomeComponent from './components/Home';
import { Route, Routes } from 'react-router-dom';
import RegistrationComponent from './components/Registration';

function App() {

  return <Routes>
    <Route path="/" element={<HomeComponent></HomeComponent>}></Route>
    <Route path="/login" element={<LoginComponent></LoginComponent>}></Route>
    <Route path="/register" element={<RegistrationComponent></RegistrationComponent>}></Route>

  </Routes>
  // (
  //   <HomeComponent></HomeComponent>
  //   // <LoginComponent></LoginComponent>
  // );
}

export default App;
