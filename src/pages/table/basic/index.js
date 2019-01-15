import React, { Component } from 'react'
import { Card, Table } from 'antd'
import '../../ul.less'
import axios from 'axios'

import { getTableList } from '../../../axios/index'

export default class Basic extends Component{
  constructor(props){
    super(props);
    this.state = {
      dataSource: [],
      dataSource2: []
    }
  }
  render(){
    const colums = [ // 表头
      {
        title: 'id',
        dataIndex: 'id'
      },
      {
        title: '用户名',
        dataIndex: 'userName'
      },
      {
        title: '性别',
        dataIndex: 'sex'
      },
      {
        title: '状态',
        dataIndex: 'state'
      },
      {
        title: '爱好',
        dataIndex: 'interest'
      },
      {
        title: '生日',
        dataIndex: 'bith'
      },
      {
        title: '地址',
        dataIndex: 'address'
      },
      {
        title: '时间',
        dataIndex: 'time'
      }
    ]
    return(
      <div>
        <Card title="基础表格">
          <Table
            bordered
            columns={colums}
            dataSource={this.state.dataSource}
            pagination={false}
          />
        </Card>
        <Card title="动态数据表格">
          <Table
            bordered
            columns={colums}
            dataSource={this.state.dataSource2}
            pagination={false}
          />
        </Card>
      </div>
    )
  }
  requestTableOne () {
    const dataSource = [
      {
        id: '0',
        userName: 'focusdroid',
        sex: '1',
        state: '1',
        interest: '1',
        bith: '2018-01-02',
        address: '北京市昌平区沙皮头',
        time: '2019-01-12'
      },
      {
        id: '1',
        userName: 'focus',
        sex: '0',
        state: '0',
        interest: '1',
        bith: '2002-01-02',
        address: '北京市朝阳区沙皮头',
        time: '2019-01-12'
      }
    ]
    this.setState({
      dataSource
    })
  }
  componentDidMount(){
    this.requestTableOne()
    this.requestTableTwo()
  }
  async  requestTableTwo() {
    await getTableList().then((res)=>{
      this.setState({
        dataSource2: res.result
      })
    }).catch()
  }
}

