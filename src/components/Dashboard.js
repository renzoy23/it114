import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = ({ username, onLogout }) => {
  const navigate = useNavigate();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  useEffect(() => {
    // Simulate fetching user data from a server
    // You might want to replace this with an actual API call
    // For now, just log the provided username
    console.log('Logged in as:', username);
  }, [username]);

  const userNameStyle = {
    color: '#e98821',
    fontWeight: 'bold',
  };

  const handleLogout = () => {
    console.log('Logging out...');
    // Assuming `onLogout` is a function that clears the user's session
    onLogout();

    // Redirect to the home page or another appropriate page
    navigate('/');
  };

  const toggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
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
        <h3>My Schedule</h3>
        {/* ... (existing code) */}
      </div>
    </div>
  );
};

export default Dashboard;
