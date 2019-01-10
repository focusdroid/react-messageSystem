import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Login from './pages/login/index'
import Admin from './admin'
import Buttons from './pages/ui/buttons/index'
import NoMatch from './pages/nomatch/index' // 404
import Modals from './pages/ui/modals/index' // 模态框
import Loading from './pages/ui/loading/index' // loading效果
import Notification from './pages/ui/notification/index' // 通知提醒
import Messages from './pages/ui/message/index' // 全局提示
import Tabs from './pages/ui/tabs/index' // tab标签页
import Gallery from './pages/ui/gallery/index'
export default class Routers extends Component{
  render(){
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path='/login' component={Login}></Route>
            <Route path='/admin' render={()=>
              <Admin>
                <Route path="/admin/ui/buttons" component={Buttons}></Route>
                <Route path="/admin/ui/modals" component={Modals}></Route>
                <Route path="/admin/ui/loadings" component={Loading}></Route>
                <Route path="/admin/ui/notification" component={Notification}></Route>
                <Route path="/admin/ui/messages" component={Messages}></Route>
                <Route path="/admin/ui/tabs" component={Tabs}></Route>
                <Route path="/admin/ui/gallery" component={Gallery}></Route>
                <Route component={NoMatch}></Route>
              </Admin>
            }></Route>
          </Switch>
        </App>
      </HashRouter>
    )
  }
}
