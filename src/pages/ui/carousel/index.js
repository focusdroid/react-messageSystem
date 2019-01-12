import React, { Component } from 'react'
import { Card, Carousel } from 'antd'
import '../ul.less'

export default class Carousels extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return (
      <div>
        <Card title="文字轮播图">
          <Carousel effect="scrollx" autoplay>
            <div><h3>Ant Design React</h3></div>
            <div><h3>Ant Design Vue</h3></div>
            <div><h3>Ant Design NG</h3></div>
            <div><h3>Ant Design ReactNative</h3></div>
            <div><h3>Ant Design React</h3></div>
            <div><h3>Ant Design Vue</h3></div>
            <div><h3>Ant Design NG</h3></div>
            <div><h3>Ant Design ReactNative</h3></div>
          </Carousel>
        </Card>
        <Card title="图片轮播图">
          <Carousel autoplay effect="fade">
            <div>
              <img src="/carousel-img/carousel-1.jpg" alt=""/>
            </div>
            <div>
              <img src="/carousel-img/carousel-2.jpg" alt=""/>
            </div>
            <div>
              <img src="/carousel-img/carousel-3.jpg" alt=""/>
            </div>
          </Carousel>
        </Card>
      </div>
    )
  }
}
