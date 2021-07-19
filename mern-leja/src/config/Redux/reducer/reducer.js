import { combineReducers } from "redux";
import GlobalReducer from "./GlobalReducer";
import HomeReducer from "./HomeReducer";
import createBlogReducer from "./createBlogReducer";
const reducer = combineReducers({
  createBlogReducer,
  HomeReducer,
  GlobalReducer,
});

export default reducer;
