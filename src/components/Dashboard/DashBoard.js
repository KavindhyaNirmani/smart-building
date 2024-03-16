import React, { useEffect, useState } from 'react';
import './DashBoard.css';
import firebase from 'firebase/compat/app'; // Correct the import statement for Firebase
import 'firebase/compat/database'; // Import Firebase database module
import Bulb from './bulb'; // Import the Bulb component
import Gauge from './Gauge'; // Import the Gauge component
import fan1 from '../assest/fan2.png'; // Correct the import path for fan1 image

const DashBoard = () => {
  // Initialize the state for the bulbs, fans, and fan switch colors
  const [bulbs, setBulbs] = useState([]);
  const [fans, setFans] = useState([]);
  const [fan1Color, setFan1Color] = useState('white'); // State for fan 01 switch color
  const [fan2Color, setFan2Color] = useState('white'); // State for fan 02 switch color

  useEffect(() => {
    // Initialize fan variables in the Realtime Database when the component mounts
    firebase.database().ref('fans').set({
      fan1: { status: false },
      fan2: { status: false },
    });

    // Fetch initial bulb and fan states from Firebase Realtime Database
    const bulbsRef = firebase.database().ref('bulbs');
    bulbsRef.on('value', (snapshot) => {
      const bulbsData = snapshot.val();
      if (bulbsData) {
        const bulbsArray = Object.values(bulbsData);
        setBulbs(bulbsArray);
      }
    });

    const fansRef = firebase.database().ref('fans');
    fansRef.on('value', (snapshot) => {
      const fansData = snapshot.val();
      if (fansData) {
        const fansArray = Object.values(fansData);
        setFans(fansArray);
      }
    });

    return () => {
      bulbsRef.off();
      fansRef.off();
    };
  }, []);

  const toggleBulb = (id) => {
    const bulbRef = firebase.database().ref(`bulbs/${id - 1}`);
    const updatedStatus = !bulbs[id - 1].status;
    bulbRef.update({ status: updatedStatus });
  };

  const toggleFan = (id) => {
    const fanRef = firebase.database().ref(`fans/fan${id}`);
    const updatedStatus = !fans[id - 1].status;
    fanRef.update({ status: updatedStatus });

    if (id === 1) {
      setFan1Color(updatedStatus ? 'green' : 'red');
    } else if (id === 2) {
      setFan2Color(updatedStatus ? 'green' : 'red');
    }
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
