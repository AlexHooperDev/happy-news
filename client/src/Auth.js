import React, { useEffect, useState } from "react";
import app from "./base";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  // state to hold firebase user
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // on mount setCurrentUser state to whatever firebase onAuthStateChanged is
    app.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    // Make Context wrapper around children (rest of app)
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
