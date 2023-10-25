import { createSelector } from "reselect";

export const searchTextSelector = (state) => state.filters.search;

export const statusSelector = (state) => state.filters.status;

export const prioritySelector = (state) => state.filters.priority;

export const todoListSelector = (state) => state.todoLists.todos;

const filteredTodoLists = createSelector(
  todoListSelector,
  searchTextSelector,
  statusSelector,
  prioritySelector,
  (todoLists, searchText, statusFilter, priorityFilter) =>
    todoLists.filter((todo) => {
      if (statusFilter === "All") {
        if (priorityFilter.length == 0) {
          return todo?.name.includes(searchText);
        }
        return (
          todo?.name.includes(searchText) &&
          priorityFilter.includes(todo.priority)
        );
      }
      if (priorityFilter.length == 0) {
        return (
          todo?.name.includes(searchText) &&
          (statusFilter === "Completed" ? todo.completed : !todo.completed)
        );
      }
      return (
        todo?.name.includes(searchText) &&
        (statusFilter === "Completed" ? todo.completed : !todo.completed) &&
        priorityFilter.includes(todo.priority)
      );
    })
);

export { filteredTodoLists };
