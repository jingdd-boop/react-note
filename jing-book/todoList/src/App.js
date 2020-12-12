import React, { Component } from 'react'
//import React from 'react'
//const Component = React.Component

import BasicExample from './BasicExample'
import TodoList from './TodoList'

class App extends Component {
  render() {
    return (
      <div>
        hello world
        <BasicExample />,
        <TodoList />
        
      </div>
    );
  }

}

export default App;
