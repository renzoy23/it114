import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Profile = ({ username, registeredUsers, onLogout }) => {
  const [userData, setUserData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({});
  const navigate = useNavigate();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  useEffect(() => {
    const user = registeredUsers.find((user) => user.username === username);
    setUserData(user || {});
    setEditedData(user || {});
  }, [username, registeredUsers]);

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

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedData(userData);
  };

  const handleSaveEdit = () => {
    console.log('Edited data:', editedData);
    setIsEditing(false);
    setUserData(editedData);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
        <h5 style={{ fontWeight: 'lighter' }}>Dashboard / Profile</h5>

        {isEditing ? (
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <form className="bg-white p-4 rounded">
                    <center><h2>Edit Profile</h2></center>
                    {/* General Information */}
                    <div className="mb-3 row">
                      <div className='col-md-4'>
                        <label htmlFor="name" className="form-label">First Name:</label>
                        <input type="text" className="form-control" id="name" name="name" value={editedData.name || ''} onChange={handleInputChange} style={{ border: '1px solid'}}/>
                      </div>
                      <div className='col-md-4'>
                        <label htmlFor="middleName" className="form-label">Middle Name:</label>
                        <input type="text" className="form-control" id="middleName" name="middleName" value={editedData.middleName || ''} onChange={handleInputChange} style={{ border: '1px solid'}}/>
                      </div>
                      <div className='col-md-4'>
                        <label htmlFor="lastName" className="form-label">Last Name:</label>
                        <input type="text" className="form-control" id="lastName" name="lastName" value={editedData.lastName || ''} onChange={handleInputChange} style={{ border: '1px solid'}}/>
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="address" className="form-label">Address:</label>
                      <input type="text" className="form-control" id="address" name="address" value={editedData.address || ''} onChange={handleInputChange} style={{ border: '1px solid'}}/>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="contactNumber" className="form-label">Phone Number:</label>
                      <input type="text" className="form-control" id="contactNumber" name="contactNumber" value={editedData.contactNumber || ''} onChange={handleInputChange} style={{ border: '1px solid'}}/>
                    </div>

                    {/* Security Information */}
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">Password:</label>
                      <input type="password" className="form-control" id="password" name="password" value={editedData.password || ''} onChange={handleInputChange} style={{ border: '1px solid'}}/>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email Address:</label>
                      <input type="text" className="form-control" id="email" name="email" value={editedData.email || ''} onChange={handleInputChange} style={{ border: '1px solid'}}/>
                    </div>

                    <div className="mb-3 d-flex justify-content-center">
                      <button type="button" className="btn btn-secondary me-2" onClick={handleCancelEdit}>
                        Cancel
                      </button>
                      <button type="button" className="btn btn-primary" onClick={handleSaveEdit}>
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            ) : (
          <div>
            <h3>General Information</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
              <tbody>
                <tr style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '10px' }}>First Name:</td>
                  <td style={{ padding: '10px' }}>{userData.name || 'N/A'}</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '10px' }}>Middle Name:</td>
                  <td style={{ padding: '10px' }}>{userData.middleName || 'N/A'}</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '10px' }}>Last Name:</td>
                  <td style={{ padding: '10px' }}>{userData.lastName || 'N/A'}</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '10px' }}>Address:</td>
                  <td style={{ padding: '10px' }}>{userData.address || 'N/A'}</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '10px' }}>Phone Number:</td>
                  <td style={{ padding: '10px' }}>{userData.contactNumber || 'N/A'}</td>
                </tr>
              </tbody>
            </table>

            <h3>Security</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                <tr style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '10px' }}>Username:</td>
                  <td style={{ padding: '10px' }}>{userData.username || 'Guest'}</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '10px' }}>Password:</td>
                  <td style={{ padding: '10px' }}>{'*'.repeat(userData.password?.length) || 'N/A'}</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '10px' }}>Email Address:</td>
                  <td style={{ padding: '10px' }}>{userData.email || 'N/A'}</td>
                </tr>
              </tbody>
            </table>

            <button onClick={handleEditClick} style={{ marginTop: '20px' }}>
              Edit Information
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
