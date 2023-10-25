import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import { useDispatch } from "react-redux";
import { useState } from "react";
import filterSlice from "./FiltersSlices";

const { Search } = Input;

export default function Filters() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [priority, setPriority] = useState([]);
  const dispatch = useDispatch();

  // Handle Function
  const handleSearch = () => {
    dispatch(filterSlice.actions.setSearchFilter(search));
  };
  const handleStatus = (e) => {
    setStatus(e.target.value);
    dispatch(filterSlice.actions.setStatusFilter(e.target.value));
  };
  const handlePriority = (e) => {
    dispatch(filterSlice.actions.setPriorityFilter(e));
  };

  return (
    <Row justify="center">
      {/* SEARCH */}
      <Col span={24} onClick={handleSearch}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search
          value={search}
          placeholder="input search text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </Col>
      {/* STATUS */}
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group onChange={handleStatus}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      {/* PRIORITY */}
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: "100%" }}
          onChange={(e) => {
            setPriority(e);
            handlePriority(e);
          }}
        >
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
      </Col>
    </Row>
  );
}
