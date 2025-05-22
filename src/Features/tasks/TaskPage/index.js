import Section from "../../../Common/Section";
import Header from "../../../Common/Header";
import Container from "../../../Common/Container";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getTaskbyId } from "../tasksSlice";
import { useSelector } from "react-redux";

function TaskPage() {
  const { id } = useParams();
  return (
    <Container>
      <Header title="Szczegóły zadania" />

      <Section title={id} body={<>nana</>} />
    </Container>
  );
}

export default TaskPage;
