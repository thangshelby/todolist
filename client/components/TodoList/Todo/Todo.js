import { Row, Tag, Checkbox } from "antd";
import { useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { deleleteTodoThunk } from "../TodoListSlice";
import { useDispatch } from "react-redux";

const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

export default function Todo({index,id, name, priority, completed }) {
  const [checked, setChecked] = useState(completed);
  const dispatch= useDispatch()

  const handleDelete= ()=>{
    dispatch(deleleteTodoThunk({id:id}))
  }
  
  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <div>
        <Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
          {priority}
        </Tag>
        <DeleteOutlined 
        className="ml-3 cursor-pointer "
         onClick={handleDelete}/>
      </div>
    </Row>
  );
}
