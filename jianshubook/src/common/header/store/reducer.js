import *as constants from  './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused:false
});

export default (state = defaultState,action)=>{
  //immutable对象的set、方法，会结合之前immutable对象的值
  //和设置的值返回一个全新的对象
  if(action.type === constants.SEARCH_FOCUS){
    return state.set('focused',true)
  }
  if(action.type === constants.SEARCH_BLUR){
    return state.set('focused',false)
  }
  
  return state;
}