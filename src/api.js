import React, { Component, Fragment } from 'react';
import Axios from 'axios';
import './style.css';

class API extends Component {

    constructor(props){
        super(props);
        this.state={
            dataApi:[]
        }
    }

    componentDidMount(){
        Axios.get('https://randomuser.me/api/?results=4').then(res => {
            // res => {console.log(res.data)}
            this.setState({
                dataApi:res.data.results
            })
        });
    }

    render() {
        return (
            <Fragment>
            <div className="wrapper">
                <h1> Hello API </h1>
                <hr/>
                {this.state.dataApi.map((dat,index) =>
                {
                    return(
                    <div className="dataapi" key={index}>
                        <p>{dat.name.title}&nbsp;{dat.name.first}&nbsp;{dat.name.last}</p>
                        <img src={dat.picture.medium} alt=""/>
                    </div>
                    )
                })}
                <hr/>
                <div className="footer">
                    <p> copyRight &copy; WellyRiyadi2019</p>
                </div>
            </div>
            
            </Fragment>
        );
    }
}

export default API;