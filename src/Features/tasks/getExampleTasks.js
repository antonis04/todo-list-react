export const getExampleTasks = async () => {
  const response = await fetch("/todo-list-react/exampleTasks.json");

  if (!response.ok) {
    throw new Error("Nie udało się pobrać przykładowych zadań");
  }

  return await response.json();
};
