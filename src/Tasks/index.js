import "./style.css";

const Tasks = ({ tasks }) => (
  <ul className="tasks">
    {tasks.map(({ done, content }) => (
      <li className={`task-item${done ? " task-item--completed" : ""}`}>
        <button className="js-done task-item__done">✔</button>
        <span className="task-item__content">{content}</span>
        <button className="js-remove task-item__remove">🗑</button>
      </li>
    ))}
  </ul>


);

export default Tasks;
