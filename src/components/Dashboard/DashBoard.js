import React, { useEffect, useState } from 'react';
import './DashBoard.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';
import Bulb from './bulb';
import Gauge from './Gauge';
import fan1 from '../assest/fan2.png';

const DashBoard = () => {
  const dummyValue = 30;
  const [bulbs, setBulbs] = useState([]);
  const [fans, setFans] = useState([]);
  const [fan1Color, setFan1Color] = useState('white');
  const [fan2Color, setFan2Color] = useState('white');
  const [fan1Speed, setFan1Speed] = useState(null);
  const [fan2Speed, setFan2Speed] = useState(null);
  const [user, setUser] = useState(null);
  const [dateTime, setDateTime] = useState(new Date().toLocaleString());
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    firebase.database().ref('fans').set({
      fan1: { status: false, speed: null },
      fan2: { status: false, speed: null },
    });

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
        setFan1Speed(fansArray[0].speed);
        setFan2Speed(fansArray[1].speed);
      }
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user.email);
      } else {
        setUser(null);
      }
    });

    const interval = setInterval(() => {
      setDateTime(new Date().toLocaleString());
    }, 1000);

    fetch(`https://api.weatherapi.com/v1/current.json?key=API_KEY&q=your_location`)
      .then((response) => response.json())
      .then((data) => setTemperature(data.current.temp_c))
      .catch((error) => console.error('Error fetching temperature:', error));

    return () => {
      bulbsRef.off();
      fansRef.off();
      clearInterval(interval);
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

  const updateFanSpeed = (fanId, speed) => {
    const fanRef = firebase.database().ref(`fans/fan${fanId}`);
    fanRef.update({ speed: speed });
    if (fanId === 1) {
      setFan1Speed(speed);
    } else if (fanId === 2) {
      setFan2Speed(speed);
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
            <Gauge value={dummyValue} />
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
                <button
                  className={`toggle-switch ${fan1Speed === 1 ? 'active' : ''}`}
                  onClick={() => updateFanSpeed(1, 1)}
                >
                  Speed 1
                </button>
                <button
                  className={`toggle-switch ${fan1Speed === 2 ? 'active' : ''}`}
                  onClick={() => updateFanSpeed(1, 2)}
                >
                  Speed 2
                </button>
                <button
                  className={`toggle-switch ${fan1Speed === 3 ? 'active' : ''}`}
                  onClick={() => updateFanSpeed(1, 3)}
                >
                  Speed 3
                </button>
              </div>
              <div className="small-box2_2">
                <button
                  className={`toggle-switch ${fan2Speed === 1 ? 'active' : ''}`}
                  onClick={() => updateFanSpeed(2, 1)}
                >
                  Speed 1
                </button>
                <button
                  className={`toggle-switch ${fan2Speed === 2 ? 'active' : ''}`}
                  onClick={() => updateFanSpeed(2, 2)}
                >
                  Speed 2
                </button>
                <button
                  className={`toggle-switch ${fan2Speed === 3 ? 'active' : ''}`}
                  onClick={() => updateFanSpeed(2, 3)}
                >
                  Speed 3
                </button>
              </div>
            </div>
            <div className='inner-box6'>
            <p>Current Temperature: {temperature !== null ? `${temperature} °C` : 'Loading...'}</p>
          </div>
          </div>
        </div>
        <div className='box_7'>
            <p>{user ? `Logged in as: ${user}` : 'Not logged in'}</p>
            <p>{dateTime}</p>
          </div>
      </div>
      
      <footer className="footer">
        <p>Footer content goes here.</p>
      </footer>
    </div>
  );
};

export default DashBoard;
