/* eslint-disable no-case-declarations */
import { createStore } from "redux";
const ADD_TASK = 'task/add';
const DELETE_TASK = 'task/delete';

const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case DELETE_TASK:
      const updatedTasks = state.tasks.filter((task, index) => index !== action.payload);
      return {
        ...state,
        tasks: updatedTasks,
      };

    default:
      return state;
  }
};

export const store = createStore(taskReducer);
console.log(store);
const addTask = (data) => {
    return { type: ADD_TASK, payload: data }
}
store.dispatch(addTask("Item 1"))
store.dispatch({ type: ADD_TASK, payload: "Item 2"})
console.log(store.getState());
const deleteTask = (id) => {
    return { type: DELETE_TASK, payload : id}
} 
store.dispatch(deleteTask(0));
console.log(store.getState());

