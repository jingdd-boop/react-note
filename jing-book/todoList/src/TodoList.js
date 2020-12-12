import React, { Component, Fragment } from 'react';

//Fragment占位符
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: ['1']
    }
  }
  render() {
    return (
      <Fragment>
        <div>
          <input
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          />
          <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <div>
                <li key={index}>{item}</li>
                <button onClick={this.handleBtnDelect.bind(this,index)}>刪除</button>
              </div>
            })
          }
        </ul>

      </Fragment>

    );
  }
  handleInputChange(e) {
    //console.log(this); undefined
    //console.log(e.target.value);
    this.setState({
      inputValue: e.target.value
    })

  }
  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  handleBtnDelect(index) {
    //immutable
    //state 不允許我們做任何改變
    
    const list = [...this.state.list];
    list.splice(index,1);

    this.setState({
      list:list
    })
  }
}

export default TodoList;