import React, { PureComponent } from 'react';
import {connect} from 'react-redux';

import {LoginWrapper,LoginTitle,LoginBox,Input,Button} from './style'
class Login extends PureComponent {
  render() { 
    return ( 
      <LoginWrapper>
        <LoginBox>
          <LoginTitle>登录</LoginTitle>
          <Input placeholder='账号' />
          <Input placeholder='密码' />
          <Button>提交</Button>
        </LoginBox>
      </LoginWrapper>
    )
  }
 
}

const mapStateProps = (state) => ({
 
})
const mapDispatchToProps =(dispatch) =>({
 
})

export default connect(mapStateProps,mapDispatchToProps)(Login);