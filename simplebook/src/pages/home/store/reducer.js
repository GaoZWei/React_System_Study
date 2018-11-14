import { fromJS } from "immutable";
import * as actionTypes from "./actionTypes";
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommandList: [],
  articlePage: 1
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommandList: fromJS(action.recommandList)
      });
    case actionTypes.GET_MORE_LIST:
      return state.merge({
        articleList: state.get("articleList").concat(action.list),
        articlePage: action.nextPage
      });
    default:
      return state;
  }
};
