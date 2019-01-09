import React, { Component } from 'react'
import { Card, Button, Spin, Icon, Alert } from 'antd'
import '../ul.less'

export default class Index extends Component{
  constructor(props){
    super(props);
    this.state = {
      alertState: true
    }
  }
  render(){
    const icon = <Icon type="yahoo"></Icon>
    return (
      <div>
        <Card
          title="卡片的用法">
          <Spin
            spinning={true}
            size="small"
          ></Spin>
          <Spin
            spinning={true}
            size="default"
          ></Spin>
          <Spin
            spinning={true}
            size="large"
            indicator={icon}
          ></Spin>
        </Card>
        <Card title="内容遮罩">
         {/* <Alert
            message="React"
            description="welcome to beijing"
            type="info"
          ></Alert>*/}
          <Spin
            spinning={this.state.alertState}
          >
            <Alert
              message="React"
              description="welcome to alert"
              type="info"
            ></Alert>
          </Spin>
          <Spin
            spinning={true}
          >
            <Alert
              message="React"
              description="welcome to alert"
              type="info"
            ></Alert>
          </Spin>
        </Card>
        <Card title=""></Card>
      </div>
    )
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        alertState: false
      })
    }, 3000)
  }
}
