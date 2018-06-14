import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import API_URL from '.config';
import LandingPage from './components/LandingPage';
import SignUp from './components/SignupForm';
import Login from './components/Login';
import UserPage from './components/UserPage';
import UserReportHistory from './components/UserReportHistory';
import Navigationbar from './components/NavigationBar';

export default function App(props) {
    return (
        <Router>
            <div className="app">
                <Navigationbar />  
                <header>
                    <h1><Link to="/">Welcome to Slam Crown</Link></h1>
                </header>
                <main>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/sign-up" component={SignUp} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/userpage" component={UserPage} />
                    <Route exact path="/userreporthistory" component={UserReportHistory} />
                </main>
            </div>
        </Router>
    );
}
