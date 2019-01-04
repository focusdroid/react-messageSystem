import React, { Component } from 'react'
import { HashRouter as Router, Link, Route } from 'react-router-dom'
import Detail from './Detail'


export default class Topic extends Component{
  constructor(props){
    super(props);
    this.state ={
      // this.match = match
    }
  }
  render(){
    return(
      <Router>
        <div>
          <h1>Topic
          </h1>
          <Link to={`${this.props.match.url}/detail`}>详情页面</Link>
          <div>
            <Route path={`${this.props.match.url}/detail`} component={Detail}></Route>
            {console.log(this.props.match)}
          </div>
        </div>
      </Router>
    )
  }
}
