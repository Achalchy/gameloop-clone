import React, { useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AllGames from "./AllGames";
import "./App.css";
import Gameloop from "./Components/Gameloop";
import Windows from "./Components/Windows";

function App() {
  const [showTray, setshowTray] = useState(false);
  const minimiseHandler = () => {
    if (showTray !== true) {
      setshowTray(true);
    }
  };

  const closeTray = () => {
    setshowTray(false);
  };
  return (
    <Router>
      <Switch>
        <Route path="/allGames">
          <div className="app h-screen w-screen grid place-items-center  text-white windows relative">
            <AllGames />
          </div>
        </Route>
        <Route path="/gameloop">
          <div className="app h-screen w-screen grid place-items-center  text-white relative">
            <Gameloop minimising={minimiseHandler} cut={closeTray} />
          </div>
        </Route>
        <Route apth="/">
          <Windows show={showTray} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
