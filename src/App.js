// App.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator/Calculator';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <h2>React Practices</h2>
          <Link to={'/'} className="nav-link"> Home </Link>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/calculator' component={Calculator} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;