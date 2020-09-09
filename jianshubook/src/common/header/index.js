import React, { Component } from 'react';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from './style';
class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      focused:true
    }
  }
  render() { 
    return ( 
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载app</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right"><i className="iconfont icon-yuyan"></i></NavItem>
          <SearchWrapper>
            <NavSearch
             className={this.state.focused ? 'focused' : ''}
            ></NavSearch>
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
} 
export default Header;