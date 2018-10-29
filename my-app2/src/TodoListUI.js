import React, { Component } from "react";
import { Input, Button, List } from "antd";
class TodoListUI extends Component {
  render() {
    return (
      <div style={{ marginLeft: "10px", marginTop: "10px" }}>
        <div>
          <Input
            value={this.props.inputValue}
            style={{
              width: "300px"
            }}
            onChange={this.props.handleInputChange}
          />
          <Button type="primary" onClick={this.props.handleBtnClick}>
            提交
          </Button>
        </div>
        <div>
          <List
            style={{ width: "300px", marginTop: "10px" }}
            bordered
            dataSource={this.props.list}
            renderItem={(item, index) => (
              <List.Item
                onClick={()=> {
                  this.props.handleDeleteItem(index);
                }}
              >
                {item}
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}
export default TodoListUI;
