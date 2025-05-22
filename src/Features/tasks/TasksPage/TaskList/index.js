import {
  toggleTaskDone,
  removeTask,
  selectHideDone,
  selectTaskByQuery,
} from "../../tasksSlice";
import searchQueryParamName from "../searchQueryParamName";
import { Task, Item, Content, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Link as TealLink } from "../../../../styled";

const TaskList = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);

  const tasks = useSelector((state) => selectTaskByQuery(state, query));
  const hideDone = useSelector(selectHideDone);

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
              <TealLink to={`/zadania/${task.id}`}>{task.content}</TealLink>
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
