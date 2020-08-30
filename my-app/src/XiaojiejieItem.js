import React, { Component } from 'react';
import PropTypes from 'prop-types'



class XiaojiejieItem extends Component {
  constructor(props){
    super(props)
    this.handleClick=this.handleClick.bind(this)
  }
 
  render() { 
    return ( 
    <li onClick={this.handleClick}>
      {this.props.avname}为你服务 - {this.props.content}

    </li>
     );
  }
  handleClick(){ 
    //this.props.list=[]
    this.props.deleteItem(this.props.index)
  }
}
 
XiaojiejieItem.propTypes={
  content:PropTypes.string.isRequired,
  avname:PropTypes.string,
  index:PropTypes.number,
  deleteItem:PropTypes.func
}
XiaojiejieItem.defaultProps={
  avname:'志浩'
}

export default XiaojiejieItem;