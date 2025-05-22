import {
  selectTasks,
  toggleHideDone,
  setAllDone,
  fetchExampleTasks,
} from "../../tasksSlice";
import { ButtonContainer, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";

const Buttons = () => {
  const { tasks, hideDone, loading } = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    <ButtonContainer>
      {tasks && tasks.length > 0 && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            onClick={() => dispatch(setAllDone())}
            disabled={tasks.every(({ done }) => done)}
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
