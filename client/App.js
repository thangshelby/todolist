import React from "react";
import "./App.css";
import { TodoList, Filters } from "./components/index";
import { Divider } from "antd";
import { fetchTodos } from "./components/TodoList/TodoListSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch= useDispatch()

  useEffect(()=>{
    dispatch(fetchTodos())
    
  },[])

  return (
    <div
      style={{
        width: 500,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: 20,
        boxShadow: "0 0 10px 4px #bfbfbf",
        borderRadius: 5,
        height: "90vh",
      }}
    >
      <h1 className="flex items-center justify-center font-bold">
        TODO APP WITH REDUX
      </h1>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
};

export default App;
