import React, { useEffect, useState } from 'react';
import './DashBoard.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';
import Bulb from './bulb';
import PowerGauge from './ApexChart';
import Fan from '../assest/fan2.png';



const DashBoard = () => {
  const powerConsumption = 50;
  const [bulbs, setBulbs] = useState([]);
  const [fans, setFans] = useState([]);
  const [fan1Color, setFan1Color] = useState('white');
  const [fan2Color, setFan2Color] = useState('white');
  const [fan1Speed, setFan1Speed] = useState(null);
  const [fan2Speed, setFan2Speed] = useState(null);
  const [user, setUser] = useState(null);
  const [dateTime, setDateTime] = useState(new Date().toLocaleString());
  const [temperature, setTemperature] = useState(null);
  const [plugs, setPlugs] = useState([]);

  useEffect(() => {
    firebase.database().ref('fans').set({
      fan1: { status: false, speed: null },
      fan2: { status: false, speed: null },
    });

    firebase.database().ref('plugs').set({
      plug1: { status: false },
      plug2: { status: false },
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

    const plugsRef = firebase.database().ref('plugs');
    plugsRef.on('value', (snapshot) => {
      const plugsData = snapshot.val();
      if (plugsData) {
        const plugsArray = Object.values(plugsData);
        setPlugs(plugsArray);
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
      plugsRef.off();
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
      setFan1Color(updatedStatus ? 'yellow' : 'red');
    } else if (id === 2) {
      setFan2Color(updatedStatus ? 'yellow' : 'red');
    }
  };

  const togglePlug = (id) => {
    const plugRef = firebase.database().ref(`plugs/plug${id}`);
    const updatedStatus = !plugs[id - 1].status;
    plugRef.update({ status: updatedStatus });
  };

  const updateFanSpeed = (fanId, speed) => {
    let speedValue = 0;
    switch (speed) {
      case 1:
        speedValue = 120;
        break;
      case 2:
        speedValue = 180;
        break;
      case 3:
        speedValue = 255;
        break;
      default:
        speedValue = 0;
        break;
    }

    const fanRef = firebase.database().ref(`fans/fan${fanId}`);
    fanRef.update({ speed: speedValue });

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
              <div className="plug" onClick={() => togglePlug(1)}>
                {plugs[0]?.status ? 'ON' : 'OFF'}
              </div>
              
              <div className="plug" onClick={() => togglePlug(2)}>
                {plugs[1]?.status ? 'ON' : 'OFF'}
              </div>
            </div>
          </div>

          {/* Insert the Gauge component here */}
          <div className='inner-box3'>
            <div className="inner-box4">
            <h1>Power Consumption Gauge</h1><br></br>
      <PowerGauge value={powerConsumption} />
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
                
              </div>
              <div className='inner-box25'>
                
              </div>
            </div>
            <div className="small-boxes2">
              <div className="small-box2_1">
              <img src={Fan} alt="fan" className="fan-image" />
                <button
                  className={`toggle-switch ${fan1Speed === 1 ? 'active' : ''}`}
                  onClick={() => updateFanSpeed(1, 1)}
                >
                 <p className='speedl'><b>L1</b> </p>
                </button>
                
                <button
                  className={`toggle-switch ${fan1Speed === 2 ? 'active' : ''}`}
                  onClick={() => updateFanSpeed(1, 2)}
                >
                 <p className='speedl'><b>L2</b> </p>
                </button>
                <button
                  className={`toggle-switch ${fan1Speed === 3 ? 'active' : ''}`}
                  onClick={() => updateFanSpeed(1, 3)}
                >
                 <p className='speedl'><b>L3</b> </p>
                </button>
              </div>
              <div className="small-box2_2">
              <img src={Fan} alt="fan" className="fan-image" />
                <button
                  className={`toggle-switch ${fan2Speed === 1 ? 'active' : ''}`}
                  onClick={() => updateFanSpeed(2, 1)}
                >
                 <p className='speedl'><b>L1</b> </p>
                </button>
                <button
                  className={`toggle-switch ${fan2Speed === 2 ? 'active' : ''}`}
                  onClick={() => updateFanSpeed(2, 2)}
                >
                 <p className='speedl'><b>L3</b> </p>
                </button>
                <button
                  className={`toggle-switch ${fan2Speed === 3 ? 'active' : ''}`}
                  onClick={() => updateFanSpeed(2, 3)}
                >
                 <p className='speedl'><b>L3</b> </p>
                </button>
              </div>
            </div>
            
          </div>
        </div>
        <div className='box_7'>
          <p>{user ? `Logged in as: ${user}` : 'Not logged in'}</p>
          <p>{dateTime}</p>
        </div>
      </div>

      <footer className="footer">
        <p className='footer11'>SMART X INDUSTRIES </p>
      </footer>
    </div>
  );
};

export default DashBoard;
