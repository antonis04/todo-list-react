import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getTasksFromLocalStorage(),
    hideDone: false,
    loading: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload }) => {
      tasks.push(payload);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: ({ tasks }, { payload }) => {
      const index = tasks.findIndex(({ id }) => id === payload);
      tasks[index].done = !tasks[index].done;
    },
    removeTask: ({ tasks }, { payload }) => {
      const index = tasks.findIndex(({ id }) => id === payload);
      tasks.splice(index, 1);
    },
    setAllDone: ({ tasks }) => {
      tasks.forEach((task) => {
        task.done = true;
      });
    },
    fetchExampleTasks: (state) => {
      state.loading = true;
    },
    fetchExampleTasksSuccess: (state, { payload }) => {
      state.tasks = payload;
      state.loading = false;
    },
    fetchExampleTasksError: (state) => {
      state.loading = false;
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  removeTask,
  setAllDone,
  fetchExampleTasks,
  fetchExampleTasksSuccess,
  fetchExampleTasksError,
} = tasksSlice.actions;

export const selectTasks = (state) => state.tasks;
export default tasksSlice.reducer;
