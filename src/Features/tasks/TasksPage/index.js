import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Search from "./Search";
import Section from "../../../Common/Section";
import Header from "../../../Common/Header";
import Container from "../../../Common/Container";
import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectTasksState } from "../tasksSlice";
import { Button as HeaderButton } from "./Buttons/styled";
import { RightAlignWrapper } from "../../../styled";

function TasksPage() {
  const dispatch = useDispatch();
  const { loading } = useSelector(selectTasksState);

  return (
    <Container>
      <Header title="Lista zadań" />

      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={
          <RightAlignWrapper>
            <HeaderButton
              onClick={() => dispatch(fetchExampleTasks())}
              disabled={loading}
            >
              {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
            </HeaderButton>
          </RightAlignWrapper>
        }
      />

      <Section title="Wyszukiwarka" body={<Search />} />

      <Section
        title="Lista zadań"
        body={loading ? <p>Trwa ładowanie zadań...</p> : <TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;
