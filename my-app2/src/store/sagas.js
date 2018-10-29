import { put, takeEvery } from "redux-saga/effects";
import { GET_INIT_LIST } from "./actionTypes";
import { initListAction } from "./actionCreators";
import axios from "axios";
function* getInitList() {
  try {
    const res = yield axios.get("./list.json");
    const action = initListAction(res.data);
    yield put(action);
  } catch (e) {
      console.log('数据没请求到')
  }
}
//generator函数
function* mySaga() {
  //运行GET_INIT_LIST时候,执行geiInitList
  yield takeEvery(GET_INIT_LIST, getInitList);
}
export default mySaga;
