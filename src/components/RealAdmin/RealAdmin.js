import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RealAdmin.css';
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
    
    <button className="logout-button" onClick={handleLogout}>Logout</button>
    <div className="content">
      <div className="box">
        <p> <b>Click here for all sector selection</b> </p>
        <div><button className='button'>Sector Selection</button></div>
      </div>
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

export default RealAdmin;
