import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginScreen } from './components/LoginScreen';
import { MainScreen } from './components/MainScreen';

const App = () => {
  return (
    <div>
      <h1 className="text-7xl font-bold text-white text-center pt-10" >WorldCel</h1>
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