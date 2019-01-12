import React, { Component } from 'react'
import { Card, Tabs, Icon  } from 'antd'
import '../ul.less'

const TabPane = Tabs.TabPane;

export default class Tab extends Component{
  constructor(props){
    super(props);
    this.state = {
      panes: [],
      activeKey: ''
    }
  }
  render(){
    return(
      <div>
        <Card title="tab页签">
          <Tabs defaultActiveKey="1" onChange={this.callback.bind(this)}>
            <TabPane tab="Tab 1" key="1">第一块内容1</TabPane>
            <TabPane tab="Tab 2" key="2">第一块内容2</TabPane>
            <TabPane tab="Tab 3" key="3">第一块内容3</TabPane>
          </Tabs>
        </Card>
        <Card title="tab页签另外的写法">
          <Tabs defaultActiveKey="4" onChange={this.callback.bind(this)}>
            <Tabs.TabPane tab="Tab 4" key="4">第一块内容4</Tabs.TabPane>
            <Tabs.TabPane disabled tab="Tab 5" key="5">第一块内容5</Tabs.TabPane>
            <Tabs.TabPane tab="Tab 6" key="6">第一块内容6</Tabs.TabPane>
          </Tabs>
        </Card>
        <Card title="tab页签+icon">
          <Tabs defaultActiveKey="2">
            <TabPane tab={<span><Icon type="apple" />Tab 1</span>} key="1">
              Tab 1
            </TabPane>
            <TabPane tab={<span><Icon type="android" />Tab 2</span>} key="2">
              Tab 2
            </TabPane>
            <TabPane tab={<span><Icon type="cloud-upload" />Tab 3</span>} key="3">
              Tab 2
            </TabPane>
          </Tabs>
        </Card>
        <Card title="点击新增tabs">
          <Tabs
            onChange={this.tabChange.bind(this)}
            onEdit={this.onEdit.bind(this)}
            defaultActiveKey="1"
            type="editable-card">
            {this.state.panes.map((item)=> {
              return <TabPane
                tab={item.title}
                key={item.key}
              >{item.content}</TabPane>
            })}
          </Tabs>
        </Card>
      </div>
    )
  }
  onEdit = (targetKey, action) => {
    this[action](targetKey)
  }
  tabChange (activeKey) {
    this.setState({
      activeKey: activeKey
    })
    console.log(activeKey)
  }
  callback (key) {
    console.log(key);
  }
  componentDidMount () {
    const panes = [{
      title: 'tab1',
      content: 'content11111',
      key: '1'
    }, {
      title: 'tab2',
      content: 'content22222',
      key: '2'
    }, {
      title: 'tab3',
      content: 'content333333',
      key: '3'
    }]
    this.setState({
      panes: panes
    })
  }
}
