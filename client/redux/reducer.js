import { combineReducers } from "redux";

import FiltersReducer from "../components/Filters/FiltersSlices";
import TodoListReducer from "../components/TodoList/TodoListSlice";

const rootReducer = combineReducers({
  filters: FiltersReducer,
  todoLists: TodoListReducer,
});

export default rootReducer;
