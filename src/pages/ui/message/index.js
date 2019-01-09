import React, { Component } from 'react'
import { Card, Button, message } from 'antd'

export default class Messages extends Component{
  render(){
    return(
      <div>
        <Card title="全局提示">
          <Button type="primary" onClick={this.message.bind(this, 'success')}>Success</Button>
          <Button type="primary" onClick={this.message.bind(this, 'error')}>error</Button>
          <Button type="primary" onClick={this.message.bind(this, 'info')}>info</Button>
          <Button type="primary" onClick={this.message.bind(this, 'loading')}>loading</Button>
        </Card>
      </div>
    )
  }
  message (type) {
    if (type === 'success') {
      message.success('成功', 1);
    } else if (type === 'loading') {
      message.loading('请稍后,加载中...', 1);
    }
  }
}