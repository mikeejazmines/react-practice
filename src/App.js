// App.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator/Calculator';
import ToDo from './components/ToDo/ToDo';
import ButtonClick from './components/ButtonClick/ButtonClick';

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
              <Route path='/todo' component={ToDo} />
              <Route path='/buttonclick' component={ButtonClick} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;