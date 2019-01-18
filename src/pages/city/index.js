import React, { Component } from 'react'
import { Card, Button, Table, Row, Col } from 'antd'

export default class City extends Component{
  render(){
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      render: text => <a href="javascript:;">{text}</a>,
    }, {
      title: 'Age',
      dataIndex: 'age',
    }, {
      title: 'Address',
      dataIndex: 'address',
    }];
    const data = [{
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    }, {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    }, {
      key: '4',
      name: 'Disabled User',
      age: 99,
      address: 'Sidney No. 1 Lake Park',
    }];
    return(
      <div>
        <Card title='城市管理'>
          <Row>
            <Col span={24} style={{marginBottom: 10}}>
              <Button type='primary'>添加信息</Button>
              <Button type='primary'>修改信息</Button>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Table bordered columns={columns} dataSource={data} footer={false}/>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}
