import { useSelector, useDispatch } from "react-redux";
import {
  toggleHideDone,
  setAllDone,
  fetchExampleTasks,
  selectTasksState,
} from "../../tasksSlice";
import { Button, ButtonContainer } from "./styled";

const Buttons = () => {
  const dispatch = useDispatch();
  const { hideDone, tasks, loading } = useSelector(selectTasksState);

  const hasAnyTasks = Array.isArray(tasks) && tasks.length > 0;
  const isEveryTaskDone = hasAnyTasks && tasks.every(({ done }) => done);

  return (
    <ButtonContainer>
      {hasAnyTasks && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
          </Button>
          <Button
            onClick={() => dispatch(setAllDone())}
            disabled={isEveryTaskDone}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
      <Button onClick={() => dispatch(fetchExampleTasks())} disabled={loading}>
        {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
      </Button>
    </ButtonContainer>
  );
};

export default Buttons;
