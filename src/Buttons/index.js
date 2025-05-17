import { ButtonContainer, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <ButtonContainer>
    {tasks.length > 0 && (
      <>
        <Button onClick={toggleHideDone} className="buttons__button">
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </Button>
        <Button
          className="buttons__button"
          onClick={setAllDone}
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </Button>
      </>
    )}
  </ButtonContainer>
);

export default Buttons;
