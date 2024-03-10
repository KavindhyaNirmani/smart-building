import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DashBoard.css';
import bulb1 from '../assest/bulb4.png';
import Gauge from './Gauge'; // Import the Gauge component
import fan1 from '../assest/fan2.png';

const DashBoard = () => {
    
  return (
    <div className="dashboard">
      <header className="header3">
      </header>

      <div className="box">
        <div className="content">
          <div className="box_1">
            <div className="inner-box1">
            <div className="inner-box11">
            <div className="Light-text"><h2>Light Control</h2></div>
            </div>
            </div>
            <div className="small-boxes">
              {[...Array(10)].map((_, index) => (
                <div key={index} className="small-box">
                <div className="box_3"></div>
                  <img src={bulb1} className="bulb" alt="" /> 
                  <div className='inner_small_boxes'></div> 
                </div>
              ))}

              <div className="small-box">
              <div className="Light-text1"><h2>+</h2></div>
              </div>
              <div className="small-box">
              <div className="Light-text2"><h2>-</h2></div>
              </div>
            </div>
            <div className='inner-box5'></div>
          </div>

          {/* Insert the Gauge component here */}
           <div className='inner-box3'>
           <div className="inner-box4" >
           <Gauge /> 
           </div>
           </div>
           
          <div className="box_2">
            <div className="inner-box2">
              <div className='inner-box22'>
                <div className='fan_text_11'><h2>Fan 01</h2></div>
                <div className='fan_box_11'>
                  <div className='fan_box_11_button'></div>
                </div>
              </div>
              <div className='inner-box23'>
              <div className='fan_text_22'><h2>Fan 02</h2></div>
              <div className='fan_box_22'>
              <div className='fan_box_22_button'></div>
              </div>
              </div>
              <div className='inner-box24'>
              <div className="Fan-text1"><h2>+</h2></div>
              </div>
              <div className='inner-box25'>
              <div className="Fan-text2"><h2>-</h2></div>
              </div>
            </div>
            <div className="small-boxes2">
              
          <div className="small-box2_1">
            <div className='small-box2_11'>
            <img src={fan1} className="fan" alt="" /> </div>

            <div className='small-box2_22'>
              <div className='fan_+'><h1>+</h1></div>
            </div>

            <div className='small-box2_33'></div>
            <div className='small-box2_44'>
            <div className='fan_-'><h1>-</h1></div>
            </div>
          </div>
          <div className="small-box2_2">
          <div className='small-box2_11'>
            <img src={fan1} className="fan" alt="" /> </div>

            <div className='small-box2_22'>
              <div className='fan_+'><h1>+</h1></div>
            </div>

            <div className='small-box2_33'></div>
            <div className='small-box2_44'>
            <div className='fan_-'><h1>-</h1></div>
            </div>

          </div>  
            </div> 
            <div className='inner-box6'></div> 
          </div>
        </div>
        <div className='box_7'></div>
      </div>
      {/* Adding small box_7 */}
      
      <footer className="footer">
        <p>Footer content goes here.</p>
      </footer>
    </div>
  );
}

export default DashBoard;
