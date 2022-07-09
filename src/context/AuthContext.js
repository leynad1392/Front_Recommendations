import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProviderComponent = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const setTokenInLocalStorage = (newToken) => {
    if (!newToken) {
      localStorage.removeItem('token');
    } else {
      localStorage.setItem('token', newToken);
    }
    setToken(newToken);
  };

  return (
    <AuthContext.Provider value={[token, setTokenInLocalStorage]}>
      {children}
    </AuthContext.Provider>
  );
};

export const useToken = () => {
  return useContext(AuthContext);
};
