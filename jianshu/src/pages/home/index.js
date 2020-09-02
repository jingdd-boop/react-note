import React, { Component } from 'react';
import Recommend from './components/Recommend'
import List from './components/List'
import Topic from './components/Topic'
import Writer from './components/Writer'

import {
   HomeWrapper,
   HomeLeft,
   HomeRight,
  } from './style'

class Home extends Component {
  render() { 
    return (
      <HomeWrapper>
        <HomeLeft>
          <Topic />
          <List /> 
        </HomeLeft>
        <HomeRight>
            <Recommend />
            <Writer />
        </HomeRight>
      </HomeWrapper>
    )
   
  }
}
 
export default Home;