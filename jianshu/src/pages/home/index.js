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
          <img className="banner-img" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1908325732,3142021993&fm=26&gp=0.jpg" alt="图片"></img>
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