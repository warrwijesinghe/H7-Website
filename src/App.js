import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./styles/global.css";
import "./styles/variables.css";
import RouterLink from "./config/RouterLink";

const App = () => {
  return (
    <Router>
      <div className="app">
        <RouterLink />
      </div>
    </Router>
  );
};

export default App;
