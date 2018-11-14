import React, { PureComponent } from "react";
import { ListItem, ListInfo, LoadMore } from "../style";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreator } from "../store";
class List extends PureComponent {
  render() {
    const { page, getMoreList } = this.props;
    return (
      <div>
        {this.props.articleList.map((item, index) => {
          return (
            // <ListItem key={item.get("id")}>
            <Link key={index} to="/detail">
              <ListItem>
                <img className="pic" src={item.get("imgUrl")} alt="123" />
                <ListInfo>
                  <h3 className="title">{item.get("title")}</h3>
                  <p className="desc">{item.get("desc")}</p>
                </ListInfo>
              </ListItem>
            </Link>
          );
        })}
        <LoadMore onClick={() => getMoreList(page)}>更多文章</LoadMore>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    articleList: state.get("home").get("articleList"),
    page: state.get("home").get("articlePage")
  };
};
const mapDispatchToProps = dispatch => ({
  getMoreList(page) {
    dispatch(actionCreator.addListItem(page));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
