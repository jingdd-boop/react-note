import React, { Component } from 'react';
import {
  TopicWrapper,
  TopicItem

} from '../style'

class Topics extends Component {
  render() { 
    return ( 
      <TopicWrapper>
        <TopicItem>
          <img className="item-img" src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2640661836,788006482&fm=26&gp=0.jpg"/>
          社会热点
        </TopicItem>
      </TopicWrapper>
     );
  }
}
 
export default Topics;