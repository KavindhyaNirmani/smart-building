import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RealAdmin.css';
import logo from '../assest/logo.png';
import profileIcon from '../assest/profile.png';
import documentIcon from '../assest/DI2.png';


const RealAdmin = () => {
  const navigate = useNavigate();

  const handleLogout1 = () => {
    navigate('/login');

  };

  const handlePowerUsage = () => {
    navigate('/dashboard'); // Navigate to 'dashboard' route
  };
  return(

    <div className="admin-page">
    <header className="header">
      <h1>Real Admin page</h1>
    </header>
    <div >
        <img src={logo} className="logo" alt="Company Logo" />
        <img src={profileIcon} className="profile-icon" alt="Profile Icon" />
      </div>
      
    <button className="logout-button1" onClick={handleLogout1}>Logout</button>
    <div className="content">

      <div className="box1">
      <img src={documentIcon} className='dlogo' alt='' />
        <p> <b>Click here for all sector selection
               detais and previous generator reports</b> </p>
        <div><button className='button'>User</button></div>
      </div>

      <div className="box2">
      <img src={documentIcon} className='dlogo' alt='' />
        <p> <b>Click here for view power usage reports</b> </p>
        <div><button className='button' onClick={handlePowerUsage}>Power Usage</button></div>
        </div>

      <div className="box3">
      <img src={documentIcon} className='dlogo' alt='' />
        <p> <b>Click here for all sector related operations</b> </p>
        <div><button className='button'>Sectors</button></div>
      </div>

    </div>
    <footer className="footer">
      <p>Footer content goes here.</p>
    </footer>
  </div>
  
    
  );
}

export default RealAdmin;
