import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import Header from "./common/header";
//引入全局样式
import { Globalstyle } from "./style";
import { Iconstyle } from "./statics/iconfont/iconfont";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Globalstyle />
          <Iconstyle />
          <Header />
        </div>
      </Provider>
    );
  }
}
export default App;
