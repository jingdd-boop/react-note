import { fromJS } from 'immutable'
const defaultState = fromJS({
  topicList:[{
    id:1,
    title:"社会热点",
    imgUrl:"https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1812993978,4158651947&fm=26&gp=0.jpg"
  },{
    id:2,
    title:"简书作者",
    imgUrl:"https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3095823371,2737858048&fm=26&gp=0.jpg"
  }],
  articleList:[{
    id:1,
    title:'截然不同的爱情',
    desc:'我和同事小黄俩人上个月的月经一个推迟6天，一个推迟10天。因为拖得时间太长，我俩都上医院做了检查，结果检查结果出来后才知道我们俩一个是子宫肌瘤，...',
    imgUrl:'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2244525695,428286117&fm=26&gp=0.jpg'

  },{
    id:2,
    title:'截然不同的爱情',
    desc:'我和同事小黄俩人上个月的月经一个推迟6天，一个推迟10天。因为拖得时间太长，我俩都上医院做了检查，结果检查结果出来后才知道我们俩一个是子宫肌瘤，...',
    imgUrl:'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2244525695,428286117&fm=26&gp=0.jpg'

  },{
    id:3,
    title:'截然不同的爱情',
    desc:'我和同事小黄俩人上个月的月经一个推迟6天，一个推迟10天。因为拖得时间太长，我俩都上医院做了检查，结果检查结果出来后才知道我们俩一个是子宫肌瘤，...',
    imgUrl:'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2244525695,428286117&fm=26&gp=0.jpg'

  }]
});

export default (state = defaultState,action)=>{
  switch(action.type){
    
    default:
     return state; 
  }
  //immutable对象的set、方法，会结合之前immutable对象的值
  //和设置的值返回一个全新的对象
}