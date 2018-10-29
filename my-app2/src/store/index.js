import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
// 1.创建中间件
import createSagaMiddleware from 'redux-saga';
//2.引入saga文件
import todoSagas from './sagas'
//3.创建saga中间件
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(reducer, enhancer);
//4.执行saga文件
sagaMiddleware.run(todoSagas)
export default store;
