import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { LoginScreen } from './components/LoginScreen';
import { MainScreen } from './components/MainScreen';

const App = () => {
  return (
    <div>
      <h1 className="text-7xl font-bold text-white text-center pt-10" >WorldCel</h1>
      <Router hashType="slash" >
        <Switch>
          <Route exact path="/" component={LoginScreen} />
          <Route exact path="/main" component={MainScreen} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  )
}
export default App;