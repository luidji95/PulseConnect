import React, { useState } from 'react';
import { Login } from './Login/Login';
import { Registration } from './Registration/registration';

export const Auth: React.FC = () => {
  const [showRegistration, setShowRegistration] = useState(false);

  return (
    <div>
      {showRegistration ? (
        <Registration onShowLogin={() => setShowRegistration(false)} />
      ) : (
        <Login onShowRegister={() => setShowRegistration(true)} />
      )}
    </div>
  );
};