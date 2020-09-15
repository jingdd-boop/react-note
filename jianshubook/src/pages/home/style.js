import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width:960px;
  margin:0 auto;
  overflow:hidden;
`

export const HomeLeft = styled.div`
  margin-left:15px;
  padding-top:30px;
  width:700px;
  float:left;
  .banner-img{
    width:700px;
    height:270px;
    border-radius:20px;
  }
`

export const HomeRight = styled.div`
  width:240px;
  float:right;
`
export const TopicWrapper = styled.div`
  padding:20px 0 10px 0;
  overflow:hidden;
  margin-left:-11px;
  border-bottom:1px solid #dcdcdc;
`

export const TopicItem = styled.div`
  heigth:32px;
  padding-right:5px;
  margin-left:10px;
  line-heigth:32px;
  float:left;
  backgound:#f7f7f7;
  font-size:14px;
  color:#000;
  border:1px solid #dcdcdc;
  border-radius:4px;
  margin-bottom:18px;
  
  .item-img{
    display:block;
    float:left;
    width:32px;
    height:32px;
    margin-right:5px;
    
  }
`

export const ListItem = styled.div`
  overflow:hidden;
  padding:20px 0;
  border-bottom:1px solid #dcdcdc;
  .pic{
    display:block;
    width:125px;
    height:120px;
    float:right;
    border-radius:10px;
    top:15px;
  }
`
export const ListInfo = styled.div`
  width:500px;
  float:left;
  .title{
    line-height:27px;
    font-size:18px;
    font-weight:bold;
    color:#333;
  }
  .desc{
    line-height:24px;
    font-size:13px;
    color:#999;
  }
`

export const ListIcon = styled.div`
  clear:both;
  font-size:13px;
  .iconfont{
    padding:5px 30px;
  }
  .love{
    color:red;
  }
  .pinglun{
    color:orange;
  }
  .zan{
    color:purple;
  }
`
