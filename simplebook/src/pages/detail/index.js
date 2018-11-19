import React, { Component } from "react";
import { DetailWrapper, Header, Content } from "./style";
import { actionCreator } from "./store";
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom'
class Detail extends Component {
  render() {
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content dangerouslySetInnerHTML={{ __html: this.props.content }} />
      </DetailWrapper>
    );
  }
  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
  }
}
const mapStateToProps = state => ({
  title: state.getIn(["detail", "title"]),
  content: state.getIn(["detail", "content"])
});
const mapDispatchToProps = dispatch => ({
  getDetail(id) {
    dispatch(actionCreator.getDetail(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Detail));
