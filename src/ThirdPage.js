import React from 'react';
import './index.css'; // Import the CSS file for styling

function ThirdPage() {
  return (
    <div className="ThirdPage">
      {/* First Part: Left side text or right side image */}
      <div className="first-part">
        <div className="left-text">
          <h2 style={{ color: '#FF4500',fontSize: '30px' }}>Advantage</h2>
          <p>
            <b style={{ textAlign: 'center', fontSize: '70px', fontWeight: 'bold' }}>Why Choose Uifry?</b>
            <br />
            <br />
            <br />
            <b style={{  fontSize: '50px'}}>📙 Clever Notifications</b>
            <br />
           <p  style={{  fontSize: '25px'}}> Arcu At Dictum Sapien, Mollis. Vulputate Sit ld Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.</p>
          </p>
        </div>
        <div className="right-image">
          <img src="https://anukanttechnologies.com/wp-content/uploads/2023/10/540b94ee4b40f95fb06bdd03db2237b1.png" alt="Advantages Image" />
        </div>
      </div>

      {/* Second Part: Left side image or right side text */}
      <div className="second-part">
        <div className="left-image">
          <img src="https://assets-global.website-files.com/64d16cb28362dc16d2be7ed7/64ee36f921feaf5ba00eb7eb_appdev-5iphone.png" alt="Why Choose Uifry? Image" />
        </div>
        <div className="right-text">
          
          <p>
           <b style={{  fontSize: '50px'}}> 📙 Fully Customizable</b>
            <br />
            <p  style={{  fontSize: '25px'}}>Arcu At Dictum Sapien, Mollis. Vulputate Sit ld Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.</p> 
          </p>
        </div>
      </div>
    </div>
  );
}

export default ThirdPage;
