import { selectTasks } from "../tasksSlice";
import { Task, Item, Content, Button } from "./styled";
import { useSelector } from "react-redux";

const TaskList = ({  removeTask, toggleTaskDone }) => {
  const {tasks, hideDone } = useSelector(selectTasks);
  return (
  <Task>
    {tasks.map((task) => (
      <Item key={task.id} hidden={task.done && hideDone}>
        <Button $toggleDone onClick={() => toggleTaskDone(task.id)}>
          {task.done ? "✔" : ""}
        </Button>
        <Content $done={task.done}>{task.content}</Content>
        <Button $remove onClick={() => removeTask(task.id)}>
          🗑
        </Button>
      </Item>
    ))}
  </Task>
)
};

export default TaskList;
