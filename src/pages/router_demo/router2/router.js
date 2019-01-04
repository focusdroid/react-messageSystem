import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from './Home'
import Homes from './Homes'
import About from './About'
import Topic from './Topic'

export default class Routerss extends Component{
  render(){
    return(
      <Router>
        <Home>
          <Switch>
            <Route exact path="/" component={Homes}/>
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topic} />
          </Switch>
        </Home>
      </Router>
    )
  }
}
