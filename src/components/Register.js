import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = ({ onRegister, onSignIn }) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: '',
    name: '',
    middleName: '',
    lastName: '',
    address: '',
    contactNumber: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = () => {
    console.log('Register button clicked');
    console.log('User data:', userData);

    // Validate input fields (you can add more validation as needed)
    if (!userData.username || !userData.password || !userData.name || !userData.middleName || !userData.lastName || !userData.address || !userData.contactNumber || !userData.email) {
      alert('Field with asterisk (*) are required.');
      return;
    }

    // Call the onRegister function passed from the parent component
    onRegister(userData);

    // Use the navigate function to redirect to the login route
    navigate('/sign-in');
  };

  const handleSignInClick = () => {
    // Navigate to the sign-in page when "Sign In" is clicked
    navigate('/sign-in');
  };

  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: 'url("r-bg.png")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="container-sm " style={{ marginTop: '15px', marginBlock: '15px'}}>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form className="bg-white p-4 rounded">
              <center><h2>Create Account</h2></center>
              <h6 style={{ fontSize: '15px', marginTop: '10px', marginBottom: '15px'}}><span style={{ color: 'red', fontSize: '17px'}}>Note:</span> Field with "*" are required.
                (This registration is only for the fur owner)</h6>
              <label htmlFor="username" className="form-label">Account<span style={{ color: 'red' }}> *</span></label>
              <div className="mb-3 row">
                <div className='col-md-6'>
                  <input type="text" className="form-control" id="username" name="username" placeholder="Username" value={userData.username} onChange={handleChange} style={{ border: '1px solid'}}/>
                </div>
                <div className='col-md-6'>
                  <input type="password" className="form-control" id="password" name="password" placeholder="Password" value={userData.password} onChange={handleChange} style={{ border: '1px solid'}}/>
                </div>
              </div>
              <label htmlFor="name" className="form-label col-md-4">Full Name<span style={{ color: 'red' }}> *</span></label>
              <div className="mb-3 row">
                <div className='col-md-4'>
                  <input type="text" className="form-control" id="name" name="name" placeholder="Name" value={userData.name} onChange={handleChange} style={{ border: '1px solid'}}/>
                </div>
                <div className='col-md-4'>
                  <input type="text" className="form-control" id="middleName" name="middleName" placeholder="Middle Name" value={userData.middleName} onChange={handleChange} style={{ border: '1px solid'}}/>
                </div>
                <div className='col-md-4'>
                  <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Last Name" value={userData.lastName} onChange={handleChange} style={{ border: '1px solid'}}/>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">Address<span style={{ color: 'red' }}> *</span></label>
                <input type="text" className="form-control" id="address" name="address" value={userData.address} onChange={handleChange} style={{ border: '1px solid'}}/>
              </div>
              <div className="mb-3">
                <label htmlFor="contactNumber" className="form-label">Contact Number<span style={{ color: 'red' }}> *</span></label>
                <input type="text" className="form-control" id="contactNumber" name="contactNumber" value={userData.contactNumber} onChange={handleChange} style={{ border: '1px solid'}}/>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email<span style={{ color: 'red' }}> *</span></label>
                <input type="text" className="form-control" id="email" name="email" value={userData.email} onChange={handleChange} style={{ border: '1px solid'}}/>
              </div>
              <center>
                <button type="button" className="btn btn-primary" onClick={handleRegister}>
                  Register
                </button>
                <p className="mt-3">
                  Already have an account? <span className="text-primary" onClick={handleSignInClick}>Sign In</span>
                </p>
              </center>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
