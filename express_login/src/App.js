import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Admin from "./front/pages/Admin"
import Login from "./front/pages/Login"
import Signup from "./front/pages/Signup"
import Home from "./front/pages/Home"

function App() {
  return (
    <BrowserRouter>
      <nav className="nav justify-content-center p-3">
        <Link className="p-2 nav-item nav-link" to="/">
          Home
        </Link>
        <Link className="p-2 nav-item nav-link" to="/admin">
          Admin
        </Link>
        <Link className="p-2 nav-item nav-link" to="/login">
          Login
        </Link>
        <Link className="p-2 nav-item nav-link" to="/signup">
          Sign Up
        </Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;