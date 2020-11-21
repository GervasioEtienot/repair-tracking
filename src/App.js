import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginScreen } from './components/LoginScreen';
import { MainScreen } from './components/MainScreen';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login" component={LoginScreen} />
          <Route exact path="/" component={MainScreen} />
        </Switch>
      </Router>
    </div>
  )
}
export default App;