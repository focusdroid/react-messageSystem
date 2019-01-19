import React, { Component } from 'react'
import { Card, Button, Modal } from 'antd'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

export default class Rich extends Component{
  constructor(props){
    super(props);
    this.state = {
      editorState: '',
      clearVisible: false
    }
  }
  render(){
    return (
      <div>
        <Card title="富文本编辑器">
          <Button style={{marginBottom: 10}} type="primary">显示文本</Button>
          <Button style={{marginBottom: 10}} type="danger" onClick={this.delHandleClick.bind(this)}>清空内容</Button>
          {/*清空内容的确认start*/}
          <div>
            <Modal
              title="删除文本"
              visible={this.state.clearVisible}
              onOk={this.handleOk}
              okText="确认删除"
              onCancel={this.handleCancel}
              cancelText="取消"
            >
              <h3>是否删除全部文本信息</h3>
            </Modal>
          </div>
          {/*清空内容的确认end*/}
          <Editor
            style={{height: 500}}
            editorState={this.state.editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={this.onEditorStateChange.bind(this)}
          />
        </Card>
      </div>
    );
  }
  onEditorStateChange (editorState) {
    this.setState({
      editorState,
    });
  }
  delHandleClick () { // 清空信息按钮
    this.setState({
      clearVisible: true
    })
  }
  handleOk = () => { // 确定删除
    this.setState({
      editorState: '',
    }, () => {
      this.setState({
        clearVisible: false
      })
    })
  }
  handleCancel = () => { // 取消
    this.setState({
      clearVisible: false
    })
  }
}