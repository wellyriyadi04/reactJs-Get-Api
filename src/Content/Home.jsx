import React, { Component, Fragment } from 'react';
import Axios from 'axios';
import '../Content/Home.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import News from '../Content/News';
import randomuser from '../Content/randomuser';
import AboutMe from '../Content/AboutMe';

class Home extends Component {
    render() {
        return (
            <Router>
            <div className="wrapper">
                <div className="header">
                    <div className="navbar">
                        <div className="logo">
                            <img className="logo1" src={require('../image/04.png')}></img>
                        </div>
                        <div className="menu">
                            <ul>
                                <li>
                                <Link to="">Portal Bertita</Link>
                                </li>
                                <li>
                                <Link to="/Placeholder">Random-User</Link>
                                </li>
                                <li>
                                <Link to="/AboutMe">About Me</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="Content">
                    <Route path="/" exact component={News}/>
                    <Route path="/Placeholder"  component={randomuser}/>
                    <Route path="/AboutMe"  component={AboutMe}/>
                </div>
            </div>  
            </Router>
        );
    }
}

export default Home;