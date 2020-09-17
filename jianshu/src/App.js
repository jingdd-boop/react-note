import React from 'react';
import Header from './common/header'
import store from './store';
//import { BrowserRouter,Route} from 'react-router-dom';
//import Home from './pages/home'
//import Detail from './pages/detail'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div>
      <Header />
      {/* <BrowserRouter>
       <div>
        <Route path='/' exact component={Home}></Route>
        <Route path='/detail' exact component={Detail}></Route>
       </div>  
      </BrowserRouter> */}
      </div>
    </Provider>
    
    
  );
}

export default App;
