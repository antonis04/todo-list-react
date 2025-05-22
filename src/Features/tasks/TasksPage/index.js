import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../../Common/Section";
import Header from "../../../Common/Header";
import Container from "../../../Common/Container";
import { useSelector } from "react-redux";
import { selectTasksState } from "../tasksSlice";
import Search from "./Search";

function TasksPage() {
  const { loading } = useSelector(selectTasksState);

  return (
    <Container>
      <Header title="Lista zadań" />

      <Section title="Dodaj nowe zadanie" body={<Form />} />

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
