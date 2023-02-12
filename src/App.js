import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './components/Home';
import Dash from './components/Dash';
import Register from './components/Register';
import Login from './components/Login';

import DashInventory from './components/DashInventory';
import DashRenting from './components/DashRenting';
import DashUsers from './components/DashUsers';
import DashReports from './components/DashReports';




function App() {
  return (
  <Routes>
    <Route path="/" element={ <Home/> } />
    <Route path="register" element={ <Register />} />
    <Route path="login" element={ <Login/> } />
    <Route path="dashboard" element={<Dash />} />
    <Route path="dashboard/users" element={<DashUsers />} />
    <Route path="dashboard/inventory" element={<DashInventory />} />
    <Route path="dashboard/renting" element={<DashRenting />} />
    <Route path="dashboard/reports" element={<DashReports />} />
    
  </Routes>

  );
}

export default App;
