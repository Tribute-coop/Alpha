import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Wizard from './views/Wizard';
import Home from './views/Home';

const Login = () => <div>Login</div>;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/home' component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/wizard' component={Wizard}/>
          <Route component={Wizard}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
