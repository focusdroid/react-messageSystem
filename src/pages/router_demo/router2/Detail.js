import React, { Component } from 'react'

export default class Detail extends Component{
  render(){
    return (
      <div>
        <div>
          Detail
          <p>路由参数： {this.props.match.params.id}</p>
        </div>
      </div>
    )
  }
}
