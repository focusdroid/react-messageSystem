import React, { Component } from 'react'
import { HashRouter, Link } from 'react-router-dom'


export default class Home extends Component{
  render(){
    return(
      <HashRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/006/005">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
          <hr/>
          {this.props.children}
        </div>
      </HashRouter>
    )
  }
}




