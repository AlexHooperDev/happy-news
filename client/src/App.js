import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import Home from "./components/Home";
import Login from "./components/Login";
import signup from "./components/Signup";

import "./App.scss";
import { AuthProvider } from "./Auth";

function App() {
  return (
    <AuthProvider>
      <Router>
        <>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={signup} />
        </>
      </Router>
    </AuthProvider>
  );
}

export default App;
