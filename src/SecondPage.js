import React from 'react';
import './index.css'; // Make sure to import the CSS file for styling

function SecondPage() {
  return (
    <div className="SecondPage">
      {/* Header */}
      <header className="App-header">
        {/* Navbar */}
        <div className="navbar">
          <div className="website-name"></div>
          <nav className="nav-links">
            {/* Add navigation links if needed */}
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="main-content">
        {/* Left side content */}
        <div className="left-content">
          {/* Image on the left side */}
          <div className="left-side-image">
            <img src="https://cdn.dribbble.com/userupload/13040124/file/still-ec86df2237133b24c8ae6e00442fa42e.png" alt="Left side image" />
          </div>
        </div>

        {/* Right side content */}
        <div className="right-content">
          <div className="features-heading">
            <h3 style={{ textAlign: 'center',color: '#FF4500' }}>Features</h3>
            <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bold' }}>Uifry Premium</h1>
          </div>
          <div className="features-list">
            <ul>
              <li>
                <b style={{  fontSize: '30px'}}>📙Budgeting Intervals</b>:
                <p>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
              </li>
              <li>
                <b style={{  fontSize: '30px'}}>📙Budgeting Intervals</b>: 
                <p>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque...</p>
              </li>
              <li>
                <b style={{  fontSize: '30px'}}>📙Budgeting Intervals</b>: 
                <p>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque...</p>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SecondPage;
