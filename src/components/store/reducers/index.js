import { combineReducers } from "redux";
import reposReducer from "./reposReducer";

const reducer = combineReducers({
  reposReducer,
});

export default reducer;