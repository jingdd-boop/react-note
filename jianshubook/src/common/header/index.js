import React, { Component } from 'react';
import {  connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators }  from './store';
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
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList
} from './style';

class Header extends Component {

 getListArea = (show) => {
    if(show){
      return (
        <SearchInfo>
              <SearchInfoTitle>
                热门搜索
                <SearchInfoSwitch>换一换</SearchInfoSwitch>  
              </SearchInfoTitle>  
              <SearchInfoList>
                <SearchInfoItem>教育</SearchInfoItem>
                <SearchInfoItem>简书</SearchInfoItem>
                <SearchInfoItem>教育</SearchInfoItem>
                <SearchInfoItem>简书</SearchInfoItem>
                <SearchInfoItem>教育</SearchInfoItem>
                <SearchInfoItem>简书</SearchInfoItem>
              </SearchInfoList>
            </SearchInfo>
      )
    }else{
      return null;
    }
  }
  
  render(){
    
      return (
        <HeaderWrapper>
            <Logo />
            <Nav>
              <NavItem className="left active">首页</NavItem>
              <NavItem className="left">下载app</NavItem>
              <NavItem className="right">登录</NavItem>
              <NavItem className="right"><i className="iconfont icon-yuyan"></i></NavItem>
              <SearchWrapper>
              <CSSTransition
              in={this.props.focused}
              timeout={200}
              classNames="slide">
                <NavSearch
                 className={this.props.focused ? 'focused' : ''}
                 onFocus={this.props.handleInputFocus}
                 onBlur={this.props.handleInputBlur}
                ></NavSearch>
              </CSSTransition>           
                <i className={this.props.focused ? 'focused iconfont icon-icon-search': 'iconfont icon-icon-search'}></i>          
              {this.getListArea(this.props.focused)}
              </SearchWrapper>  
            </Nav>
            <Addition> 
              <Button className="writting"><i className="iconfont icon-bi"></i>写文章</Button>
              <Button className="reg">注册</Button>
            </Addition>
          </HeaderWrapper>
      )
      
    
  }
}






const mapStateToProps = (state) => {
  return {
    focused: state.get('header').get('focused')
    //focused: state.getIn(['header','focused'])
  }
}
const mapDispathToProps = (dispath) => {
  return {
    handleInputFocus(){  
      dispath(actionCreators.searchFocus());
    },
    handleInputBlur(){
      dispath(actionCreators.searchBlur());
    }
  }
}
export default connect(mapStateToProps,mapDispathToProps)(Header);