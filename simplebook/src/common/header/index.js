import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actionCreator } from "./store";
import { actionCreator as loginActionCreator } from "../../pages/login/store";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button,
  SearchWrapper
} from "./style";
//实现搜索弹出框的显示

class Header extends Component {
  getListArr() {
    const {
      focused,
      list,
      totalPage,
      page,
      mouseIn,
      mouseEnter,
      mouseLeave,
      handleChangePage
    } = this.props;
    //将immutable对象转化为js对象

    //当前页列表+当前页+总页数
    const newList = list.toJS();
    var pageList = [];
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        );
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
            >
              <i
                ref={icon => {
                  this.spinIcon = icon;
                }}
                className="iconfont spin"
              >
                &#xe851;
              </i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }
  render() {
    const {
      focused,
      login,
      list,
      handleFocus,
      handleBlur,
      LogOut
    } = this.props;
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          {login ? (
            <NavItem onClick={LogOut} className="right">
              退出
            </NavItem>
          ) : (
            <Link to="/login">
              <NavItem className="right">登录</NavItem>
            </Link>
          )}

          <SearchWrapper>
            <CSSTransition in={focused} timeout={200} classNames="slide">
              <NavSearch
                className={focused ? "focused" : ""}
                onFocus={() => handleFocus(list)}
                onBlur={handleBlur}
              />
            </CSSTransition>
            <i className={focused ? "focused iconfont zoom" : "iconfont zoom"}>
              &#xe637;
            </i>
            {this.getListArr(focused)}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to='/write'>
          <Button className="writting">
            <i className="iconfont">&#xe615;</i>
            写文章
          </Button>
          </Link>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"]),
    totalPage: state.getIn(["header", "totalPage"]),
    page: state.getIn(["header", "page"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
    login: state.getIn(["login", "login"])
    // 与上面等价
    //state.get('header').get('focused')
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleFocus(list) {
      if (list.size === 0) {
        dispatch(actionCreator.getList());
      }
      dispatch(actionCreator.searchFocus());
    },
    handleBlur() {
      dispatch(actionCreator.searchBlur());
    },
    mouseEnter() {
      dispatch(actionCreator.handleMouseEnter());
    },
    mouseLeave() {
      dispatch(actionCreator.handleMouseLeave());
    },
    handleChangePage(page, totalPage, spin) {
      // spin为ref取得的真实DOM
      //判断上次的角度
      let orginAngle = spin.style.transform.replace(/[^0-9]/gi, "");
      // console.log(orginAngle)
      if (orginAngle) {
        orginAngle = parseInt(orginAngle, 10);
      } else {
        orginAngle = 0;
      }
      spin.style.transform = "rotate(" + (orginAngle + 360) + "deg)";
      // console.log(spin.style.transform);
      if (page < totalPage) {
        dispatch(actionCreator.handleChangePage(page + 1));
      } else {
        dispatch(actionCreator.handleChangePage(1));
      }
    },
    LogOut() {
      //调用login下面的actionCreator
      dispatch(loginActionCreator.logout());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
