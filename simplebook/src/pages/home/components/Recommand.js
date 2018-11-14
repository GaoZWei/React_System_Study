import React, { PureComponent } from "react";
import { RecommandWrapper, RecommandItem } from "../style";
import { connect } from "react-redux";
class Recommand extends PureComponent {
  render() {
    return (
      <RecommandWrapper>
        {this.props.list.map(item => {
          return (
            <RecommandItem key={item.get("id")} imgUrl={item.get("imgUrl")} />
          );
        })}
      </RecommandWrapper>
    );
  }
}

const mapStatetoProps = state => {
  return {
    list: state.getIn(["home", "recommandList"])
  };
};
export default connect(
  mapStatetoProps,
  null
)(Recommand);
