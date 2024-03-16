import React from 'react';
import './Gauge.css'; // You can style the gauge in a separate CSS file

const Gauge = ({ value }) => {
  // Convert the value to an angle for the pointer
  const angle = value * 1.8; // Assuming each unit of value corresponds to 1.8 degrees

  return (
    <div className="gauge-container">
      <div className="gauge">
        <div className="gauge__dial"></div>
        <div className="gauge__pointer" style={{ transform: `rotate(${angle}deg)` }}></div>
      </div>
      <div className="gauge-label">{value} kWh</div>
    </div>
  );
}

export default Gauge;
