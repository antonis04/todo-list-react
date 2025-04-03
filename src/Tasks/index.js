import "./style.css";

const Tasks = (props) => (
    <ul class="task-list__items">
        {props.tasks.map((task) => (
            <li>
                {task.content}
            </li>
        ))}
    </ul>
);

export default Tasks;