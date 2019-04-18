import React, { Component } from 'react';
import 'antd-mobile/dist/antd-mobile.css';
import './App.css';
import { Card, WingBlank, WhiteSpace,NavBar, Icon, Modal } from 'antd-mobile';

const prompt = Modal.prompt;
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      newTodo: {},
      newId:0,
      isEdit: false,
      todoList: [
        {
          id:1,
          title: "第一个待办",
          content: "晚上去打篮球",
          date: "2019-04-18 16:04",
          position: "杭州，西子国际"
        }
      ]
    }
  }
  componentWillMount(){
    //let listNum = this.state.todoList.length;
    //let newId = this.state.todoList[listNum].id + 1;
    //this.setState(newId)
  }
  editNewTodo = (e) => {
    console.log(e);
    this.setState({
      isEdit: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      isEdit: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      isEdit: false,
    });
  }
  render() {
    let todos = this.state.todoList.map((item,index) => {
      return (
        <WingBlank size="lg" key={item.id}>
          <WhiteSpace size="lg" />
          <Card>
            <Card.Header
              title={item.title}
            />
            <Card.Body>
              <div>{item.content}</div>
            </Card.Body>
            <Card.Footer content={item.date} extra={<div>{item.position}</div>} />
          </Card>
          <WhiteSpace size="lg" />
        </WingBlank>
      )
    });
    return (
      <div className="App">
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <Icon key="1" type="ellipsis" />
          ]}
        >我的待办</NavBar>
        <div className="inputWrapper">
          <input type="text" />
        </div>
        <div className="todoList">
          {todos}
        </div>
        <div className="newTodo" onClick={() => prompt(
            '新建待办',
            '请输入标题和内容',
            (title, content) => {
              console.log({id:2, title:title, content:content, date: new Date(), position:"杭州"})
              },
            'login-password',
            null,
            ['标题', '内容'],
          )
        }>
          <Icon type="plus" />
        </div>
      </div>
    );
  }
}

export default App;
