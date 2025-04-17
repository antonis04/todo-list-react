import "./style.css";

const deleteTask = (name) => {
  console.log(`Nazwa zadania do usunięcia: ${name}`);
};

const Tasks = ({ tasks }) => {
  return (
    <ul className="tasks">
      {tasks.map(({ done, content }) => (
        <li className={`task-item${done ? " task-item--completed" : ""}`} key={content}>
          <button className="js-done task-item__done">✔</button>
          <span className="task-item__content">{content}</span>
          <button
            className="js-remove task-item__remove"
            onClick={() => deleteTask(content)}
          >
            🗑
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tasks;
