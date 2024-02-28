import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RealAdmin.css';
import logo from '../assest/logo.png';
import profileIcon from '../assest/profile.png';
 // Import CSS for styling


const RealAdmin = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/realAdmin');

  };
  return(

    <div className="admin-page">
    <header className="header">
      <h1>real admin page</h1>
    </header>
    <div >
        <img src={logo} className="logo" alt="Company Logo" />
        <img src={profileIcon} className="profile-icon" alt="Profile Icon" />
      </div>
      
    <button className="logout-button" onClick={handleLogout}>Logout</button>
    <div className="content">

      <div className="box1">
        <p> <b>Click here for all sector selection
               detais and previous generator reports</b> </p>
        <div><button className='button'>User</button></div>
      </div>

      <div className="box2">
        <p> <b>Click here for view power usage reports</b> </p>
        <div><button className='button'>Power Usage</button></div>
      </div>

      <div className="box3">
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

export default RealAdmin;
