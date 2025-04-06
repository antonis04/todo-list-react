import "./style.css";

const Tasks = (props) => (
  <ul className="tasks">
    {props.tasks.map((task) => (
      <li
        className={`task-item${task.done ? " task-item--completed" : ""}`}
      >
        <button className="js-done task-item__done">✔</button>
        <span className="task-item__content">
          {task.content}
        </span>
        <button className="js-remove task-item__remove">🗑</button>
      </li>
    ))}
  </ul>
);

export default Tasks;
