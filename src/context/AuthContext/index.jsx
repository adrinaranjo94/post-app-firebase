import { getAuth } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [auth, setAuth] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    getAuth().onAuthStateChanged((user) => {
      if (user && user.uid) {
        setAuth(user);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setIsChecking(false);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ auth, isLoggedIn, isChecking }}>
      {props.children}
    </AuthContext.Provider>
  );
};
