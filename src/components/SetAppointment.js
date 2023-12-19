import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../AppContext';

const SetAppointment = ({ username, onLogout }) => {
  const navigate = useNavigate();
  const { addAppointment } = useAppContext();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    emailAddress: '',
    dateOfAppointment: '',
    reasonOfAppointment: '', // Updated to store the selected reason
    petName: '',
  });

  useEffect(() => {
    console.log('Logged in as:', username);
  }, [username]);

  const userNameStyle = {
    color: '#e98821',
    fontWeight: 'bold',
  };

  const handleLogout = () => {
    console.log('Logging out...');
    onLogout();
    navigate('/');
  };

  const toggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(formData);
    navigate('/my-schedule');
  };

  return (
    <div style={{ display: 'flex', backgroundColor: '#f8f9f9', minHeight: '100vh', padding: '20px' }}>
      <div style={{ width: '20%', borderRight: '1px solid #ccc', backgroundColor: '#211c19', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', position: 'fixed', top: 0, left: 0, bottom: 0, margin: 0, padding: 0 }}>
        <div style={{ backgroundColor: '#2b2725', padding: '10px', borderBottom: '2px solid #e98821', marginBottom: '20px', width: '100%', textAlign: 'center' }}>
          <h3 style={{ color: '#fff', marginBottom: '0' }}>Pet Matters</h3>
          <h3><span style={userNameStyle}>{username}</span></h3>
        </div>
        <ul style={{ listStyle: 'none', padding: 0, textAlign: 'start', marginTop: '30px', marginLeft: '0' }}>
          <li style={{ marginBottom: '10px', color: '#fff', marginLeft: '20px', backgroundColor: '#35312e', border: '1px solid #2b2725', borderTop: 'none', borderRight: 'none', borderBottom: 'none', padding: '10px' }}>
            <Link to="/profile" style={{ textDecoration: 'none', color: '#fff' }}>
              Profile
            </Link>
          </li>
          <li style={{ marginBottom: '10px', color: '#fff', position: 'relative', marginLeft: '20px', backgroundColor: '#35312e', border: '1px solid #2b2725', borderTop: 'none', borderRight: 'none', borderBottom: 'none', padding: '10px' }}>
            <span onClick={toggleDropdown} style={{ cursor: 'pointer' }}>
              My Appointment
            </span>
            {isDropdownVisible && (
              <ul style={{ display: 'flex', flexDirection: 'column', paddingInlineStart: '0', listStyleType: 'none', marginTop: '0', marginBottom: '0', marginLeft: '0', backgroundColor: '#35312e', border: '1px solid #2b2725', borderTop: 'none', borderRight: 'none', borderBottom: 'none', padding: '10px' }}>
                <li style={{ textAlign: 'start' }}>
                  <Link to="/my-schedule" style={{ textDecoration: 'none', color: '#fff' }}>
                    My Schedule
                  </Link>
                </li>
                <li style={{ textAlign: 'start' }}>
                  <Link to="/set-appointment" style={{ textDecoration: 'none', color: '#fff' }}>
                    Schedule an Appointment
                  </Link>
                </li>
                <li style={{ textAlign: 'start' }}>
                  <Link to="/appointment-history" style={{ textDecoration: 'none', color: '#fff' }}>
                    Appointment History
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li style={{ marginBottom: '10px', color: '#fff', marginLeft: '20px', backgroundColor: '#35312e', border: '1px solid #2b2725', borderTop: 'none', borderRight: 'none', borderBottom: 'none', padding: '10px' }}>
            <Link to="/community" style={{ textDecoration: 'none', color: '#fff' }}>
              Pet Community
            </Link>
          </li>
        </ul>
        <div style={{ backgroundColor: '#2b2725', padding: '10px', borderTop: '2px solid #e98821', marginTop: 'auto', width: '100%', textAlign: 'center' }}>
          <button onClick={handleLogout} style={{ backgroundColor: '#e98821', color: '#fff', padding: '8px 12px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>
            Logout
          </button>
        </div>
      </div>

      {/* Content */}
      <div style={{ marginLeft: '20%', padding: '20px', width: '80%' }}>
      <h5 style={{ fontWeight: 'lighter' }}>Dashboard / Schedule an Appointment</h5>
        <h3 style={{ marginTop: '30px', marginLeft: '30px' }}>Schedule an Appointment</h3>
        {/* Form Section */}
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          {/* Container for Form Inputs */}
          <div style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '20px' }}>
            <form onSubmit={handleSubmit}>
              {/* Form Inputs */}
              <div style={{ marginBottom: '15px', display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="fullName">Full Name:</label>
                <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required style={{ borderRadius: '20px', padding: '10px' }} />
              </div>
              <div style={{ marginBottom: '15px', display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="contactNumber">Contact Number:</label>
                <input type="text" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required style={{ borderRadius: '20px', padding: '10px' }} />
              </div>
              <div style={{ marginBottom: '15px', display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="emailAddress">Email Address:</label>
                <input type="email" id="emailAddress" name="emailAddress" value={formData.emailAddress} onChange={handleChange} required style={{ borderRadius: '20px', padding: '10px' }} />
              </div>
              <div style={{ marginBottom: '15px', display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="dateOfAppointment">Date of Appointment:</label>
                <input type="date" id="dateOfAppointment" name="dateOfAppointment" value={formData.dateOfAppointment} onChange={handleChange} required style={{ borderRadius: '20px', padding: '10px' }} />
              </div>
              <div style={{ marginBottom: '15px', display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="reasonOfAppointment">Reason of Appointment:</label>
                <select id="reasonOfAppointment" name="reasonOfAppointment" value={formData.reasonOfAppointment} onChange={handleChange} required style={{ borderRadius: '20px', padding: '10px' }}>
                  <option value="" disabled>Select a reason</option>
                  <option value="Surgery">Surgery</option>
                  <option value="Dentistry">Dentistry</option>
                  <option value="Internal Medicine">Internal Medicine</option>
                  <option value="Radiology">Radiology</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Critical Care">Critical Care</option>
                  <option value="Diagnostic Medicine">Diagnostic Medicine</option>
                  <option value="Laboratories">Laboratories</option>
                  <option value="Animal Welfare">Animal Welfare</option>
                  <option value="Comprehensive Physical Examinations">Comprehensive Physical Examinations</option>
                  <option value="Emergency Care">Emergency Care</option>
                  <option value="Exotic Animals Clinic">Exotic Animals Clinic</option>
                  <option value="Clinical Pharmacology">Clinical Pharmacology</option>
                </select>
              </div>
              <div style={{ marginBottom: '15px', display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="petName">Pet Name:</label>
                <input type="text" id="petName" name="petName" value={formData.petName} onChange={handleChange} required style={{ borderRadius: '20px', padding: '10px' }} />
              </div>
              {/* Submit Button */}
              <center><button type="submit" style={{ backgroundColor: '#e98821', color: '#fff', padding: '10px 20px', borderRadius: '15px', border: 'none', cursor: 'pointer' }}>
                Set Appointment
              </button></center>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetAppointment;