import React, { Component } from 'react'
import { Card, Button, notification } from 'antd'

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};

export default class Notification extends Component{
  render(){
    return (
      <div>
        <Card title="通知提醒框">
          <Button type="primary" onClick={this.openNotitication.bind(this, 'open')}>open</Button>
          <Button type="success" onClick={this.openNotitication.bind(this, 'success')}>Success</Button>
          <Button type="warning" onClick={this.openNotitication.bind(this, 'warning')}>warning</Button>
          <Button type="primary" onClick={this.openNotitication.bind(this, 'error')}>error</Button>
        </Card>
      </div>
    )
  }
  openNotitication (type) {
    if (type === 'open') {
      notification.open({
        message: '收到提醒！',
        description: '您收到一条信息',
        duration: 3,
        onClick: () => {
          console.log('Notification Clicked!');
        },
      });
    } else if (type === 'success') {
      notification.open({
        message: '收到提醒！',
        description: '您收到一条信息',
        duration: 3,
        placement: 'bottomRight',
        onClick: () => {
          console.log('Notification Clicked!');
        },
      });
    }
  }
}