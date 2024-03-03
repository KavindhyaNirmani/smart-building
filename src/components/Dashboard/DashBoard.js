import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DashBoard.css';
import bulb1 from '../assest/bulb4.png';
import Gauge from './Gauge'; // Import the Gauge component

const DashBoard = () => {
    
  return (
    <div className="dashboard">
      <header className="header3">
      </header>

      <div className="box">
        <div className="content">
          <div className="box_1">
            <div className="inner-box1"></div>
            <div className="small-boxes">
              {[...Array(10)].map((_, index) => (
                <div key={index} className="small-box">
                  <img src={bulb1} className="bulb" alt="" />  
                </div>
              ))}

              <div className="small-box"><h1>+</h1></div>
              <div className="small-box"><h1>-</h1></div>
            </div>
            <div className='inner-box5'></div>
          </div>

          {/* Insert the Gauge component here */}
           <div className='inner-box3'>
           <div className="inner-box4" >
           <Gauge /> 
           </div>
           </div>
           <div className="inner-box7" ></div>
          
          <div className="box_2">
            <div className="inner-box2"></div>
            <div className="small-boxes2">
              {[...Array(2)].map((_, index) => (
                <div key={index} className="small-box2"></div>
              ))}
            </div> 
            <div className='inner-box6'></div> 
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
