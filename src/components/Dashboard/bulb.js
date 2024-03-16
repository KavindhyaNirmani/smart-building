import React from 'react';
import './bulb.css'; // Import the CSS file for Bulb component styling

const Bulb = ({ bulbId, status, toggleBulb }) => {
  const onClickHandler = () => {
    toggleBulb(bulbId); // Ensure bulbId is defined when calling toggleBulb
  };

  return (
    <div
      className={`bulb ${status ? 'on' : 'off'}`}
      id={bulbId}
      onClick={onClickHandler} // Use onClickHandler function for onClick event
    ></div>
  );
};

export default Bulb;
