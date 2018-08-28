import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Red from '../components/colors/Red';
import Green from '../components/colors/Green';
import Blue from '../components/colors/Blue';

class App extends Component {
  render() {
    return (
      <Router>
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
        </ul>

        <Route exact path="/red" component={Red}></Route>
        <Route exact path="/green" component={Green}></Route>
        <Route exact path="/blue" component={Blue}></Route>
      </div>
      </Router>
    );
  }
}

export default App;