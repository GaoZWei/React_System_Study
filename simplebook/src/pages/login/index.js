import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { actionCreator } from "./store";
import { LoginWrapper, LoginBox, Input, Button } from "./style";
class Login extends PureComponent {
  render() {
    const { login, loginClick } = this.props;
    if (!login) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input
              placeholder="账号"
              ref={input => {
                this.account = input;
              }}
            />
            <Input
              placeholder="密码"
              ref={input => {
                this.password = input;
              }}
              type="password"
            />
            <Button onClick={() => loginClick(this.account, this.password)}>
              登录
            </Button>
          </LoginBox>
        </LoginWrapper>
      );
    }else{
      return <Redirect to='/'/>
    }
  }
}
const mapStateToProps = state => ({
  login: state.getIn(["login", "login"])
});
const mapDispatchToProps = dispatch => ({
  loginClick(account, password) {
    dispatch(actionCreator.loginAction(account.value, password.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
