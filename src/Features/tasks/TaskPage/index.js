import Section from "../../../Common/Section";
import Header from "../../../Common/Header";
import Container from "../../../Common/Container";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getTaskById } from "../tasksSlice";
import { useSelector } from "react-redux";

function TaskPage() {
  const { id } = useParams();
  const task = useSelector((state) => getTaskById(state, id));
  return (
    <Container>
      <Header title="Szczegóły zadania" />

      <Section 
      title={task ? task.content : "Nie znaleziono zadania"} 
      body={
      <><strong>Ukończono: </strong> {task.done ? "Tak" : "Nie"}</>
  }
  />
    </Container>

  );
}

export default TaskPage;
