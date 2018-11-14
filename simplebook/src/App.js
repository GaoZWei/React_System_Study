import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";
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
          <BrowserRouter>
            <div>
              <Header />
              <Route path="/" exact component={Home} />
              <Route path="/detail" exact component={Detail} />
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}
export default App;
