import { Col, Row, Input, Button, Select, Tag, Space } from "antd";
import Todo from "./Todo/Todo.js";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filteredTodoLists } from "../../redux/slectors";
import { addTodoThunk } from "./TodoListSlice";
import { v4 as uuidv4 } from 'uuid';
export default function TodoList() {
  
  const todoData = useSelector(filteredTodoLists);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [priority, setPriority] = useState("Medium");
  // Handle Function

  const handleAdd = () => {
    dispatch(
      addTodoThunk({
        id:uuidv4(),
        name: search,
        priority: priority,
        completed: false,
      })
    );
    setSearch("");
    setPriority("Medium");
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoData.map((todo, index) => (
          <div key={index}>
            <Todo
              index= {index}
              id={todo.id}
              name={todo.name}
              priority={todo.priority}
              completed={todo.completed}
            />
          </div>
        ))}
      </Col>
      <Col span={24}>
        <Space.Compact style={{ display: "flex" }} compact="true">
          <Input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <Select defaultValue="Medium" onChange={(e) => setPriority(e)}>
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>

          <Button type="primary" onClick={handleAdd}>
            Add
          </Button>
        </Space.Compact>
      </Col>
    </Row>
  );
}
