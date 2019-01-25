import React, { Component } from 'react'
import { Card } from 'antd'
import echarts from 'echarts/lib/echarts'
import echartTheme from '../themeLight'
import ReactEcharts from 'echarts-for-react'
export default class Line extends Component{
  render() {
    return (
      <div>
        <Card title="折线图图标1">
          <ReactEcharts
            option={this.getOption()}
          />
        </Card>
        <Card title="折线图图标2">
          <ReactEcharts
            option={this.getOption2()}
          />
        </Card>
        <Card title="折线图面积">
          <ReactEcharts
            option={this.getOption3()}
          />
        </Card>
      </div>
    );
  }
  getOption = () => { // 一条折线图信息
    let option = {
      title: {
        text: '用户骑行菜单',
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          radius : '80%', // 一个参数控制饼图大小
          name: '订单量',
          type: 'line',
          data: [
            1000,
            800,
            100,
            1500,
            150,
            300,
            50
          ]
        }
      ]
    }
    return option
  }
  getOption2 = () => { // 显示两个折线图信息
    let option = {
      title: {
        text: '摩拜骑行菜单',
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['ofo订单量', '摩拜订单量']
      },
      xAxis: {
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          radius : '80%', // 一个参数控制饼图大小
          name: '摩拜订单量',
          type: 'line',
          data: [
            100,
            800,
            1000,
            1500,
            1200,
            1600,
            5000
          ]
        },
        {
          radius : '80%', // 一个参数控制饼图大小
          name: 'ofo订单量',
          type: 'line',
          data: [
            1000,
            8000,
            1000,
            1500,
            1200,
            1400,
            500
          ]
        }
      ]
    }
    return option
  }
  getOption3 = () => { // 显示两个折线图信息
    let option = {
      title: {
        text: '摩拜骑行菜单',
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        type: 'category',
        boundaryGap: false
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          radius : '80%', // 一个参数控制饼图大小
          name: '摩拜订单量',
          type: 'line',
          areaStyle: {},
          data: [
            100,
            800,
            1000,
            1500,
            1200,
            1600,
            5000
          ]
        }
      ]
    }
    return option
  }
}