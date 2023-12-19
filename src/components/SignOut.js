import React from 'react';

const SignOut = ({ onSignOut }) => {
  return (
    <div>
      <h2>Sign Out</h2>
      <button onClick={onSignOut}>Sign Out</button>
    </div>
  );
};

export default SignOut;