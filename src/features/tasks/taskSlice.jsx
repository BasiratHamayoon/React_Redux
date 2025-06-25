import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
}
export const taskReducer = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask (state, action) {
      state.tasks.push(action.payload);
    },
    deleteTask (state, action) {
      state.tasks = state.tasks.filter((curTask, index) => index !== action.payload);
    },
  }
});

export const { addTask, deleteTask } = taskReducer.actions;
