import React from 'react';
import './index.css'; // Import the CSS file for styling

function FourthPage() {
  return (
    <div className="FourthPage">
      {/* Testimonial Section */}
      <div className="testimonial-section">
        <h2 className="testimonial-heading">TESTIMONIAL</h2>
        <h2 className="testimonial-subheading"><b style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bold' }}>What Our Users Say About Us?</b></h2>
      </div>

      {/* Content Section */}
      <div className="content-section">
        {/* Left Side: Image */}
        <div className="left-image">
          <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQO2yPkyjb4aSZJSKZnpXQfQ2UCvp-02ZkJRM7dPUVYwcS9tUPx" alt="Testimonial Image" />
        </div>

        {/* Right Side: Text */}
        <div className="right-text">
          <h3><b  style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bold' }}>The Best Financial Accounting App Ever!</b></h3>
            <p  style={{  fontSize: '25px'}}>Arcu At Dictum Sapien, Mollis. Vulputate Sit ld Accumsan,
Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis
Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus,
Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor
Neque Lorem Sapien, Suspendisse Aliquam.

Rownok Mahbub

</p>
        </div>
      </div>
    </div>
  );
}

export default FourthPage;
