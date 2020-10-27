//不使用react-router
import React from 'react'
import { render } from 'react-dom'

//创建三个组件
const About = React.creactClass({/*...*/})
const Inbox = React.creactClass({/*...*/})
const Home = React.creactClass({/*...*/})

//app也是创建的一个组件
const App = React.creactClass({
  getInitalState() {
    return {
      route: window.location.hash.substr(1)
    }
  },


//生命周期函数 创建前
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      //this.setState用来改变组件中数据的状态
      this.setState({
        route: window.location.hash.substr(1)
      })
    })
  },

  render() {
    let Child
    switch (this.state.router) {
      case '/about': Child = About; break;
      case '/inbox': Child = Inbox; break;
      default:   Child = Home;
    }

    //展示在页面上
    return (
      <div>
        <h1>
          <ul>
            <li><a href="#/about">About</a></li>
            <li><a href="#/inbox">Inbox</a></li>
          </ul>
          <Child/>
        </h1>
      </div>
    )
  }
})


//渲染
React.render(
  <App />,
  document.document.body
)


//使用react-router
import React from 'react'
import { render } from 'react-dom'
import { Router,Route,Link } from 'react-router'

const App = React.creactClass({
  render() {
    return (
      <div>
        <h1>app</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

React.render((
  <React>
    <Route path="/" component={App}>
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox} />
    </Route>
  </React>
),document.body)