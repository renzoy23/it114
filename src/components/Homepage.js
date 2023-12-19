// src/components/Homepage.js
import React from 'react';
import NavbarComponent from './NavbarComponent';
import './CSS/homepage.css';

function Homepage() {
  return (
    <div >
      <NavbarComponent />

      {/* Container for the image with margins */}
      <div style={{ marginTop: '20px', marginLeft: '20px', marginRight: '20px' }}>
        <img
          src="/bg.png"  // Replace with the correct path to your image
          alt="Pet Matters"
          style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
        />
      </div>

      <div className="container mt-5">
        <center><h2>Welcome to Pet Matters - Online Appointment</h2></center>
        <p className='p-size'>
          Pet care experience by
          providing a digital solution that saves time,
          ensures timely care for pets, and fosters a strong
          connection between pet owners and their chosen pet
          care providers.
        </p>
      </div>

      {/* Copyright footer */}
      <div style={{ background: '#333', color: '#fff', padding: '10px', textAlign: 'center' }}>
        © 2023. All Rights Reserved - Pet Matters <br />
        Imadejas, Butuan City, Caraga Region, 8600 Philippines
      </div>
    </div>
  );
}

export default Homepage;
