import React, { Component, Fragment } from 'react';
import '../Content/AboutMe.css';

class AboutMe extends Component {
    render() {
        return (
                <div className="wrapper3">
                    <div className="border">
                        <img className="img3" src={require('../image/man.png')}/>
                        <p className="nama">WELLY RIYADI PRATAMA</p>
                        <p className="phone">0896****6269</p>
                    </div>
                </div>
            );
        }
    }
    
    export default AboutMe;