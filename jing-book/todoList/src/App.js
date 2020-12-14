import React, { Component } from 'react'
//import React from 'react'
//const Component = React.Component

import BasicExample from './BasicExample'
import TodoList from './TodoList'
import Header from './Header'


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BasicExample />
        <TodoList />
      
        
      </div>
    );
  }

}

export default App;
