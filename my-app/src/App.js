import React,{Component} from 'react'

class App extends Component{
  render(){
    return (
      <ul className="my-list">
        <li>js</li>
        <li>jing</li>
      </ul>
    )
    // var child1 = React.createElement('li',null,'js')
    // var child2 = React.createElement('li',null,'jing')
    // var root = React.createElement('ul',{className:'my-list'},child1,child2)
  }
}
export default App