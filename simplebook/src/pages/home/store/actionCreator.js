import axios from "axios";
import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";

const changehomeData = result => ({
  type: actionTypes.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommandList: result.recommandList
});

//redux_thunk
export const changeHomeInfo = () => {
  return dispatch => {
    axios.get("/api/home.json").then(res => {
      const result = res.data.data;
      dispatch(changehomeData(result));
    });
  };
};

const addListData = (list, nextPage) => ({
  type: actionTypes.GET_MORE_LIST,
  list: fromJS(list),
  nextPage
});
export const addListItem = page => {
  return dipatch => {
    axios.get("/api/homeList.json?page" + page).then(res => {
      const result = res.data.data;
      dipatch(addListData(result, page + 1));
    });
  };
};

export const toggleTopShow=(show)=>({
  type:actionTypes.TOGGLE_SCROLL_TOP,
  show
})