import React,{Component, Fragment} from 'react'
import './style.css' 
import XiaojiejieItem from './XiaojiejieItem'

class Xiaojiejie extends Component{
  constructor(props){
    super(props)
    this.state={
      inputValue:'',
      list:['基础按摩','精度推背']
    }
  }
  render(){
    return(
     <Fragment>
        <div>
          <label htmlFor="jspang">增加服务</label>
          <input id="jspang" className="input" value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
          <button onClick={this.addList.bind(this)}>增加服务</button>
        </div>
        <ul>
        {
          this.state.list.map((item,index)=>{
          return (
            /*
               <li 
              key={index+item}
              onClick={this.deleteItem.bind(this,index)}  
              dangerouslySetInnerHTML={{__html:item}}
            
             </li>
            */
          
         
          <XiaojiejieItem
           key={index+item} 
           content={item}
           index={index}
           //list={this.state.list}
           deleteItem={this.deleteItem.bind(this)}
          />   
          )
          })
        }
        </ul>
      </Fragment>
    )
  }

  inputChange(e){
    //console.log(this)
    this.setState({
      inputValue:e.target.value
    })
  }
  addList(){
    this.setState({
      list:[...this.state.list,this.state.inputValue],
      inputValue:''
    })
  }
  deleteItem(index){
    console.log(index)
    let list = this.state.list
    list.splice(index,1)
    this.setState({
      list:list
    })
  }
}
export default Xiaojiejie