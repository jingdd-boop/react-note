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

 getListArea = () => {
  //  const { focused,list,page,handleMouseEnter} = this.props
   const { focused,list,page,mouseIn, totalPage,handleMouseEnter,handleMouseLeave,handleChangePage} = this.props
   const newList = list.toJS();
   const pageList = []
   //请求axios之前没有数据时，这段代码不进行循环
  if(newList.length) {
    for(let i = (page-1) * 10;i < page * 10;i++){
      pageList.push(
        <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
      )
     }
  }
    
   
   

    if(focused || mouseIn){
      return (
        <SearchInfo 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        
        >
              <SearchInfoTitle>
                热门搜索
                <SearchInfoSwitch onClick={() => handleChangePage(page,totalPage)}>换一换</SearchInfoSwitch>  
              </SearchInfoTitle>  
              <SearchInfoList>
                {pageList}
              </SearchInfoList>
            </SearchInfo>
      )
    }else{
      return null;
    }
  }
  
  render(){
    const {focused,handleInputFocus,handleInputBlur} = this.props
    
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
              in={focused}
              timeout={200}
              classNames="slide">
                <NavSearch
                 className={focused ? 'focused' : ''}
                 onFocus={handleInputFocus}
                 onBlur={handleInputBlur}
                ></NavSearch>
              </CSSTransition>           
                <i className={focused ? 'focused iconfont icon-icon-search': 'iconfont icon-icon-search'}></i>          
              {this.getListArea()}
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
    focused: state.get('header').get('focused'),
    list: state.getIn(['header','list']),
    page: state.getIn(['header','page']),
    mouseIn:state.getIn(['header','mouseIn']),
    totalPage:state.getIn(['header','totalPage']),
    //focused: state.getIn(['header','focused'])
  }
}
const mapDispathToProps = (dispath) => {
  return {
    handleInputFocus(){  
      dispath(actionCreators.getList());
      dispath(actionCreators.searchFocus());
    },
    handleInputBlur(){
      dispath(actionCreators.searchBlur());
    },
    handleMouseEnter(){
      dispath(actionCreators.mouseEnter());
    },
    handleMouseLeave(){
      dispath(actionCreators.mouseLeave());
    },
    handleChangePage(page,totalPage){
      if(page < totalPage){
        dispath(actionCreators.changePage(page+1));
      }else{
        dispath(actionCreators.changePage(1));
      }
    }
    }
  
}
export default connect(mapStateToProps,mapDispathToProps)(Header);