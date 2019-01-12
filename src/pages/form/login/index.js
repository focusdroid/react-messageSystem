import React, { Component } from 'react'
import { Card, Form, Input, Button, Row, Col } from 'antd'
import '../../ul.less'

const FormItem = Form.Item

export default class Login extends Component{
  render(){
    const { getFieldDecorator } = this.props.form; // 检测值的规范
    return (
      <div>
        <Card title="登录行内表单">
          <Form layout="inline">
            <FormItem>
              <Input placeholder="用户名"/>
            </FormItem>
            <FormItem>
              <Input placeholder="密码"/>
            </FormItem>
            <FormItem>
              <Button type="primary">登录</Button>
            </FormItem>
          </Form>
        </Card>
        <Card title="登录水平表单">
          <Row>
            <Col md={7}>
              <Form layout="horizontal">
                <FormItem>
                  <Input placeholder="用户名" size="large"/>
                </FormItem>
                <FormItem>
                  <Input placeholder="密码" size="large"/>
                </FormItem>
                <FormItem>
                  <Button type="primary" size="large">登录</Button>
                </FormItem>
              </Form>
            </Col>
          </Row>
        </Card>
      </div>
    )
  }
}
