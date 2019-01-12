import React, { Component } from 'react'
import { Card, Form, Input, Button } from 'antd'
import '../../ul.less'

const FormItem = Form.Item

export default class Login extends Component{
  render(){
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
      </div>
    )
  }
}
