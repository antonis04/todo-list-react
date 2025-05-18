import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./GlobalStyle";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import App from "./App"; 
import {addTask} from "./Features/tasks/tasksSlice";

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

const store = configureStore({
  reducer: tasksReducer,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
