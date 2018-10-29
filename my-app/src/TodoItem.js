import React, { Component } from "react";
import PropTypes from "prop-types";
class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }
  //阻止因为父组件的render,子组件的render
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    const { content, pre } = this.props;
    return (
      <div onClick={this.handleDeleteItem}>
        {" "}
        {pre}
        --- {content}{" "}
      </div>
    );
  }
  handleDeleteItem() {
    const { deleteItem, index } = this.props;
    deleteItem(index);
  }
}
TodoItem.protoTypes = {
  pre: PropTypes.string.isRequired,
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number
};
TodoItem.defaultProps = {
  pre: "你输入的内容为:"
};
export default TodoItem;
