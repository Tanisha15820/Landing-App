import React from 'react';
import './index.css';
import image2 from './assets/image2.webp'; // Import the locally stored image

function SixthPage() {
  const handleSubscribeClick = () => {
    window.location.href = 'https://uifry.com/';
  };

  return (
    <div className="SixthPage">
      {/* Image with link */}
      <a href="https://uifry.com/" target="_blank" rel="noopener noreferrer">
        <img src={image2} alt="Image" />
      </a>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-section">
          <h3><b style={{ fontSize: '25px' }}>🔥uifry</b></h3>
          <ul style={{ fontSize: '20px' }}>
            <li>📧Help@Frybix.com</li>
            <li>📞+1234 567 899</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3><b style={{ fontSize: '25px' }}>Links</b></h3>
          <ul style={{ fontSize: '20px' }}>
            <li>Home</li>
            <li>About us</li>
            <li>Booking</li>
            <li>Blogs</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3><b style={{ fontSize: '25px' }}>Legal</b></h3>
          <ul style={{ fontSize: '20px' }}>
            <li>Terms of use</li>
            <li>Privacy policy</li>
            <li>Cookie policy</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3><b style={{ fontSize: '25px' }}>Product</b></h3>
          <ul style={{ fontSize: '20px' }}>
            <li>Take Tour</li>
            <li>Live Chat</li>
            <li>Reviews</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3><b style={{ fontSize: '25px' }}>Newsletter</b></h3>
          <ul style={{ fontSize: '20px' }}>
            <li>Stay up to date</li>
          </ul>
        </div>
        <div className="subscribe-button">
        <button onClick={handleSubscribeClick}>Subscribe</button>
        </div>
      </footer>
    </div>
  );
}

export default SixthPage;
