import React, { useState } from 'react';
import './Contact.css';

const COntact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
      <button className="dropbtn">Hover Over Me</button>
      {isOpen && (
        <div className="dropdown-content">
          <a href="#">Item 1</a>
          <a href="#">Item 2</a>
          <a href="#">Item 3</a>
        </div>
      )}
    </div>
  );
};

export default COntact;
