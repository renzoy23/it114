import React from 'react';
import './CSS/about.css';
import NavbarComponent from './NavbarComponent';

const About = () => {
    return (

    <div style={{
        backgroundImage: 'url(./d-logo.png'
    }}>
      <NavbarComponent />
      <div className="about-us-container">
        <div className="column">
          <img
            src="dog-logo.png"
            alt="About Us"
          />
        </div>
        <div className="column">
        <center>
            <h2>Welcome to Pet Matters</h2>
            <h2>ANIMAL CLINIC</h2>
            <h4>PROTECT   LOVE   NATURE</h4>
            </center> 
            <br/>
        <h4>Our services are best for:</h4>
        <br/>
          <div className="about-us-container">

            <div className="about-column">
              <h3>First Aid</h3>
              <p>
              Can't go to the nearest vet clinic yet? Our vets can advise what to do and what not to do.
              </p>
            </div>

            <div className="about-column">
            <h3>Pet Advice</h3>
              <p>
              Find out if it's okay to spay, what breed to buy, how to have healthy pregnancy, anything!
              </p>
            </div>
          </div>
          <div className="about-us-container">

          <div className="about-column">
            <h3>Getting Ideas</h3>
              <p>
              Not sure why your pet is acting strange? Vets can tell you possible scenarios.
              </p>
            </div>
            <div className="about-column">
            <h3>Second Opinion</h3>
              <p>
              An easy access to confirming opinions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright footer */}
      <div style={{ background: '#333', color: '#fff', padding: '10px', textAlign: 'center' }}>
        © 2023. All Rights Reserved - Pet Matters <br />
        Imadejas, Butuan City, Caraga Region, 8600 Philippines
      </div>

    </div>
    );
  };

export default About;