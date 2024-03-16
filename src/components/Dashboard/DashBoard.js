import React, { useEffect, useState } from 'react';
import './DashBoard.css';
import Bulb from './bulb'; // Correct the import path for Bulb component
import Gauge from './Gauge'; // Correct the import path for Gauge component
import fan1 from '../assest/fan2.png'; // Correct the import path for fan1 image
import firebase from 'firebase/compat/app'; // Correct the import statement for Firebase
import 'firebase/compat/database'; // Import Firebase database module
import Fan from './Fan'; // Import the Fan component

const DashBoard = () => {
  const { fans, toggleFan, fan1Color, fan2Color } = Fan(); // Use the Fan component

  // Initialize the state for the bulbs
  const [bulbs, setBulbs] = useState([]);

  // Fetch initial bulb states from Firebase Realtime Database
  useEffect(() => {
    const bulbsRef = firebase.database().ref('bulbs');
    bulbsRef.on('value', (snapshot) => {
      const bulbsData = snapshot.val();
      if (bulbsData) {
        const bulbsArray = Object.values(bulbsData);
        const mappedBulbs = bulbsArray.map((bulb, index) => ({
          id: index + 1,
          status: bulb.status,
        }));
        setBulbs(mappedBulbs);
      }
    });

    // Cleanup function
    return () => bulbsRef.off();
  }, []);

  // Function to toggle the status of a specific bulb
  const toggleBulb = (id) => {
    const bulbRef = firebase.database().ref(`bulbs/${id - 1}`); // Adjust for 0-based index
    const updatedStatus = !bulbs.find((bulb) => bulb.id === id).status;
    bulbRef.update({ status: updatedStatus });
  };

  return (
    <div className="dashboard">
      <header className="header3"></header>

      <div className="box">
        <div className="content">
          <div className="box_1">
            <div className="inner-box1">
              <div className="inner-box11">
                <div className="Light-text"><h2>Light Control</h2></div>
              </div>
            </div>
            <div className="small-boxes">
              {bulbs.map((bulb) => (
                <Bulb
                  key={bulb.id}
                  bulbId={bulb.id}
                  status={bulb.status}
                  toggleBulb={toggleBulb}
                />
              ))}
            </div>
            <div className="small-box">
              <div className="Light-text1"><h2>+</h2></div>
            </div>
            <div className="small-box">
              <div className="Light-text2"><h2>-</h2></div>
            </div>
          </div>

          {/* Insert the Gauge component here */}
          <div className='inner-box3'>
            <div className="inner-box4">
              <Gauge />
            </div>
          </div>

          <div className="box_2">
            <div className="inner-box2">
              <div className='inner-box22'>
                <div className='fan_text_11'><h2>Fan 01</h2></div>
                <div className='fan_box_11'>
                  <div
                    className='fan_box_11_button'
                    onClick={() => toggleFan(1)}
                    style={{ backgroundColor: fan1Color }}
                  />
                </div>
              </div>
              <div className='inner-box23'>
                <div className='fan_text_22'><h2>Fan 02</h2></div>
                <div className='fan_box_22'>
                  <div
                    className='fan_box_22_button'
                    onClick={() => toggleFan(2)}
                    style={{ backgroundColor: fan2Color }}
                  />
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
                  <img src={fan1} className="fan" alt="" />
                </div>
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
                  <img src={fan1} className="fan" alt="" />
                </div>
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

      <footer className="footer">
        <p>Footer content goes here.</p>
      </footer>
    </div>
  );
};

export default DashBoard;
