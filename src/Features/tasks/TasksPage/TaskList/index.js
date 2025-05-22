import { selectTasks, toggleTaskDone, removeTask } from "../../tasksSlice";
import { Task, Item, Content, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const TaskList = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    <Task>
      {Array.isArray(tasks) &&
        tasks.map((task) => (
          <Item key={task.id} hidden={task.done && hideDone}>
            <Button
              $toggleDone
              onClick={() => dispatch(toggleTaskDone(task.id))}
            >
              {task.done ? "✔" : ""}
            </Button>
            <Content $done={task.done}>
              <Link to={`/zadania/${task.id}`}>{task.content}</Link>
            </Content>
            <Button $remove onClick={() => dispatch(removeTask(task.id))}>
              🗑
            </Button>
          </Item>
        ))}
    </Task>
  );
};

export default TaskList;
