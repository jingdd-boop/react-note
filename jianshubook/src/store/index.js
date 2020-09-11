import { createStore,compose } from 'redux';
import reducer from './reducer';
//创建一个store实例

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store =  createStore(reducer,composeEnhancers());

export default store;
//抛出这个实例