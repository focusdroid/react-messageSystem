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
          <Link to={`${this.props.match.url}/detail/123`}>详情页面1</Link>
          <Link to={`${this.props.match.url}/detail/456`}>详情页面2</Link>
          <div>
            <Route path={`${this.props.match.url}/detail/:id`} component={Detail}></Route>
            {console.log(this.props.match)}
            <p></p>
          </div>
        </div>
      </Router>
    )
  }
}
