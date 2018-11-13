import React, { Component } from "react";
import { ListItem, ListInfo } from "../style";
import { connect } from "react-redux";
class List extends Component {
  render() {
    return (
      <div>
        {
          this.props.articleList.map (item => {
            return (
              <ListItem key={item.get("id")}>
                <img className="pic" src={item.get("imgUrl")} alt="123" />
                <ListInfo>
                  <h3 className="title">{item.get("title")}</h3>
                  <p className="desc">{item.get("desc")}</p>
                </ListInfo>
              </ListItem>
            );
          })
        }
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    articleList: state.get("home").get("articleList")
  };
};
export default connect(
  mapStateToProps,
  null
)(List);
