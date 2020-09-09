import styled from 'styled-components';
import logoPic from '../../statics/js.png';

export const HeaderWrapper = styled.div`
  position:relative;
  heigth:56px;
  border-bottom:1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
  href:'/'
})`
postion:absolute;
top:0;
left:0;
display:block;
float:left;
width:100px;
height:56px;
background:url(${logoPic});
background-size:contain;
`;

export const Nav = styled.div`
  width:960px;
  height:80px;
  margin:0 auto;   
  padding-right:70px;
  box-sizing:border-box;
`;

export const NavItem = styled.div`
  line-height:56px;
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
`;
export const SearchWrapper = styled.div`
  float:left;
  position:relative;
  .iconfont {
    position:absolute;
    right:5px;
    bottom:4px;
    width:30px;
    heigth:30px;
    line-height:30px;
    border-radius:15px;
    background:#fff;
    text-align:center;
    
  }
`
export const NavSearch = styled.input.attrs({
  placeholder:'搜索。。。'
})`
  width:160px;
  height:38px;
  border:none;
  outline:none;
  margin-top:12px;
  margin-left:20px;
  padding: 0 30px 0 30px;
  box-sizing:border-box;
  border-radius:19px;
  background:#eee;
  color:#666;
  &::placeholder {
    color:#999;
  }
  &.focused{
    width:240px;
    .iconfont{
      background:#777;
      
    }
  }
 
`;
export const Addition = styled.div`
  position: absolute;
  right:0;
  top:0;
  height:56px;
`

export const Button = styled.div`
  float:right;
  margin-top:9px;
  margin-right:20px;
  padding:0 20px;
  line-height:38px;
  border-radius:19px;
  border:1px solid #ec6149;
  font-size:14px;
  &.reg {
    color:#ec6149;
  }
  &.writting {
    color:#fff;
    background:#ec6149;
  }
`