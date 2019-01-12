import React, { Component } from 'react'
import { Card, Form, Input, Button, Row, Col, message } from 'antd'
import '../../ul.less'

// const FormItem = Form.Item

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {}
  }
  render(){
    const { getFieldDecorator } = this.props.form; // 检测值的规范
    return (
      <div>
        <Card title="登录行内表单">
          <Form layout="inline">
            <Form.Item>
              <Input placeholder="用户名"/>
            </Form.Item>
            <Form.Item>
              <Input placeholder="密码"/>
            </Form.Item>
            <Form.Item>
              <Button type="primary">登录</Button>
            </Form.Item>
          </Form>
        </Card>
        <Card title="登录水平表单">
          <Row>
            <Col md={7}>
              <Form layout="horizontal">
                <Form.Item>
                  {
                    getFieldDecorator('userName', {
                      initialValue: '',
                      rules: [
                        {
                          required: true,
                          message: '请输入用户名'
                        },
                        {
                          min: 5, max: 10,
                          message: '长度不在范围内'
                        }
                        ]
                    })
                  }
                  <Input placeholder="用户名" size="large"/>
                </Form.Item>
                <Form.Item>
                  {
                    getFieldDecorator('userPwd', {
                      initialValue: '',
                      rules: [{required: true, message: '请输入密码'}]
                    })
                  }
                  <Input placeholder="密码" size="large"/>
                </Form.Item>
                <Form.Item>
                  <Button type="primary" size="large" onClick={this.handleSubmit.bind(this)}>登录</Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Card>
      </div>
    )
  }
  handleSubmit () {
    let userInfo = this.props.form.getFieldsValue();
    this.props.form.validateFields((err, values)=>{
      if (!err) {
        message.success(`${userInfo.userName}恭喜您`)
      } else {
        message.warning(`${userInfo.userName}---000`)
      }}
    )
  }
}
export default Form.create()(Login)
