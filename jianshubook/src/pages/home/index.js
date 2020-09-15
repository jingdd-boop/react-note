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
          <img className="banner-img" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3567555791,3708754265&fm=26&gp=0.jpg"/>
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