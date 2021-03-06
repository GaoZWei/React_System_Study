import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail/loadable.js";
import Header from "./common/header";
import Login from './pages/login';
import Write from './pages/write';

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
              <Route path="/login" exact component={Login} />
              <Route path="/write" exact component={Write} />
              {/* 不会匹配 */}
              <Route path="/detail/:id" exact component={Detail} />
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}
export default App;
