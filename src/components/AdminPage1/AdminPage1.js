import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminPage1.css'; // Import CSS for styling
import logo from '../assest/logo.png';
import profileIcon from '../assest/profile.png';
import documentIcon from '../assest/DI2.png';

const AdminPage1 = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Navigate to the login page when "Logout" button is clicked
    navigate('/login');
  };

  const handlePowerUsage = () => {
    // Navigate to the Dashboard page when "Power Usage" button is clicked
    navigate('/dashboard');
  };

  return (
    <div className="admin-page">
      <header className="header"></header>
      <div>
        <img src={logo} className="logo" alt="Company Logo" />
        <img src={profileIcon} className="profile-icon" alt="Profile Icon" />
      </div>
      <div>
        
          <button className='logout-button' onClick={handleLogout}>Logout</button>
        
      </div>
      <div className="content">
        <div className="box11">
          <img src={documentIcon} className='dlogo' alt='' />
          <p><b>Click here for all sector selection details and previous generator reports</b></p>
          <div><button className='button'>User</button></div>
        </div>
        <div className="box22">
          <img src={documentIcon} className='dlogo' alt='' />
          <p><b>Click here for view power usage reports</b></p>
          <div><button className='button' onClick={handlePowerUsage}>Power Usage</button></div>
        </div>
      </div>
      <footer className="footer">
        <p className= "footer11"> SMART  X  INDUSTRIES</p>
      </footer>
    </div>
  );
}

export default AdminPage1;
