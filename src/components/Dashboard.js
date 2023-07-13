import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [bulbStatus, setBulbStatus] = useState(false);
  const [brightness, setBrightness] = useState(50);

  const toggleBulb = () => {
    setBulbStatus(!bulbStatus);
  };

  const handleBrightnessChange = (e) => {
    setBrightness(e.target.value);
  };

  return (
    <div className="dashboard">
      <div className={`bulb ${bulbStatus ? 'on' : 'off'}`}></div>
  
     <div className="holder"></div>
      <div className="controls">
        <div className="status">
          <h2>Bulb Status:</h2>
          <p>{bulbStatus ? 'On' : 'Off'}</p>
        </div>
        <div className="toggle">
          <button onClick={toggleBulb}>
            {bulbStatus ? 'Turn Off' : 'Turn On'}
          </button>
        </div>

        <div className="brightness">
          <h2>Brightness:</h2>
          <input
            type="range"
            min="0"
            max="100"
            value={brightness}
            onChange={handleBrightnessChange}
          />
          <br />
          <h3>{brightness}%</h3>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
