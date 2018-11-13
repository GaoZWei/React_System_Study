import React, { Component } from "react";
import { connect } from "react-redux";
import { TopicWrapper, TopicItem } from "../style";
class Topic extends Component {
  render() {
    return (
      <TopicWrapper>
        {this.props.list.map(item => {
          return (
            <TopicItem key={item.get("id")}>
              <img src={item.get("imgUrl")} className="topic_pic" alt="123" />
              {item.get("title")}
            </TopicItem>
          );
        })}
      </TopicWrapper>
    );
  }
}
const mapStataToProps = state => {
  return {
    list: state.getIn(['home','topicList'])
  };
};
export default connect(
  mapStataToProps,
  null
)(Topic);
