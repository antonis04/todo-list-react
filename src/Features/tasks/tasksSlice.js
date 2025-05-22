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
    addTask: (state, { payload }) => {
      // Use the standard Redux Toolkit pattern
      // and ensure tasks is an array before pushing
      if (!Array.isArray(state.tasks)) {
        state.tasks = [];
      }
      state.tasks.push(payload);
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

const selectTasksState = (state) => state.tasks;

export { selectTasksState };

export const selectTasks = (state) => selectTasksState(state);
export const selectTasksList = (state) => selectTasksState(state).tasks || [];
export const selectHideDone = (state) => selectTasksState(state).hideDone;
export const selectLoading = (state) => selectTasksState(state).loading;
export const selectIsEveryTaskEmpty = (state) =>
  selectTasksList(state).length === 0;
export const selectIsEveryTaskDone = (state) => {
  const tasks = selectTasksList(state);
  return tasks.length > 0 && tasks.every(({ done }) => done);
};

export const getTaskById = (state, taskId) => {
  const tasks = selectTasksList(state);
  return Array.isArray(tasks)
    ? tasks.find(({ id }) => id === taskId)
    : undefined;
};

export const selectTaskByQuery = (state, query) => {
  const tasks = selectTasksList(state);

  if (!query || query.trim() === "") {
    return tasks;
  }

  const queryTrimmed = query.trim().toUpperCase();

  return tasks.filter(({ content }) =>
    content.toUpperCase().includes(queryTrimmed)
  );
};

export default tasksSlice.reducer;
