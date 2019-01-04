import React, { Component } from 'react'
import { HashRouter, Route, Link, Switch } from 'react-router-dom'


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
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
          <hr/>

          <Switch>
            <Route exact path="/" component={Homes} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topic} />
          </Switch>
        </div>
      </HashRouter>
    )
  }
}

function Homes() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Topic() {
  return (
    <div>
      <h3>Topic</h3>
    </div>
  );
}



