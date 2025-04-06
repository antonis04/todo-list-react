import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
  <div className="task-list__buttons">
    {tasks.length > 0 && (
      <React.Fragment>
        <button className="task-list__button">
          {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
        </button>
        <button
          className="task-list__button"
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </button>
      </React.Fragment>
    )}
  </div>
);

export default Buttons;
