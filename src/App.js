import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";

const tasks = [
  {id: 1, content: "przejsc na react", done: true },
  {id: 2, content: "zjeść obiad", done: true },
];

const hideDoneTasks = true;




function App() {
  return (
    <div class="container">
      <h1 class="title">Lista zadań</h1>

      <section class="task-form">
        <h2 class="task-form__title">Dodaj nowe zadanie</h2>
        <Form />
      </section>

      <section class="task-list">
        <div class="task-list__header">
          <h2 class="task-list__title">Lista zadań</h2>
          <Buttons tasks={tasks}   hideDoneTasks={hideDoneTasks}/>
        </div>
        <Tasks tasks={tasks}  hideDoneTasks={hideDoneTasks}/>
      </section>
    </div>
  );
}

export default App;
