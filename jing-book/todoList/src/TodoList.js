import React, { Component, Fragment } from 'react';
import './TodoList.css';
import TodoItem from './TodoItem';

//Fragment占位符
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
  }
  render() {
    return (
      <Fragment>
        <div className="search">
          <label htmlFor="insertArea">请输入内容</label>
          <input
           id="insertArea"
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
            className="search-input"
          />
          <button 
          onClick={this.handleBtnClick.bind(this)}
          className="search-btn"
          >提交</button>
        </div>
        <ul>
           {this.getTodoItem()}
        </ul>

      </Fragment>

    );
  }
  getTodoItem() {
   return this.state.list.map((item, index) => {
      return (
        <TodoItem 
        content={item} 
        index={index}
        key={index}
        deleteItem={this.handleBtnDelect.bind(this)}
        />
      )
    })
  }
  handleInputChange(e) {
    //console.log(this); undefined
    //console.log(e.target.value);
    const value = e.target.value
    this.setState(() => {
      return {
        inputValue:value
      }
    })
    // this.setState({
    //   inputValue: e.target.value
    // })

  }
  handleBtnClick() {
    this.setState((prevState) => {
     return {
      list: [...prevState.list, prevState.inputValue],
      inputValue:''
     } 
    })
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // })
  }
  handleBtnDelect(index) {
    //immutable
    //state 不允許我們做任何改變
    this.setState((prevState) => {
     
        const list = [...prevState.list];
        list.splice(index,1);
        return {list}
      
    })
    // this.setState({
    //   list:list
    // })
  }
}

export default TodoList;