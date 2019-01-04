import React, { Component } from 'react'
import MenuConfig from './../../config/menuConfig'
import './index.less'
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class NavLeft extends Component{
  constructor(props){
    super(props);
    this.state = {
      menuTreeNode: []
    }
  }
  render(){
    return (
      <div>
        <div className='logo'>
          <img src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg' alt=""/>
          <h1>focusdroid</h1>
        </div>
        <div>
          <Menu
            mode="vertical"
            theme='dark'>
            {this.state.menuTreeNode}
          </Menu>
        </div>
      </div>
    )
  }
  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) { // this.renderMenu(MenuConfig)
        return(
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>
    })
  }
  componentDidMount () {
    const menuTreeNode = this.renderMenu(MenuConfig)
    this.setState({
      menuTreeNode
    })
  }
}
