import { combineReducers } from "redux";

import todoReducers from "./to-do-list/reducers";

export default combineReducers({
	todos: todoReducers,
});
