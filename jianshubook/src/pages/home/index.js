import React, { Component } from 'react';
import Topic from './components/Topics'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'


import { 
  HomeWrapper,
  HomeLeft,
  HomeRight,
 } from './style';

class Home extends Component {
  render() { 
    return ( 
      <HomeWrapper>
        < HomeLeft>
          <img className="banner-img" src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1705581946,4177791147&fm=26&gp=0.jpg"/>
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
      </HomeWrapper>
     );
  }
}
 
export default Home;