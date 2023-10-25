

import { configureStore } from "@reduxjs/toolkit";
import todoListSlice from "../components/TodoList/TodoListSlice";
import filterSlice from "../components/Filters/FiltersSlices";


const reducer= {
    filters: filterSlice.reducer,
    todoLists:todoListSlice.reducer
}

const store = configureStore({
    reducer
})

export default store