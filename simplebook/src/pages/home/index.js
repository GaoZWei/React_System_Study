import React, { Component } from "react";
import { connect } from "react-redux";
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
import List from "./components/List";
import Recommand from "./components/Recommand";
import Topic from "./components/Topic";
import Writer from "./components/Writer";
import {actionCreator} from './store'
class Home extends Component {
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
      </HomeWrapper>
    );
  }
  componentDidMount() {
    this.props.changeHomeData();
  }
}
const mapDispatchToProps = dispatch => ({
  changeHomeData() {
    const action=actionCreator.changeHomeInfo();
    dispatch(action)
  }
});
export default connect(
  null,
  mapDispatchToProps
)(Home);
