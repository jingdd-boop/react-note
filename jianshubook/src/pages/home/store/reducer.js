import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList:[],
  articleList:[],
  recommendList:[],
  writeList:[],
});

export default (state = defaultState,action)=>{
  switch(action.type){
    case 'change_home_data':
    return   state.merge({
        topList:fromJS(action.topicList),
        articleList:fromJS(action.articleList),
        recommendList:fromJS(action.recommendList),
        writeList:fromJS(action.writeList)
      })
      
    default:
     return state; 
  }
  //immutable对象的set、方法，会结合之前immutable对象的值
  //和设置的值返回一个全新的对象
}