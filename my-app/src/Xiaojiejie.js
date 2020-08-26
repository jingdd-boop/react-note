import React,{Component} from 'react'

class Xiaojiejie extends Component{
  constructor(props){
    super(props)
    this.state={
      inputValue:'js',
      list:[]
    }
  }
  render(){
    return(
      <div>
        <div>
          <input value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
          <button>增加服务</button>
        </div>
        <ul>
          <li>头部按摩</li>
          <li>精油推背</li>
        </ul>
      </div>
    )
  }

  inputChange(e){
    //console.log(this)
    this.setState({
      inputValue:e.target.value
    })
  }
}
export default Xiaojiejie