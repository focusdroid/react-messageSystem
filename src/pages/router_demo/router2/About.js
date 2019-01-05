import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class About extends Component{
  render(){
    return(
      <div>
        <p>about--->{this.props.match.params.id}----{this.props.match.params.count}</p>
        {/*{this.props.children}*/}
        {/*<h1>about{this.props.match.params.id}</h1>*/}
        {/*<Link to="/about/testid">嵌套路由1</Link>
        <Link to="/about/007">嵌套路由2</Link>*/}
      </div>
    )
  }
}
