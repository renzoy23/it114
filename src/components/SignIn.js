import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = ({ onSignIn, registeredUsers }) => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignIn = () => {
    if (!loginData.username || !loginData.password) {
      alert('Username and password are required.');
      return;
    }

    const isUserValid = registeredUsers.some(
      (user) => user.username === loginData.username && user.password === loginData.password
    );

    if (isUserValid) {
      setLoginSuccess(true);

      // You might want to perform additional actions upon successful login
      onSignIn(loginData.username); // Pass the username directly instead of the entire loginData object

      // Delay navigation by 1 second to allow the success message to be displayed
      setTimeout(() => {
        navigate('/my-schedule');
      }, 2000);
    } else {
      alert('Invalid username or password.');
    }
  };

  const handleSignInClick = () => {
    // Navigate to the sign-in page when "Sign In" is clicked
    navigate('/register');
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
      <div className="container-sm">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form className="bg-white p-4" style={{ width: '90%', height: '90%', marginTop: '-60x', marginLeft: '44px' }}>
              <div className="mb-3">
                <center><h2 style={{ paddingBottom: '30px'}}>Pet Matters</h2></center>
                {loginSuccess && (
                  <center><p style={{ color: 'green', marginTop: '10px', fontSize: '14px' }}>
                  Login successful! Welcome, {loginData.username}!
                </p></center>
                    )}
                    {!loginSuccess && (
                      <p className="mt-3">
                        
                      </p>
                    )}
                <label htmlFor="username" className="form-label">
                  Username:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  value={loginData.username}
                  onChange={handleChange}
                  style={{ border: '1px solid'}}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleChange}
                  style={{ border: '1px solid'}}
                />
              </div>
              <center>
                <button type="button" className="btn btn-primary" onClick={handleSignIn}>
                Sign In
                </button>
              </center>
              <center>
              <p className="mt-3">
                  Don't have an account? <span className="text-primary" onClick={handleSignInClick}>Sign Up</span>
                </p>
              </center>
            </form>
          </div>
          <div className="col-md-6">
            {/* Right side for the image */}
            <img src="p-login.png" alt="Login" style={{ width: '90%', height: '90%', marginTop: '-1px', marginLeft: '-38px' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;