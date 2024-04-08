import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './loadingpage.css';
import img from '../assest/logo.png';

const LoadingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login'); // Replace '/login' with the path to your login page
    }, 5000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timer); // Cleanup function to clear the timer if component unmounts
  }, [navigate]);

  return (
    <div className="loading-page">
      <header className="header"></header>

      <div className="content">
        <img src={img} className="image" alt="Logo" />
      </div>

      <footer className="footer">
        <p className='footer11'>SMART X INDUSTRIES </p>
      </footer>
    </div>
  );
}

export default LoadingPage;
