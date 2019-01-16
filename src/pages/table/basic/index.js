import React, { Component } from 'react'
import { Card, Table, Modal } from 'antd'
import '../../ul.less'
import axios from 'axios'

import { getTableList } from '../../../axios/index'

export default class Basic extends Component{
  constructor(props){
    super(props);
    this.state = {
      dataSource: [],
      dataSource2: [],
      dataSource3: [],
      selectedRowKeys: '',
      selectrfItem: ''
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
        dataIndex: 'sex',
        render(sex){
          return sex == 1?'男':'女'
        }
      },
      {
        title: '状态',
        dataIndex: 'state',
        render(state){
          let config = {
            '1':'咸鱼一条',
            '2':'浪子',
            '3':'北大才子',
            '4':'爬山',
            '6':'跑步'
          }
          return config[state]
        }
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
    let { selectedRowKeys } = this.state;
    const rowSelection = {
      type: 'radio',
      selectedRowKeys
    }
    const rowSelection2 = {
      type: 'radio'
    }
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
        <Card title="单选功能表格">
          <Table
            bordered
            rowSelection={rowSelection}
            onRow={(record, index)=>{
              return {
                onClick:() => {
                  this.onRowClick(record, index)
                }
              }
            }}
            columns={colums}
            dataSource={this.state.dataSource}
            pagination={false}
          />
        </Card>
        <Card title="onChange表格">
          <Table
            bordered
            columns={colums}
            rowSelection={rowSelection2}
            onChange={this.onChangeClick.bind(this)}
            dataSource={this.state.dataSource}
            pagination={false}
          />
        </Card>
      </div>
    )
  }
  onChangeClick (selectedRowKeys, selectedRows) {
    console.log(selectedRowKeys, selectedRows)
  }
  onRowClick (record, index) {
    let selectKey = [index]
    Modal.info({
      title: '信息',
      content: `用户名: ${record.userName}, 用户爱好: ${record.sex}`
    })
    this.setState({
      selectedRowKeys: selectKey,
      selectrfItem: record
    })
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
    dataSource.map((item, index)=>{
      item.key = index
    })
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
      res.result.map((item, index)=>{
        item.key = index
      })
      this.setState({
        dataSource2: res.result
      })
    }).catch()
  }
}

