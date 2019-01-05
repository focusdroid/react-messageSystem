import React, { Component } from 'react'
import { Card, Button, Icon  } from 'antd'
import '../ul.less'
const ButtonGroup = Button.Group;
export default class Buttons extends Component{
  render(){
    return (
      <div>
        <Card title='按钮'>
          <Button type='primary'>focusdroid</Button>
          <Button>focusdroid</Button>
          <Button type='dashed'>focsudroid</Button>
          <Button type="danger">focsudroid</Button>
        </Card>
        <Card title='图形按钮'>
          <Button icon='plus'>focusdroid</Button>
          <Button icon='edit'>focusdroid</Button>
          <Button icon='delete'>focsudroid</Button>
          <Button type="primary" icon='search'>focsudroid</Button>
        </Card>
        <Card title='loading按钮'>
          <Button loading>focusdroid</Button>
          <Button icon='edit'>focusdroid</Button>
          <Button icon='delete'>focsudroid</Button>
          <Button type="primary" icon='search'>focsudroid</Button>
        </Card>
        <Card title='按钮组'>
          <Button loading>focusdroid</Button>
          <ButtonGroup>
            <Button type="primary">
              <Icon type="left" />Go back
            </Button>
            <Button type="primary">
              Go forward<Icon type="right" />
            </Button>
          </ButtonGroup>
        </Card>
      </div>
    )
  }
}