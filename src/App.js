import React, { useEffect, useState } from 'react';
import './index.css';
import image1 from './assets/image1.webp'; // Import the image
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import FifthPage from './FifthPage';
import SixthPage from './SixthPage';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const handleGetStartedClick = () => {
    window.open('https://uifry.com/', '_blank');
  };

  const handleWatchVideoClick = () => {
    window.open('https://youtu.be/KBoPlzc67Ng?si=7344qyFLeYm3ri0k', '_blank');
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      {/* Header */}
      <header className="App-header">
        {/* Navbar */}
        <div className="navbar">
          <div className="website-name"><b>{data.websiteName}</b></div>
          <nav className="nav-links">
            {data.links.map((link) => (
              <a key={link.name} href={link.href}>{link.name}</a>
            ))}
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="main-content">
        {/* Left side content */}
        <div className="left-content">
          {/* Financial Decision section */}
          <section className="financial-decision-section">
            <div className="financial-decision-heading">
              <h2><b style={{  fontSize: '70px'}}>MAKE THE BEST FINANCIAL DECISION</b></h2>
            </div>
            <div className="financial-decision-definition">
              <p style={{  fontSize: '30px'}}>Investing wisely to achieve financial goals with minimal risk, maximizing returns, and ensuring long-term stability.</p>
            </div>
            <br/>
            <br/>
            <div className="financial-decision-buttons">
              <button className="get-started-button" onClick={handleGetStartedClick}>Get Started</button>
              <button className="watch-video-button" onClick={handleWatchVideoClick}>▶️Watch Video</button>
            </div>
            <div className="financial-decision-image">
              <img src={image1} alt="Financial Decision" />
            </div>
          </section>
        </div>

        {/* Right side content */}
        <div className="right-content">
          <div className="right-side-image">
            <img src="https://www.nimbleappgenie.com/images/mobile-app-development-cta-image.webp" alt="Right side image" />
          </div>
        </div>
      </main>
       {/* Render the SecondPage component */}
       <SecondPage />
       {/* Render the SecondPage component */}
       <ThirdPage />
       {/* Render the SecondPage component */}
       <FourthPage />
         {/* Render the SecondPage component */}
         <FifthPage />

    {/* Spacer */}
    <div className="spacer"></div>
          {/* Render the SecondPage component */}
          <SixthPage />
    </div>
  );
}

export default App;
