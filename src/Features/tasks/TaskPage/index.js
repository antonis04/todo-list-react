import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";
import Container from "../../../Common/Container";
import Header from "../../../Common/Header";
import Section from "../../../Common/Section";

const TaskPage = () => {
  const { id } = useParams();
  const task = useSelector((state) => getTaskById(state, id));

  if (!task) {
    return (
      <Container>
        <Header title="Szczegóły zadania" />
        <Section body={<p>Sorka, nie ma takiego zadania 😉</p>} />
      </Container>
    );
  }

  return (
    <Container>
      <Header title="Szczegóły zadania" />
      <Section
        title={task.content}
        body={
          <>
            <p>
              <strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}
            </p>
          </>
        }
      />
    </Container>
  );
};

export default TaskPage;
