import { createStore } from 'redux';
import reducer from './reducer';
//创建一个store实例

const store =  createStore(reducer);

export default store;
//抛出这个实例