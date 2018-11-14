import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";
import List from "./components/List";
import Recommand from "./components/Recommand";
import Topic from "./components/Topic";
import Writer from "./components/Writer";
import { actionCreator } from "./store";
class Home extends PureComponent {
  handleScrollTop() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            src="//upload.jianshu.io/admin_banners/web_images/4564/563e90e1ea09698e8a9ad1a9c4fb36bcea2655be.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            alt="123"
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommand />
          <Writer />
        </HomeRight>
        {this.props.scrollShow ? (
          <BackTop onClick={this.handleScrollTop}>顶部</BackTop>
        ) : (
          ""
        )}
      </HomeWrapper>
    );
  }
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }
  bindEvents() {
    window.addEventListener("scroll", this.props.changeScrollTopShow);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.changeScrollTopShow);
  }
}

const mapStateToProps = state => ({
  scrollShow: state.getIn(["home", "scrollShow"])
});

const mapDispatchToProps = dispatch => ({
  changeHomeData() {
    const action = actionCreator.changeHomeInfo();
    dispatch(action);
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 100) {
      dispatch(actionCreator.toggleTopShow(true))
    } else {
      dispatch(actionCreator.toggleTopShow(false))
    }
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
