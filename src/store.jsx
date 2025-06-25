// /* eslint-disable no-case-declarations */
// import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "@redux-devtools/extension";
// import { thunk } from "redux-thunk";
import { configureStore} from "@reduxjs/toolkit";
import { taskReducer } from "./features/tasks/taskSlice";
// const ADD_TASK = 'task/add';
// const DELETE_TASK = 'task/delete';
// const FETCH_TASK = 'task/fetch';

// const initialState = {
//   tasks: [],
// };

// const taskReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TASK:
//       return {
//         ...state,
//         tasks: [...state.tasks, action.payload],
//       };

//     case DELETE_TASK:
//       const updatedTasks = state.tasks.filter((task, index) => index !== action.payload);
//       return {
//         ...state,
//         tasks: updatedTasks,
//       };
//       case FETCH_TASK: 
//       return {
//         ...state,
//        tasks: [...state.tasks,  ...action.payload]
//       }
//     default:
//       return state;
//   }
// };

// export const store = createStore(taskReducer, composeWithDevTools( applyMiddleware(thunk) ));
// console.log(store);

export const store = configureStore({
  reducer: {
    taskReducer: taskReducer.reducer,
  }
});






// export const addTask = (data) => {
//     return { type: ADD_TASK, payload: data }
// }
// store.dispatch(addTask("Item 1"))
// store.dispatch({ type: ADD_TASK, payload: "Item 2"})
// console.log(store.getState());
// export const deleteTask = (id) => {
//     return { type: DELETE_TASK, payload : id}
// } 
// store.dispatch(deleteTask(0));
// console.log(store.getState());

// export const fetchTask = () => {
//   return async (dispatch) => {
//     try {
//       const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=3");
//       const task = await res.json();
//       dispatch({ type: FETCH_TASK, payload: task.map((item) => item.title)})
//     } catch (error) {
//       console.log(error)
//     }

//   }
// }
