import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import {actionCreators} from './store';


import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoList,
  SearchInfoSwitch,
  SearchInfoItem
} from './style.js';

const getListArea = (show) =>{
  if(show){
    return(
      <SearchInfo>
      <SearchInfoTitle>
        热搜推荐
        <SearchInfoSwitch>换一换</SearchInfoSwitch>
      </SearchInfoTitle>
      <SearchInfoList>
        <SearchInfoItem>教育</SearchInfoItem>
        <SearchInfoItem>简书</SearchInfoItem>
        <SearchInfoItem>科普</SearchInfoItem>
        <SearchInfoItem>教育</SearchInfoItem>
        <SearchInfoItem>简书</SearchInfoItem>
        <SearchInfoItem>科普</SearchInfoItem>
      </SearchInfoList>
   </SearchInfo>
    )
  }
}

const Header = (props) => {
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
      in={props.focused}
      timeout={200} 
      classNames="slide">

        <NavSearch
         className={props.focused ? 'focused': ''}
          onFocus={props.handleInputFocus}
          onBlur={props.handleInputBlur}
        >
        </NavSearch>
      </CSSTransition>
    <i className={props.focused ? 'focused iconfont icon-icon-search': 'iconfont icon-icon-search'}></i>
     {getListArea(props.focused)}
    </SearchWrapper>
   
  </Nav>
  <Addition>
  <Button className="writting"><i className="iconfont icon-bi"></i>写文章</Button>
    <Button className="reg">注册</Button>
    
  </Addition>
</HeaderWrapper>
);
}
 
const mapStateToProps = (state) => {
  return {
    focused:state.header.get('focused')
  }
}
const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus(){
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur(){
      dispatch(actionCreators.searchBlur());
    }
  }
}
export default connect(mapStateToProps,mapDispathToProps)(Header);