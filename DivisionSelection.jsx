import React, { useState } from 'react';
import './DivisionSelection.css';
import logoImage from './assets/main_logo.jpg';

function DivisionSelection() {
  const [division, setDivision] = useState('');

  const handleProceed = () => {
    if (!division) {
      alert('Please select a division');
    } else {
      alert(`You selected: ${division}`);
    }
  };

  return (
    <div className="page-container">
    <header className="header">
      <img src={logoImage} alt="ECR Logo" className="logo" />
      <h1>East Coast Railway</h1>
    </header>
    <nav className="dashboard-nav">
  
    </nav>
      <main className="main-content">
        <h2>Select Your Division</h2>
        <select
          value={division}
          onChange={(e) => setDivision(e.target.value)}
          className="dropdown"
        >
          <option value="">-- Select Division --</option>
          <option value="Khordha">Khordha</option>
          <option value="Sambalpur">Sambalpur</option>
          <option value="Waltair">Waltair</option>
        </select>

        <button onClick={handleProceed} className="proceed-button">
          Proceed
        </button>
      </main>
      <footer className="footer">
        <p>© 2025 East Coast Railway. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default DivisionSelection;
