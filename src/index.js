import React from "react";
import ReactDOM from "react-dom/client";
import Tasks from "./Features/tasks/Tasks"; // Corrected import path
import { GlobalStyle } from "./GlobalStyle";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const initializeState = {
  tasks: [],
};

const tasksReducer = (state = initializeState, action) => {
  switch (action.type) {
    case "addTask":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            content: action.payload,
          },
        ],
      };

    default:
      return state;
  }
};

// Remove explicit addition of redux-thunk
const store = configureStore({
  reducer: tasksReducer,
});

console.log(store.getState());

store.dispatch({
  type: "addTask",
  payload: "Nauczyc sie dispatch",
});
console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <Tasks />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
