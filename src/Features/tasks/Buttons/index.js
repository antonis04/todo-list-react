import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice";
import { ButtonContainer, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";

const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
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
    </ButtonContainer>
  );
};

export default Buttons;
