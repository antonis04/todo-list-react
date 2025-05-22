import { useSelector, useDispatch } from "react-redux";
import {
  toggleHideDone,
  setAllDone,
  fetchExampleTasks,
  selectTasksState,
} from "../../tasksSlice";
import { Button } from "./styled";

const Buttons = () => {
  const dispatch = useDispatch();
  const { hideDone, tasks } = useSelector(selectTasksState);
  // Ensure tasks is an array before calling .every()
  const isEveryTaskDone =
    Array.isArray(tasks) && tasks.length > 0 && tasks.every(({ done }) => done);

  // Check if there are any tasks
  const hasAnyTasks = Array.isArray(tasks) && tasks.length > 0;

  return (
    <>
      <Button onClick={() => dispatch(toggleHideDone())}>
        {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
      </Button>
      <Button
        onClick={() => dispatch(setAllDone())}
        disabled={!hasAnyTasks || isEveryTaskDone}
      >
        Ukończ wszystkie
      </Button>
      <Button onClick={() => dispatch(fetchExampleTasks())}>
        Pobierz przykładowe zadania
      </Button>
    </>
  );
};

export default Buttons;
