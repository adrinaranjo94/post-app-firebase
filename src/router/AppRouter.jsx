import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { AuthContext } from "../context/AuthContext";
import { Home } from "../pages/Home";
import Login from "../pages/Login";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

const AppRouter = () => {
  const { isChecking } = useContext(AuthContext);
  if (isChecking) {
    return <div>loading</div>;
  }

  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute component={Login} path="/login" exact />
        <PrivateRoute component={Home} path="/" exact />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
