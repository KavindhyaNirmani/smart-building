import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminPage1.css'; // Import CSS for styling
import logo from '../assest/logo.png';
import profileIcon from '../assest/profile.png';

const AdminPage1 = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="admin-page">
      <header className="header">
        
      </header>
      <div >
        <img src={logo} className="logo" alt="Company Logo" />
        <img src={profileIcon} className="profile-icon" alt="Profile Icon" />
      </div>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
      <div className="content">

      <div className="box11">
        <p> <b>Click here for all sector selection
               detais and previous generator reports</b> </p>
        <div><button className='button'>   User  </button></div>
      </div>

      <div className= "box22">
        <p> <b>Click here for view power usage reports</b> </p>
        <div><button className='button'>Power Usage</button></div>
      </div>

      </div>
      <footer className="footer">
        <p>Footer content goes here.</p>
      </footer>
    </div>
  );
}

export default AdminPage1;
