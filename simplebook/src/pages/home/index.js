import React, { Component } from "react";
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
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
            src="//upload.jianshu.io/admin_banners/web_images/4558/83e681e734b3e25da9b49d24a8225ef5f38203bd.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            alt="123"
          />
          <Topic/>
          <List/>
        </HomeLeft>
        <HomeRight>
            <Recommand/>
            <Writer/>
        </HomeRight>
      </HomeWrapper>
    );
  }
}
export default Home;
