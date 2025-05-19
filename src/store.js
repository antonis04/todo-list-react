import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./Features/tasks/tasksSlice";

export default configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
