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
        <h1>Admin Page 1</h1>
      </header>
      <div >
        <img src={logo} className="logo" alt="Company Logo" />
        <img src={profileIcon} className="profile-icon" alt="Profile Icon" />
      </div>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
      <div className="content">
        <div className="box">
          <p> <b>Click here for all sector selection</b> </p>
          <div><button className='button'>Sector Selection</button></div>
        </div>
      </div>
      <footer className="footer">
        <p>Footer content goes here.</p>
      </footer>
    </div>
  );
}

export default AdminPage1;
