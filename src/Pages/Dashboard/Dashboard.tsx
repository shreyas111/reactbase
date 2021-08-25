import * as React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';
//import Contact from '../Contact/Contact';

function Dashboard() {
    return (
        <div className="App">
            <h1> DashBoard </h1>

            <br />
            <NavLink exact to="/Contact" className="App-link">Contact Us</NavLink>
            <NavLink exact to="/Shop" className="App-link">Contact Us</NavLink>

        </div>
    );
}

export default Dashboard;