import React from "react";
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Hook from './Hook'
import Home from './Home'
import './BasicExample.css'

const BasicExample = () => (
  <Router>
    <div>
      <ul className="item">
        <li className="item-home">
          <Link to="/">Home</Link>
        </li>
        <li className="item-hook">
        <Link to="/hook">Hook</Link>
        </li>
        <li className="item-topics">
        <Link to="/topics">Topics</Link>
        </li>
      </ul>
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/hook" component={Hook} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
 
);
// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// );
// const About = () => (
//   <div>
//     <h2>about</h2>
//   </div>
// );
const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
      <Link to={`${match.url}/components`}>components</Link>
      </li>
      <li>
      <Link to={`${match.url}/props-v-state`}>props-v-state</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>请选择一个主题</h3>} 
      />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{ match.params.topicId }</h3>
  </div>
)


export default BasicExample;
