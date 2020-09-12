import { createStore,compose ,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
//创建一个store实例

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store =  createStore(reducer,composeEnhancers(
  applyMiddleware(thunk)
));

export default store;
//抛出这个实例