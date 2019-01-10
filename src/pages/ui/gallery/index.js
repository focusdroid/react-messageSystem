import React, { Component } from 'react'
import { Card, Row, Col } from 'antd'

export default class Gallery extends Component{
  render(){
    const img = [
      ['1.png', '2.png', '3.png', '4.png']
      ['5.png', '6.png', '7.png', '7.png']
      ['8.png', '9.png', '10.png', '11.png']
      ['12.png', '13.png', '14.png', '15.png']
    ]
    const imgList = img.map((list)=>list.map((item) =>
      <Card
        title="图片列表"
        cover={<img src={'/gallery/'+item}/>}
      >
        <Card.Meta
          title="图片"
          description="www.instagram.com"
        />
      </Card>
    ))
    return(
      <div>
        <Row>
          <Col md={5}>
            {imgList[0]}
          </Col>
        </Row>
        <Row>
          <Col md={5}>
            {imgList[1]}
          </Col>
        </Row>
        <Row>
          <Col md={5}>
            {imgList[2]}
          </Col>
        </Row>
        <Row>
          <Col md={5}>
            {imgList[3]}
          </Col>
        </Row>
        <Row>
          <Col md={5}>
            {imgList[4]}
          </Col>
        </Row>
      </div>
    )
  }
}
