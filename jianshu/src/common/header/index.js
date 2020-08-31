import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group'

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from './style.js';

class Header  extends Component {
 
  render() { 
    return ( 
      <HeaderWrapper>
        <Logo/>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载app</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
          <i className="iconfont icon-yuyan"></i>
          </NavItem>
          <SearchWrapper>
          <CSSTransition
           timeout={200} 
           in={this.props.focused}
           className="slide">

            <NavSearch
            className={this.props.focused ? 'focused ': ''}
            onFocus={this.props.handleInputFocus}
            onBlur={this.props.handleInputBlur}
             ></NavSearch>
          </CSSTransition>
          <i className={this.props.focused ? 'focused iconfont icon-icon-search': 'iconfont icon-icon-search'}></i>
          </SearchWrapper>
         
        </Nav>
        <Addition>
        <Button className="writting"><i className="iconfont icon-bi"></i>写文章</Button>
          <Button className="reg">注册</Button>
          
        </Addition>
      </HeaderWrapper>
     );
  }
  handleInputFocus(){
    
  }
  handleInputBlur(){

  }
}
 
const mapStateToProps = (state) => {
  return {
    focused:state.focused
  }
}
const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus(){
      const action = {
        type:'search_focus'
      };
      dispatch(action);
    },
    handleInputBlur(){
      const action = {
        type:'search_blur'
      };
      dispatch(action);
    }
  }
}
export default connect(mapStateToProps,mapDispathToProps)(Header);