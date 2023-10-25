import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: "All",
    priority: [],
  },
  reducers: {
    setSearchFilter: (state, action) => {
      state.search = action.payload;
    },
    setStatusFilter: (state, action) => {
      state.status = action.payload;
    },
    setPriorityFilter: (state, action) => {
      state.priority = action.payload;
    },
  },
});

export default filterSlice;
