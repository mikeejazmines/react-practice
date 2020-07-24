// This will be where all the list of my mini apps will be found as well as the date they were initially made

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
	          <h2>Home</h2>
	          <p>I will be creating different react apps to practice my react </p>
	          <p>This will not focus on css yet, mostly just functionality </p>
	          <ul className="navbar-nav mr-auto">
	            <li><Link to={'/calculator'} className="nav-link">Calculator - July 21, 2020</Link></li>
	            <li><Link to={'/todo'} className="nav-link">To Do List - July 22, 2020</Link></li>
	            <li><Link to={'/buttonclick'} className="nav-link">Button Click - July 24, 2020</Link></li>
	          </ul>
	        </div>
        );
    }
}

export default Home;