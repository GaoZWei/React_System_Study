import { fromJS } from "immutable";

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommandList: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case "change_home_data":
    console.log(action)
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommandList: fromJS(action.recommandList)
      });
    default:
      return state;
  }
};
