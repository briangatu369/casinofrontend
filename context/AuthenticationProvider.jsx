import React, { createContext, useContext, useState } from "react";

export const AuthenticationContext = createContext(null);

const AuthenticationProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState({});

  return (
    <AuthenticationContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, userData, setUserData }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
