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

export const NavSearch = styled.input.attrs({
  placeholder:'搜索。。。'
})`
  width:160px;
  height:38px;
  border:none;
  outline:none;
  margin-top:12px;
  padding: 0 20px;
  box-sizing:border-box;
  border-radius:19px;
  background:#eee;
`;
