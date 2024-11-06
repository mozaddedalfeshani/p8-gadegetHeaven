import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
// ...other imports...

function App() {
  return (
    <Router>
      <Switch>
        {/* Define the route for Dashboard */}
        <Route path="/dashboard" component={Dashboard} />
        {/* ...other routes... */}
        <Route path="*" component={NotFound} /> {/* Fallback route */}
      </Switch>
    </Router>
  );
}

export default App;
