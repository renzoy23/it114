import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Homepage from './components/Homepage';
import SignIn from './components/SignIn';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Profile from './components/Profile';
import MySchedule from './components/MySchedule';
import SetAppointment from './components/SetAppointment';
import AppointmentHistory from './components/AppointmentHistory';
import PetCommunity from './components/PetCommunity';
import { AppProvider } from './AppContext';

function App() {
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [loggedInUsername, setLoggedInUsername] = useState('');

  const handleRegister = (userData) => {
    console.log('Registering user:', userData);
    setRegisteredUsers([...registeredUsers, userData]);
    return <Navigate to="/sign-in" />;
  };

  const handleSignIn = (username) => {
    console.log('Signing in...', username);
    setLoggedInUsername(username);
    return <Navigate to="/dashboard" />;
  };

  const handleLogout = () => {
    console.log('Logging out...');
    setLoggedInUsername('');
    setRegisteredUsers([]);
    return <Navigate to="/" />;
  };

  return (
    <AppProvider> {/* Wrap the Router with AppProvider */}
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/register" element={<Register onRegister={handleRegister} onSignIn={() => {}} />} />
            <Route
              path="/sign-in"
              element={<SignIn onSignIn={handleSignIn} registeredUsers={registeredUsers} />}
            />
            <Route
              path="/dashboard"
              element={<Dashboard username={loggedInUsername} onLogout={handleLogout} />}
            />
            <Route path="/about-us" element={<About />} />
            <Route path='/profile' element={<Profile username={loggedInUsername} registeredUsers={registeredUsers} onLogout={handleLogout} />} />
            <Route
              path="/my-schedule"
              element={<MySchedule username={loggedInUsername} onLogout={handleLogout} />}
            />
            <Route
              path="/set-appointment"
              element={<SetAppointment username={loggedInUsername} onLogout={handleLogout} />}
            />
            <Route
              path="/appointment-history"
              element={<AppointmentHistory username={loggedInUsername} onLogout={handleLogout} />}
            />
            <Route
              path="/community"
              element={<PetCommunity username={loggedInUsername} onLogout={handleLogout} />}
            />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;