import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
  name: "todoList",
  initialState: {
    status: "idle",
    todos: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "idle";
        state.todos = action.payload;
      })
      .addCase(addTodoThunk.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addTodoThunk.fulfilled, (state, action) => {
        state.status = "idle";
        state.todos.push(action.payload);
      })
      .addCase(deleleteTodoThunk.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleleteTodoThunk.fulfilled, (state, action) => {
        state.status = "idle";
        state.todos = action.payload;
      });
  },
});

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await fetch("http://localhost:5000/mytodo");
  const data = await response.json();
  return data;
});

export const addTodoThunk = createAsyncThunk(
  "todos/addTodoThunk",
  async (newTodo) => {
    const response = await fetch("http://localhost:5000/mytodo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });
    const data = await response.json();
    return data;
  }
);
export const deleleteTodoThunk = createAsyncThunk(
  "totos/deleteTodoThunk",
  async (id) => {
    // let headers = new Headers();
    // headers.append("Access-Control-Allow-Origin", "http://localhost:3000");
    // headers.append("Access-Control-Allow-Credentials", "true");
    const response = await fetch(
      `http://localhost:5000/mytodo/delete/${id.id}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    return data;
  }
);

export default todoListSlice;
