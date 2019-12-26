import React, { Component, Fragment } from 'react';
import Axios from 'axios';
import '../Content/randomuser.css';

class Halaman2 extends Component {

    constructor(props){
        super(props);
        this.state={
            dataApi:[]
        }
    }

    componentDidMount(){
        Axios.get('https://randomuser.me/api/?results=15').then(res => {
            // res => {console.log(res.data)}
            this.setState({
                dataApi:res.data.results
            })
        });
    }

    render() {
        return (
            <Fragment>
            <div className="wrapper1">
                {this.state.dataApi.map((dat,index) =>
                {
                    return(
                    <div className="dataapi2" key={index}>
                        <p>{dat.name.title}&nbsp;{dat.name.first}&nbsp;{dat.name.last}</p>
                        <img src={dat.picture.medium} alt=""/>
                    </div>
                    )
                })}
               
            </div>
                <div className="footer">
                    <p> copyRight &copy; WellyRiyadi2019</p>
                </div>
            </Fragment>
        );
    }
}

export default Halaman2;