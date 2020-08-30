import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
  postion:relative;
  height:90px;
  border-bottom:2px solid #f0f0f0;
`
export const Logo = styled.a.attrs({
  href:'/'
})`
  postion:absolute;
  top:0;
  left:0;
  display:block;
  width:100px;
  height:56px;
  background:url(${logoPic});
  background-size:contain;
`

export const Nav = styled.div`
  width:960px;
  height:100%;
  margin:0 auto;
  background:green;
  border-radius: 50px;
  background: #f3f5f7;
  box-shadow:  20px 20px 60px #cfd0d2, 
             -20px -20px 60px #ffffff;
`
export const NavItem = styled.div`
  line-height:80px;
  padding:0 15px;
  font-size:17px;
  color:#333;
  &.left{
    float:left;
  }
  &.right{
    float:right;
    color:#969696;
  }
  &.active{
    color:#ea6f5a;
  }
`
export const NavSearch = styled.input.attrs({
  placeholder:'搜索.'
})`
  width:160px;
  height:38px;
  padding:0 20px;
  box-sizing:border-box;
  border:none;
  border-radius:19px;
  box-shadow: 1px 1px 3px #ffffff;           
  background: #eee;
  margin-top:24px;
  margin-left:20px;
  font-size:14px;
`
export const Addition = styled.div`
  position:absolute;
  right:0;
  top:0;
  height:56px;
`
export const Button = styled.div`
  float:right;
  margin-top:9px;
  line-height:38px;
  border-radius:19px;
  border:1px solid #ec6149;
  margin-right:20px;
  padding:0 20px;
  &.reg{
    color:#ec6149;
  }
  &.writting{
    color:#fff;
    background:#ec6149;
  }
`