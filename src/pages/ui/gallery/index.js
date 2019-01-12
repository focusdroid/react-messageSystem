import React, { Component } from 'react'
import { Card, Row, Col, Modal } from 'antd'

export default class Gallery extends Component{
  constructor(props){
    super(props);
    this.state = {
      imgvisible: false,
      currentImg: ''
    }
  }
  render(){
    const img = [
      ['1.png', '2.png', '3.png', '4.png', '5.png'],
      ['6.png', '7.png', '8.png', '10.png', '10.png'],
      ['11.png', '12.png', '13.png', '14.png', '15.png'],
      ['16.png', '17.png', '18.png', '19.png', '20.png'],
      ['21.png', '22.png', '23.png', '24.png', '25.png'],
      ['26.png', '27.png', '28.png', '29.png', '30.png'],
    ]
    const imgList = img.map((list)=>list.map((item) =>
      <Card
        title="图片列表"
        cover={<img src={'/gallery/'+item} onClick={this.openGeller.bind(this, item)}/>}
      >
        <Card.Meta
          title="图片"
          description="www.instagram.com"
        />
      </Card>
    ))
    return(
      <div>
        <Row gutter={20}>
          {imgList.map((item, i)=> <Col md={4}>{imgList[i]}</Col>)}
        </Row>
        <Modal
          title="图片展示"
          width={500}
          height={800}
          visible={this.state.imgvisible}
          onCancel={()=>{this.setState({
            imgvisible: false
          })}}
          footer={null}
        >
          <img src={this.state.currentImg} alt="" style={{width: '100%'}}/>
        </Modal>
      </div>
    )
  }
  openGeller (item) {
    console.log(item)
    this.setState({
      imgvisible: true,
      currentImg: '/gallery/' + item,
    })
  }
}
