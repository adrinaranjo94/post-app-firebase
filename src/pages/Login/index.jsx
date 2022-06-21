import { Button } from "@material-ui/core";
import { getAuth, signInWithPopup } from "firebase/auth";
import React from "react";
import { googleAuthProvider } from "../../core/firebase";

const Login = () => {
  const handleClickLogin = () => {
    const auth = getAuth();
    signInWithPopup(auth, googleAuthProvider);
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button color="primary" variant="contained" onClick={handleClickLogin}>
        Sign in with Google
        <img
          src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
          alt=""
          style={{ width: "40px", marginLeft: "24px" }}
        />
      </Button>
    </div>
  );
};

export default Login;
