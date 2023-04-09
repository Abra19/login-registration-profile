import { useState, useMemo } from 'react';
import AuthContext from './index';
import { ChildrenProps, AuthType } from '../types';

const AuthProvider = ({ children }: ChildrenProps) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const logIn = () => setLoggedIn(true);
  const logOut = () => {
    localStorage.removeItem('userdatas');
    setLoggedIn(false);
  };

  const memoAuth: AuthType = useMemo(() => ({ loggedIn, logIn, logOut }), [loggedIn]);

  return (
    <AuthContext.Provider value={memoAuth}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
