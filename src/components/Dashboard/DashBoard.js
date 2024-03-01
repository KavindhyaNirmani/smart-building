import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DashBoard.css';
import bulb1 from '../assest/bulb4.png';
import Gauge from './Gauge'; // Import the Gauge component

const DashBoard = () => {
    
  return (
    <div className="dashboard">
      <header className="header3">
        <h1>DashBoard</h1>
      </header>

      <div className="box">
        <div className="content">
          <div className="box_1">
            <div className="inner-box1"></div>
            <div className="small-boxes">
              {[...Array(12)].map((_, index) => (
                <div key={index} className="small-box">
                  <img src={bulb1} className="bulb" alt="" />
                </div>
              ))}
            </div>
          </div>

          {/* Insert the Gauge component here */}
          <Gauge />
          
          <div className="box_3">
          <div className="box_4">
          <div className="box_5"></div>
          </div>
          </div>
          <div className="box_2">
            <div className="inner-box2"></div>
            <div className="small-boxes2">
              {[...Array(2)].map((_, index) => (
                <div key={index} className="small-box2"></div>
              ))}
            </div>  
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>Footer content goes here.</p>
      </footer>
    </div>
  );
}

export default DashBoard;
