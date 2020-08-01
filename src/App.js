import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Routes from "./Routes";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="browser">
          <NavigationBar />

          <div className="viewport">
            <Routes />
            
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
