import React, { Component } from 'react'
import './index.less'
import { Row, Col } from 'antd'
import Util from '../../util/util'
import { wearther } from '../../axios/index'

export default class Header extends Component{
  constructor(props){
    super(props);
    this.state = {
      userName: 'focusdroid',
      sysTime: '',
      city: '北京'
    }
  }
  render(){
    return(
      <div className='header'>
        <Row className='header-top'>
          <Col span={24}>
            <span>欢迎，{this.state.userName}</span>
            <a href="#">退出</a>
          </Col>
        </Row>
        <Row className='breadcrumb'>
          <Col span={4} className='breadcrumb-title'>
            <p>首页</p>
          </Col>
          <Col span={20} className='weather'>
            <span className='date'>{this.state.sysTime}</span>
            <span className='weather-detail'>晴转多云</span>
          </Col>
        </Row>
      </div>
    )
  }
  componentDidMount () {
    setInterval(() => {
      let sysTime = Util.formateDate(new Date().getTime())
      this.setState({
        sysTime
      })
    })
    // this.getWeatherAPIData()
  }
  getWeatherAPIData () { // 天气组件
    // http://v.juhe.cn/weather/index?format=2&cityname=%E5%8C%97%E4%BA%AC&key=528f2df595747e332058ecb46a5b9be4
    let obj = {
      format: 2,
      cityname: '北京',
      key: '528f2df595747e332058ecb46a5b9be4'
    }
    wearther(obj).then((res) => {
      console.log(res)
    })
  }
}
