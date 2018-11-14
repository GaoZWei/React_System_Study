import { fromJS } from "immutable";
import * as actionTypes from "./actionTypes";
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommandList: [],
  articlePage: 1,
  scrollShow: false
});
//把函数提取出来
const changehomedata = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommandList: fromJS(action.recommandList)
  });
};

const getmorelist = (state, action) => {
  return state.merge({
    articleList: state.get("articleList").concat(action.list),
    articlePage: action.nextPage
  });
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      return changehomedata(state, action);
    case actionTypes.GET_MORE_LIST:
      return getmorelist(state, action);
    case actionTypes.TOGGLE_SCROLL_TOP:
      return state.set("scrollShow", action.show);
    default:
      return state;
  }
};
