import React, { Component } from 'react'
import { Card, Button, Modal } from 'antd'
import '../ul.less'
export default class Modals extends Component{
  constructor(props){
    super(props);
    this.state = {
      closeModal: false,
      closeModal2: false,
      closeModal3: false,
      closeModal4: false
    }
  }
  render(){
    return (
      <div>
        <Card title='基础模态框'>
          <Button type="primary" onClick={this.handleClick.bind(this, 'open')}>Open</Button>
          <Button type="primary" onClick={this.handleClick.bind(this, 'closeModals2')}>自定义页脚</Button>
          <Button type="primary" onClick={this.handleClick.bind(this, 'closeModal3')}>顶部20px</Button>
          <Button type="primary" onClick={this.handleClick.bind(this, 'closeModal4')}>水平垂直居中</Button>
        </Card>
        <Modal
          title='React'
          visible={this.state.closeModal}
          onCancel={this.closeModal.bind(this)}
        >
          <p>欢迎进入系统</p>
        </Modal>
        <Modal
          title='自定义页脚'
          visible={this.state.closeModal2}
          okText="下一步"
          cancelText='撤回'
          onOk={this.closeModal2.bind(this)}
          onCancel={this.closeModal2.bind(this)}
        >
          <p>欢迎进入系统</p>
        </Modal>
        <Modal
          title='顶部20px'
          style={{top: 20}}
          visible={this.state.closeModal3}
          onOk={this.closeModals3.bind(this)}
          onCancel={this.closeModals3.bind(this)}
        >
          <p>欢迎进入系统</p>
        </Modal>
        <Modal
          title='水平垂直居中'
          centered
          visible={this.state.closeModal4}
          onOk={this.closeModals4.bind(this)}
          onCancel={this.closeModals4.bind(this)}
        >
          <p>欢迎进入系统</p>
        </Modal>
        <Card title='信息确认框'>
          <Button type="primary" onClick={this.handlerConfirm.bind(this, 'confirm')}>confirm</Button>
          <Button type="primary" onClick={this.handlerConfirm.bind(this, 'info')}>info</Button>
          <Button type="primary" onClick={this.handlerConfirm.bind(this, 'success')}>success</Button>
          <Button type="primary" onClick={this.handlerConfirm.bind(this, 'warning')}>warning</Button>
        </Card>
      </div>
    )
  }
  handlerConfirm (type) {
    if (type === 'confirm') {
      Modal.confirm({
        title: '确认',
        content: 'are you ok?',
        centered: true,
        okOk(){
          console.log('ok')
        },
        onCancel(){
          console.log('cancel')
        }
      })
    } else if (type === 'info') {
      Modal.info({
        title: '确定',
        content: 'are you ok?',
        okOk(){
          console.log('ok')
        },
        onCancel(){
          console.log('cancel')
        }
      })
    } else if (type === 'success') {
      Modal.success({
        title: 'ok',
        content: 'are you ok?',
        okOk(){
          console.log('ok')
        },
        onCancel(){
          console.log('cancel')
        }
      })
    } else if (type === 'warning') {
      Modal.warning({
        title: '警告',
        content: '这是一条警告信息'
      })
    }
  }
  handleClick = (type) => {
    if (type === 'open') {
      this.setState({
        closeModal: true
      })
    } else if (type === 'closeModals2') {
      this.setState({
        closeModal2: true
      })
    } else if (type === 'closeModal3') {
      this.setState({
        closeModal3: true
      })
    } else if (type === 'closeModal4') {
      this.setState({
        closeModal4: true
      })
    }
  }
  closeModal (e) {
    console.log(e)
    this.setState({
      closeModal: false
    })
  }
  closeModal2 () {
    this.setState({
      closeModal2: false
    })
  }
  closeModals3 () {
    this.setState({
      closeModal3: false
    })
  }
  closeModals4 () {
    this.setState({
      closeModal4: false
    })
  }
}
