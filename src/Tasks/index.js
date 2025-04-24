import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask}) => (

  <ul className="tasks">
    {tasks.map(task => (
      <li
        key={task.id}
        className={`task__item${
          task.done && hideDone 
          ? " task__item--hidden" 
          : ""}`
      }
      >
        <button className="tasks__button tasks__button--toggleDone">
          {task.done ? "✔" : ""}
        </button>
        
        <span className= {
        `tasks__content${task.done ? 
          " task-item__content--done" : ""}`
        }>
          {task.content}
        </span>
        <button className="tasks__button tasks__button--remove"
        onClick={() => removeTask(task.id)}
        >
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;
