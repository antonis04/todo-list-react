import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";



const tasks = [
  {id: 1, content: "przejsc na react", done: true },
  {id: 2, content: "zjeść obiad", done: true },
];

const hideDoneTasks = true;




function App() {
  return (
    <div class="container">
      <Header title="Lista zadań" />

    <Section 
    title="Dodaj nowe zadanie" 
    body={<Form />} 
    />

    <Section
    title="Lista zadań"
    body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        extraHeaderContent={ <Buttons tasks={tasks}   hideDoneTasks={hideDoneTasks}/>}
    />
    
        </div>
  );
}

export default App;
