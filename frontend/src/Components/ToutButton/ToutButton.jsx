import React from 'react';
import { useState, useContext, createContext } from "react";
import  './ToutButton.css'


const ToutButton = () => {
  const [isDivVisible, setDivVisible] = useState(false);

  const handleButtonClick = () => {
    setDivVisible(!isDivVisible); // Toggle the value of isDivVisible
  }

  return (
    <div>
      <button className='mybutton' onClick={handleButtonClick}>Show my cards</button>
      {isDivVisible && (
        <div>
          <h2>Your cards</h2>
          <p>No cards Added Yet.</p>
        </div>
      )}
    </div>
  );
}

export default ToutButton;