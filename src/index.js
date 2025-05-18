import React from "react";
import ReactDOM from "react-dom/client";
import Tasks from "./Features/tasks/Tasks"; // Corrected import path
import { GlobalStyle } from "./GlobalStyle";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { thunk } from "redux-thunk"; // Corrected import for `thunk`nk"; // Use named import for `thunk`

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

// Add redux-thunk middleware
const store = configureStore({
  reducer: tasksReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
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
