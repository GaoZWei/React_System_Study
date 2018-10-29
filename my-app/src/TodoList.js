import React, { Component, Fragment } from "react";
import TodoItem from "./TodoItem";
import axois from 'axios'
import "./style.css";
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: []
    };
    //组件初始化改进性能
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }
  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea"> 点击添加 </label>{" "}
          <input
            id="insertArea"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />{" "}
          <button onClick={this.handleBtnClick}> 提交 </button>{" "}
        </div>{" "}
        <ul> {this.getTodoItem()} </ul>{" "}
      </Fragment>
    );
  }
  //只执行一次,在组件被挂载到页面的时候执行
  componentDidMount() {
    axois.get('/api/todolist')
    .then(()=>{
      alert('succ')
    })
    .catch(()=>{
      console.log('err')
    })
  }
  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          content={item}
          index={index}
          deleteItem={this.handleItemClick}
        />
        //   <li
        //     key={index}
        //     onClick={this.handleItemClick.bind(this, index)}
        //     dangerouslySetInnerHTML={{ __html: item }}
        //   >
        //     {/* {item} */}
        //   </li>
      );
    });
  }
  handleInputChange(e) {
    // this.setState({
    //   inputValue: e.target.value
    // });
    const value = e.target.value;
    this.setState(() => ({
      inputValue: value
    }));
  }
  handleBtnClick() {
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ""
    // });
    this.setState(prevState => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ""
    }));
  }
  handleItemClick(index) {
    //复制出来一个新的来使用
    // const list = [...this.state.list];
    // list.splice(index, 1);
    // this.setState({
    //   list: list
    // });
    this.setState(prevState => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return {
        list
      };
    });
  }
}
export default TodoList;
