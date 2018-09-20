import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import Red from '../components/colors/Red';
import Green from '../components/colors/Green';
import Blue from '../components/colors/Blue';
import List from '../components/list/List';

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/red">Red</Link>
          </li>
          <li>
            <Link to="/green">Green</Link>
          </li>
          <li>
            <Link to="/blue">Blue</Link>
          </li>
          <li>
            <Link to="/list">List</Link>
          </li>
        </ul>
      <Switch>
        <Route exact path="/red" component={Red}></Route>
        <Route exact path="/green" component={Green}></Route>
        <Route exact path="/blue" component={Blue}></Route>
        <Route exact path="/list" component={List}></Route>
      </Switch>
      </div>
    );
  }
}

export default App;