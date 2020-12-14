import React, { Component } from 'react';
import './Header.css'
class Header extends Component {
  render() { 
    return ( 
      <div className="header">
        <div className="header-left">logo</div>
        <div className="header-center">
          <ul className="center">
            <li>首页</li>
            <li>资源</li>
            <li>大数据</li>
            <li>办公后台</li>
          </ul>
        </div>
        <div className="header-right">person</div>
      </div>
     );
  }
}
 
export default Header;