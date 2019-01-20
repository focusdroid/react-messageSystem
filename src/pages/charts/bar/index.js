import React, { Component } from 'react'
import { Card } from 'antd'
// import echarts from 'echarts' // 需要安装 echarts,echarts-for-react，，具体参考npm官网
/*import echarts from 'echarts/lib/echarts' // 按需加载
import 'echarts/lib/chart/bar' // 柱形图
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'*/
import ReactEcharts from 'echarts-for-react'
export default class Bar extends Component{
  render(){
    return(
      <div>
        <Card title="柱形图表1">
          <ReactEcharts
            option={this.getOption()}
          />
        </Card>
        <Card title="柱形图表2">
          <ReactEcharts
            option={this.getOption2()}
          />
        </Card>
        <Card title="柱形图3">
          <ReactEcharts
            option={this.getOption3()}
          />
        </Card>
      </div>
    );
  }
  getOption = () => {
    let option = {
      color: ['#3398DB'],
      title: {
        text: '用户骑行数据'
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type : 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '订单量',
          type: 'bar',
          data: [100,200,300,500,400,100,800]
        }
      ]
    }
    return option
  }
  getOption2 = ()=>{
    let option = {
      color: ['#3398DB'],
      title: {
        text: '用户骑行数据'
      },
      legend: { // 标题右边的副标题，可以按照需求展示
        data: ['摩拜', 'ofo', '小蓝单车']
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type : 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '摩拜',
          color: ['#333'],
          type: 'bar',
          data: [1000,2000,3000,5000,4000,1000,15000]
        },
        {
          name: 'ofo',
          color: ['#3333DB'],
          type: 'bar',
          data: [1000,2000,3000,5000,4000,1000,8000]
        },
        {
          name: '小蓝单车',
          color: ['#3398DB'],
          type: 'bar',
          data: [1000,2000,3000,5000,4000,1000,800]
        }
      ]
    }
    return option
  }
  getOption3 = () => {
    let option = {
      title: {
        text: '用户数据'
      },
      color: ['#3398DB'],
      tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis : [
        {
          type : 'category',
          data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis : [
        {
          type : 'value'
        }
      ],
      series : [
        {
          name:'直接访问',
          type:'bar',
          barWidth: '60%',
          data:[10, 52, 200, 334, 390, 330, 220]
        }
      ]
    };
    return option
  }
}