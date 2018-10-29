import React, { Component } from "react";
import "antd/dist/antd.css";
import store from "./store";
import TodoListUI from "./TodoListUI";
import {
  getInputChangeAction,
  handleBtnClickAction,
  handleDeleteItemAction,
  // initListAction,
  getInitList
  // getListAction
} from "./store/actionCreators";
// import {
//   CHANGE_INPUT_VALUE,
//   ADD_TODO_ITEM,
//   DELETE_TODO_ITEM
// } from "./store/actionTypes";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        list={this.state.list}
        handleDeleteItem={this.handleDeleteItem}
      />
    );
  }
  componentDidMount() {
    const action = getInitList();
    // console.log(action);
    store.dispatch(action)
    // axios.get("./list.json").then(res => {
    //   const data = res.data;
    //   const action = initListAction(data);
    //   store.dispatch(action);
    // });
  }
  //输入框的效果
  handleInputChange(e) {
    // const action = {
    //   type: CHANGE_INPUT_VALUE,
    //   value: e.target.value
    // };
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }
  //组件状态变化
  handleStoreChange() {
    this.setState(store.getState());
  }
  //添加列表项
  handleBtnClick() {
    // const action = {
    //   type: ADD_TODO_ITEM
    // };
    const action = handleBtnClickAction();
    store.dispatch(action);
  }
  handleDeleteItem(index) {
    // const action = {
    //   type: DELETE_TODO_ITEM,
    //   index
    // };
    const action = handleDeleteItemAction(index);
    store.dispatch(action);
  }
}

export default TodoList;
