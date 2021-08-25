import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login';
import Shop from './Pages/Shop/Shop';
import Navbar from './Components/Navbar';
import CakeContainer from './Components/CakeContainer';
import './App.css';
import {Provider} from 'react-redux';
import store from './Redux/Store';


function App() {
    return (
        <Provider store={store}>
            <div className='App'>
                <CakeContainer/>
            </div>
        </Provider>
    );
}

export default App;
