import React, { Component } from 'react'
import { Card } from 'antd'
import ReactEcharts from 'echarts-for-react'

export default class Pie extends Component{
  render(){
    return (
      <div>
        <Card title="饼图1">
          <ReactEcharts
            option={this.getOption()}
          />
        </Card>
        <Card title="环形饼图2">
          <ReactEcharts
            option={this.getOption2()}
          />
        </Card>
        <Card title="饼图3">
          <ReactEcharts
            option={this.getOption3()}
          />
        </Card>
      </div>
    );
  }
  getOption = () => {
    let option = {
      title: {
        text: '用户骑行菜单',
        // x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a}<br/>{b}:{c}({d}%)'
      },
      legend: { // 副标题的位置在legend控制，具体参考饼图
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
      },
      series: [
        {
          radius : '80%', // 一个参数控制饼图大小
          name: '订单量',
          type: 'pie',
          data: [{
            value: 1000,
            name: '周一'
          }, {
            value: 800,
            name: '周二'
          }, {
            value: 100,
            name: '周三'
          }, {
            value: 1500,
            name: '周四'
          }, {
            value: 150,
            name: '周五'
          }, {
            value: 300,
            name: '周六'
          }, {
            value: 500,
            name: '周日'
          }]
        }
      ]
    }
    return option
  }
  getOption2 = () => {
    let option = {
      title: {
        text: '用户骑行菜单',
        // x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a}<br/>{b}:{c}({d}%)'
      },
      legend: { // 副标题的位置在legend控制，具体参考饼图
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
      },
      series: [
        {
          radius :['40%', '80%'], // 两个参数控制是否空心
          name: '订单量',
          type: 'pie',
          data: [{
            value: 1000,
            name: '周一'
          }, {
            value: 800,
            name: '周二'
          }, {
            value: 100,
            name: '周三'
          }, {
            value: 1500,
            name: '周四'
          }, {
            value: 150,
            name: '周五'
          }, {
            value: 300,
            name: '周六'
          }, {
            value: 500,
            name: '周日'
          }]
        }
      ]
    }
    return option
  }
  getOption3 = () => {
    let option = {
      title: {
        text: '用户骑行菜单',
        // x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a}<br/>{b}:{c}({d}%)'
      },
      legend: { // 副标题的位置在legend控制，具体参考饼图
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
      },
      series: [
        {
          radius :['40%', '80%'], // 两个参数控制是否空心
          name: '订单量',
          type: 'pie',
          data: [{
            value: 1000,
            name: '周一'
          }, {
            value: 800,
            name: '周二'
          }, {
            value: 100,
            name: '周三'
          }, {
            value: 1500,
            name: '周四'
          }, {
            value: 150,
            name: '周五'
          }, {
            value: 300,
            name: '周六'
          }, {
            value: 500,
            name: '周日'
          }]
        }
      ]
    }
    return option
  }
}