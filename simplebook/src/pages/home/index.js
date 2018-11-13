import React, { Component } from "react";
import { connect } from "react-redux";
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
import axios from "axios";
import List from "./components/List";
import Recommand from "./components/Recommand";
import Topic from "./components/Topic";
import Writer from "./components/Writer";
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
    axios.get("/api/home.json").then(res => {
      const result = res.data.data;
      console.log(result)
      const action = {
        type: "change_home_data",
        topicList: result.topicList,
        articleList: result.articleList,
        recommandList: result.recommandList
      };
      this.props.changeHomeData(action);
    });
  }
}
const mapDispatchToProps = dispatch => ({
  changeHomeData(action) {
    dispatch(action);
  }
});
export default connect(
  null,
  mapDispatchToProps
)(Home);
