import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage.jsx";
import LoginPage from "./components/views/LoginPage/LoginPage.jsx";
import RegisterPage from "./components/views/RegisterPage/RegisterPage.jsx";
import AddPage from "./components/views/AddPage/AddPage.jsx";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route exact path="/login" component={LoginPage}></Route>
          <Route exact path="/register" component={RegisterPage}></Route>
          <Route exact path="/insert" component={AddPage}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
