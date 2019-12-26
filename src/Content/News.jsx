import React, { Component, Fragment } from 'react';
import Axios from 'axios';
import '../Content/News.css';

class News extends Component {

    constructor(props){
        super(props);
        this.state={
            dataApi:[]
        }
    }

    componentDidMount(){
        Axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=a0abbd07427b4e11936bca6a2961fde7').then(res => {
            // res => {console.log(res.data)}
            // console.log(res.data.articles)
            this.setState({
                dataApi:res.data.articles
            })
            
        });
    }

    render() {
        return (
            <Fragment>
            <div className="wrapper">
                {this.state.dataApi.map((dat,index) =>
                {
                    return(
                    <div className="dataapi" key={index}>
                        {/* <p>{dat.name.title}&nbsp;{dat.name.first}&nbsp;{dat.name.last}</p> */}
                       <p className="p1"><h3>{dat.title}</h3></p>
                       <p className="p1">{dat.description}</p>
                       <img className="img1" src={dat.urlToImage}></img>
                       <p className="p1">{dat.publishedAt}</p>
                       <p className="p1">{dat.content}</p>
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

export default News;